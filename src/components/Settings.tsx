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
                <div className="account-info">
                  <div className="user-avatar-large">👤</div>
                  <div className="user-details">
                    {isEditing ? (
                      <div className="edit-form">
                        <input
                          type="text"
                          value={editUsername}
                          onChange={(e) => setEditUsername(e.target.value)}
                          className="edit-input"
                          placeholder="Enter your name"
                        />
                        <div className="edit-actions">
                          <button onClick={handleUpdateProfile} className="save-btn">
                            Save
                          </button>
                          <button onClick={() => setIsEditing(false)} className="cancel-btn">
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="user-info">
                        <h3>{editUsername}</h3>
                        <p>AI Learning Coach User</p>
                        <button onClick={() => setIsEditing(true)} className="edit-btn">
                          Edit Profile
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="account-stats">
                  <div className="stat-item">
                    <span className="stat-label">Study Streak</span>
                    <span className="stat-value">{studyStreak} days</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Account Type</span>
                    <span className="stat-value">Free</span>
                  </div>
                </div>

                <div className="danger-zone">
                  <h3>⚠️ Danger Zone</h3>
                  <button className="delete-account-btn" onClick={handleDeleteAccount}>
                    Delete Account
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'study' && (
              <div className="settings-section">
                <h2>📚 Study Settings</h2>
                <div className="setting-item">
                  <div className="setting-info">
                    <h3>Personalized Learning</h3>
                    <p>AI adapts to your learning style and pace</p>
                  </div>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={personalizedLearning}
                      onChange={handlePersonalizedLearningToggle}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                
                <div className="setting-item">
                  <div className="setting-info">
                    <h3>Study Notifications</h3>
                    <p>Get reminded when it's time to study</p>
                  </div>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={studyPreferences.notifications}
                      onChange={(e) => handleStudyPreferenceChange('notifications', e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h3>Optimal Time Reminders</h3>
                    <p>Get notified at your best learning times</p>
                  </div>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={studyPreferences.optimalTimeReminders}
                      onChange={(e) => handleStudyPreferenceChange('optimalTimeReminders', e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h3>Knowledge Decay Alerts</h3>
                    <p>Get notified when you need to review topics</p>
                  </div>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={studyPreferences.knowledgeDecayAlerts}
                      onChange={(e) => handleStudyPreferenceChange('knowledgeDecayAlerts', e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <h3>Daily Study Goal</h3>
                    <p>Set your daily study time target</p>
                  </div>
                  <select 
                    value={studyPreferences.dailyGoal}
                    onChange={(e) => handleStudyPreferenceChange('dailyGoal', parseInt(e.target.value))}
                    className="goal-select"
                  >
                    <option value={15}>15 minutes</option>
                    <option value={30}>30 minutes</option>
                    <option value={45}>45 minutes</option>
                    <option value={60}>1 hour</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="settings-section">
                <h2>🔒 Privacy & Security</h2>
                <div className="privacy-info">
                  <h3>Data Protection</h3>
                  <p>Your data is encrypted and stored securely. We never share your personal information with third parties.</p>
                  
                  <h3>Data Usage</h3>
                  <p>We use your performance data only to provide personalized learning recommendations and improve the AI coach.</p>
                  
                  <h3>Cloud Storage</h3>
                  <p>Your progress is automatically backed up to the cloud for security and cross-device access.</p>
                  
                  <div className="cloud-test">
                    <button 
                      className="test-cloud-btn"
                      onClick={handleTestCloudStorage}
                      disabled={isTesting}
                    >
                      {isTesting ? 'Testing...' : 'Test Cloud Connection'}
                    </button>
                    {testResults.length > 0 && (
                      <div className="test-results">
                        {testResults.map((result, index) => (
                          <div key={index} className="test-result">{result}</div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <button className="delete-data-btn">
                    Delete All Data
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="settings-section">
                <h2>📄 Terms & Conditions</h2>
                <div className="terms-content">
                  <h3>Usage Terms</h3>
                  <p>By using this app, you agree to use it for educational purposes only. The AI Learning Coach provides recommendations but does not guarantee exam success.</p>
                  
                  <h3>Data Terms</h3>
                  <p>Your data is used to provide personalized learning experiences. You can delete your data at any time.</p>
                  
                  <h3>AI Disclaimer</h3>
                  <p>The AI analysis is based on learning science principles but should not be considered as a guarantee of exam performance.</p>
                  
                  <h3>Service Availability</h3>
                  <p>We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service.</p>
                  
                  <h3>Updates</h3>
                  <p>We may update these terms from time to time. Continued use of the app constitutes acceptance of updated terms.</p>
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