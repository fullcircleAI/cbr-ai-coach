import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LoginSignup.css';

interface LoginSignupProps {
  onComplete: () => void;
}

export const LoginSignup: React.FC<LoginSignupProps> = ({ onComplete }) => {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
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
    
    // Validate password confirmation for signup
    if (showSignup && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
    
    setIsLoading(true);

    // Simulate API call (like Duolingo)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For demo purposes, just proceed to next step
    // In real app, you'd validate credentials here
    localStorage.setItem('userAuthenticated', 'true');
    if (showSignup) {
      localStorage.setItem('username', formData.name || 'AI Learner');
      localStorage.setItem('userEmail', formData.email);
    }
    setIsLoading(false);
    onComplete();
  };


  const handleGuestMode = () => {
    // Guest mode - no authentication needed
    localStorage.setItem('userAuthenticated', 'guest');
    onComplete();
  };

  const handleGetStarted = () => {
    setShowSignup(true);
    setIsLogin(false);
  };

  // Bot-it style: Show initial page with sign-in form and 3 buttons
  if (!showSignup) {
    return (
      <div className="login-signup-container">
        <div className="login-signup-content">
          {/* Header with mascot */}
          <div className="auth-header">
            <div className="auth-mascot">
              <img src="/images/mascot.png" alt="Mascot" className="mascot-image" />
            </div>
            <h1 className="auth-title">
              {t('auth.welcome', 'Welcome to AI Coach')}
            </h1>
            <p className="auth-subtitle">
              {t('auth.welcomeSubtitle', 'Your personal driving theory tutor')}
            </p>
          </div>

          {/* Sign In Form */}
          <form className="auth-form" onSubmit={handleSubmit}>
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

            {/* Forgot Password Link */}
            <div className="forgot-password">
              <button 
                type="button"
                className="forgot-password-link"
                onClick={() => alert('Forgot password functionality coming soon!')}
              >
                {t('auth.forgotPassword', 'Forgot Password?')}
              </button>
            </div>

            <button 
              type="submit" 
              className={`auth-button primary ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                t('auth.signIn', 'Sign In')
              )}
            </button>
          </form>

          {/* Two main buttons */}
          <div className="auth-buttons">
            <button 
              type="button"
              className="auth-button secondary"
              onClick={handleGetStarted}
            >
              {t('auth.getStarted', 'Get Started')}
            </button>

            <button 
              type="button"
              className="auth-button guest"
              onClick={handleGuestMode}
            >
              {t('auth.continueAsGuest', 'Continue as Guest')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Bot-it style: Show signup form with social media
  return (
    <div className="login-signup-container">
      <div className="login-signup-content">

        {/* Header with back arrow and title */}
        <div className="auth-header">
          <div className="title-with-back">
            <button 
              type="button"
              className="back-button-inline"
              onClick={() => setShowSignup(false)}
              aria-label="Go back"
            >
              <svg className="back-arrow-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <h1 className="auth-title">
              {t('auth.signUp', 'Sign up')}
            </h1>
          </div>
        </div>


        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit}>
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

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder={t('auth.confirmPassword', 'Confirm Password')}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              className="auth-input"
            />
          </div>

          <button 
            type="submit" 
            className={`auth-button primary ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              t('auth.getStarted', 'Get Started')
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span className="divider-text">{t('auth.orContinueWith', 'or continue with')}</span>
        </div>

        {/* Social Media Buttons */}
        <div className="social-buttons">
          <button className="social-button facebook" onClick={() => alert('Facebook login coming soon!')}>
            <svg className="social-icon" viewBox="0 0 24 24">
              <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </button>
          
          <button className="social-button google" onClick={() => alert('Google login coming soon!')}>
            <svg className="social-icon" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Google</span>
          </button>
          
          <button className="social-button apple" onClick={() => alert('Apple login coming soon!')}>
            <svg className="social-icon" viewBox="0 0 24 24">
              <path fill="#000000" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span>Apple</span>
          </button>
        </div>

        {/* Back to login */}
        <div className="auth-toggle">
          <button 
            type="button" 
            className="toggle-button"
            onClick={() => setShowSignup(false)}
          >
            {t('auth.alreadyHaveAccount', 'Already have an account? Sign In')}
          </button>
        </div>
      </div>
    </div>
  );
};
