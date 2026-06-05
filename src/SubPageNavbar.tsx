import './portfolio.css';

interface SubPageNavbarProps {
  lang: 'en' | 'th';
  setLang: (lang: 'en' | 'th') => void;
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
  backLabel: string;
  backHref?: string;
}

export default function SubPageNavbar({
  lang,
  setLang,
  theme,
  setTheme,
  backLabel,
  backHref = '#/',
}: SubPageNavbarProps) {
  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = backHref;
  };

  return (
    <nav className="navbar navbar-sub">
      <div className="nav-container">
        <a href={backHref} onClick={handleBack} className="nav-back-link">
          <i className="fa-solid fa-arrow-left"></i>
          <span>{backLabel}</span>
        </a>
        <ul className="nav-links nav-links-sub">
          <li>
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
              className="theme-toggle"
              style={{ fontSize: '0.82rem', fontWeight: 700 }}
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'TH' : 'EN'}
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
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
  );
}
