import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
import { SEOContentPage } from './pages/SEOContentPage';
import { SEO_PAGES_DATA } from './data/seoPagesData';

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
  const [selectedService, setSelectedService] = useState('Digital Growth Package - All-in-One Launch (₹35,000)');

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

            {/* 39 Dedicated High-Intent Local & Core SEO Pages */}
            {SEO_PAGES_DATA.map((page) => (
              <Route
                key={page.slug}
                path={`/${page.slug}`}
                element={<SEOContentPage page={page} onOpenContactWithPackage={handleOpenContactWithPackage} />}
              />
            ))}

            
            {/* Legacy & Synonym Redirect Aliases (301-Equivalent Client Navigation) */}
            <Route path="/website-developer-bulandshahr" element={<Navigate to="/website-development-bulandshahr" replace />} />
            <Route path="/seo-agency-bulandshahr" element={<Navigate to="/seo-services-bulandshahr" replace />} />
            <Route path="/digital-marketing-agency-khurja" element={<Navigate to="/marketing-agency-khurja" replace />} />
            <Route path="/digital-marketing-agency-sikandrabad" element={<Navigate to="/marketing-agency-sikandrabad" replace />} />
            <Route path="/digital-marketing-agency-anupshahr" element={<Navigate to="/marketing-agency-anupshahr" replace />} />
            <Route path="/digital-marketing-agency-jahangirabad" element={<Navigate to="/marketing-agency-jahangirabad" replace />} />
            <Route path="/website-cost-in-bulandshahr" element={<Navigate to="/website-design-cost-bulandshahr" replace />} />
            <Route path="/digital-marketing-cost-in-bulandshahr" element={<Navigate to="/digital-marketing-agency-bulandshahr" replace />} />
            <Route path="/how-to-choose-marketing-agency-bulandshahr" element={<Navigate to="/best-marketing-agency-bulandshahr" replace />} />
            <Route path="/school-college-website-development-bulandshahr" element={<Navigate to="/digital-marketing-for-schools-bulandshahr" replace />} />
            <Route path="/hospital-clinic-marketing-bulandshahr" element={<Navigate to="/digital-marketing-for-hospitals-bulandshahr" replace />} />
            <Route path="/restaurant-cafe-marketing-bulandshahr" element={<Navigate to="/digital-marketing-for-restaurants-bulandshahr" replace />} />
            <Route path="/hotel-resort-website-marketing-bulandshahr" element={<Navigate to="/website-for-hotels-bulandshahr" replace />} />
            <Route path="/coaching-institute-marketing-bulandshahr" element={<Navigate to="/website-design-for-coaching-centres-bulandshahr" replace />} />
            <Route path="/gym-fitness-marketing-bulandshahr" element={<Navigate to="/digital-marketing-for-local-shops-bulandshahr" replace />} />
            <Route path="/car-dealer-automobile-marketing-bulandshahr" element={<Navigate to="/digital-marketing-agency-transport-nagar-bulandshahr" replace />} />
            <Route path="/interior-designer-architect-website-bulandshahr" element={<Navigate to="/website-for-property-dealers-bulandshahr" replace />} />
            <Route path="/b2b-industrial-manufacturer-marketing-bulandshahr" element={<Navigate to="/digital-marketing-for-manufacturers-bulandshahr" replace />} />
            <Route path="/digital-marketing-services-noida-bulandshahr" element={<Navigate to="/locations/noida" replace />} />
            <Route path="/wordpress-developer-bulandshahr" element={<Navigate to="/business-website-design-bulandshahr" replace />} />
            <Route path="/custom-web-development-bulandshahr" element={<Navigate to="/website-development-bulandshahr" replace />} />
            <Route path="/website-redesign-services-bulandshahr" element={<Navigate to="/website-redesign-bulandshahr" replace />} />
            <Route path="/website-maintenance-services-bulandshahr" element={<Navigate to="/website-maintenance-bulandshahr" replace />} />
            <Route path="/google-my-business-optimization-bulandshahr" element={<Navigate to="/local-seo-services-bulandshahr" replace />} />
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
