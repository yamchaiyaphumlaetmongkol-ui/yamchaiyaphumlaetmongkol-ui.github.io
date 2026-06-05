import React, { useEffect, useRef, useState } from 'react';
import { workflowDetails } from './aiWorkflowData';
import { profileData } from './profileData';
import './portfolio.css';

const activityData = [
  { src: "activity/PC030511.JPG", titleEn: "Award from Hackathon & Workshop", titleTh: "รับรางวัลชมเชยจากการแข่งขัน Hackathon & Workshop" },
  { src: "activity/IMG_1863.JPG", titleEn: "Team Collaboration", titleTh: "การทำงานร่วมกับทีม" },
  { src: "activity/JPEG image.jpeg", titleEn: "Team & Advisor", titleTh: "ทีมและอาจารย์ที่ปรึกษา" },
  { src: "activity/received_1701813651191352.jpeg", titleEn: "Team & Advisor", titleTh: "ทีมและอาจารย์ที่ปรึกษา" },
  { src: "activity/received_1323488609830592.jpeg", titleEn: "Team Collaboration", titleTh: "การทำงานร่วมกับทีม" },

];

const RESUME_PDF = "/cv/Resume_SE_Laetmongkol.pdf";

const NAV_SECTION_IDS = ['about', 'experience', 'projects', 'skills', 'activities', 'certificates'] as const;

const certificateData = [
  { src: "certificate/3-Dec-2024 UP Shield เลิศมงคล ยามชัยภูมิ.png", titleEn: "Award from UP Shield 2024", titleTh: "รางวัลชมเชยจากการแข่งขัน UP Shield 2024" },
  { src: "certificate/3-Dec-2024-1.png", titleEn: "Certificate PSRU Cyber Hackathon #2", titleTh: "เกียรติบัตรการแข่งขัน PSRU Cyber Hackathon #2" },
  { src: "certificate/Screenshot 2026-05-28 003819.png", titleEn: "Certificate PSRU Cyber Hackathon #3", titleTh: "เกียรติบัตรการแข่งขัน PSRU Cyber Hackathon #3" },
  { src: "certificate/ใบ Certificate สหกิจศึกษา Mr. Laetmongkol Yamchaiyaphum-1.png", titleEn: "Certificate Cooperative Education", titleTh: "เกียรติบัตรการสหกิจศึกษา" },
  { src: "certificate/Fullstack Developer Program.png", titleEn: "Certificate Fullstack Developer Program", titleTh: "เกียรติบัตรการอบรม Fullstack Developer Program" },
  { src: "certificate/3-Feb-2025-CERTIFICATE mooc-1.png", titleEn: "Certificate MOOC", titleTh: "เกียรติบัตรหลักสูตร MOOC" },
  { src: "certificate/10-Dec-2024Enterprise Networking-1.png", titleEn: "Certificate Enterprise Networking 2024", titleTh: "เกียรติบัตรการอบรม Enterprise Networking 2024" },
  { src: "certificate/18-Aug-2024-Cybersecurity_Essentials_certificate_65020564-up-ac-th_a172b655-9677-4ae6-bad6-425276cf3-1.png", titleEn: "Certificate Cybersecurity Essentials 2024", titleTh: "Certificate Cybersecurity Essentials 2024" },
  { src: "certificate/19-Aug-2023-Cybersecurity_Essentials_certificate_65020564-up-ac-th_e5d8ceec-60e8-4696-920e-2e5f491df-1.png", titleEn: "Certificate Cybersecurity Essentials 2023", titleTh: "Certificate Cybersecurity Essentials 2023" },
  { src: "certificate/17-18-Aug-2024-CERTIFICATE-1.png", titleEn: "Certificate Forensic Techniques for Email and Cybersecurity", titleTh: "Certificate Forensic Techniques for Email and Cybersecurity" },
  { src: "certificate/IMG_20250726_215928.jpg", titleEn: "Certificate of Excellence for Outstanding Student, Academic Year 2022.", titleTh: "เกียรติบัตรรางวัลนิสิตดีเด่น ประจำปีการศึกษา 2565" },
  { src: "certificate/IMG_20250910_170621_1.jpg", titleEn: "Certificate of Honor for Distinguished Students", titleTh: "เกียรติบัตรนิสิตเกียรติยศ" },
  { src: "certificate/เตรียมความพร้อมนิสิตสหกิจศึกษาและการศึกษาเชิงบูรณาการกับการทำงา-1.png", titleEn: "Certificate of Cooperative Education Preparation", titleTh: "เกียรติบัตรเตรียมความพร้อมสหกิจศึกษา" }
];

interface PortfolioProps {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
  lang: 'en' | 'th';
  setLang: (lang: 'en' | 'th') => void;
}

export default function Portfolio({ theme, setTheme, lang, setLang }: PortfolioProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLine, setCopiedLine] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('about');

  const data = profileData[lang];
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScrollRef = useRef(false);
  const programmaticScrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  useEffect(() => {
    if (!isNavOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsNavOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth > 968) setIsNavOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    const firstFocusable = mobileNavRef.current?.querySelector<HTMLElement>(
      'a, button'
    );
    firstFocusable?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isNavOpen]);

  useEffect(() => {
    let rafId = 0;

    const getNavHeight = () =>
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
        10
      ) || 80;

    const resolveActiveSection = () => {
      if (isProgrammaticScrollRef.current) return;

      const navHeight = getNavHeight();
      const focusLine = navHeight + (window.innerHeight - navHeight) * 0.32;

      let bestId: string = NAV_SECTION_IDS[0];
      let bestDistance = Infinity;

      for (const id of NAV_SECTION_IDS) {
        const section = document.getElementById(id);
        if (!section) continue;

        const target =
          id === 'about'
            ? section
            : (section.querySelector('.section-heading') as HTMLElement | null) ?? section;

        const rect = target.getBoundingClientRect();
        if (rect.bottom < navHeight || rect.top > window.innerHeight) continue;

        const midpoint = rect.top + rect.height / 2;
        const distance = Math.abs(midpoint - focusLine);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = id;
        }
      }

      setActiveSection((prev) => (prev === bestId ? prev : bestId));
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(resolveActiveSection);
    };

    resolveActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (programmaticScrollTimerRef.current) {
        clearTimeout(programmaticScrollTimerRef.current);
      }
    };
  }, []);

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


  const scrollToSectionById = (id: string) => {
    setIsNavOpen(false);
    setActiveSection(id);
    const section = document.getElementById(id);
    if (!section) return;

    const target =
      id === 'about'
        ? section
        : (section.querySelector('.section-heading') as HTMLElement | null) ?? section;

    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
      10
    ) || 80;
    const gap = 12;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - gap;

    isProgrammaticScrollRef.current = true;
    if (programmaticScrollTimerRef.current) {
      clearTimeout(programmaticScrollTimerRef.current);
    }

    window.scrollTo({ top, behavior: 'smooth' });

    const releaseScrollSpy = () => {
      isProgrammaticScrollRef.current = false;
    };

    if ('onscrollend' in window) {
      window.addEventListener('scrollend', releaseScrollSpy, { once: true });
    } else {
      programmaticScrollTimerRef.current = setTimeout(releaseScrollSpy, 700);
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSectionById(id);
  };

  useEffect(() => {
    const page = (window.location.hash || '#/').replace(/^#\/?/, '').split('?')[0];
    if (!NAV_SECTION_IDS.includes(page as (typeof NAV_SECTION_IDS)[number])) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToSectionById(page));
    });
  }, []);

  const navItems = [
    { id: 'about', labelEn: 'About', labelTh: 'เกี่ยวกับ' },
    { id: 'experience', labelEn: 'Experience', labelTh: 'ประสบการณ์' },
    { id: 'projects', labelEn: 'Projects', labelTh: 'ผลงาน' },
    { id: 'skills', labelEn: 'Skills', labelTh: 'ทักษะ' },
    { id: 'activities', labelEn: 'Activities', labelTh: 'กิจกรรม' },
    { id: 'certificates', labelEn: 'Certificates', labelTh: 'เกียรติบัตร' },
  ];

  const renderNavLinks = (variant: 'desktop' | 'mobile') => (
    <ul className={variant === 'desktop' ? 'nav-links' : 'mobile-nav-links'}>
      {navItems.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={(e) => scrollToSection(e, item.id)}
            className={activeSection === item.id ? 'active' : undefined}
            aria-current={activeSection === item.id ? 'true' : undefined}
          >
            {lang === 'en' ? item.labelEn : item.labelTh}
          </a>
        </li>
      ))}
      <li>
        <a
          href={RESUME_PDF}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
          onClick={() => variant === 'mobile' && setIsNavOpen(false)}
        >
          {lang === 'en' ? 'View CV' : 'ดู CV'}
        </a>
      </li>
      <li>
        <button
          onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
          className="theme-toggle"
          style={variant === 'desktop' ? { marginLeft: '6px', fontSize: '0.82rem', fontWeight: 700 } : undefined}
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
  );

  return (
    <div className="portfolio-page-wrapper">
      {/* Navbar */}
      <nav className={`navbar${isNavOpen ? ' nav-open' : ''}`}>
        <div className="nav-container">
          <a href="#/" className="logo">{data.personal.nickname}<span>.</span></a>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setIsNavOpen(prev => !prev)}
            aria-label={isNavOpen ? (lang === 'en' ? 'Close menu' : 'ปิดเมนู') : (lang === 'en' ? 'Open menu' : 'เปิดเมนู')}
            aria-expanded={isNavOpen}
            aria-controls="mobile-nav-panel"
          >
            <i className={`fa-solid ${isNavOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
          {renderNavLinks('desktop')}
        </div>
      </nav>

      {isNavOpen && (
        <div className="mobile-nav-overlay" role="dialog" aria-modal="true" aria-label={lang === 'en' ? 'Navigation menu' : 'เมนูนำทาง'}>
          <button
            type="button"
            className="mobile-nav-backdrop"
            onClick={() => setIsNavOpen(false)}
            aria-label={lang === 'en' ? 'Close menu' : 'ปิดเมนู'}
          />
          <div id="mobile-nav-panel" className="mobile-nav-panel" ref={mobileNavRef}>
            {renderNavLinks('mobile')}
          </div>
        </div>
      )}

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
            <a href={RESUME_PDF} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <i className="fa-solid fa-file-pdf"></i> {lang === 'en' ? 'View CV' : 'ดู CV'}
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
      <section id="skills" className="section alt-bg">
        <div className="container">
          <h2 className="section-heading">{lang === 'en' ? 'Skills' : 'ทักษะ'}<span>.</span></h2>
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
            <div
              className="skill-group skill-group--ai"
              role="link"
              tabIndex={0}
              onClick={() => { window.location.hash = '#/ai-workflows'; }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.location.hash = '#/ai-workflows';
                }
              }}
            >
              <h3>
                <i className="fa-solid fa-brain"></i>
                {data.skills.aiPrompting.title}
                <span className="skill-group-link">
                  ({lang === 'en' ? 'View Details →' : 'ดูรายละเอียด →'})
                </span>
              </h3>
              <p>{workflowDetails[lang].portfolioSummary}</p>
              <div className="ai-skill-highlights">
                {workflowDetails[lang].portfolioHighlights.map((item) => (
                  <span key={item} className="ai-skill-highlight">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="section">
        <div className="container">
          <h2 className="section-heading">{lang === 'en' ? 'Activities' : 'กิจกรรม'}<span>.</span></h2>
          <div className="gallery-grid">
            {activityData.map((item, idx) => (
              <div
                key={idx}
                className="gallery-item"
                onClick={() => setSelectedImage(item.src)}
              >
                <div className="gallery-img-wrapper">
                  <img src={item.src} alt={lang === 'en' ? item.titleEn : item.titleTh} className="gallery-img" loading="lazy" />
                </div>
                <div className="gallery-caption">
                  <p>{lang === 'en' ? item.titleEn : item.titleTh}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section alt-bg">
        <div className="container">
          <h2 className="section-heading">{lang === 'en' ? 'Certificates' : 'เกียรติบัตร'}<span>.</span></h2>
          <div className="gallery-grid">
            {certificateData.map((item, idx) => (
              <div
                key={idx}
                className="gallery-item"
                onClick={() => setSelectedImage(item.src)}
              >
                <div className="gallery-img-wrapper">
                  <img src={item.src} alt={lang === 'en' ? item.titleEn : item.titleTh} className="gallery-img" loading="lazy" />
                </div>
                <div className="gallery-caption">
                  <p>{lang === 'en' ? item.titleEn : item.titleTh}</p>
                </div>
              </div>
            ))}
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

      {/* Image Modal for Gallery */}
      {selectedImage && (
        <div className="modal" style={{ display: 'flex' }} onClick={() => setSelectedImage(null)}>
          <span className="close-modal image-close-btn" onClick={() => setSelectedImage(null)}>&times;</span>
          <div className="modal-content image-modal-content">
            <img src={selectedImage} alt="Expanded view" onClick={(e) => e.stopPropagation()} />
          </div>
        </div>
      )}
    </div>
  );
}
