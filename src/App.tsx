import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUp,
  MessageCircle,
} from 'lucide-react';

import { INITIAL_SECTIONS } from './data/kinxData';
import { SectionConfig } from './types';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveFlowDemo } from './components/InteractiveFlowDemo';
import { FeatureDeepDive } from './components/FeatureDeepDive';
import { DialogueVoiceShowcase } from './components/DialogueVoiceShowcase';
import { SoftwareGallery } from './components/SoftwareGallery';
import { RoiCalculator } from './components/RoiCalculator';
import { ComparisonTable } from './components/ComparisonTable';
import { PricingSection } from './components/PricingSection';
import { SocialProofTestimonials } from './components/SocialProofTestimonials';
import { DownloadSection } from './components/DownloadSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { SectionCustomizerModal } from './components/SectionCustomizerModal';
import { LeadModal } from './components/LeadModal';
import { LegalDisclaimerModal, LegalTabType } from './components/LegalDisclaimerModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingChatWidget } from './components/FloatingChatWidget';
import { ThreeBackground } from './components/ThreeBackground';

export default function App() {
  const [sections, setSections] = useState<SectionConfig[]>(INITIAL_SECTIONS);
  const [activeModuleId, setActiveModuleId] = useState<string>('veo-flow');
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState<boolean>(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState<boolean>(false);
  const [legalInitialTab, setLegalInitialTab] = useState<LegalTabType>('disclaimer');

  const [currentDevice, setCurrentDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDownload = () => {
    const el = document.getElementById('download-hub');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFeatureTab = (featureId: string) => {
    setActiveModuleId(featureId);
    const el = document.getElementById('features-deepdive');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section Reordering & Toggling
  const handleToggleVisibility = (id: string) => {
    setSections((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          const currentVis = s.visible ?? s.enabled ?? true;
          return { ...s, visible: !currentVis, enabled: !currentVis };
        }
        return s;
      })
    );
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    setSections((prev) => {
      const next = [...prev];
      const temp = next[index];
      next[index] = next[index - 1];
      next[index - 1] = temp;
      return next;
    });
  };

  const handleMoveDown = (index: number) => {
    if (index === sections.length - 1) return;
    setSections((prev) => {
      const next = [...prev];
      const temp = next[index];
      next[index] = next[index + 1];
      next[index + 1] = temp;
      return next;
    });
  };

  const handleResetSections = () => {
    setSections(INITIAL_SECTIONS);
  };

  const renderSectionComponent = (sectionId: string) => {
    switch (sectionId) {
      case 'hero':
        return (
          <Hero
            key="hero"
            onScrollToDownload={scrollToDownload}
            onOpenLeadModal={() => setIsLeadModalOpen(true)}
            onSelectFeatureTab={handleSelectFeatureTab}
          />
        );
      case 'interactive-flow':
        return (
          <InteractiveFlowDemo
            key="interactive-flow"
            onOpenLeadModal={() => setIsLeadModalOpen(true)}
            onScrollToDownload={scrollToDownload}
          />
        );
      case 'features-deepdive':
        return (
          <FeatureDeepDive
            key="features-deepdive"
            activeModuleId={activeModuleId}
            onSelectModule={setActiveModuleId}
            onOpenLeadModal={() => setIsLeadModalOpen(true)}
            onScrollToDownload={scrollToDownload}
            onOpenLegalModal={(tab) => {
              if (tab) setLegalInitialTab(tab);
              setIsLegalModalOpen(true);
            }}
          />
        );
      case 'dialogue-showcase':
        return (
          <DialogueVoiceShowcase
            key="dialogue-showcase"
            onOpenLeadModal={() => setIsLeadModalOpen(true)}
            onScrollToDownload={scrollToDownload}
            onOpenLegalModal={() => {
              setLegalInitialTab('aiVoiceDisclaimer');
              setIsLegalModalOpen(true);
            }}
          />
        );
      case 'software-gallery':
        return (
          <SoftwareGallery
            key="software-gallery"
            onSelectFeatureTab={handleSelectFeatureTab}
            onOpenLeadModal={() => setIsLeadModalOpen(true)}
            onScrollToDownload={scrollToDownload}
          />
        );
      case 'roi-calculator':
        return (
          <RoiCalculator
            key="roi-calculator"
            onScrollToDownload={scrollToDownload}
            onOpenLeadModal={() => setIsLeadModalOpen(true)}
          />
        );
      case 'comparison':
        return (
          <ComparisonTable
            key="comparison"
            onScrollToDownload={scrollToDownload}
            onOpenLeadModal={() => setIsLeadModalOpen(true)}
          />
        );
      case 'pricing':
        return (
          <PricingSection
            key="pricing"
            onScrollToDownload={scrollToDownload}
          />
        );
      case 'testimonials':
        return <SocialProofTestimonials key="testimonials" />;
      case 'download-hub':
        return (
          <DownloadSection
            key="download-hub"
            onOpenLeadModal={() => setIsLeadModalOpen(true)}
          />
        );
      case 'faq':
        return <FaqSection key="faq" />;
      default:
        return null;
    }
  };

  // Device Container Widths
  const deviceWrapperClass =
    currentDevice === 'mobile'
      ? 'max-w-[420px] mx-auto border-x-4 border-slate-800 shadow-2xl my-6 rounded-3xl overflow-hidden transition-all duration-300'
      : currentDevice === 'tablet'
      ? 'max-w-[768px] mx-auto border-x-4 border-slate-800 shadow-2xl my-6 rounded-3xl overflow-hidden transition-all duration-300'
      : 'w-full max-w-full overflow-x-clip transition-all duration-300';

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#070a13] text-slate-100 font-sans selection:bg-purple-600 selection:text-white relative">
      {/* Global Interactive 3D Motion WebGL Background with built-in dimming and blur */}
      <ThreeBackground />

      {/* Top Navigation */}
      <Navbar
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenLeadModal={() => setIsLeadModalOpen(true)}
        onScrollToPricing={() => {
          const el = document.getElementById('pricing');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onScrollToDownload={scrollToDownload}
      />

      {/* Main Responsive Content Container */}
      <div className={`${deviceWrapperClass} pb-28 md:pb-12 relative z-10`}>
        <main className="w-full max-w-full overflow-x-clip">
          {sections.map((sec) =>
            (sec.visible ?? sec.enabled ?? true) ? renderSectionComponent(sec.id) : null
          )}
        </main>

        {/* Footer */}
        <Footer
          onScrollToDownload={scrollToDownload}
          onOpenLeadModal={() => setIsLeadModalOpen(true)}
          onOpenLegalModal={(tab) => {
            if (tab) setLegalInitialTab(tab);
            setIsLegalModalOpen(true);
          }}
        />
      </div>

      {/* Mobile App Bottom Navigation Bar */}
      <MobileBottomNav
        onScrollToDownload={scrollToDownload}
        onOpenFeatures={() => {
          const el = document.getElementById('features-deepdive');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenPricing={() => {
          const el = document.getElementById('pricing');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Floating Action Bars & Quick Contact Center */}
      <aside
        aria-label="Floating quick actions"
        className="fixed bottom-20 right-3 sm:right-4 md:bottom-6 md:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto"
      >
        {/* Floating Expandable Chat & Community Hub */}
        <FloatingChatWidget />

        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="p-2.5 sm:p-3 rounded-full bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 shadow-xl transition-all cursor-pointer"
              title="Cuộn lên đầu trang"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </aside>

      {/* Modals */}
      <SectionCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        sections={sections}
        onToggleVisibility={handleToggleVisibility}
        onMoveUp={handleMoveUp}
        onMoveDown={handleMoveDown}
        onReset={handleResetSections}
        currentDevice={currentDevice}
        onChangeDevice={setCurrentDevice}
      />

      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
      />

      <LegalDisclaimerModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        initialTab={legalInitialTab}
      />
    </div>
  );
}
