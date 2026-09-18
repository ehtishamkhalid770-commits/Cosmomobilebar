import React, { useState, useRef } from 'react';
import { useImages } from '../context/ImageContext';
import { COCKTAILS } from '../data/mockupData';
import { processAndCompressImage } from '../utils/imageCompressor';
import {
  Lock,
  Unlock,
  Upload,
  Link as LinkIcon,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  LogOut,
  Image as ImageIcon,
  Sparkles,
  Layers,
  Wine,
  Save,
  Trash2,
  Eye,
} from 'lucide-react';

interface AdminPageProps {
  onNavigateToSite: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigateToSite }) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('cosmo_admin_logged_in') === 'true';
  });

  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active section tab
  const [activeTab, setActiveTab] = useState<'brand' | 'cocktails'>('brand');

  // Image context
  const {
    images,
    updateBrandImage,
    updateCocktailImage,
    resetBrandImage,
    resetCocktailImage,
    resetAllImages,
    isCustomized,
    isCocktailCustomized,
  } = useImages();

  // Notification toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // URL inputs state
  const [urlInputs, setUrlInputs] = useState<Record<string, string>>({});

  const handleUrlChange = (id: string, value: string) => {
    setUrlInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (usernameInput.trim() === 'admin' && passwordInput === 'admin@123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('cosmo_admin_logged_in', 'true');
      setLoginError('');
      showToast('Welcome back, Admin!');
    } else {
      setLoginError('Invalid credentials. Please use username "admin" and password "admin@123".');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('cosmo_admin_logged_in');
  };

  // File upload handler
  const handleFileUpload = async (
    key: string,
    file: File,
    isCocktail = false
  ) => {
    try {
      showToast('Optimizing & uploading image...');
      const compressedDataUrl = await processAndCompressImage(file);
      if (isCocktail) {
        updateCocktailImage(key, compressedDataUrl);
      } else {
        updateBrandImage(key as any, compressedDataUrl);
      }
      showToast('Image updated successfully! Check your live website.');
    } catch (err) {
      console.error(err);
      showToast('Failed to process image. Please try another file.');
    }
  };

  // Apply URL handler
  const handleApplyUrl = (key: string, isCocktail = false) => {
    const url = urlInputs[key]?.trim();
    if (!url) return;
    if (isCocktail) {
      updateCocktailImage(key, url);
    } else {
      updateBrandImage(key as any, url);
    }
    setUrlInputs((prev) => ({ ...prev, [key]: '' }));
    showToast('Image URL applied successfully!');
  };

  // Brand items metadata
  const brandItems = [
    {
      id: 'leadMixologist',
      title: 'Hero Section: Master Mixologist',
      location: 'Main top header on the Homepage and Hero banner.',
      aspect: 'Aspect 4:5 Portrait',
      currentUrl: images.leadMixologist,
      custom: isCustomized('leadMixologist'),
    },
    {
      id: 'signatureCosmo',
      title: 'Signature Cosmopolitan Glass',
      location: 'Floating award badge on Hero and Cocktail highlights.',
      aspect: 'Aspect 1:1 Square',
      currentUrl: images.signatureCosmo,
      custom: isCustomized('signatureCosmo'),
    },
    {
      id: 'luxuryBarSetup',
      title: 'Illuminated Luxury Bar Setup',
      location: 'Experience Pillars & Bar Setup showcase gallery.',
      aspect: 'Aspect 4:3 Landscape',
      currentUrl: images.luxuryBarSetup,
      custom: isCustomized('luxuryBarSetup'),
    },
    {
      id: 'founderPortrait',
      title: 'Founder Portrait: Jairo Pinto',
      location: 'About Us page & Founder Story section on Homepage.',
      aspect: 'Aspect 4:5 Portrait',
      currentUrl: images.founderPortrait,
      custom: isCustomized('founderPortrait'),
    },
    {
      id: 'eventCelebration',
      title: 'Atmosphere: Evening Wedding & Toast',
      location: 'Atmosphere photo gallery & Celebration showcase.',
      aspect: 'Aspect 4:3 Landscape',
      currentUrl: images.eventCelebration,
      custom: isCustomized('eventCelebration'),
    },
  ];

  // -------------------------------------------------------------
  // 1. If not authenticated: Show Luxury Login Screen
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#09080c] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#131118] border border-[#e69a9e]/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Glow Background */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#e69a9e]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#e8c872]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Logo & Header */}
          <div className="text-center space-y-2 mb-8 relative z-10">
            <div className="inline-flex p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[#e69a9e] mb-2 shadow-inner">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-3xl font-bold tracking-wider text-white">
              COSMO <span className="text-[#e69a9e] text-lg font-sans">ADMIN</span>
            </h1>
            <p className="text-xs text-neutral-400">
              Media & Image Management Control Panel
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4 relative z-10">
            {loginError && (
              <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{loginError}</span>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                Admin Username
              </label>
              <input
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                placeholder="admin"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#1b1822] border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#e69a9e] text-sm transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                Admin Password
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#1b1822] border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#e69a9e] text-sm transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#e69a9e] to-[#cf787d] text-[#0b0a0e] hover:brightness-110 shadow-lg shadow-[#e69a9e]/20 transition-all cursor-pointer flex items-center justify-center gap-2 mt-4"
            >
              <Unlock className="w-4 h-4" />
              <span>Sign In to Media Dashboard</span>
            </button>
          </form>

          {/* Helpful Credentials Note for User */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center space-y-2 text-xs text-neutral-400">
            <p className="text-[11px] text-[#e8c872]">
              Configured Credentials:
            </p>
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-neutral-300 font-mono text-[11px]">
              <span>User: <strong className="text-white">admin</strong></span>
              <span>•</span>
              <span>Pass: <strong className="text-white">admin@123</strong></span>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={onNavigateToSite}
                className="text-neutral-400 hover:text-white transition-colors text-xs inline-flex items-center gap-1.5"
              >
                ← Return to Public Website
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 2. Authenticated Dashboard: Manage All Images
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#0b0a0e] text-[#f4ecee]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 px-5 py-3 rounded-xl bg-[#1d1a27] border border-[#e69a9e] text-white shadow-2xl flex items-center gap-2.5 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-[#e69a9e]" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#121017]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#e69a9e]/10 border border-[#e69a9e]/30 text-[#e69a9e]">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold tracking-wider text-white flex items-center gap-2">
              COSMO <span className="text-xs font-sans text-[#e69a9e] px-2 py-0.5 rounded-full bg-[#e69a9e]/15 border border-[#e69a9e]/30">Media Admin</span>
            </h1>
            <p className="text-[11px] text-neutral-400">
              Live Image & Media Customization Dashboard
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateToSite}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors flex items-center gap-2"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#e69a9e]" />
            <span>Open Public Website</span>
          </button>

          <button
            onClick={() => {
              if (window.confirm('Reset all custom images back to original defaults?')) {
                resetAllImages();
                showToast('All images reset to default.');
              }
            }}
            className="px-3 py-2 rounded-xl text-xs text-neutral-400 hover:text-red-300 hover:bg-red-950/40 border border-transparent hover:border-red-500/30 transition-colors flex items-center gap-1.5"
            title="Reset All to Defaults"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset Defaults</span>
          </button>

          <button
            onClick={handleLogout}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Intro Alert Box */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-[#17141f] to-[#121016] border border-[#e69a9e]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-serif text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#e8c872]" />
              Direct Image Uploader & Live Sync
            </h2>
            <p className="text-xs text-neutral-300 max-w-2xl font-light">
              Upload any image from your computer/phone or paste a direct image URL. It instantly updates across your live website and stays saved in your browser!
            </p>
          </div>
          <button
            onClick={onNavigateToSite}
            className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#e69a9e] text-[#0b0a0e] hover:brightness-110 shadow-md transition-all shrink-0 flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            <span>View Live Site</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 gap-6">
          <button
            onClick={() => setActiveTab('brand')}
            className={`pb-3 text-xs uppercase tracking-widest font-bold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'brand'
                ? 'border-[#e69a9e] text-[#e69a9e]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Brand & Atmosphere ({brandItems.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('cocktails')}
            className={`pb-3 text-xs uppercase tracking-widest font-bold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'cocktails'
                ? 'border-[#e69a9e] text-[#e69a9e]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Wine className="w-4 h-4" />
            <span>Cocktails Menu ({COCKTAILS.length})</span>
          </button>
        </div>

        {/* ---------------- Tab 1: Brand & Atmosphere Images ---------------- */}
        {activeTab === 'brand' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-[#14121a] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between"
              >
                <div className="p-5 space-y-4">
                  {/* Top Item Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-white/5 text-[#e8c872] border border-white/5">
                      {item.aspect}
                    </span>
                    {item.custom ? (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#e69a9e]/20 text-[#e69a9e] border border-[#e69a9e]/40 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Custom Active
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/5">
                        Original Asset
                      </span>
                    )}
                  </div>

                  {/* Title & Location */}
                  <div>
                    <h3 className="font-serif text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {item.location}
                    </p>
                  </div>

                  {/* Live Preview Box */}
                  <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0b0a0e] aspect-[16/9] group">
                    <img
                      src={item.currentUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                      <span className="text-[11px] text-white/90 font-mono truncate max-w-full">
                        {item.currentUrl.startsWith('data:') ? 'Custom Upload (Local Base64)' : item.currentUrl}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Upload & Actions Bar */}
                <div className="p-5 pt-0 space-y-3">
                  {/* File Upload Button */}
                  <label className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-[#e69a9e] text-white hover:text-[#0b0a0e] border border-white/10 hover:border-[#e69a9e] transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload New Image File</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(item.id, file);
                      }}
                    />
                  </label>

                  {/* Direct URL Input */}
                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="Or paste direct image URL (https://...)"
                      value={urlInputs[item.id] || ''}
                      onChange={(e) => handleUrlChange(item.id, e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl bg-[#0b0a0e] border border-white/10 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#e69a9e]"
                    />
                    <button
                      onClick={() => handleApplyUrl(item.id)}
                      disabled={!urlInputs[item.id]?.trim()}
                      className="px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white border border-white/10 transition-colors"
                    >
                      Apply
                    </button>
                  </div>

                  {/* Reset Button */}
                  {item.custom && (
                    <div className="flex justify-end pt-1">
                      <button
                        onClick={() => {
                          resetBrandImage(item.id as any);
                          showToast(`Reset ${item.title} to default.`);
                        }}
                        className="text-[11px] text-neutral-400 hover:text-red-400 flex items-center gap-1 transition-colors"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset to original asset</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ---------------- Tab 2: Cocktails Menu Images ---------------- */}
        {activeTab === 'cocktails' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COCKTAILS.map((drink) => {
              const currentUrl = images.cocktails[drink.id] || drink.image;
              const isCustom = isCocktailCustomized(drink.id);

              return (
                <div
                  key={drink.id}
                  className="rounded-2xl bg-[#14121a] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between"
                >
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-[#e8c872]">
                        {drink.spirit}
                      </span>
                      {isCustom ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#e69a9e]/20 text-[#e69a9e] border border-[#e69a9e]/40">
                          Custom Image
                        </span>
                      ) : (
                        <span className="text-[10px] text-neutral-500">
                          Default Preset
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-base font-bold text-white">
                      {drink.name}
                    </h3>

                    {/* Drink Image Preview */}
                    <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video bg-[#0b0a0e]">
                      <img
                        src={currentUrl}
                        alt={drink.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Upload Controls */}
                  <div className="p-4 pt-0 space-y-2">
                    <label className="w-full py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-[#e69a9e] text-white hover:text-[#0b0a0e] border border-white/10 hover:border-[#e69a9e] transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Cocktail Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(drink.id, file, true);
                        }}
                      />
                    </label>

                    <div className="flex gap-2">
                      <input
                        type="url"
                        placeholder="Or paste image URL"
                        value={urlInputs[drink.id] || ''}
                        onChange={(e) => handleUrlChange(drink.id, e.target.value)}
                        className="flex-1 px-3 py-1.5 rounded-xl bg-[#0b0a0e] border border-white/10 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#e69a9e]"
                      />
                      <button
                        onClick={() => handleApplyUrl(drink.id, true)}
                        disabled={!urlInputs[drink.id]?.trim()}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white border border-white/10 transition-colors"
                      >
                        Save
                      </button>
                    </div>

                    {isCustom && (
                      <div className="flex justify-end pt-1">
                        <button
                          onClick={() => {
                            resetCocktailImage(drink.id);
                            showToast(`Reset ${drink.name} photo.`);
                          }}
                          className="text-[11px] text-neutral-400 hover:text-red-400 flex items-center gap-1 transition-colors"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Reset photo</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};
export default AdminPage;
