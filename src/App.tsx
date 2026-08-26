import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SystemBoot } from './components/SystemBoot';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { ScrollToTop } from './components/ScrollToTop';
import { ErrorBoundary } from './components/ErrorBoundary';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { CustomerSupportPage } from './pages/CustomerSupportPage';
import { PricingPage } from './pages/PricingPage';
import { LocationsPage } from './pages/LocationsPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Modals & Cyber Layers
import { ContactModal } from './components/ContactModal';
import { SystemHandshakeModal } from './components/SystemHandshakeModal';
import { DigitalModeOverlay } from './components/DigitalModeOverlay';
import { ThreeBackground3D } from './components/ThreeBackground3D';
import { CyberMatrixStream } from './components/CyberMatrixStream';
import { MatrixRainCanvas } from './components/MatrixRainCanvas';
import { CyberTerminalWidget } from './components/CyberTerminalWidget';

function AppContent() {
  const [isBooted, setIsBooted] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isHandshakeOpen, setIsHandshakeOpen] = useState(false);
  const [isDigitalModeActive, setIsDigitalModeActive] = useState(false);
  const [selectedService, setSelectedService] = useState('Digital Growth Package — All-in-One Launch (₹35,000)');

  // Handler to open contact modal with pre-selected package
  const handleOpenContactWithPackage = (pkgName?: string) => {
    if (pkgName) {
      setSelectedService(pkgName);
    }
    setIsContactOpen(true);
  };

  // Easter egg: Press ` (backtick) or ~ to trigger system diagnostic handshake
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        setIsHandshakeOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden font-mono"
      style={{ fontFamily: '"Space Mono", monospace' }}
    >
      {/* Smooth Scroll Restoration */}
      <ScrollToTop />

      {/* 1. Preloader / System Boot on First Visit */}
      {!isBooted && <SystemBoot onComplete={() => setIsBooted(true)} />}

      {/* Global Cyber Background Systems */}
      <MatrixRainCanvas opacity={0.05} speed={42} />
      <CyberMatrixStream opacity={0.05} />
      <ThreeBackground3D particleCount={400} showRings={true} />

      {/* 2. Global Navigation */}
      <Navbar
        onOpenContact={() => handleOpenContactWithPackage()}
        onOpenHandshake={() => setIsDigitalModeActive(true)}
      />

      {/* 3. Main Route Views */}
      <main className="relative z-10 w-full flex flex-col">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage onOpenContactWithPackage={handleOpenContactWithPackage} />} />
            <Route path="/services" element={<ServicesPage onOpenContactWithPackage={handleOpenContactWithPackage} />} />
            <Route path="/services/:slug" element={<ServiceDetailPage onOpenContactWithPackage={handleOpenContactWithPackage} />} />
            <Route path="/customer-support" element={<CustomerSupportPage onOpenContactWithPackage={handleOpenContactWithPackage} />} />
            <Route path="/pricing" element={<PricingPage onOpenContactWithPackage={handleOpenContactWithPackage} />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locations/:slug" element={<LocationDetailPage onOpenContactWithPackage={handleOpenContactWithPackage} />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/case-studies" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage onOpenContactWithPackage={handleOpenContactWithPackage} />} />
            <Route path="/about" element={<AboutPage onOpenContactWithPackage={handleOpenContactWithPackage} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </main>

      {/* 4. Global Multi-Column Footer */}
      <Footer onOpenContact={() => handleOpenContactWithPackage()} />

      {/* 5. Sticky Mobile Action Ribbon */}
      <StickyMobileBar onOpenContact={() => handleOpenContactWithPackage()} />

      {/* 6. Interactive Floating Cyber Terminal Widget */}
      <CyberTerminalWidget
        onOpenContact={() => handleOpenContactWithPackage()}
        onTriggerOverdrive={() => setIsDigitalModeActive(true)}
      />

      {/* 7. Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={selectedService}
      />

      {/* 8. Easter Egg Handshake Modal */}
      <SystemHandshakeModal
        isOpen={isHandshakeOpen}
        onClose={() => setIsHandshakeOpen(false)}
      />

      {/* 9. Digital Mode Overdrive */}
      <DigitalModeOverlay
        isActive={isDigitalModeActive}
        onDeactivate={() => setIsDigitalModeActive(false)}
      />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
