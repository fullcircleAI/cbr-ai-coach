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

  return (
    <div className="login-signup-container">
      <div className="login-signup-content">
        {/* Header with mascot */}
        <div className="auth-header">
          <div className="auth-mascot">
            <img src="/images/mascot.png" alt="Mascot" className="mascot-image" />
          </div>
          <h1 className="auth-title">
            {isLogin ? t('auth.welcomeBack') : t('auth.getStarted')}
          </h1>
          <p className="auth-subtitle">
            {isLogin ? t('auth.welcomeBackSubtitle') : t('auth.getStartedSubtitle')}
          </p>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder={t('auth.name')}
                value={formData.name}
                onChange={handleInputChange}
                required={!isLogin}
                className="auth-input"
              />
            </div>
          )}

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder={t('auth.email')}
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
              placeholder={t('auth.password')}
              value={formData.password}
              onChange={handleInputChange}
              required
              className="auth-input"
            />
          </div>

          {!isLogin && (
            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder={t('auth.confirmPassword')}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required={!isLogin}
                className="auth-input"
              />
            </div>
          )}

          <button 
            type="submit" 
            className={`auth-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              isLogin ? t('auth.signIn') : t('auth.signUp')
            )}
          </button>
        </form>

        {/* Toggle between login/signup */}
        <div className="auth-toggle">
          <p className="toggle-text">
            {isLogin ? t('auth.noAccount') : t('auth.haveAccount')}
          </p>
          <button 
            type="button"
            className="toggle-button"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? t('auth.signUp') : t('auth.signIn')}
          </button>
        </div>

        {/* Skip option (like Duolingo) */}
        <div className="auth-skip">
          <button 
            type="button"
            className="skip-button"
            onClick={handleSkip}
          >
            {t('auth.continueWithoutAccount')}
          </button>
        </div>

        {/* Social login options (like Duolingo) */}
        <div className="social-login">
          <div className="divider">
            <span className="divider-text">{t('auth.orContinueWith')}</span>
          </div>
          
          <div className="social-buttons">
            <button className="social-button google">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Google</span>
            </button>
            
            <button className="social-button apple">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path fill="#000" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
