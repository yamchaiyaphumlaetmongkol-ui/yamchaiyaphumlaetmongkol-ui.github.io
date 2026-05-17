import React, { useState } from 'react';
import { profileData } from './profileData';
import './portfolio.css';

interface PortfolioProps {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
  lang: 'en' | 'th';
  setLang: (lang: 'en' | 'th') => void;
}

export default function Portfolio({ theme, setTheme, lang, setLang }: PortfolioProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLine, setCopiedLine] = useState(false);

  const data = profileData[lang];

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
          <a href="#/" className="logo">{data.personal.nickname}<span>.</span></a>
          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>{lang === 'en' ? 'About' : 'เกี่ยวกับ'}</a></li>
            <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>{lang === 'en' ? 'Experience' : 'ประสบการณ์'}</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>{lang === 'en' ? 'Projects' : 'ผลงาน'}</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>{lang === 'en' ? 'Skills' : 'ทักษะ'}</a></li>
            {/* <li>
              <a href="#/resume" onClick={handleResumeClick} className="resume-btn">
                {lang === 'en' ? 'View Resume' : 'ดูเรซูเม'}
              </a>
            </li> */}
            
            <li>
              <button
                onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
                className="theme-toggle"
                style={{ marginLeft: '6px', fontSize: '0.82rem', fontWeight: 700 }}
                aria-label="Toggle language"
              >
                {lang === 'en' ? 'TH' : 'EN'}
              </button>
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
          <span className="hero-greeting">{lang === 'en' ? 'Hello, I am' : 'สวัสดีครับ ผมชื่อ'}</span>
          <h1 className="hero-name">
            {data.personal.firstName} <span>{data.personal.lastName}</span>
          </h1>
          <h2 className="hero-title">{data.personal.title}</h2>
          <p className="hero-bio">{data.personal.bio}</p>
          <div className="hero-actions">
            <button onClick={() => setIsContactOpen(true)} className="btn btn-primary">
              {lang === 'en' ? 'Contact Me' : 'ติดต่อฉัน'} <i className="fa-solid fa-arrow-right"></i>
            </button>
            <a href={data.contacts.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="profile-blob">
            <img src="images/profile.png" alt={data.personal.firstName} />
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-heading">{lang === 'en' ? 'Experience' : 'ประสบการณ์ทำงาน'}<span>.</span></h2>
          <div className="experience-list">
            {data.workExperience.map((exp, index) => (
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
          <h2 className="section-heading">{lang === 'en' ? 'Projects' : 'ผลงาน'}<span>.</span></h2>
          <div className="projects-grid">
            {data.projects.map((project, index) => (
              <div className="project-card" key={index}>
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
          <h2 className="section-heading">{lang === 'en' ? 'Expertise' : 'ความเชี่ยวชาญ'}<span>.</span></h2>
          <div className="skills-wrapper">
            <div className="skill-group">
              <h3><i className="fa-solid fa-layer-group"></i> {data.skills.frontend.title}</h3>
              <p>{data.skills.frontend.skills.join(', ')}</p>
            </div>
            <div className="skill-group">
              <h3><i className="fa-solid fa-server"></i> {data.skills.backend.title}</h3>
              <p>{data.skills.backend.skills.join(', ')}</p>
            </div>
            <div className="skill-group">
              <h3><i className="fa-solid fa-database"></i> {data.skills.database.title}</h3>
              <p>{data.skills.database.skills.join(', ')}</p>
            </div>
            <div className="skill-group">
              <h3><i className="fa-solid fa-cloud-arrow-up"></i> {data.skills.devops.title}</h3>
              <p>{data.skills.devops.skills.join(', ')}</p>
            </div>
            <div className="skill-group">
              <h3><i className="fa-solid fa-code-branch"></i> {data.skills.gitCommands.title}</h3>
              <p>{data.skills.gitCommands.commands.join(', ')}</p>
            </div>
            <div className="skill-group" style={{ cursor: 'pointer' }} onClick={() => window.location.hash = '#/ai-workflows'}>
              <h3><i className="fa-solid fa-brain"></i> {data.skills.aiPrompting.title} <span style={{ fontSize: '0.75rem', color: 'var(--accent)', marginLeft: '6px', fontWeight: 600 }}>({lang === 'en' ? 'View Details →' : 'ดูรายละเอียด →'})</span></h3>
              <p>
                {lang === 'en' ? (
                  "Structured system prompt templates, specific boundaries for regression prevention, pre-flight ambiguity checks, and sequential TODO milestones for incremental and testable product prototyping."
                ) : (
                  "การกำหนดบทบาท System Prompt, แนวทางการควบคุมความปลอดภัยของตรรกะเดิมเพื่อป้องกันโค้ดพัง (Regression), ระบบทวนสอบสเปกเพื่อเคลียร์ความคลุมเครือก่อนเริ่มลงมือ, และเทคนิคการสั่งงานแบบ TODO ทีละเฟสเพื่อพัฒนาและตรวจสอบความถูกต้องได้อย่างมีระบบ"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2026 {data.personal.fullName}. All rights reserved.</p>
            <div className="social-links">
              <a href={data.contacts.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href={data.contacts.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); setIsContactOpen(true); }} aria-label="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>


      {/* Contact Modal */}
      {isContactOpen && (
        <div id="contactModal" className="modal" style={{ display: 'flex' }} onClick={() => setIsContactOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setIsContactOpen(false)}>&times;</span>
            <h2 className="modal-title">{lang === 'en' ? 'Get in Touch' : 'ติดต่อฉัน'}<span>.</span></h2>
            <p className="modal-subtitle">
              {lang === 'en' ? 'Feel free to reach out for collaborations or just a friendly hello.' : 'สามารถติดต่อผมเพื่อร่วมงานหรือพูดคุยแลกเปลี่ยนกันได้เลยครับ'}
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon"><i className="fa-solid fa-envelope"></i></div>
                <div className="method-details">
                  <h3>Email</h3>
                  <div className="copy-wrapper">
                    <p id="emailText">{data.contacts.email}</p>
                    <button 
                      className={`copy-btn ${copiedEmail ? 'copied' : ''}`} 
                      onClick={() => copyToClipboard(data.contacts.email, 'email')}
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
                    <p id="lineText">{data.contacts.line}</p>
                    <button 
                      className={`copy-btn ${copiedLine ? 'copied' : ''}`} 
                      onClick={() => copyToClipboard(data.contacts.line, 'line')}
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
                  <p>{data.personal.nickname}</p>
                  <a href={data.contacts.linkedin} target="_blank" rel="noopener noreferrer" className="method-link">
                    {lang === 'en' ? 'Visit Profile' : 'ไปที่โปรไฟล์'}
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon"><i className="fa-brands fa-github"></i></div>
                <div className="method-details">
                  <h3>GitHub</h3>
                  <p>{data.personal.nickname}</p>
                  <a href={data.contacts.github} target="_blank" rel="noopener noreferrer" className="method-link">
                    {lang === 'en' ? 'View Projects' : 'ดูผลงานบน GitHub'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
