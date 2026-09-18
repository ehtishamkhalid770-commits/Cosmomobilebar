import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WordPressSpecModal } from './components/WordPressSpecModal';
import { SelectedDrinksDrawer } from './components/SelectedDrinksDrawer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { MenuPage } from './pages/MenuPage';
import { PackagesPage } from './pages/PackagesPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { ImageProvider } from './context/ImageContext';
import { COCKTAILS } from './data/mockupData';
import { Code2, Phone } from 'lucide-react';

export function App() {
  // Determine initial page from URL pathname or hash
  const getInitialPage = (): string => {
    const pathname = window.location.pathname.toLowerCase().replace(/^\/+|\/+$/g, '');
    if (pathname === 'admin' || pathname.startsWith('admin/')) {
      return 'admin';
    }
    const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');
    if (hash === 'admin' || hash.startsWith('admin/')) {
      return 'admin';
    }
    const validPages = ['home', 'about', 'services', 'menu', 'packages', 'calculator', 'contact', 'admin'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage);
  const [wpModalOpen, setWpModalOpen] = useState(false);
  const [drinkDrawerOpen, setDrinkDrawerOpen] = useState(false);
  const [selectedCocktailIds, setSelectedCocktailIds] = useState<string[]>([
    'cosmopolitan',
    'smoked-old-fashioned',
  ]);

  // Booking state transferred across pages (from calculator, date checker, package selector)
  const [bookingDate, setBookingDate] = useState<string>('');
  const [bookingGuests, setBookingGuests] = useState<number>(75);
  const [bookingPackageId, setBookingPackageId] = useState<string>('signature-cosmo');
  const [bookingEventType, setBookingEventType] = useState<string>('Wedding & Reception');
  const [bookingEstimatedTotal, setBookingEstimatedTotal] = useState<number | undefined>(undefined);

  // Sync with browser hash and history changes
  useEffect(() => {
    const handleUrlChange = () => {
      const pathname = window.location.pathname.toLowerCase().replace(/^\/+|\/+$/g, '');
      const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');

      if (pathname === 'admin' || pathname.startsWith('admin/') || hash === 'admin' || hash.startsWith('admin/')) {
        setCurrentPage('admin');
        return;
      }

      const validPages = ['home', 'about', 'services', 'menu', 'packages', 'calculator', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (validPages.includes(pathname)) {
        setCurrentPage(pathname);
      }
    };

    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    if (page === 'admin') {
      window.history.pushState(null, '', '/admin');
    } else {
      if (window.location.pathname.toLowerCase().includes('admin')) {
        window.history.pushState(null, '', `/#/${page}`);
      } else {
        window.location.hash = `#/${page}`;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleCocktail = (cocktailId: string) => {
    setSelectedCocktailIds((prev) =>
      prev.includes(cocktailId)
        ? prev.filter((id) => id !== cocktailId)
        : [...prev, cocktailId]
    );
  };

  const handleQuickCheckDate = (date: string, guests: number) => {
    setBookingDate(date);
    setBookingGuests(guests);
    navigateTo('contact');
  };

  const handleLockInQuote = (quoteData: {
    eventType: string;
    guestCount: number;
    hours: number;
    packageId: string;
    addons: string[];
    estimatedTotal: number;
  }) => {
    setBookingEventType(quoteData.eventType);
    setBookingGuests(quoteData.guestCount);
    setBookingPackageId(quoteData.packageId);
    setBookingEstimatedTotal(quoteData.estimatedTotal);
    navigateTo('contact');
  };

  const handleSelectPackage = (packageId: string) => {
    setBookingPackageId(packageId);
    navigateTo('contact');
  };

  const handleSelectService = (serviceId: string) => {
    const serviceTypeMap: Record<string, string> = {
      'weddings': 'Wedding & Reception',
      'birthdays': 'Milestone Birthday',
      'corporate': 'Corporate Gala / Launch',
      'anniversaries': 'Anniversary Celebration',
      'graduations': 'Quinceañera / Graduation',
      'private-parties': 'Private VIP Soiree',
    };
    if (serviceTypeMap[serviceId]) {
      setBookingEventType(serviceTypeMap[serviceId]);
    }
    navigateTo('contact');
  };

  const selectedCocktailNames = COCKTAILS
    .filter((c) => selectedCocktailIds.includes(c.id))
    .map((c) => c.name);

  // If user requested /admin route, render dedicated admin panel
  if (currentPage === 'admin') {
    return (
      <ImageProvider>
        <AdminPage onNavigateToSite={() => navigateTo('home')} />
      </ImageProvider>
    );
  }

  // Render current public page component
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'services':
        return (
          <ServicesPage
            onNavigate={navigateTo}
            onSelectService={handleSelectService}
          />
        );
      case 'menu':
        return (
          <MenuPage
            onNavigate={navigateTo}
            selectedCocktailIds={selectedCocktailIds}
            onToggleCocktail={handleToggleCocktail}
            onOpenDrinkDrawer={() => setDrinkDrawerOpen(true)}
          />
        );
      case 'packages':
        return (
          <PackagesPage
            onNavigate={navigateTo}
            onSelectPackage={handleSelectPackage}
          />
        );
      case 'calculator':
        return (
          <CalculatorPage
            onNavigate={navigateTo}
            onLockInQuote={handleLockInQuote}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onNavigate={navigateTo}
            initialDate={bookingDate}
            initialGuests={bookingGuests}
            initialPackageId={bookingPackageId}
            initialEventType={bookingEventType}
            selectedCocktailNames={selectedCocktailNames}
            estimatedTotal={bookingEstimatedTotal}
          />
        );
      case 'home':
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onQuickCheckDate={handleQuickCheckDate}
          />
        );
    }
  };

  return (
    <ImageProvider>
      <div className="min-h-screen bg-[#0b0a0e] text-[#f4ecee] selection:bg-[#e69a9e] selection:text-[#0b0a0e] font-sans flex flex-col justify-between">
        
        <div>
          {/* Primary Sticky Multi-Page Navigation */}
          <Navbar
            currentPage={currentPage}
            onNavigate={navigateTo}
            onBookClick={() => navigateTo('contact')}
          />

          {/* Dynamic Page Content with Subtle Smooth Enter */}
          <main key={currentPage} className="animate-fadeIn">
            {renderCurrentPage()}
          </main>
        </div>

        {/* Luxury Multi-Page Footer */}
        <Footer
          onNavigate={navigateTo}
          onOpenWpSpecs={() => setWpModalOpen(true)}
        />

        {/* Floating Call Button for Quick Contact */}
        <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
          <a
            href="tel:2402804521"
            className="p-3 rounded-full bg-[#14121b]/90 hover:bg-[#e69a9e] text-[#e69a9e] hover:text-[#0b0a0e] border border-[#e69a9e]/30 shadow-2xl backdrop-blur-md transition-all duration-300 flex items-center justify-center hover:scale-110 group"
            title="Call Jairo Pinto"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        {/* WordPress & Elementor Migration Specs Modal */}
        <WordPressSpecModal
          isOpen={wpModalOpen}
          onClose={() => setWpModalOpen(false)}
        />

        {/* Curated Cocktails Drawer */}
        <SelectedDrinksDrawer
          isOpen={drinkDrawerOpen}
          onClose={() => setDrinkDrawerOpen(false)}
          selectedCocktailIds={selectedCocktailIds}
          onRemoveCocktail={handleToggleCocktail}
          onProceedToBooking={() => navigateTo('contact')}
        />

      </div>
    </ImageProvider>
  );
}

export default App;
