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
  const [activePage, setActivePage] = useState<'main' | 'account' | 'privacy' | 'terms' | 'faq' | 'support'>('main');
  const [isEditing, setIsEditing] = useState(false);
  const [editUsername, setEditUsername] = useState('AI Learner');
  const [supportSubject, setSupportSubject] = useState('');
  const [supportMessage, setSupportMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  useEffect(() => {
    // Load username
    const username = localStorage.getItem('username');
    if (username) {
      setEditUsername(username);
    }
  }, []);


  const handleUpdateProfile = async () => {
    if (editUsername.trim()) {
      localStorage.setItem('username', editUsername);
      setIsEditing(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently deleted.')) {
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
      const mailtoLink = `mailto:support@theorycoach.com?subject=${encodeURIComponent(supportSubject)}&body=${encodeURIComponent(`From: ${editUsername}\n\n${supportMessage}`)}`;
      window.open(mailtoLink);
      setSendSuccess(true);
      setSupportSubject('');
      setSupportMessage('');
      
      setTimeout(() => setSendSuccess(false), 3000);
    } catch (error) {
      console.error('Error sending support email:', error);
      alert('Failed to open email client. Please send an email manually to support@theorycoach.com');
    } finally {
      setIsSending(false);
    }
  };


  const handleBackToMain = () => {
    setActivePage('main');
  };

  // Main Settings Menu
  const renderMainMenu = () => (
    <div className="settings-page">
      <div className="tests-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Settings</h1>
          </div>
        </div>
      </div>

      <div className="settings-main-menu">
        <div className="settings-btn-wrapper">
          <button className="settings-main-menu-btn" onClick={() => setActivePage('account')}>
            <span>Account</span>
            <span className="settings-arrow">›</span>
          </button>
        </div>

        <div className="settings-btn-wrapper">
          <button className="settings-main-menu-btn" onClick={() => setActivePage('privacy')}>
            <span>Privacy Policy</span>
            <span className="settings-arrow">›</span>
          </button>
        </div>

        <div className="settings-btn-wrapper">
          <button className="settings-main-menu-btn" onClick={() => setActivePage('terms')}>
            <span>Terms of Service</span>
            <span className="settings-arrow">›</span>
          </button>
        </div>

        <div className="settings-btn-wrapper">
          <button className="settings-main-menu-btn" onClick={() => setActivePage('faq')}>
            <span>FAQ</span>
            <span className="settings-arrow">›</span>
          </button>
        </div>

        <div className="settings-btn-wrapper">
          <button className="settings-main-menu-btn" onClick={() => setActivePage('support')}>
            <span>Support</span>
            <span className="settings-arrow">›</span>
          </button>
        </div>
      </div>
    </div>
  );

  // Account Sub-Page
  const renderAccountPage = () => (
    <div className="settings-subpage">
      <div className="settings-subpage-header">
        <button className="settings-back-btn" onClick={handleBackToMain}>
          ← Back
        </button>
        <h2 className="settings-subpage-title">Account</h2>
      </div>

      <div className="settings-subpage-content">
        <div className="settings-section">
          <h3>Profile</h3>
          <div className="profile-field">
            <label>Username</label>
            {isEditing ? (
              <div className="edit-field">
                <input
                  type="text"
                  value={editUsername}
                  onChange={(e) => setEditUsername(e.target.value)}
                  placeholder="Enter username"
                />
                <div className="edit-actions">
                  <button className="save-btn" onClick={handleUpdateProfile}>Save</button>
                  <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
              </div>
            ) : (
              <div className="display-field">
                <span>{editUsername}</span>
                <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
              </div>
            )}
          </div>
        </div>

        <div className="settings-section">
          <h3>Data Management</h3>
          <div className="data-actions">
            <button className="data-btn export-btn">Export Data</button>
            <button className="data-btn import-btn">Import Data</button>
          </div>
        </div>

        <div className="settings-section danger-zone">
          <h3>Danger Zone</h3>
          <button className="delete-account-btn" onClick={handleDeleteAccount}>
            Delete Account
          </button>
          <p className="delete-warning">This will permanently delete all your data</p>
        </div>
      </div>
    </div>
  );


  // Privacy Policy Sub-Page
  const renderPrivacyPage = () => (
    <div className="settings-subpage">
      <div className="settings-subpage-header">
        <button className="settings-back-btn" onClick={handleBackToMain}>
          ← Back
        </button>
        <h2 className="settings-subpage-title">Privacy Policy</h2>
      </div>

      <div className="settings-subpage-content">
        <div className="policy-content">
          <h3>Data Collection</h3>
          <p>We collect minimal data necessary to provide our services. This includes your study progress, test results, and preferences.</p>

          <h3>Data Storage</h3>
          <p>Your data is stored securely in the cloud and is encrypted both in transit and at rest. We use industry-standard security measures to protect your information.</p>

          <h3>Data Usage</h3>
          <p>Your data is used solely to provide and improve our AI Learning Coach services. We analyze your study patterns to give you personalized recommendations.</p>

          <h3>Data Sharing</h3>
          <p>We do not share, sell, or rent your personal data to third parties. Your information remains private and confidential.</p>

          <h3>Your Rights</h3>
          <p>You have the right to access, export, and delete your data at any time. You can manage your data through the Account settings.</p>

          <h3>Contact</h3>
          <p>For privacy concerns, contact us at privacy@theorycoach.com</p>
        </div>
      </div>
    </div>
  );

  // Terms of Service Sub-Page
  const renderTermsPage = () => (
    <div className="settings-subpage">
      <div className="settings-subpage-header">
        <button className="settings-back-btn" onClick={handleBackToMain}>
          ← Back
        </button>
        <h2 className="settings-subpage-title">Terms of Service</h2>
      </div>

      <div className="settings-subpage-content">
        <div className="policy-content">
          <h3>1. Acceptance of Terms</h3>
          <p>By using Theory Coach AI, you agree to these Terms of Service. If you do not agree, please do not use the app.</p>

          <h3>2. Service Description</h3>
          <p>Theory Coach AI is an educational platform designed to help users prepare for the Dutch driving theory exam through AI-powered learning.</p>

          <h3>3. User Responsibilities</h3>
          <p>You are responsible for maintaining the confidentiality of your account and for all activities under your account. You must provide accurate information.</p>

          <h3>4. Acceptable Use</h3>
          <p>You agree to use the service only for lawful purposes and in accordance with these Terms. You may not use the service to cheat or gain unfair advantages.</p>

          <h3>5. Intellectual Property</h3>
          <p>All content, features, and functionality are owned by Theory Coach AI and are protected by copyright and other intellectual property laws.</p>

          <h3>6. Disclaimer</h3>
          <p>The service is provided "as is" without warranties of any kind. We do not guarantee that the service will be error-free or uninterrupted.</p>

          <h3>7. Limitation of Liability</h3>
          <p>We are not liable for any damages arising from your use of the service, including but not limited to direct, indirect, or consequential damages.</p>

          <h3>8. Changes to Terms</h3>
          <p>We reserve the right to modify these Terms at any time. Continued use of the service constitutes acceptance of modified Terms.</p>

          <h3>9. Contact</h3>
          <p>For questions about these Terms, contact legal@theorycoach.com</p>
        </div>
      </div>
    </div>
  );

  // FAQ Sub-Page
  const renderFAQPage = () => (
    <div className="settings-subpage">
      <div className="settings-subpage-header">
        <button className="settings-back-btn" onClick={handleBackToMain}>
          ← Back
        </button>
        <h2 className="settings-subpage-title">FAQ</h2>
      </div>

      <div className="settings-subpage-content">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Support Sub-Page
  const renderSupportPage = () => (
    <div className="settings-subpage">
      <div className="settings-subpage-header">
        <button className="settings-back-btn" onClick={handleBackToMain}>
          ← Back
        </button>
        <h2 className="settings-subpage-title">Support</h2>
      </div>

      <div className="settings-subpage-content">
        <div className="support-content">
          <h3>Get Help</h3>
          <p>Need assistance? Send us a message and we'll get back to you as soon as possible.</p>

          {sendSuccess && (
            <div className="success-message">✅ Message sent successfully!</div>
          )}

          <div className="support-form">
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                value={supportSubject}
                onChange={(e) => setSupportSubject(e.target.value)}
                placeholder="What do you need help with?"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                value={supportMessage}
                onChange={(e) => setSupportMessage(e.target.value)}
                placeholder="Describe your issue or question..."
                rows={6}
              />
            </div>

            <button
              className="send-support-btn"
              onClick={handleSendSupportEmail}
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          <div className="support-info">
            <h3>Other Ways to Reach Us</h3>
            <p>📧 Email: support@theorycoach.com</p>
            <p>🌐 Website: www.theorycoach.com</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="main-layout">
      <Navigation />
      <main className="main-content settings-page">
        <div className="settings-container">
          {activePage === 'main' && renderMainMenu()}
          {activePage === 'account' && renderAccountPage()}
          {activePage === 'privacy' && renderPrivacyPage()}
          {activePage === 'terms' && renderTermsPage()}
          {activePage === 'faq' && renderFAQPage()}
          {activePage === 'support' && renderSupportPage()}
        </div>
      </main>
    </div>
  );
};
