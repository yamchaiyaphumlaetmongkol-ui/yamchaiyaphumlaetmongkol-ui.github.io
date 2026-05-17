import React from 'react';
import { profileData } from './profileData';
import './style.css';

export default function Resume() {
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
            <div className="sidebar-nav">
              <a href="#/" onClick={handlePortfolioClick} className="portfolio-link">
                <i className="fa-solid fa-globe"></i> View Portfolio Site
              </a>
            </div>
            <h1 className="name-mobile">{profileData.personal.fullName}</h1>
            <p className="nickname">({profileData.personal.nickname})</p>
          </div>

          <section className="contact-info">
            <h2 className="sidebar-title">Contact</h2>
            <ul>
              <li><i className="fa-solid fa-phone"></i> {profileData.contacts.phone}</li>
              <li><i className="fa-solid fa-envelope"></i> {profileData.contacts.email}</li>
              <li>
                <i className="fa-brands fa-github"></i>{' '}
                <a 
                  href={profileData.contacts.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {profileData.contacts.githubUser}
                </a>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>{' '}
                <a 
                  href={profileData.contacts.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {profileData.personal.fullName}
                </a>
              </li>
              <li><i className="fa-solid fa-location-dot"></i> {profileData.personal.location}</li>
            </ul>
          </section>

          <section className="education">
            <h2 className="sidebar-title">Education</h2>
            {profileData.education.map((edu, idx) => (
              <div className="edu-item" key={idx}>
                <h3>{edu.school}</h3>
                <p className="period">{edu.period}</p>
                <p className="degree">{edu.degree}</p>
                <p className="gpa">GPA: {edu.gpa}</p>
              </div>
            ))}
          </section>

          <section className="languages">
            <h2 className="sidebar-title">Languages</h2>
            {profileData.languages.map((lang, idx) => (
              <div className="lang-item" key={idx}>
                <span className="lang-name">{lang.name}</span>
                <span className="lang-level">{lang.level}</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: lang.percent }}></div>
                </div>
              </div>
            ))}
          </section>

          <section className="certifications">
            <h2 className="sidebar-title">Certifications</h2>
            <ul className="cert-list">
              {profileData.certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </section>

          <section className="interests">
            <h2 className="sidebar-title">Interests</h2>
            <ul className="interest-list">
              <li><i className="fa-solid fa-gamepad"></i> Co-op Gaming</li>
              <li><i className="fa-solid fa-book-open"></i> Manga &amp; Anime</li>
              <li><i className="fa-solid fa-film"></i> Movies</li>
              <li><i className="fa-solid fa-car"></i> Long-distance Driving</li>
            </ul>
          </section>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <header className="main-header">
            <div className="header-text">
              <h1>{profileData.personal.fullName}</h1>
              <p className="professional-title">{profileData.personal.title}</p>
            </div>
            <div className="header-accent"></div>
          </header>

          <section className="experience-section">
            <h2 className="section-title"><i className="fa-solid fa-briefcase"></i> Work Experience</h2>
            <div className="timeline">
              {profileData.workExperience.map((exp, index) => (
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
            <h2 className="section-title"><i className="fa-solid fa-code"></i> Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages &amp; Frameworks</h3>
                <div className="skill-tags">
                  {profileData.skills.frontend.skills.concat(profileData.skills.backend.skills).map((skill, idx) => (
                    <span key={idx}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Databases &amp; APIs</h3>
                <div className="skill-tags">
                  {profileData.skills.database.skills.concat(["REST API", "tRPC"]).map((skill, idx) => (
                    <span key={idx}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Infrastructure &amp; DevOps</h3>
                <div className="skill-tags">
                  {profileData.skills.devops.skills.filter(s => s !== "Git").map((skill, idx) => (
                    <span key={idx}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>{profileData.skills.gitCommands.title}</h3>
                <div className="skill-tags">
                  {profileData.skills.gitCommands.commands.map((cmd, idx) => (
                    <span key={idx}>{cmd}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>{profileData.skills.aiPrompting.title}</h3>
                <div className="skill-tags">
                  {profileData.skills.aiPrompting.details.map((detail, idx) => (
                    <span key={idx}>{detail}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="bottom-grid">
            <section className="achievements">
              <h2 className="section-title"><i className="fa-solid fa-trophy"></i> Achievements</h2>
              <ul className="achievement-list">
                {profileData.achievements.map((ach, idx) => (
                  <li key={idx}>
                    <span className="ach-place">{ach.place}</span>
                    <span className="ach-name">{ach.name}</span>
                    {ach.description && <p className="ach-desc">{ach.description}</p>}
                  </li>
                ))}
              </ul>
            </section>

            <section className="honors">
              <h2 className="section-title"><i className="fa-solid fa-medal"></i> Honors &amp; Awards</h2>
              <ul className="honor-list">
                {profileData.honors.map((honor, idx) => (
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
