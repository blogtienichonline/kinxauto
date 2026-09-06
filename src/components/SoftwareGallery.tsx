import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Image as ImageIcon,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  Video,
  Mic,
  ShoppingBag,
  Eye,
  Sparkles,
  Play,
  Square,
  Volume2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedGalleryItems, GalleryItem } from '../data/localizedKinxData';
import { AUDIO_SAMPLES } from '../data/images';
import { playSampleAudioUrl, stopAllTTS } from '../utils/ttsPlayer';

interface SoftwareGalleryProps {
  onSelectFeatureTab?: (featureId: string) => void;
  onOpenLeadModal?: () => void;
  onScrollToDownload?: () => void;
}

export const SoftwareGallery: React.FC<SoftwareGalleryProps> = ({
  onSelectFeatureTab,
  onOpenLeadModal,
}) => {
  const { language } = useLanguage();
  const galleryItems = getLocalizedGalleryItems(language);
  const [activeCategory, setActiveCategory] = useState<'all' | 'video' | 'character' | 'audio_script' | 'marketing'>('all');
  const [selectedLightboxIndex, setSelectedLightboxIndex] = useState<number | null>(null);
  const [isPlayingGalleryAudio, setIsPlayingGalleryAudio] = useState<boolean>(false);

  const handleToggleGalleryAudio = () => {
    if (isPlayingGalleryAudio) {
      stopAllTTS();
      setIsPlayingGalleryAudio(false);
    } else {
      stopAllTTS();
      setIsPlayingGalleryAudio(true);
      playSampleAudioUrl({
        audioUrl: AUDIO_SAMPLES.dialogueConversation,
        onStart: () => setIsPlayingGalleryAudio(true),
        onEnd: () => setIsPlayingGalleryAudio(false),
        onError: () => setIsPlayingGalleryAudio(false),
      });
    }
  };

  const uiTexts = {
    vi: {
      badge: 'ALBUM ẢNH CHỤP GIAO DIỆN THỰC TẾ',
      titlePrefix: 'Trực Quan Từng Tính Năng Của',
      subtitle: 'Xem toàn bộ ảnh chụp giao diện các module độc quyền. Nhấp vào bất kỳ ảnh nào để phóng to, xem phân tích chi tiết và trải nghiệm trực quan.',
      allCat: 'Tất Cả Tính Năng',
      videoCat: '🎬 Video & Phim AI',
      characterCat: '👥 Nhân Vật & Truyện Tranh',
      audioCat: '🎙️ Voice & Kịch Bản',
      marketingCat: '🛍️ TMĐT & Thumbnail',
      clickZoom: 'Nhấp để phóng to',
      viewDetails: 'Xem Chi Tiết',
      explore: 'Khám Phá',
      prev: 'Ảnh trước đó',
      next: 'Ảnh tiếp theo',
      openDemo: 'Thử Bảng Điều Khiển',
      registerUpgrade: 'Đăng Ký & Nâng Cấp Gói',
    },
    en: {
      badge: 'REAL SOFTWARE INTERFACE GALLERY',
      titlePrefix: 'Visual Breakdown of Every Feature in',
      subtitle: 'Explore real screenshot captures of exclusive modules. Click any preview to inspect parameters, workflows, and detailed breakdowns.',
      allCat: 'All Features',
      videoCat: '🎬 AI Video & Films',
      characterCat: '👥 Characters & Comics',
      audioCat: '🎙️ Voice & Scripts',
      marketingCat: '🛍️ E-commerce & Marketing',
      clickZoom: 'Click to zoom',
      viewDetails: 'View Details',
      explore: 'Explore',
      prev: 'Previous image',
      next: 'Next image',
      openDemo: 'Open Interactive Console',
      registerUpgrade: 'Get Access / Upgrade Plan',
    },
    ja: {
      badge: '実際のソフトウェア画面ギャラリー',
      titlePrefix: '全機能のリアルなUI操作画面',
      subtitle: '各モジュールの実際の動作画面をご確認ください。クリックして拡大表示、パラメータ分析やワークフロー詳細を閲覧できます。',
      allCat: '全機能',
      videoCat: '🎬 AI動画・映画',
      characterCat: '👥 キャラクター・漫画',
      audioCat: '🎙️ 音声・台本',
      marketingCat: '🛍️ EC・マーケティング',
      clickZoom: 'クリックして拡大',
      viewDetails: '詳細を見る',
      explore: '詳細設定',
      prev: '前の画像',
      next: '次の画像',
      openDemo: '操作画面を試す',
      registerUpgrade: 'プランを登録・アップグレード',
    },
    zh: {
      badge: '真实软件操作界面图库',
      titlePrefix: '直观感受各项核心功能的真实界面',
      subtitle: '查看独家模块的真实软件运行截图。点击任意图片即可全屏放大、查看参数解析及操作逻辑。',
      allCat: '全部功能',
      videoCat: '🎬 AI视频与电影',
      characterCat: '👥 角色与漫画',
      audioCat: '🎙️ 配音与文案',
      marketingCat: '🛍️ 电商与营销',
      clickZoom: '点击放大',
      viewDetails: '查看详情',
      explore: '深度探索',
      prev: '上一张',
      next: '下一张',
      openDemo: '进入交互控制台',
      registerUpgrade: '立即申请体验 / 升级',
    },
  }[language] || {
    badge: 'ALBUM ẢNH CHỤP GIAO DIỆN THỰC TẾ',
    titlePrefix: 'Trực Quan Từng Tính Năng Của',
    subtitle: 'Xem toàn bộ ảnh chụp giao diện các module độc quyền. Nhấp vào bất kỳ ảnh nào để phóng to, xem phân tích chi tiết và trải nghiệm trực quan.',
    allCat: 'Tất Cả Tính Năng',
    videoCat: '🎬 Video & Phim AI',
    characterCat: '👥 Nhân Vật & Truyện Tranh',
    audioCat: '🎙️ Voice & Kịch Bản',
    marketingCat: '🛍️ TMĐT & Thumbnail',
    clickZoom: 'Nhấp để phóng to',
    viewDetails: 'Xem Chi Tiết',
    explore: 'Khám Phá',
    prev: 'Ảnh trước đó',
    next: 'Ảnh tiếp theo',
    openDemo: 'Thử Bảng Điều Khiển',
    registerUpgrade: 'Đăng Ký & Nâng Cấp Gói',
  };

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const activeItem = selectedLightboxIndex !== null ? galleryItems[selectedLightboxIndex] : null;

  const handlePrevImage = () => {
    if (selectedLightboxIndex === null) return;
    setSelectedLightboxIndex((selectedLightboxIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleNextImage = () => {
    if (selectedLightboxIndex === null) return;
    setSelectedLightboxIndex((selectedLightboxIndex + 1) % galleryItems.length);
  };

  return (
    <section id="software-gallery" className="py-10 sm:py-12 bg-[#0B0F19] relative border-t border-slate-800/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-purple-400" />
            <span>{uiTexts.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {uiTexts.titlePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400">
              Kinx Auto v4.6.1
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {uiTexts.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10">
          {[
            { id: 'all', label: `${uiTexts.allCat} (${galleryItems.length})`, icon: Layers },
            { id: 'video', label: `${uiTexts.videoCat} (${galleryItems.filter(g => g.category === 'video').length})`, icon: Video },
            { id: 'character', label: `${uiTexts.characterCat} (${galleryItems.filter(g => g.category === 'character').length})`, icon: Sparkles },
            { id: 'audio_script', label: `${uiTexts.audioCat} (${galleryItems.filter(g => g.category === 'audio_script').length})`, icon: Mic },
            { id: 'marketing', label: `${uiTexts.marketingCat} (${galleryItems.filter(g => g.category === 'marketing').length})`, icon: ShoppingBag },
          ].map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40 border border-purple-400/50 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const globalIndex = galleryItems.findIndex((g) => g.id === item.id);
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/40 overflow-hidden flex flex-col"
              >
                {/* Image Container with Zoom Button */}
                <div
                  onClick={() => setSelectedLightboxIndex(globalIndex)}
                  className="relative aspect-video bg-slate-950 overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain bg-[#070b14] group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle top/bottom overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-purple-950/90 text-purple-200 border border-purple-500/40 backdrop-blur-md shadow-md">
                      {item.badge}
                    </span>
                  </div>

                  {/* Zoom Icon overlay */}
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-2 rounded-lg bg-black/75 hover:bg-purple-600 text-white backdrop-blur-md transition-all shadow-lg"
                      title={uiTexts.clickZoom}
                      aria-label={uiTexts.clickZoom}
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quick Bottom Status */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300 z-10">
                    <span className="font-mono text-cyan-300 font-semibold">{item.categoryLabel}</span>
                    <span className="flex items-center gap-1 text-slate-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      <Eye className="w-3 h-3 text-purple-400" /> {uiTexts.clickZoom}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Quick bullet points */}
                    <div className="space-y-1.5 mb-3">
                      {item.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Special Audio Preview for Voice TTS in Gallery Card */}
                    {item.id === 'voice-tts' && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleGalleryAudio();
                        }}
                        className={`w-full mb-3 py-1.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                          isPlayingGalleryAudio
                            ? 'bg-rose-600/30 text-rose-300 border-rose-500/50 animate-pulse'
                            : 'bg-purple-950/60 text-purple-300 border-purple-500/40 hover:bg-purple-900/60'
                        }`}
                      >
                        {isPlayingGalleryAudio ? (
                          <>
                            <Square className="w-3.5 h-3.5 fill-current" />
                            <span>Dừng nghe hội thoại</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Nghe thử Voice Hội thoại mẫu (.wav)</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedLightboxIndex(globalIndex)}
                      className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-purple-400" />
                      <span>{uiTexts.viewDetails}</span>
                    </button>
                    {item.moduleLink && onSelectFeatureTab && (
                      <button
                        onClick={() => onSelectFeatureTab(item.moduleLink!)}
                        className="py-2 px-3 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 text-xs font-bold transition-all flex items-center gap-1"
                        title={uiTexts.explore}
                      >
                        <span>{uiTexts.explore}</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedLightboxIndex !== null && activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl">
            {/* Click outside to close */}
            <div
              className="absolute inset-0"
              onClick={() => setSelectedLightboxIndex(null)}
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-5xl bg-slate-900 border border-purple-500/40 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Header Bar */}
              <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-purple-950 text-purple-300 border border-purple-500/40">
                    {activeItem.badge}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-white">
                    {activeItem.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 hidden sm:inline">
                    {selectedLightboxIndex + 1} / {galleryItems.length}
                  </span>
                  <button
                    onClick={() => setSelectedLightboxIndex(null)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Full-Size Image Container with Navigation Arrows */}
              <div className="relative flex-1 bg-black/95 flex items-center justify-center p-2 sm:p-4 min-h-[300px] overflow-hidden group">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[58vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                />

                {/* Left Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/75 hover:bg-purple-600 text-white backdrop-blur-md border border-slate-700 transition-all hover:scale-110 shadow-xl"
                  title={uiTexts.prev}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/75 hover:bg-purple-600 text-white backdrop-blur-md border border-slate-700 transition-all hover:scale-110 shadow-xl"
                  title={uiTexts.next}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Footer Details */}
              <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-slate-200">
                    {activeItem.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
                    {activeItem.highlights.map((hl, i) => (
                      <span key={i} className="flex items-center gap-1 text-emerald-400">
                        ✓ <span className="text-slate-300">{hl}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end flex-wrap">
                  {activeItem.id === 'voice-tts' && (
                    <button
                      type="button"
                      onClick={handleToggleGalleryAudio}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                        isPlayingGalleryAudio
                          ? 'bg-rose-600 hover:bg-rose-500 text-white animate-pulse'
                          : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white'
                      }`}
                    >
                      {isPlayingGalleryAudio ? <Square className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                      <span>{isPlayingGalleryAudio ? 'Dừng audio' : 'Nghe Thử Voice Hội Thoại (.wav)'}</span>
                    </button>
                  )}
                  {activeItem.moduleLink && onSelectFeatureTab && (
                    <button
                      onClick={() => {
                        const target = activeItem.moduleLink!;
                        setSelectedLightboxIndex(null);
                        onSelectFeatureTab(target);
                      }}
                      className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg transition-all flex items-center gap-1.5"
                    >
                      <span>{uiTexts.openDemo}</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                  {onOpenLeadModal && (
                    <button
                      onClick={() => {
                        setSelectedLightboxIndex(null);
                        onOpenLeadModal();
                      }}
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition-all"
                    >
                      {uiTexts.registerUpgrade}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default SoftwareGallery;
