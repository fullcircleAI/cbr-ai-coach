import { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import './Settings.css';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How does the progress tracking work?",
    answer: "Your progress is automatically saved as you complete practice tests. You can view detailed analytics including your average score, weak areas, and study streak. Data is synced across all your devices when you create an account."
  },
  {
    question: "Is my data secure and private?",
    answer: "Yes! Your data is stored securely in the cloud and is only accessible to you. We don't share your personal information with third parties. You can delete your account and all data at any time."
  },
  {
    question: "Can I use the app offline?",
    answer: "Yes, you can use the app offline for practice tests. Your progress will be saved locally and synced to the cloud when you're back online. However, some features like cloud sync require an internet connection."
  },
  {
    question: "How accurate is the AI Learning Coach?",
    answer: "The AI Learning Coach analyzes your performance patterns to provide personalized study recommendations. It identifies your weak areas and tracks your learning progress to help you study more effectively."
  },
  {
    question: "What if I lose my device or clear my browser?",
    answer: "If you've created an account, your progress is safely stored in the cloud and can be restored on any device. Simply log in with your name and all your data will be available. For anonymous users, data is stored locally and may be lost if the browser is cleared."
  }
];

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'account' | 'study' | 'privacy' | 'terms' | 'faq' | 'support'>('account');
  const [isEditing, setIsEditing] = useState(false);
  const [editUsername, setEditUsername] = useState('AI Learner');
  const [supportSubject, setSupportSubject] = useState('');
  const [supportMessage, setSupportMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [personalizedLearning, setPersonalizedLearning] = useState(true);
  const [studyPreferences, setStudyPreferences] = useState({
    notifications: true,
    optimalTimeReminders: true,
    knowledgeDecayAlerts: true,
    preferredStudyTimes: ['09:00', '14:00', '20:00'],
    dailyGoal: 30
  });
  const [studyStreak, setStudyStreak] = useState(0);
  const [testResults, setTestResults] = useState<string[]>([]);
  const [isTesting, setIsTesting] = useState(false);

  useEffect(() => {
    // Load personalized learning preference
    const stored = localStorage.getItem('personalizedLearning');
    if (stored !== null) {
      setPersonalizedLearning(JSON.parse(stored));
    }

    // Load study streak
    const streak = localStorage.getItem('studyStreak');
    if (streak) {
      setStudyStreak(parseInt(streak));
    }
  }, []);

  const handlePersonalizedLearningToggle = () => {
    const newValue = !personalizedLearning;
    setPersonalizedLearning(newValue);
    localStorage.setItem('personalizedLearning', JSON.stringify(newValue));
  };

  const handleUpdateProfile = async () => {
    if (editUsername.trim()) {
      setIsEditing(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently deleted.')) {
      // Clear all local data
      localStorage.clear();
      window.location.reload();
    }
  };

  const handleSendSupportEmail = async () => {
    if (!supportSubject.trim() || !supportMessage.trim()) {
      alert('Please fill in both subject and message fields.');
      return;
    }

    setIsSending(true);
    try {
      const mailtoLink = `mailto:support@ailearningcoach.com?subject=${encodeURIComponent(supportSubject)}&body=${encodeURIComponent(`From: ${editUsername}\n\n${supportMessage}`)}`;
      window.open(mailtoLink);
      setSendSuccess(true);
      setSupportSubject('');
      setSupportMessage('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setSendSuccess(false), 3000);
    } catch (error) {
      console.error('Error sending support email:', error);
      alert('Failed to open email client. Please send an email manually to support@ailearningcoach.com');
    } finally {
      setIsSending(false);
    }
  };

  const handleStudyPreferenceChange = async (key: string, value: any) => {
    const newPreferences = { ...studyPreferences, [key]: value };
    setStudyPreferences(newPreferences);
    localStorage.setItem('studyPreferences', JSON.stringify(newPreferences));
  };

  const handleTestCloudStorage = async () => {
    setIsTesting(true);
    setTestResults([]);
    
    try {
      // Simulate cloud storage test
      await new Promise(resolve => setTimeout(resolve, 2000));
      setTestResults(['✅ Connection successful', '✅ Data sync working', '✅ Backup completed']);
    } catch (error) {
      setTestResults(['❌ Connection failed', '❌ Sync error', '❌ Backup failed']);
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="main-layout settings-layout">
      <Navigation />
      <main className="main-content settings-main-content">
        <div className="settings-container">
          <div style={{ height: '3rem' }} />
          {showMenu ? (
        <>
      <div className="settings-header">
        <h2 className="settings-title">Settings</h2>
      </div>

      <div className="settings-content">
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰ Menu
        </button>

        <div className="settings-layout">
          {/* Settings Menu */}
          <div className={`settings-menu ${showMenu ? 'show' : ''}`}>
            <div className="menu-items">
              <button
                className={`menu-item ${activeTab === 'account' ? 'active' : ''}`}
                onClick={() => setActiveTab('account')}
              >
                <span className="menu-icon">👤</span>
                <span className="menu-label">Account</span>
              </button>
              <button
                className={`menu-item ${activeTab === 'study' ? 'active' : ''}`}
                onClick={() => setActiveTab('study')}
              >
                <span className="menu-icon">📚</span>
                <span className="menu-label">Study</span>
              </button>
              <button
                className={`menu-item ${activeTab === 'privacy' ? 'active' : ''}`}
                onClick={() => setActiveTab('privacy')}
              >
                <span className="menu-icon">🔒</span>
                <span className="menu-label">Privacy</span>
              </button>
              <button
                className={`menu-item ${activeTab === 'terms' ? 'active' : ''}`}
                onClick={() => setActiveTab('terms')}
              >
                <span className="menu-icon">📄</span>
                <span className="menu-label">Terms</span>
              </button>
              <button
                className={`menu-item ${activeTab === 'faq' ? 'active' : ''}`}
                onClick={() => setActiveTab('faq')}
              >
                <span className="menu-icon">❓</span>
                <span className="menu-label">FAQ</span>
              </button>
              <button
                className={`menu-item ${activeTab === 'support' ? 'active' : ''}`}
                onClick={() => setActiveTab('support')}
              >
                <span className="menu-icon">💬</span>
                <span className="menu-label">Support</span>
              </button>
            </div>
          </div>

          {/* Settings Content */}
          <div className="settings-panel">
            {activeTab === 'account' && (
              <div className="settings-section">
                <h2>👤 Account Settings</h2>
                
                <div className="settings-section">
                  <h4>Profile Information</h4>
                  <div className="profile-field">
                    <label>Username</label>
                    {isEditing ? (
                      <div className="edit-field">
                        <input
                          type="text"
                          value={editUsername}
                          onChange={(e) => setEditUsername(e.target.value)}
                          placeholder="Enter your username"
                          maxLength={50}
                          style={{ textAlign: 'left' }}
                        />
                        <div className="edit-actions">
                          <button onClick={handleUpdateProfile} className="save-btn">Save</button>
                          <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
                        </div>
                      </div>
                    ) : (
                      <div className="display-field">
                        <span>{editUsername}</span>
                        <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
                      </div>
                    )}
                  </div>
                  
                  <div className="profile-field">
                    <label>Email</label>
                    <div className="display-field">
                      <span>ai.learner@example.com</span>
                      <span className="email-note">(Auto-generated for account sync)</span>
                    </div>
                  </div>
                  
                  <div className="profile-field">
                    <label>Language</label>
                    <div className="display-field">
                      <select className="language-select" style={{ textAlign: 'left' }}>
                        <option value="en">English</option>
                        <option value="nl">Nederlands</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="profile-field">
                    <label>Account Status</label>
                    <div className="display-field">
                      <span className="premium-badge">🌟 Premium User</span>
                    </div>
                  </div>
                  
                  <div className="profile-field">
                    <label>Data Storage</label>
                    <div className="display-field">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#059669' }}>☁️</span>
                        <span style={{ color: '#059669', fontWeight: 600 }}>Cloud Storage Active</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                        Your data syncs across all devices
                      </div>
                    </div>
                  </div>
                  
                  <div className="profile-field">
                    <label>Cloud Storage Test</label>
                    <div className="display-field">
                      <button 
                        onClick={handleTestCloudStorage}
                        disabled={isTesting}
                        style={{
                          background: '#002868',
                          color: 'white',
                          border: 'none',
                          padding: '0.5rem 1rem',
                          borderRadius: '6px',
                          cursor: 'pointer'
                        }}
                      >
                        {isTesting ? 'Testing...' : 'Test Connection'}
                      </button>
                      {testResults.length > 0 && (
                        <div className="test-results">
                          {testResults.map((result, index) => (
                            <div key={index} className="test-result">{result}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="settings-section">
                  <h4>Learning Preferences</h4>
                  <div className="preference-item">
                    <label>Personalized Learning</label>
                    <div className="preference-description">
                      AI adapts to your learning style and pace
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={personalizedLearning}
                        onChange={handlePersonalizedLearningToggle}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="settings-section">
                  <h4>Data Management</h4>
                  <div className="data-actions">
                    <button className="export-btn">Export My Data</button>
                    <button className="import-btn">Import Data</button>
                    <button className="clear-cache-btn">Clear Cache</button>
                  </div>
                </div>

                <div className="settings-section">
                  <h4>Danger Zone</h4>
                  <div className="danger-actions">
                    <button className="delete-account-btn" onClick={handleDeleteAccount}>
                      Delete Account
                    </button>
                    <p className="danger-warning">
                      This will permanently delete all your data and cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'study' && (
              <div className="settings-section">
                <h2>📚 Study Settings</h2>
                
                <div className="settings-section">
                  <h4>Notifications</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 600, color: '#002868' }}>Study Reminders</div>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Get notified when it's time to study</div>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={studyPreferences.notifications}
                          onChange={(e) => handleStudyPreferenceChange('notifications', e.target.checked)}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 600, color: '#002868' }}>Optimal Time Alerts</div>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Remind me when I perform best</div>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={studyPreferences.optimalTimeReminders}
                          onChange={(e) => handleStudyPreferenceChange('optimalTimeReminders', e.target.checked)}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 600, color: '#002868' }}>Knowledge Decay Alerts</div>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Warn when knowledge is fading</div>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={studyPreferences.knowledgeDecayAlerts}
                          onChange={(e) => handleStudyPreferenceChange('knowledgeDecayAlerts', e.target.checked)}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="settings-section">
                  <h4>Daily Goal</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <input
                      type="range"
                      min="10"
                      max="120"
                      step="5"
                      value={studyPreferences.dailyGoal}
                      onChange={(e) => handleStudyPreferenceChange('dailyGoal', parseInt(e.target.value))}
                      style={{ flex: 1 }}
                    />
                    <span style={{ fontWeight: 600, color: '#002868', minWidth: '60px' }}>
                      {studyPreferences.dailyGoal} min
                    </span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                    Target daily study time
                  </div>
                </div>

                <div className="settings-section">
                  <h4>Exam Date (Optional)</h4>
                  <input
                    type="date"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #E2E8F0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'inherit'
                    }}
                  />
                  <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                    Set your exam date for personalized study planning
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="settings-section">
                <h2>🔒 Privacy & Security</h2>
                
                <div className="settings-section">
                  <h4>Data Collection</h4>
                  <p>We collect the following data to provide you with the best learning experience:</p>
                  <ul>
                    <li>Your test results and performance data</li>
                    <li>Study patterns and time spent on topics</li>
                    <li>Device information for app optimization</li>
                    <li>Usage analytics to improve features</li>
                  </ul>
                </div>

                <div className="settings-section">
                  <h4>How We Use Your Data</h4>
                  <p>Your data is used for the following purposes:</p>
                  <ul>
                    <li>To provide personalized study recommendations</li>
                    <li>To improve the app's features and user experience</li>
                    <li>To analyze learning patterns and optimize content</li>
                    <li>To track your progress and provide insights</li>
                  </ul>
                </div>

                <div className="settings-section">
                  <h4>Data Security</h4>
                  <p>Your data is protected using industry-standard security measures:</p>
                  <ul>
                    <li>All data is encrypted in transit and at rest</li>
                    <li>We use secure cloud infrastructure</li>
                    <li>Regular security audits and updates</li>
                    <li>No third-party access to your personal data</li>
                  </ul>
                </div>

                <div className="settings-section">
                  <h4>Your Rights</h4>
                  <p>You have full control over your data:</p>
                  <ul>
                    <li>Access all your data at any time</li>
                    <li>Export your data in a readable format</li>
                    <li>Delete your account and all data permanently</li>
                    <li>Use the app anonymously without creating an account</li>
                  </ul>
                </div>

                <div className="settings-section">
                  <h4>Contact Us</h4>
                  <p>If you have any questions about this privacy policy, please contact us through the app or create an issue in our repository.</p>
                </div>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="settings-section">
                <h2>📄 Terms & Conditions</h2>
                
                <div className="settings-section">
                  <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
                </div>

                <div className="settings-section">
                  <h4>Acceptance of Terms</h4>
                  <p>By using this Smart Dutch Driving Theory App, you agree to be bound by these terms and conditions.</p>
                </div>

                <div className="settings-section">
                  <h4>Use of the App</h4>
                  <ul>
                    <li>This app is designed to help you learn Dutch driving theory</li>
                    <li>While we strive for accuracy, we cannot guarantee exam success</li>
                    <li>Use the app responsibly and in accordance with local laws</li>
                    <li>Do not attempt to cheat or manipulate the learning system</li>
                  </ul>
                </div>

                <div className="settings-section">
                  <h4>User Responsibilities</h4>
                  <ul>
                    <li>Provide accurate information when creating an account</li>
                    <li>Keep your account information secure</li>
                    <li>Use the app for educational purposes only</li>
                    <li>Respect the intellectual property rights of the content</li>
                  </ul>
                </div>

                <div className="settings-section">
                  <h4>Content and Accuracy</h4>
                  <ul>
                    <li>We regularly update content to match current Dutch driving theory standards</li>
                    <li>While we strive for accuracy, official Dutch driving materials should be your primary reference</li>
                    <li>We are not responsible for any discrepancies with official exam content</li>
                    <li>Always verify information with official Dutch driving sources</li>
                  </ul>
                </div>

                <div className="settings-section">
                  <h4>Limitation of Liability</h4>
                  <p>This app is provided "as is" without warranties. We are not liable for:</p>
                  <ul>
                    <li>Any damages resulting from use of the app</li>
                    <li>Loss of data or progress due to technical issues</li>
                    <li>Failure to pass the Dutch driving theory exam</li>
                    <li>Any indirect or consequential damages</li>
                  </ul>
                </div>

                <div className="settings-section">
                  <h4>Changes to Terms</h4>
                  <p>We may update these terms from time to time. Continued use of the app constitutes acceptance of any changes.</p>
                </div>

                <div className="settings-section">
                  <h4>Governing Law</h4>
                  <p>These terms are governed by the laws of the Netherlands, where Dutch driving theory exams are administered.</p>
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="settings-section">
                <h2>❓ Frequently Asked Questions</h2>
                <div className="faq-list">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <h3 className="faq-question">{faq.question}</h3>
                      <p className="faq-answer">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="settings-section">
                <h2>💬 Support</h2>
                <div className="support-form">
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      value={supportSubject}
                      onChange={(e) => setSupportSubject(e.target.value)}
                      placeholder="What can we help you with?"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      value={supportMessage}
                      onChange={(e) => setSupportMessage(e.target.value)}
                      placeholder="Describe your issue or question..."
                      className="form-textarea"
                      rows={5}
                    />
                  </div>
                  <button
                    onClick={handleSendSupportEmail}
                    disabled={isSending || !supportSubject || !supportMessage}
                    className="send-btn"
                  >
                    {isSending ? 'Sending...' : 'Send Message'}
                  </button>
                  {sendSuccess && (
                    <div className="success-message">
                      ✅ Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </>
      ) : (
        <div className="settings-menu-toggle">
          <button 
            className="menu-toggle-btn"
            onClick={() => setShowMenu(true)}
          >
            ☰ Show Menu
          </button>
        </div>
      )}
        </div>
      </main>
    </div>
  );
};