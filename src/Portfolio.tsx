import React, { useState } from 'react';
import { profileData } from './profileData';
import './portfolio.css';

interface PortfolioProps {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export default function Portfolio({ theme, setTheme }: PortfolioProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLine, setCopiedLine] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'line') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedLine(true);
        setTimeout(() => setCopiedLine(false), 2000);
      }
    });
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '#/resume';
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-page-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#/" className="logo">{profileData.personal.nickname}<span>.</span></a>
          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
            <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
            <li>
              <a href="#/resume" onClick={handleResumeClick} className="resume-btn">
                View Resume
              </a>
            </li>
            <li>
              <button
                onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
                className="theme-toggle"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? (
                  <i className="fa-solid fa-sun"></i>
                ) : (
                  <i className="fa-solid fa-moon"></i>
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="hero-section">
        <div className="hero-content">
          <span className="hero-greeting">Hello, I am</span>
          <h1 className="hero-name">
            {profileData.personal.firstName} <span>{profileData.personal.lastName}</span>
          </h1>
          <h2 className="hero-title">{profileData.personal.title}</h2>
          <p className="hero-bio">{profileData.personal.bio}</p>
          <div className="hero-actions">
            <button onClick={() => setIsContactOpen(true)} className="btn btn-primary">
              Contact Me <i className="fa-solid fa-arrow-right"></i>
            </button>
            <a href={profileData.contacts.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="profile-blob">
            <img src="images/profile.png" alt={profileData.personal.firstName} />
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-heading">Experience<span>.</span></h2>
          <div className="experience-list">
            {profileData.workExperience.map((exp, index) => (
              <div className="experience-card" key={index}>
                <div className="exp-info">
                  <span className="exp-tag">{exp.tag}</span>
                  <h3>{exp.role}</h3>
                  <p className="company">{exp.company}</p>
                  <span className="exp-date">{exp.period}</span>
                </div>
                <ul className="exp-points">
                  {exp.highlights.map((point, idx) => {
                    const parts = point.split('**');
                    return (
                      <li key={idx}>
                        {parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section alt-bg">
        <div className="container">
          <h2 className="section-heading">Selected Projects<span>.</span></h2>
          <div className="projects-grid">
            {profileData.projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-img">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, idx) => (
                      <span key={idx}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-heading">Expertise<span>.</span></h2>
          <div className="skills-wrapper">
            <div className="skill-group">
              <h3><i className="fa-solid fa-layer-group"></i> {profileData.skills.frontend.title}</h3>
              <p>{profileData.skills.frontend.skills.join(', ')}</p>
            </div>
            <div className="skill-group">
              <h3><i className="fa-solid fa-server"></i> {profileData.skills.backend.title}</h3>
              <p>{profileData.skills.backend.skills.join(', ')}</p>
            </div>
            <div className="skill-group">
              <h3><i className="fa-solid fa-database"></i> {profileData.skills.database.title}</h3>
              <p>{profileData.skills.database.skills.join(', ')}</p>
            </div>
            <div className="skill-group">
              <h3><i className="fa-solid fa-cloud-arrow-up"></i> {profileData.skills.devops.title}</h3>
              <p>{profileData.skills.devops.skills.join(', ')}</p>
            </div>
            <div className="skill-group">
              <h3><i className="fa-solid fa-code-branch"></i> {profileData.skills.gitCommands.title}</h3>
              <p>{profileData.skills.gitCommands.commands.join(', ')}</p>
            </div>
            <div className="skill-group">
              <h3><i className="fa-solid fa-brain"></i> {profileData.skills.aiPrompting.title}</h3>
              <p>
                Role-Setting (e.g. expert &amp; meticulous coder), Todo-driven prompts, ambiguity handling (asking clarifying questions) to avoid over-engineering, and maintaining system prompts (<code>.[ai_name]</code>) to align team standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2026 {profileData.personal.fullName}. All rights reserved.</p>
            <div className="social-links">
              <a href={profileData.contacts.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href={profileData.contacts.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); setIsContactOpen(true); }} aria-label="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Interests Compact */}
      <section className="interests-compact">
        <div className="container">
          <div className="interests-flex">
            <div className="interest-pill clickable" onClick={() => setIsGameOpen(true)}>
              <i className="fa-solid fa-gamepad"></i> Co-op Gaming
            </div>
            <div className="interest-pill"><i className="fa-solid fa-book-open"></i> Manga &amp; Anime</div>
            <div className="interest-pill"><i className="fa-solid fa-film"></i> Movies</div>
            <div className="interest-pill"><i className="fa-solid fa-car"></i> Driving</div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div id="contactModal" className="modal" style={{ display: 'flex' }} onClick={() => setIsContactOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setIsContactOpen(false)}>&times;</span>
            <h2 className="modal-title">Get in Touch<span>.</span></h2>
            <p className="modal-subtitle">Feel free to reach out for collaborations or just a friendly hello.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon"><i className="fa-solid fa-envelope"></i></div>
                <div className="method-details">
                  <h3>Email</h3>
                  <div className="copy-wrapper">
                    <p id="emailText">{profileData.contacts.email}</p>
                    <button 
                      className={`copy-btn ${copiedEmail ? 'copied' : ''}`} 
                      onClick={() => copyToClipboard(profileData.contacts.email, 'email')}
                    >
                      {copiedEmail ? (
                        <i className="fa-solid fa-check" style={{ color: '#10b981' }}></i>
                      ) : (
                        <i className="fa-regular fa-copy"></i>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon"><i className="fa-brands fa-line"></i></div>
                <div className="method-details">
                  <h3>Line</h3>
                  <div className="copy-wrapper">
                    <p id="lineText">{profileData.contacts.line}</p>
                    <button 
                      className={`copy-btn ${copiedLine ? 'copied' : ''}`} 
                      onClick={() => copyToClipboard(profileData.contacts.line, 'line')}
                    >
                      {copiedLine ? (
                        <i className="fa-solid fa-check" style={{ color: '#10b981' }}></i>
                      ) : (
                        <i className="fa-regular fa-copy"></i>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon"><i className="fa-brands fa-linkedin"></i></div>
                <div className="method-details">
                  <h3>LinkedIn</h3>
                  <p>{profileData.personal.nickname}</p>
                  <a href={profileData.contacts.linkedin} target="_blank" rel="noopener noreferrer" className="method-link">
                    Visit Profile
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon"><i className="fa-brands fa-github"></i></div>
                <div className="method-details">
                  <h3>GitHub</h3>
                  <p>{profileData.personal.nickname}</p>
                  <a href={profileData.contacts.github} target="_blank" rel="noopener noreferrer" className="method-link">
                    View Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Game Modal */}
      {isGameOpen && (
        <div id="gameModal" className="modal" style={{ display: 'flex' }} onClick={() => setIsGameOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setIsGameOpen(false)}>&times;</span>
            <h2 className="modal-title">Favorite <span>Games.</span></h2>
            <p className="modal-subtitle">Some of the co-op titles I enjoy playing with friends.</p>
            
            <div className="game-grid">
              {profileData.favoriteGames.map((game, index) => (
                <div className="game-item" key={index}>
                  <img src={game.logo} alt={game.name} className="game-logo" />
                  <span className="game-name">{game.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
