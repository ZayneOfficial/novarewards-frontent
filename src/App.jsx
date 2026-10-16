import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home" className="logo">
          Nova<span>Rewards</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#earn" onClick={() => setMenuOpen(false)}>Earn Rewards</a>
          <a href="#how" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </div>

        <div className="nav-actions">
          <button className="login-btn" onClick={() => alert("Login coming soon!")}>
            Log In
          </button>
          <button className="primary-btn" onClick={() => alert("Registration coming soon!")}>
            Join Now
          </button>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              YOUR TIME. YOUR OPPORTUNITIES.
            </div>

            <h1>
              Turn Your Free Time Into{" "}
              <span>Opportunities.</span>
            </h1>

            <p>
              Discover available surveys, sponsored offers, and other
              opportunities to earn rewards online. Start exploring with
              NovaRewards.
            </p>

            <div className="hero-actions">
              <button
                className="primary-btn large-btn"
                onClick={() => alert("Registration coming soon!")}
              >
                Get Started →
              </button>

              <a href="#how" className="secondary-btn">
                Discover How It Works
              </a>
            </div>

            <div className="hero-note">
              Free to join · Opportunities depend on availability
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="earning-card">
              <div className="card-top">
                <span>Your Rewards</span>
                <span className="status-dot">● Demo</span>
              </div>

              <div className="balance">R0.00</div>

              <p className="balance-caption">
                Your balance will appear here
              </p>

              <div className="card-divider"></div>

              <div className="earning-row">
                <span>Completed offers</span>
                <strong>0</strong>
              </div>

              <div className="earning-row">
                <span>Pending rewards</span>
                <strong>R0.00</strong>
              </div>

              <div className="progress-section">
                <div className="progress-label">
                  <span>Withdrawal threshold</span>
                  <strong>R100.00</strong>
                </div>

                <div className="progress-track">
                  <div className="progress-fill"></div>
                </div>

                <small>Illustrative dashboard preview</small>
              </div>
            </div>

            <div className="floating-card floating-top">
              <span className="floating-icon">✦</span>
              Explore opportunities
            </div>

            <div className="floating-card floating-bottom">
              <span className="floating-icon">✓</span>
              Track your progress
            </div>
          </div>
        </section>

        <section className="features" id="earn">
          <div className="section-heading">
            <span className="eyebrow">EXPLORE YOUR OPTIONS</span>
            <h2>Discover Ways to Earn Rewards</h2>
            <p>
              Explore opportunities as they become available.
              Eligibility and rewards depend on each provider.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">▣</div>
              <h3>Rewarded Ads</h3>
              <p>
                Discover eligible advertising opportunities where
                supported by our approved partners.
              </p>
              <span className="coming-soon">Coming soon</span>
            </article>

            <article className="feature-card">
              <div className="feature-icon">◎</div>
              <h3>Paid Surveys</h3>
              <p>
                Explore surveys offered by approved partners and
                check whether you qualify.
              </p>
              <span className="coming-soon">Coming soon</span>
            </article>

            <article className="feature-card">
              <div className="feature-icon">✧</div>
              <h3>Sponsored Offers</h3>
              <p>
                Discover eligible partner offers and learn the
                requirements before participating.
              </p>
              <span className="coming-soon">Coming soon</span>
            </article>
          </div>
        </section>

        <section className="how-section" id="how">
          <div className="section-heading">
            <span className="eyebrow">SIMPLE AND TRANSPARENT</span>
            <h2>How NovaRewards Works</h2>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">01</span>
              <h3>Create an Account</h3>
              <p>Sign up to access your personal dashboard.</p>
            </article>

            <article className="step-card">
              <span className="step-number">02</span>
              <h3>Explore Opportunities</h3>
              <p>Complete eligible activities offered by approved partners.</p>
            </article>

            <article className="step-card">
              <span className="step-number">03</span>
              <h3>Track Your Rewards</h3>
              <p>Follow verified rewards and your available balance.</p>
            </article>

            <article className="step-card">
              <span className="step-number">04</span>
              <h3>Request a Withdrawal</h3>
              <p>
                If real-money rewards become available, request a withdrawal
                when you meet the published requirements.
              </p>
            </article>
          </div>
        </section>

        <section className="about-section" id="about">
          <div>
            <span className="eyebrow">WELCOME TO NOVAREWARDS</span>
            <h2>A clearer way to explore online opportunities.</h2>
          </div>

          <p>
            We aim to build a transparent platform where users can discover
            legitimate earning opportunities, track verified rewards, and
            understand the rules before participating.
          </p>
        </section>

        <section className="cta-section">
          <h2>Ready to Explore?</h2>
          <p>
            Create your account and get ready to discover available opportunities.
          </p>
          <button
            className="primary-btn large-btn"
            onClick={() => alert("Registration coming soon!")}
          >
            Join NovaRewards →
          </button>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          Nova<span>Rewards</span>
        </a>

        <p>© {new Date().getFullYear()} NovaRewards. All rights reserved.</p>

        <p className="footer-note">
          Rewards are subject to eligibility, partner terms, and verification.
          Earnings are not guaranteed.
        </p>
      </footer>
    </div>
  );
}

export default App;