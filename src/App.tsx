import { useState, useEffect } from 'react';
import Portfolio from './Portfolio';
import Resume from './Resume';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentHash]);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Normalize current page name
  const page = currentHash.replace(/^#\/?/, '').split('?')[0] || 'portfolio';

  if (page === 'resume') {
    return <Resume />;
  }

  return <Portfolio theme={theme} setTheme={setTheme} />;
}

export default App;
