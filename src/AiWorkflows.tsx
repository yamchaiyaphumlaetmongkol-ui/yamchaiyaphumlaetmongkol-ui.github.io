import { useState } from 'react';
import SubPageNavbar from './SubPageNavbar';
import { workflowDetails } from './aiWorkflowData';
import './style.css';

interface AiWorkflowsProps {
  lang: 'en' | 'th';
  setLang: (lang: 'en' | 'th') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export default function AiWorkflows({ lang, setLang, theme, setTheme }: AiWorkflowsProps) {
  const [activeTab, setActiveTab] = useState<'sa' | 'dev'>('dev');
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIdx(index);
      setTimeout(() => setCopiedIdx(null), 2000);
    });
  };

  const currentDetails = workflowDetails[lang];
  const activeCards = activeTab === 'sa' ? currentDetails.saCards : currentDetails.devCards;
  const benefitLabel = lang === 'en' ? 'Core benefit' : 'ประโยชน์หลัก';
  const promptLabel = lang === 'en' ? 'Prompt template' : 'เทมเพลต Prompt';

  return (
    <div className="sub-page-wrapper">
      <SubPageNavbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        backLabel={currentDetails.backBtn}
        backHref="#/skills"
      />

      <div className="sub-page-content">
        <header className="workflow-hero">
          <div className="workflow-hero-icon" aria-hidden="true">
            <i className="fa-solid fa-microchip"></i>
          </div>
          <h1 className="workflow-hero-title">{currentDetails.title}</h1>
          <p className="workflow-hero-subtitle">{currentDetails.subtitle}</p>
          <p className="workflow-hero-intro">{currentDetails.intro}</p>
        </header>

        <section className="workflow-how-to" aria-label={lang === 'en' ? 'How to use' : 'วิธีใช้งาน'}>
          <h2 className="workflow-how-to-title">
            {lang === 'en' ? 'How I use these in real projects' : 'วิธีที่ผมใช้จริงในโปรเจกต์'}
          </h2>
          <ol className="workflow-how-to-list">
            {currentDetails.howToUse.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>

        <div className="workflow-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'dev'}
            className={`workflow-tab ${activeTab === 'dev' ? 'workflow-tab--active' : ''}`}
            onClick={() => { setActiveTab('dev'); setCopiedIdx(null); }}
          >
            <i className="fa-solid fa-code workflow-tab-icon" aria-hidden="true"></i>
            <div>
              <div className="workflow-tab-title">{currentDetails.devTabTitle}</div>
              <div className="workflow-tab-sub">{currentDetails.devTabSub}</div>
            </div>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'sa'}
            className={`workflow-tab ${activeTab === 'sa' ? 'workflow-tab--active' : ''}`}
            onClick={() => { setActiveTab('sa'); setCopiedIdx(null); }}
          >
            <i className="fa-solid fa-layer-group workflow-tab-icon" aria-hidden="true"></i>
            <div>
              <div className="workflow-tab-title">{currentDetails.saTabTitle}</div>
              <div className="workflow-tab-sub">{currentDetails.saTabSub}</div>
            </div>
          </button>
        </div>

        <div className="workflow-grid">
          {activeCards.map((card, idx) => (
            <article
              key={`${activeTab}-${idx}`}
              className={`workflow-card ${theme === 'dark' ? 'workflow-card--dark' : 'workflow-card--light'}`}
            >
              <div className="workflow-card-icon" aria-hidden="true">
                <i className={card.icon}></i>
              </div>

              <div className="workflow-card-body">
                <h2 className="workflow-card-title">{card.title}</h2>
                <p className="workflow-card-summary">{card.summary}</p>

                <div className="workflow-card-meta">
                  <div className="workflow-meta-item">
                    <span className="workflow-meta-label">{currentDetails.whenToUseLabel}</span>
                    <span>{card.whenToUse}</span>
                  </div>
                  <div className="workflow-meta-item workflow-meta-item--example">
                    <span className="workflow-meta-label">{currentDetails.portfolioExampleLabel}</span>
                    <span>{card.portfolioExample}</span>
                  </div>
                </div>

                <p className="workflow-card-benefit">
                  <strong>{benefitLabel}:</strong> {card.benefit}
                </p>

                <div className={`workflow-prompt-block ${theme === 'dark' ? 'workflow-prompt-block--dark' : 'workflow-prompt-block--light'}`}>
                  <div className="workflow-prompt-header">
                    <span className="workflow-prompt-rule">{card.rule}</span>
                    <button
                      type="button"
                      className={`workflow-copy-btn ${copiedIdx === idx ? 'workflow-copy-btn--copied' : ''}`}
                      onClick={() => handleCopy(card.prompt, idx)}
                      title={lang === 'en' ? 'Copy prompt' : 'คัดลอก Prompt'}
                      aria-label={lang === 'en' ? 'Copy prompt to clipboard' : 'คัดลอก Prompt ไปยังคลิปบอร์ด'}
                    >
                      {copiedIdx === idx ? (
                        <i className="fa-solid fa-check" aria-hidden="true"></i>
                      ) : (
                        <i className="fa-regular fa-copy" aria-hidden="true"></i>
                      )}
                    </button>
                  </div>
                  <div className="workflow-prompt-label">&gt; {promptLabel}:</div>
                  <pre className="workflow-prompt-text">{card.prompt}</pre>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
