import React, { useState } from 'react';
import { Navigation } from './Navigation';
import './Settings.css';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How does the AI Learning Coach work?",
    answer: "The AI Learning Coach analyzes your performance patterns to provide personalized study recommendations, identifies your weak areas, and tracks your learning progress. It adapts to your learning style to help you study more effectively."
  },
  {
    question: "Is my data secure and private?",
    answer: "Yes! Your data is stored securely and is only accessible to you. We don't share your personal information with third parties. You can delete your account and all data at any time."
  },
  {
    question: "Can I use the app offline?",
    answer: "Yes, you can use the app offline for practice tests. Your progress will be saved locally and synced when you're back online. However, some AI features require an internet connection."
  },
  {
    question: "How accurate is the AI analysis?",
    answer: "The AI analysis is based on your actual performance data and follows proven learning science principles. It identifies patterns in your mistakes and provides targeted recommendations to improve your learning efficiency."
  },
  {
    question: "What if I lose my device or clear my browser?",
    answer: "If you've created an account, your progress is safely stored in the cloud and can be restored on any device. Simply log in and all your data will be available."
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
  const [studyReminders, setStudyReminders] = useState(true);

  const menuItems = [
    { id: 'account', label: 'Account', icon: '👤' },
    { id: 'study', label: 'Study', icon: '📚' },
    { id: 'privacy', label: 'Privacy', icon: '🔒' },
    { id: 'terms', label: 'Terms', icon: '📄' },
    { id: 'faq', label: 'FAQ', icon: '❓' },
    { id: 'support', label: 'Support', icon: '💬' }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const handleSendSupport = () => {
    if (!supportSubject.trim() || !supportMessage.trim()) {
      alert('Please fill in both subject and message fields.');
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSendSuccess(true);
      setSupportSubject('');
      setSupportMessage('');
      setTimeout(() => setSendSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="main-layout">
      <Navigation />
      
      <main className="main-content settings-page">
        <div className="settings-container">
          <div className="settings-header">
            <h1>⚙️ Settings</h1>
            <p>Manage your AI Learning Coach preferences</p>
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
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      className={`menu-item ${activeTab === item.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(item.id as any)}
                    >
                      <span className="menu-icon">{item.icon}</span>
                      <span className="menu-label">{item.label}</span>
                    </button>
                  ))}
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
                              <button onClick={handleSaveProfile} className="save-btn">
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
                          onChange={(e) => setPersonalizedLearning(e.target.checked)}
                        />
                        <span className="slider"></span>
                      </label>
                    </div>
                    <div className="setting-item">
                      <div className="setting-info">
                        <h3>Study Reminders</h3>
                        <p>Get notified when it's time to study</p>
                      </div>
                      <label className="toggle">
                        <input
                          type="checkbox"
                          checked={studyReminders}
                          onChange={(e) => setStudyReminders(e.target.checked)}
                        />
                        <span className="slider"></span>
                      </label>
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
                        onClick={handleSendSupport}
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
        </div>
      </main>
    </div>
  );
};