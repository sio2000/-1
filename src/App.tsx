import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      case 'testimonials':
        return <Testimonials onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQ onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  const needsTopPadding = currentPage !== 'home';

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className={needsTopPadding ? 'pt-20' : ''}>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
