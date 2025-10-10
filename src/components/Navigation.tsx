import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';

export const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: '📊',
      path: '/',
      description: 'Your learning dashboard'
    },
    {
      id: 'tests',
      label: 'Practice',
      icon: '🧪',
      path: '/tests',
      description: 'Practice tests and mock exams'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: '⚙️',
      path: '/settings',
      description: 'App settings and preferences'
    }
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <nav className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="nav-list">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-btn ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => handleNavClick(item.path)}
              title={item.label}
            >
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="sidebar-user">
          <div className="user-avatar">👤</div>
          <div className="user-info">
            <div className="user-name">AI Learner</div>
            <div className="user-status">Ready to learn</div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Footer Navigation */}
      <div className="footer-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`footer-btn ${isActive(item.path) ? 'active' : ''}`}
            onClick={() => handleNavClick(item.path)}
            title={item.label}
          >
            <div className="footer-icon">{item.icon}</div>
          </button>
        ))}
      </div>
    </>
  );
};
