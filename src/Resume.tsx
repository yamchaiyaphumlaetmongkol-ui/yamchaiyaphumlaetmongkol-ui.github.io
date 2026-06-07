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
    <div className="resume-page-wrapper" style={{ padding: '40px 20px' }}>
      
      {/* Control Bar for Screen Only (Normal Flow, No Overlap!) */}
      <div className="screen-only-controls">
        <div style={{ display: 'flex', gap: '10px' }}>
          <a 
            href="#/" 
            onClick={handlePortfolioClick} 
            className="portfolio-link"
          >
            <i className="fa-solid fa-arrow-left"></i> {lang === 'en' ? 'Back to Portfolio' : 'กลับหน้าพอร์ตโฟลิโอ'}
          </a>
          <a 
            href="#/ai-workflows" 
            className="secondary-nav-link"
          >
            <i className="fa-solid fa-brain"></i> {lang === 'en' ? 'AI Workflows' : 'กระบวนการ AI'}
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {/* Language Selector */}
          <div className="lang-toggle-group">
            <button 
              type="button"
              onClick={() => setLang('en')} 
              className={lang === 'en' ? 'active' : ''}
            >
              EN
            </button>
            <button 
              type="button"
              onClick={() => setLang('th')} 
              className={lang === 'th' ? 'active' : ''}
            >
              TH
            </button>
          </div>

          <button 
            type="button"
            onClick={() => window.print()} 
            className="print-btn"
          >
            <i className="fa-solid fa-file-pdf"></i> {lang === 'en' ? 'Download PDF' : 'ดาวน์โหลด PDF'}
          </button>
        </div>
      </div>

      <div className="resume-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="profile-section">
            <div className="profile-img-container">
              <img src="images/profile.png" alt="Profile Picture" id="profile-img" />
            </div>
            <h1 className="name-mobile">{data.personal.fullName}</h1>
            <p className="nickname" style={{ marginTop: '5px' }}>({data.personal.nickname})</p>
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
                <h3>{data.skills.softSkills.title}</h3>
                <div className="skill-tags">
                  {data.skills.softSkills.commands.map((cmd, idx) => (
                    <span key={idx}>{cmd}</span>
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
