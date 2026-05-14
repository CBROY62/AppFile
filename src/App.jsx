import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">
            <span className="logo-icon">📱</span>
            <span className="logo-text">Aarogya India App</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="/app-release2.apk" download className="btn-primary btn-sm">Download App</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Redefining Your <span className="gradient-text">Digital Life</span>
          </h1>
          <p className="hero-subtitle">
            Experience the next generation of mobile connectivity. Seamless, secure, and stunningly beautiful.
          </p>
          <div className="hero-actions">
            <a href="/app-release2.apk" download className="btn-primary">Download App</a>
            <button className="btn-secondary">Watch Demo</button>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="/qr_code_download.png" 
            alt="Download QR Code" 
            className="hero-image qr-hero-style"
          />
          <div className="hero-blob"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2 className="section-title">Why Choose <span className="gradient-text">Aarogya India App</span>?</h2>
        <div className="feature-grid">
          <div className="glass-card feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Blazing Fast</h3>
            <p>Optimized performance that feels like magic in your hands.</p>
          </div>
          <div className="glass-card feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Ultra Secure</h3>
            <p>End-to-end encryption and biometric protection for your data.</p>
          </div>
          <div className="glass-card feature-card">
            <div className="feature-icon">✨</div>
            <h3>Sleek UI</h3>
            <p>Award-winning design that makes every interaction a delight.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <span className="stat-number">10M+</span>
          <span className="stat-label">Downloads</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">4.9/5</span>
          <span className="stat-label">App Rating</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">150+</span>
          <span className="stat-label">Countries</span>
        </div>
      </section>
      {/* QR Section */}
      <section className="qr-section">
        <div className="glass-card qr-container">
          <div className="qr-text">
            <h2 className="section-title">Scan to <span className="gradient-text">Download</span></h2>
            <p>Scan the QR code with your phone's camera to instantly download the Aarogya India App.</p>
            <div className="qr-info">
              <div className="qr-info-item">
                <span className="icon">✓</span>
                <span>Available for Android</span>
              </div>
              <div className="qr-info-item">
                <span className="icon">✓</span>
                <span>Direct Download</span>
              </div>
            </div>
          </div>
          <div className="qr-image-wrapper">
            <img 
              src="/qr_code_download.png" 
              alt="Download QR Code" 
              className="qr-image"
            />
            <div className="qr-glow"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">📱</span>
              <span className="logo-text">Aarogya India App</span>
            </div>
            <p>Making technology more human, one pixel at a time.</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Security</a>
              <a href="#">Business</a>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
            </div>
            <div className="link-group">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact</a>
              <a href="#">Status</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Aarogya India App Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
