import React from 'react';
import { profileData } from './profileData';
import './style.css';

interface ResumeProps {
  lang: 'en' | 'th';
  setLang: (lang: 'en' | 'th') => void;
}

export default function Resume({ lang, setLang }: ResumeProps) {
  const data = profileData[lang];

  const handlePortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '#/';
  };

  return (
    <div className="resume-page-wrapper">
      <div className="resume-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="profile-section">
            <div className="profile-img-container">
              <img src="images/profile.png" alt="Profile Picture" id="profile-img" />
            </div>
            <div className="sidebar-nav" style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
              <a href="#/" onClick={handlePortfolioClick} className="portfolio-link" style={{ textAlign: 'center' }}>
                <i className="fa-solid fa-globe"></i> {lang === 'en' ? 'View Portfolio Site' : 'ดูหน้าพอร์ตโฟลิโอ'}
              </a>
              <div className="lang-selector-container" style={{ display: 'flex', gap: '8px', width: '100%' }}>
                <button 
                  onClick={() => setLang('en')} 
                  className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                  style={{
                    flex: 1,
                    padding: '6px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: lang === 'en' ? 'rgba(255,255,255,0.2)' : 'transparent',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    transition: 'all 0.2s'
                  }}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('th')} 
                  className={`lang-btn ${lang === 'th' ? 'active' : ''}`}
                  style={{
                    flex: 1,
                    padding: '6px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: lang === 'th' ? 'rgba(255,255,255,0.2)' : 'transparent',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    transition: 'all 0.2s'
                  }}
                >
                  TH
                </button>
              </div>
            </div>
            <h1 className="name-mobile">{data.personal.fullName}</h1>
            <p className="nickname">({data.personal.nickname})</p>
          </div>

          <section className="contact-info">
            <h2 className="sidebar-title">{lang === 'en' ? 'Contact' : 'การติดต่อ'}</h2>
            <ul>
              <li><i className="fa-solid fa-phone"></i> {data.contacts.phone}</li>
              <li><i className="fa-solid fa-envelope"></i> {data.contacts.email}</li>
              <li>
                <i className="fa-brands fa-github"></i>{' '}
                <a 
                  href={data.contacts.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {data.contacts.githubUser}
                </a>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>{' '}
                <a 
                  href={data.contacts.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {data.personal.fullName}
                </a>
              </li>
              <li><i className="fa-solid fa-location-dot"></i> {data.personal.location}</li>
            </ul>
          </section>

          <section className="education">
            <h2 className="sidebar-title">{lang === 'en' ? 'Education' : 'การศึกษา'}</h2>
            {data.education.map((edu, idx) => (
              <div className="edu-item" key={idx}>
                <h3>{edu.school}</h3>
                <p className="period">{edu.period}</p>
                <p className="degree">{edu.degree}</p>
                <p className="gpa">GPA: {edu.gpa}</p>
              </div>
            ))}
          </section>

          <section className="languages">
            <h2 className="sidebar-title">{lang === 'en' ? 'Languages' : 'ภาษา'}</h2>
            {data.languages.map((l, idx) => (
              <div className="lang-item" key={idx} style={{ marginBottom: '12px' }}>
                <span className="lang-name" style={{ fontWeight: 600, display: 'block', fontSize: '0.95rem' }}>{l.name}</span>
                <span className="lang-level" style={{ fontSize: '0.82rem', opacity: 0.8, display: 'block', marginTop: '2px', lineHeight: '1.3' }}>{l.level}</span>
              </div>
            ))}
          </section>

          <section className="certifications">
            <h2 className="sidebar-title">{lang === 'en' ? 'Certifications' : 'ใบรับรอง'}</h2>
            <ul className="cert-list">
              {data.certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </section>

        </aside>

        {/* Main Content */}
        <main className="main-content">
          <header className="main-header">
            <div className="header-text">
              <h1>{data.personal.fullName}</h1>
              <p className="professional-title">{data.personal.title}</p>
            </div>
            <div className="header-accent"></div>
          </header>

          <section className="experience-section">
            <h2 className="section-title"><i className="fa-solid fa-briefcase"></i> {lang === 'en' ? 'Work Experience' : 'ประสบการณ์ทำงาน'}</h2>
            <div className="timeline">
              {data.workExperience.map((exp, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="exp-header">
                      <h3>{exp.company}</h3>
                      <span className="exp-role">{exp.role}</span>
                      <span className="exp-date">{exp.period}</span>
                    </div>
                    <ul className="exp-details">
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
                </div>
              ))}
            </div>
          </section>

          <section className="skills-section">
            <h2 className="section-title"><i className="fa-solid fa-code"></i> {lang === 'en' ? 'Technical Skills' : 'ทักษะทางเทคนิค'}</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>{lang === 'en' ? 'Languages & Frameworks' : 'ภาษาและเฟรมเวิร์ก'}</h3>
                <div className="skill-tags">
                  {data.skills.frontend.skills.concat(data.skills.backend.skills).map((skill, idx) => (
                    <span key={idx}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>{lang === 'en' ? 'Databases & APIs' : 'ฐานข้อมูลและ REST APIs'}</h3>
                <div className="skill-tags">
                  {data.skills.database.skills.concat(["REST API", "tRPC"]).map((skill, idx) => (
                    <span key={idx}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>{lang === 'en' ? 'Infrastructure & DevOps' : 'เครื่องมือระบบและ DevOps'}</h3>
                <div className="skill-tags">
                  {data.skills.devops.skills.filter(s => s !== "Git").map((skill, idx) => (
                    <span key={idx}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>{data.skills.gitCommands.title}</h3>
                <div className="skill-tags">
                  {data.skills.gitCommands.commands.map((cmd, idx) => (
                    <span key={idx}>{cmd}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>{data.skills.aiPrompting.title}</h3>
                <div className="skill-tags" style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start' }}>
                  {data.skills.aiPrompting.details.map((detail, idx) => (
                    <span key={idx} style={{ width: '100%', textAlign: 'left', borderRadius: '4px', padding: '6px 12px' }}>{detail}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="bottom-grid">
            <section className="achievements">
              <h2 className="section-title"><i className="fa-solid fa-trophy"></i> {lang === 'en' ? 'Achievements' : 'ผลงานและความสำเร็จ'}</h2>
              <ul className="achievement-list">
                {data.achievements.map((ach, idx) => (
                  <li key={idx}>
                    <span className="ach-place">{ach.place}</span>
                    <span className="ach-name">{ach.name}</span>
                    {ach.description && <p className="ach-desc">{ach.description}</p>}
                  </li>
                ))}
              </ul>
            </section>

            <section className="honors">
              <h2 className="section-title"><i className="fa-solid fa-medal"></i> {lang === 'en' ? 'Honors & Awards' : 'เกียรตินิยมและรางวัล'}</h2>
              <ul className="honor-list">
                {data.honors.map((honor, idx) => (
                  <li key={idx}>
                    <strong>{honor.title}</strong>: {honor.description}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
