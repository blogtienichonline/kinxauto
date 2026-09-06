import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Download,
  Menu,
  X,
  MessageCircle,
  Sparkles,
  Layers,
  DollarSign,
  HelpCircle,
  Calculator,
  Scale,
  Star,
  Users,
  Facebook,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { APP_IMAGES } from '../data/images';
import { APP_LINKS } from '../data/kinxData';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  onOpenCustomizer?: () => void;
  onOpenLeadModal?: () => void;
  onScrollToPricing?: () => void;
  onScrollToDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScrollToDownload,
}) => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.1 }
    });
  };

  const navLinks = [
    { name: t('nav.workflow', 'Quy Trình'), href: '#interactive-flow', icon: Sparkles },
    { name: t('nav.features', '12 Tính Năng'), href: '#features-deepdive', icon: Layers },
    { name: t('nav.roi', 'Tính Tiết Kiệm'), href: '#roi-calculator', icon: Calculator },
    { name: t('nav.comparison', 'So Sánh'), href: '#comparison', icon: Scale },
    { name: t('nav.pricing', 'Bảng Giá'), href: '#pricing', icon: DollarSign },
    { name: t('nav.reviews', 'Đánh Giá'), href: '#testimonials', icon: Star },
    { name: t('nav.download', 'Tải Về'), href: '#download-hub', icon: Download },
    { name: t('nav.faq', 'FAQ'), href: '#faq', icon: HelpCircle },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F19]/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-purple-950/20 py-2 sm:py-2.5 lg:py-3'
          : 'bg-[#0B0F19]/85 backdrop-blur-md py-2.5 sm:py-3 lg:py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex items-center justify-between flex-nowrap gap-2 sm:gap-3 xl:gap-4">
        {/* Logo & Brand */}
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 group shrink-0">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 xl:w-10 xl:h-10 rounded-xl overflow-hidden bg-slate-900 border border-purple-500/40 p-0.5 shadow-md shadow-purple-600/25 group-hover:scale-105 transition-transform duration-300">
            <img
              src={APP_IMAGES.logo}
              alt="Kinx Auto Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-[8px] sm:rounded-[9px]"
            />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-400 rounded-full border-2 border-[#0B0F19] animate-pulse" />
          </div>
          <div className="shrink-0">
            <div className="flex items-center gap-1 sm:gap-1.5 xl:gap-2">
              <span className="font-display font-extrabold text-base sm:text-lg lg:text-xl 2xl:text-2xl bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent tracking-tight whitespace-nowrap">
                Kinx Auto
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 whitespace-nowrap">
                {t('nav.versionBadge', 'v4.6.1')}
              </span>
            </div>
            <p className="text-[10px] xl:text-[11px] text-slate-400 font-medium hidden 2xl:block whitespace-nowrap">
              {t('nav.tagline', 'Tự Động Hóa Video AI Hàng Loạt')}
            </p>
          </div>
        </a>

        {/* Desktop Navigation (>= 1280px screen) */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-2 flex-nowrap shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm 2xl:text-[15px] font-semibold text-slate-200 hover:text-white px-2.5 2xl:px-3.5 py-1.5 rounded-lg hover:bg-slate-800/80 transition-colors whitespace-nowrap shrink-0 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Group (>= 1280px screen) */}
        <div className="hidden xl:flex items-center gap-2 2xl:gap-3 shrink-0 flex-nowrap">
          {/* Language Selector Dropdown */}
          <LanguageSelector variant="navbar" />

          {/* Quick Contact */}
          <a
            href={APP_LINKS.zaloSupport}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold px-2.5 2xl:px-3 py-2 rounded-xl bg-blue-950/50 hover:bg-blue-900/60 text-cyan-300 border border-blue-500/40 transition-all hover:scale-105 shadow-sm whitespace-nowrap shrink-0"
            title="Chat hỗ trợ kỹ thuật 24/7"
          >
            <MessageCircle className="w-3.5 h-3.5 animate-bounce text-cyan-400 shrink-0" />
            <span className="whitespace-nowrap hidden 2xl:inline">{t('nav.zaloSupport', 'Zalo: 0563.402.950')}</span>
            <span className="whitespace-nowrap 2xl:hidden">Zalo 24/7</span>
          </a>

          {/* Download CTA */}
          <button
            onClick={() => {
              triggerConfetti();
              onScrollToDownload();
            }}
            className="glow-button flex items-center gap-1.5 text-xs font-bold px-3.5 2xl:px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-lg shadow-purple-600/30 whitespace-nowrap shrink-0 hover:scale-105 transition-transform cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap hidden 2xl:inline">{t('nav.downloadFree', 'Tải Phần Mềm Miễn Phí')}</span>
            <span className="whitespace-nowrap 2xl:hidden">{t('nav.downloadApp', 'Tải Bản Cài Đặt')}</span>
          </button>
        </div>

        {/* Tablet Action Group (640px to 1279px) */}
        <div className="hidden sm:flex xl:hidden items-center gap-2 shrink-0">
          <LanguageSelector variant="navbar" />
          <a
            href={APP_LINKS.zaloSupport}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 text-cyan-300 border border-blue-500/40 transition-all shadow-sm whitespace-nowrap"
            title="Zalo Support"
          >
            <MessageCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Zalo</span>
          </a>
          <button
            onClick={() => {
              triggerConfetti();
              onScrollToDownload();
            }}
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:from-purple-500 hover:to-indigo-500 transition-all cursor-pointer whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t('nav.downloadApp', 'Tải App')}</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>

        {/* Mobile Action Group (< 640px) */}
        <div className="flex items-center gap-1.5 sm:hidden shrink-0">
          <LanguageSelector variant="compact" />
          <a
            href={APP_LINKS.zaloSupport}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-blue-950/70 text-cyan-300 border border-blue-500/40"
            title="Chat Support"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => {
              triggerConfetti();
              onScrollToDownload();
            }}
            className="px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold shadow whitespace-nowrap cursor-pointer"
          >
            {t('nav.downloadApp', 'Tải App')}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 hover:text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#0B0F19]/98 backdrop-blur-2xl border-b border-slate-800 px-3 sm:px-6 py-4 max-h-[85vh] overflow-y-auto"
          >
            {/* Quick App Header Info in Drawer */}
            <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-indigo-950/40 border border-purple-500/20 mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden bg-slate-900 border border-purple-500/30 p-0.5 shrink-0">
                  <img
                    src={APP_IMAGES.logo}
                    alt="Kinx Auto Logo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-[8px]"
                  />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white">Kinx Auto v4.6.1</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400">{t('nav.tagline', 'Tự Động Hóa Video AI Hàng Loạt')}</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Online 24/7
              </span>
            </div>

            {/* Language Selector inside Drawer */}
            <LanguageSelector variant="mobile-menu" className="mb-3" />

            {/* Navigation Grid / List */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 hover:bg-slate-800/80 text-slate-100 hover:text-white transition-all text-sm font-semibold shadow-sm"
                  >
                    <IconComponent className="w-4.5 h-4.5 text-purple-400 shrink-0" />
                    <span className="truncate">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={APP_LINKS.zaloSupport}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-950/80 to-cyan-950/80 text-cyan-300 border border-blue-500/40 text-xs sm:text-sm font-bold shadow-md active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-cyan-400 animate-bounce" />
                <span>{t('nav.zaloSupport', 'Zalo: 0563.402.950')}</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={APP_LINKS.zaloGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 text-purple-300 border border-purple-500/30 text-xs font-semibold shadow-sm active:scale-98 transition-all"
                >
                  <Users className="w-3.5 h-3.5 text-purple-400" />
                  <span>{t('nav.communityGroup', 'Nhóm Zalo')}</span>
                </a>
                <a
                  href={APP_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 text-blue-300 border border-blue-500/30 text-xs font-semibold shadow-sm active:scale-98 transition-all"
                >
                  <Facebook className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t('nav.facebookPage', 'Facebook')}</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerConfetti();
                  onScrollToDownload();
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white text-sm font-bold shadow-lg shadow-purple-600/30 active:scale-98 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{t('nav.downloadFree', 'Tải Bản Cài Đặt Miễn Phí')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


