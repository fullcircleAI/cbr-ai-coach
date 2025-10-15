// 📱 Service Worker for Mobile Optimization
// Provides offline support and better performance

const CACHE_NAME = 'theory-coach-v1.0.0';
const STATIC_CACHE = 'theory-coach-static-v1.0.0';
const DYNAMIC_CACHE = 'theory-coach-dynamic-v1.0.0';

// Files to cache for offline support
const STATIC_FILES = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/logo192.png',
  '/logo512.png',
  '/favicon.ico'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('📱 Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('📱 Service Worker: Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('📱 Service Worker: Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('📱 Service Worker: Installation failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('📱 Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('📱 Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('📱 Service Worker: Activation complete');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }
  
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('📱 Service Worker: Serving from cache', request.url);
          return cachedResponse;
        }
        
        // Fetch from network and cache
        return fetch(request)
          .then((networkResponse) => {
            // Don't cache non-successful responses
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            
            // Clone the response
            const responseToCache = networkResponse.clone();
            
            // Cache dynamic content
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(request, responseToCache);
              });
            
            console.log('📱 Service Worker: Caching new content', request.url);
            return networkResponse;
          })
          .catch((error) => {
            console.log('📱 Service Worker: Network request failed', request.url, error);
            
            // Return offline page for navigation requests
            if (request.destination === 'document') {
              return caches.match('/');
            }
            
            // Return cached version if available
            return caches.match(request);
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('📱 Service Worker: Background sync', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Sync offline data when connection is restored
      syncOfflineData()
    );
  }
});

// Push notifications (for future use)
self.addEventListener('push', (event) => {
  console.log('📱 Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New study reminder!',
    icon: '/logo192.png',
    badge: '/logo192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Start Practice',
        icon: '/logo192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/logo192.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Theory Coach', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('📱 Service Worker: Notification clicked');
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/tests')
    );
  } else if (event.action === 'close') {
    // Just close the notification
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function to sync offline data
async function syncOfflineData() {
  try {
    console.log('📱 Service Worker: Syncing offline data...');
    
    // Get offline data from IndexedDB
    const offlineData = await getOfflineData();
    
    if (offlineData && offlineData.length > 0) {
      // Sync with server
      for (const data of offlineData) {
        try {
          await fetch('/api/sync', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          });
          
          // Remove from offline storage after successful sync
          await removeOfflineData(data.id);
        } catch (error) {
          console.error('📱 Service Worker: Sync failed for data', data.id, error);
        }
      }
    }
    
    console.log('📱 Service Worker: Offline data sync complete');
  } catch (error) {
    console.error('📱 Service Worker: Offline data sync failed', error);
  }
}

// Helper function to get offline data (placeholder)
async function getOfflineData() {
  // This would typically use IndexedDB
  // For now, return empty array
  return [];
}

// Helper function to remove offline data (placeholder)
async function removeOfflineData(id) {
  // This would typically use IndexedDB
  // For now, just log
  console.log('📱 Service Worker: Removing offline data', id);
}

// Message handler for communication with main thread
self.addEventListener('message', (event) => {
  console.log('📱 Service Worker: Message received', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

console.log('📱 Service Worker: Loaded successfully');
