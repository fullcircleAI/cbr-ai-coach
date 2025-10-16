import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LoginSignup.css';

interface LoginSignupProps {
  onComplete: () => void;
}

export const LoginSignup: React.FC<LoginSignupProps> = ({ onComplete }) => {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call (like Duolingo)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For demo purposes, just proceed to next step
    // In real app, you'd validate credentials here
    localStorage.setItem('userAuthenticated', 'true');
    setIsLoading(false);
    onComplete();
  };

  const handleSkip = () => {
    // Allow users to skip (like Duolingo)
    localStorage.setItem('userAuthenticated', 'skipped');
    onComplete();
  };

  const handleGuestMode = () => {
    // Guest mode - no authentication needed
    localStorage.setItem('userAuthenticated', 'guest');
    onComplete();
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-content">
        {/* Header with mascot */}
        <div className="auth-header">
          <div className="auth-mascot">
            <img src="/images/mascot.png" alt="Mascot" className="mascot-image" />
          </div>
          <h1 className="auth-title">
            {isLogin ? t('auth.welcomeBack', 'Welcome Back') : t('auth.getStarted', 'Get Started')}
          </h1>
          <p className="auth-subtitle">
            {isLogin ? t('auth.welcomeBackSubtitle', 'Sign in to continue') : t('auth.getStartedSubtitle', 'Create your account')}
          </p>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder={t('auth.name', 'Your Name')}
                value={formData.name}
                onChange={handleInputChange}
                className="auth-input"
              />
            </div>
          )}

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder={t('auth.email', 'Email')}
              value={formData.email}
              onChange={handleInputChange}
              required
              className="auth-input"
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder={t('auth.password', 'Password')}
              value={formData.password}
              onChange={handleInputChange}
              required
              className="auth-input"
            />
          </div>


          <button 
            type="submit" 
            className={`auth-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              isLogin ? t('auth.signIn', 'Sign In') : t('auth.signUp', 'Sign Up')
            )}
          </button>
        </form>

        {/* Toggle between login/signup */}
        <div className="auth-toggle">
          <p className="toggle-text">
            {isLogin ? t('auth.noAccount', "Don't have an account?") : t('auth.haveAccount', 'Already have an account?')}
          </p>
          <button 
            type="button" 
            className="toggle-button"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? t('auth.signUp', 'Sign Up') : t('auth.signIn', 'Sign In')}
          </button>
        </div>

        {/* Guest Mode - Prominent option */}
        <div className="guest-mode-section">
          <button 
            type="button"
            className="guest-button"
            onClick={handleGuestMode}
          >
            <span className="guest-icon">👤</span>
            {t('auth.guestMode', 'Continue as Guest')}
          </button>
          <p className="guest-description">
            {t('auth.guestModeDescription', 'Start learning without an account')}
          </p>
        </div>

        {/* Skip option (like Duolingo) */}
        <div className="auth-skip">
          <button 
            type="button"
            className="skip-button"
            onClick={handleSkip}
          >
            {t('auth.continueWithoutAccount', 'Skip for now')}
          </button>
        </div>

      </div>
    </div>
  );
};
