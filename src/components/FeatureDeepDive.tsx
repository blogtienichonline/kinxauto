import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Video,
  Users,
  Mic,
  FileText,
  Sparkles,
  Youtube,
  Image as ImageIcon,
  Layers,
  BookOpen,
  Maximize2,
  ShoppingBag,
  Wrench,
  CheckCircle2,
  HelpCircle,
  Play,
  Volume2,
  Download,
  Info,
  ChevronRight,
  Square,
  ShieldAlert,
  AlertTriangle,
  Scale
} from 'lucide-react';
import { FeatureModule, HotspotTag } from '../types';
import { speakEdgeTTS, playSampleAudioUrl, stopAllTTS } from '../utils/ttsPlayer';
import { AUDIO_SAMPLES } from '../data/images';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedModules } from '../data/localizedKinxData';
import { LegalTabType } from './LegalDisclaimerModal';

interface FeatureDeepDiveProps {
  activeModuleId: string;
  onSelectModule: (id: string) => void;
  onOpenLeadModal: () => void;
  onScrollToDownload: () => void;
  onOpenLegalModal?: (tab?: LegalTabType) => void;
}

export const FeatureDeepDive: React.FC<FeatureDeepDiveProps> = ({
  activeModuleId,
  onSelectModule,
  onOpenLeadModal,
  onScrollToDownload,
  onOpenLegalModal,
}) => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeHotspot, setActiveHotspot] = useState<HotspotTag | null>(null);
  const [viewMode, setViewMode] = useState<'image' | 'simulator'>('image');
  const [playingItemText, setPlayingItemText] = useState<string | null>(null);
  const [isPlayingSampleWav, setIsPlayingSampleWav] = useState<boolean>(false);
  const [sampleWavTime, setSampleWavTime] = useState<number>(0);
  const [sampleWavDuration, setSampleWavDuration] = useState<number>(0);

  const localizedModules = getLocalizedModules(language);
  const currentModule = localizedModules.find((m) => m.id === activeModuleId) || localizedModules[0];

  const handleToggleSampleWav = () => {
    if (isPlayingSampleWav) {
      stopAllTTS();
      setIsPlayingSampleWav(false);
      return;
    }

    stopAllTTS();
    setPlayingItemText(null);
    setIsPlayingSampleWav(true);
    playSampleAudioUrl({
      audioUrl: AUDIO_SAMPLES.dialogueConversation,
      onStart: () => setIsPlayingSampleWav(true),
      onEnd: () => {
        setIsPlayingSampleWav(false);
        setSampleWavTime(0);
      },
      onError: () => setIsPlayingSampleWav(false),
      onTimeUpdate: (curr, dur) => {
        setSampleWavTime(curr);
        if (dur && dur > 0) setSampleWavDuration(dur);
      },
    });
  };

  const handleToggleVoicePreview = (textToSpeak: string) => {
    if (playingItemText === textToSpeak) {
      stopAllTTS();
      setPlayingItemText(null);
      return;
    }

    stopAllTTS();
    setIsPlayingSampleWav(false);
    setPlayingItemText(textToSpeak);
    const voiceByLang: Record<string, string> = {
      vi: 'vi-VN-HoaiMyNeural',
      en: 'en-US-JennyNeural',
      ja: 'ja-JP-NanamiNeural',
      zh: 'zh-CN-XiaoxiaoNeural',
    };
    speakEdgeTTS({
      text: textToSpeak,
      voiceId: voiceByLang[language] || 'vi-VN-HoaiMyNeural',
      onEnd: () => setPlayingItemText(null),
      onError: () => setPlayingItemText(null),
    });
  };

  const getCategoryLabels = () => {
    switch (language) {
      case 'en':
        return [
          { id: 'all', name: 'All 12 Modules' },
          { id: 'video', name: 'AI Video (Veo 3.1)' },
          { id: 'script', name: 'Scripts & Prompts' },
          { id: 'image', name: 'Image & Comic & Thumbnails' },
          { id: 'core', name: 'Voice TTS & Utilities' },
          { id: 'ecommerce', name: 'E-Commerce & KOL' },
        ];
      case 'ja':
        return [
          { id: 'all', name: '全12モジュール一覧' },
          { id: 'video', name: 'AI動画 (Veo 3.1)' },
          { id: 'script', name: '台本＆プロンプト' },
          { id: 'image', name: '画像・漫画・サムネ' },
          { id: 'core', name: '音声TTS＆ユーティリティ' },
          { id: 'ecommerce', name: 'EC＆バーチャルKOL' },
        ];
      case 'zh':
        return [
          { id: 'all', name: '全部 12 大模块' },
          { id: 'video', name: 'AI 视频 (Veo 3.1)' },
          { id: 'script', name: '分镜剧本与 Prompt' },
          { id: 'image', name: '图像·漫画·爆款封面' },
          { id: 'core', name: '拟真配音 TTS 与工具箱' },
          { id: 'ecommerce', name: '电商带货与虚拟达人' },
        ];
      default:
        return [
          { id: 'all', name: 'Tất Cả 12 Module' },
          { id: 'video', name: 'Video AI (Veo 3.1)' },
          { id: 'script', name: 'Kịch Bản & Prompt' },
          { id: 'image', name: 'Ảnh & Thumbnail & Comic' },
          { id: 'core', name: 'Voice TTS & Tiện Ích' },
          { id: 'ecommerce', name: 'TMĐT & KOL Review' },
        ];
    }
  };

  const categories = getCategoryLabels();

  const filteredModules = selectedCategory === 'all'
    ? localizedModules
    : localizedModules.filter((m) => m.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video': return <Video className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'Mic': return <Mic className="w-4 h-4" />;
      case 'FileText': return <FileText className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Youtube': return <Youtube className="w-4 h-4" />;
      case 'Image': return <ImageIcon className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4" />;
      case 'Maximize2': return <Maximize2 className="w-4 h-4" />;
      case 'ShoppingBag': return <ShoppingBag className="w-4 h-4" />;
      case 'Wrench': return <Wrench className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const uiTexts = {
    vi: {
      badge: 'KHO VŨ KHÍ TỰ ĐỘNG HÓA ALL-IN-ONE',
      title1: 'Khám Phá Chi Tiết',
      titleHighlight: '12 Tính Năng Đột Phá',
      subtitle: 'Click vào từng module bên dưới và chạm vào các thẻ chú thích nhấp nháy trên màn hình giao diện để khám phá cơ chế vận hành thông minh.',
      advantages: 'Ưu điểm vượt trội:',
      downloadTrial: 'Tải Bản Cài Đặt (v4.6.1)',
      registerTrial: 'Đăng Ký Dùng Thử',
      close: '✕ Đóng',
      viewImage: 'Ảnh Minh Họa',
      viewApp: 'Giao Diện App',
      featureNote: 'Chú thích tính năng:',
      clickRadarHint: 'Nhấn vào điểm ✦ trên ảnh để xem chi tiết',
      viewSoftwareConfig: 'Xem cấu hình phần mềm →',
      listenAudio: 'Nghe thử audio',
      readingAudio: 'Đang đọc...',
      sceneScriptIdea: 'Ý tưởng kịch bản:',
      selectedGenre: 'Thể loại đang chọn:',
      scriptExtractTask: 'Tác vụ bóc tách kịch bản:',
      touchPinsHint: 'Chạm vào các biểu tượng ✦ trên màn hình để xem chú thích tính năng',
      allModulesCount: '12 / 12 Module Đầy Đủ',
    },
    en: {
      badge: 'ALL-IN-ONE AUTOMATION ARSENAL',
      title1: 'Explore All',
      titleHighlight: '12 Breakthrough Features',
      subtitle: 'Select any module below and hover or click on pulsing hotspot pins across the software interface to discover intelligent automation workflows.',
      advantages: 'Key Advantages:',
      downloadTrial: 'Download Installer (v4.6.1)',
      registerTrial: 'Free Trial Signup',
      close: '✕ Close',
      viewImage: 'Live Screenshot',
      viewApp: 'App Interface',
      featureNote: 'Feature Overview:',
      clickRadarHint: 'Click pulsing ✦ pins on the screen to view deep details',
      viewSoftwareConfig: 'View software configuration →',
      listenAudio: 'Listen sample audio',
      readingAudio: 'Playing...',
      sceneScriptIdea: 'Script Concept:',
      selectedGenre: 'Selected Story Genre:',
      scriptExtractTask: 'Extraction Operations:',
      touchPinsHint: 'Touch interactive ✦ hotspot pins on screen to inspect live parameters',
      allModulesCount: '12 / 12 Full Modules',
    },
    ja: {
      badge: 'オールインワン自動化ツールセット',
      title1: '詳細を確認する',
      titleHighlight: '12の革新的機能',
      subtitle: '各モジュールを選択し、画面上の点滅するピンにタッチして、インテリジェントな自動化の仕組みをご確認ください。',
      advantages: '主なメリット・特長:',
      downloadTrial: 'インストーラーをダウンロード (v4.6.1)',
      registerTrial: '無料トライアル登録',
      close: '✕ 閉じる',
      viewImage: '実際の画面写真',
      viewApp: 'アプリ操作画面',
      featureNote: '機能のポイント:',
      clickRadarHint: '画面上の ✦ ピンをクリックして詳細を確認',
      viewSoftwareConfig: '設定画面を見る →',
      listenAudio: '音声を試聴する',
      readingAudio: '再生中...',
      sceneScriptIdea: '台本アイデア:',
      selectedGenre: '選択中のジャンル:',
      scriptExtractTask: '台本抽出タスク:',
      touchPinsHint: '画面上の ✦ ピンをタップして詳細パラメータを確認',
      allModulesCount: '全12モジュール完備',
    },
    zh: {
      badge: '一站式全自动化视频兵器库',
      title1: '深度探索',
      titleHighlight: '12 大颠覆性功能',
      subtitle: '点击下方各功能模块并触摸操作界面上的脉冲标记点，深入了解智能化批量运行机制。',
      advantages: '核心优势与亮点:',
      downloadTrial: '下载正式安装包 (v4.6.1)',
      registerTrial: '申请免费试用',
      close: '✕ 关闭',
      viewImage: '真实软件截图',
      viewApp: '软件操作界面',
      featureNote: '功能特性解析:',
      clickRadarHint: '点击界面上的 ✦ 标记点查看详细运行逻辑',
      viewSoftwareConfig: '查看软件配置项 →',
      listenAudio: '试听 AI 拟真发音',
      readingAudio: '正在朗读...',
      sceneScriptIdea: '剧本文案构思:',
      selectedGenre: '当前所选题材:',
      scriptExtractTask: '文案解析重写任务:',
      touchPinsHint: '触摸屏幕上的 ✦ 标记点探索完整参数设定',
      allModulesCount: '12 / 12 大功能完整就绪',
    },
  }[language] || {
    badge: 'KHO VŨ KHÍ TỰ ĐỘNG HÓA ALL-IN-ONE',
    title1: 'Khám Phá Chi Tiết',
    titleHighlight: '12 Tính Năng Đột Phá',
    subtitle: 'Click vào từng module bên dưới và chạm vào các thẻ chú thích nhấp nháy trên màn hình giao diện để khám phá cơ chế vận hành thông minh.',
    advantages: 'Ưu điểm vượt trội:',
    downloadTrial: 'Tải Bản Cài Đặt (v4.6.1)',
    registerTrial: 'Đăng Ký Dùng Thử',
    close: '✕ Đóng',
    viewImage: 'Ảnh Minh Họa',
    viewApp: 'Giao Diện App',
    featureNote: 'Chú thích tính năng:',
    clickRadarHint: 'Nhấn vào điểm ✦ trên ảnh để xem chi tiết',
    viewSoftwareConfig: 'Xem cấu hình phần mềm →',
    listenAudio: 'Nghe thử audio',
    readingAudio: 'Đang đọc...',
    sceneScriptIdea: 'Ý tưởng kịch bản:',
    selectedGenre: 'Thể loại đang chọn:',
    scriptExtractTask: 'Tác vụ bóc tách kịch bản:',
    touchPinsHint: 'Chạm vào các biểu tượng ✦ trên màn hình để xem chú thích tính năng',
    allModulesCount: '12 / 12 Module Đầy Đủ',
  };

  return (
    <section id="features-deepdive" className="py-10 sm:py-12 bg-[#0B0F19] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-bold text-purple-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{uiTexts.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {uiTexts.title1} <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">{uiTexts.titleHighlight}</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base">
            {uiTexts.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/50'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Horizontal Module Selector Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {filteredModules.map((m) => {
            const isSelected = m.id === currentModule.id;
            return (
              <button
                key={m.id}
                onClick={() => {
                  onSelectModule(m.id);
                  setActiveHotspot(null);
                }}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex-shrink-0 ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl shadow-purple-600/25 border border-purple-400/60 scale-[1.02]'
                    : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-slate-800 hover:text-white'
                }`}
              >
                <span className={isSelected ? 'text-white' : 'text-purple-400'}>
                  {getIcon(m.icon)}
                </span>
                <span>{m.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                  isSelected ? 'bg-black/30 text-purple-200' : 'bg-slate-800 text-slate-400'
                }`}>
                  {m.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Feature Description & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-2 rounded-xl bg-purple-950 text-purple-300 border border-purple-500/30">
                  {getIcon(currentModule.icon)}
                </span>
                <div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 uppercase tracking-wider">
                    {currentModule.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {currentModule.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm font-semibold text-purple-300 mb-3">
                {currentModule.tagline}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                {currentModule.description}
              </p>

              {/* Highlights List */}
              <div className="mt-6 space-y-2.5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{uiTexts.advantages}</p>
                {currentModule.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Special Legal Compliance Card for Voice TTS & Voice Cloning */}
              {currentModule.id === 'voice-tts' && (
                <div className="mt-5 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-300 font-bold">
                    <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Miễn Trừ Trách Nhiệm Pháp Lý Voice Cloning:</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    Nghiêm cấm tuyệt đối sử dụng AI Clone giọng nói để giả mạo danh tính, lừa đảo tài chính hoặc vi phạm bản quyền khi chưa có sự đồng ý bằng văn bản của chính chủ giọng nói. Người dùng tự chịu 100% trách nhiệm trước pháp luật.
                  </p>
                  {onOpenLegalModal && (
                    <button
                      type="button"
                      onClick={() => onOpenLegalModal('voice_compliance')}
                      className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 flex items-center gap-1 text-[11px] cursor-pointer"
                    >
                      <Scale className="w-3 h-3" />
                      <span>Xem chi tiết văn bản miễn trừ pháp lý AI Voice →</span>
                    </button>
                  )}
                </div>
              )}

              {/* Metrics */}
              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-3 gap-3 text-center">
                {currentModule.metrics.map((metric, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <p className="font-display text-base sm:text-lg font-black text-purple-300">{metric.value}</p>
                    <p className="text-[10px] sm:text-xs text-slate-400 font-medium">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA in card */}
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={onScrollToDownload}
                  className="flex-1 glow-button flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-600/30"
                >
                  <Download className="w-4 h-4" />
                  <span>{uiTexts.downloadTrial}</span>
                </button>
                <button
                  onClick={onOpenLeadModal}
                  className="py-3 px-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 hover:border-cyan-500/50 text-xs font-semibold whitespace-nowrap transition-all"
                  title="Tải tool và đăng ký tài khoản dùng thử"
                >
                  {uiTexts.registerTrial}
                </button>
              </div>
            </div>

            {/* Active Hotspot Info Box (If user clicks or hovers a hotspot) */}
            <AnimatePresence>
              {activeHotspot && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-4 rounded-xl bg-gradient-to-r from-purple-950/90 to-indigo-950/90 border border-purple-500/60 shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/30 text-purple-200">
                      {activeHotspot.badge}
                    </span>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      {uiTexts.close}
                    </button>
                  </div>
                  <h4 className="text-sm font-bold text-white mt-1.5">{activeHotspot.title}</h4>
                  <p className="text-xs text-slate-300 mt-1">{activeHotspot.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Simulated Screen Interface with Interactive Professional Hotspot Tags */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-slate-950 border border-slate-700/80 shadow-2xl overflow-hidden">
              {/* Top Window Bar */}
              <div className="px-4 py-3 bg-[#0B0F19] border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 font-mono text-[11px] text-slate-300 font-semibold">
                    Kinx Auto - {currentModule.uiMockup.title}
                  </span>
                </div>

                {/* View Mode Toggle: Image vs Simulator */}
                <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
                  {currentModule.realImage && (
                    <button
                      onClick={() => setViewMode('image')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1.5 transition-all ${
                        viewMode === 'image'
                          ? 'bg-purple-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <ImageIcon className="w-3 h-3" />
                      <span>{uiTexts.viewImage}</span>
                    </button>
                  )}
                  <button
                    onClick={() => setViewMode('simulator')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1.5 transition-all ${
                      viewMode === 'simulator' || !currentModule.realImage
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Wrench className="w-3 h-3" />
                    <span>{uiTexts.viewApp}</span>
                  </button>
                </div>
              </div>

              {/* Window Content: Image View or Simulator View */}
              {viewMode === 'image' && currentModule.realImage ? (
                <div className="p-4 sm:p-5 bg-gradient-to-b from-[#0F172A] to-[#0B0F19] relative min-h-[440px] flex flex-col justify-between">
                  {/* Real Image Container with Interactive Hotspots */}
                  <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 aspect-video group shadow-xl">
                    <img
                      src={currentModule.realImage}
                      alt={currentModule.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain bg-[#080d1a] group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Overlay Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5 shadow-lg">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        {currentModule.name}
                      </span>
                    </div>

                    {/* INTERACTIVE HOTSPOTS ON REAL IMAGE */}
                    {currentModule.hotspots.map((hotspot) => {
                      const isActive = activeHotspot?.id === hotspot.id;
                      return (
                        <div
                          key={hotspot.id}
                          style={{
                            position: 'absolute',
                            left: `${hotspot.xPercent}%`,
                            top: `${hotspot.yPercent}%`,
                            transform: 'translate(-50%, -50%)',
                          }}
                          className="z-20 group/pin"
                        >
                          {/* Pulsing Radar Pin */}
                          <button
                            onClick={() => setActiveHotspot(isActive ? null : hotspot)}
                            onMouseEnter={() => setActiveHotspot(hotspot)}
                            className="relative flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white shadow-xl shadow-purple-600/60 hover:scale-125 transition-transform duration-200"
                            title={hotspot.title}
                          >
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 pointer-events-none" />
                            <span className="relative text-xs font-black">✦</span>
                          </button>

                          {/* Floating Hotspot Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/pin:block w-56 p-3 rounded-xl bg-[#0F172A]/95 backdrop-blur-md border border-purple-500/60 shadow-2xl text-left z-30 pointer-events-none">
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-500/30 text-purple-200">
                              {hotspot.badge}
                            </span>
                            <p className="text-xs font-bold text-white mt-1">{hotspot.title}</p>
                            <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">{hotspot.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Professional Image Caption Tag */}
                  {currentModule.imageCaption && (
                    <div className="mt-3.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="p-1.5 rounded-lg bg-purple-950 text-purple-300 border border-purple-500/30 flex-shrink-0 mt-0.5">
                        <ImageIcon className="w-3.5 h-3.5" />
                      </span>
                      <div>
                        <strong className="text-purple-300 block mb-0.5">{uiTexts.featureNote}</strong>
                        <p className="text-slate-300 text-xs leading-relaxed">{currentModule.imageCaption}</p>
                      </div>
                    </div>
                  )}

                  {/* Hotspot Guide Hint Bottom Bar */}
                  <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                      {uiTexts.clickRadarHint}
                    </span>
                    <button
                      onClick={() => setViewMode('simulator')}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold underline text-[11px]"
                    >
                      {uiTexts.viewSoftwareConfig}
                    </button>
                  </div>
                </div>
              ) : (
                /* Simulated UI App Body */
                <div className="p-4 sm:p-5 bg-gradient-to-b from-[#0F172A] to-[#0B0F19] relative min-h-[480px]">
                  {/* Simulated Tab Bar */}
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4 overflow-x-auto no-scrollbar">
                    {currentModule.uiMockup.tabs.map((tab, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap ${
                          idx === 0
                            ? 'bg-purple-600 text-white'
                            : 'bg-slate-900 text-slate-400 border border-slate-800'
                        }`}
                      >
                        {tab}
                      </span>
                    ))}
                  </div>

                  {/* Simulated Control Settings Bar */}
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Model:</span>
                      <span className="font-bold text-purple-300">{currentModule.uiMockup.controlBar.model || 'Veo 3.1 Pro'}</span>
                    </div>
                    {currentModule.uiMockup.controlBar.threads && (
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">Threads:</span>
                        <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">
                          {currentModule.uiMockup.controlBar.threads}
                        </span>
                      </div>
                    )}
                    {currentModule.uiMockup.controlBar.ratio && (
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">Ratio:</span>
                        <span className="font-medium text-slate-200">{currentModule.uiMockup.controlBar.ratio}</span>
                      </div>
                    )}
                    {currentModule.uiMockup.controlBar.customInfo && (
                      <div className="text-emerald-400 font-medium">
                        {currentModule.uiMockup.controlBar.customInfo}
                      </div>
                    )}
                  </div>

                  {/* Special Live Dialogue Audio Sample Player for Voice Module */}
                  {currentModule.id === 'voice-tts' && (
                    <div className="mb-4 p-3.5 rounded-xl bg-gradient-to-r from-purple-950/70 via-slate-900 to-indigo-950/70 border border-purple-500/40 shadow-lg">
                      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-purple-200">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>Mẫu Voice Hội Thoại Đa Dạng Tiếng Nói Thực Tế (kinxts_conv.wav)</span>
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                          320kbps WAV
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={handleToggleSampleWav}
                          className={`px-3 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-all shadow cursor-pointer ${
                            isPlayingSampleWav
                              ? 'bg-rose-600 hover:bg-rose-500 text-white animate-pulse'
                              : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white'
                          }`}
                        >
                          {isPlayingSampleWav ? (
                            <>
                              <Square className="w-3.5 h-3.5 fill-current" />
                              <span>Dừng nghe</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5 fill-current" />
                              <span>Nghe thử hội thoại mẫu (0:15)</span>
                            </>
                          )}
                        </button>

                        <div className="flex-1 hidden sm:flex items-center gap-1.5 h-6">
                          {[30, 70, 45, 90, 60, 100, 40, 80, 55, 95, 75, 50, 85, 60, 40].map((h, i) => (
                            <span
                              key={i}
                              style={{
                                height: isPlayingSampleWav ? `${Math.max(20, (h * (Math.sin(i + sampleWavTime * 4) + 1.2)) / 2.2)}%` : '25%',
                                transition: 'height 0.15s ease',
                              }}
                              className={`flex-1 rounded-sm ${isPlayingSampleWav ? 'bg-purple-400' : 'bg-slate-700'}`}
                            />
                          ))}
                        </div>

                        <a
                          href={AUDIO_SAMPLES.dialogueConversation}
                          download="kinxts_conv_sample.wav"
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs border border-slate-700 flex items-center gap-1"
                        >
                          <Download className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="hidden sm:inline">Tải file .wav</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Specific Screen Simulated Content */}
                  <div className="space-y-3">
                    {Array.isArray(currentModule.uiMockup.sampleContent) ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentModule.uiMockup.sampleContent.map((item: any, idx: number) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors"
                          >
                            <div className="flex items-center justify-between text-[11px] mb-2">
                              <span className="font-bold text-slate-300">{item.name || item.scene || item.task || `Scene #${idx + 1}`}</span>
                              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">
                                {item.status || 'OK'}
                              </span>
                            </div>
                            <div className="rounded-lg bg-slate-950 p-2 text-[11px] text-slate-400 font-mono line-clamp-3 mb-2">
                              {item.prompt || item.text || item.desc || item.product}
                            </div>
                            <div className="flex items-center justify-between text-[10px] text-slate-500">
                              <span>{item.duration || item.voice || item.char || '720p 60fps'}</span>
                              <button
                                type="button"
                                onClick={() => handleToggleVoicePreview(item.text || item.prompt || item.desc || item.name)}
                                className={`flex items-center gap-1 font-semibold transition-colors cursor-pointer ${
                                  playingItemText === (item.text || item.prompt || item.desc || item.name)
                                    ? 'text-rose-400 animate-pulse'
                                    : 'text-purple-400 hover:text-purple-300'
                                }`}
                              >
                                {playingItemText === (item.text || item.prompt || item.desc || item.name) ? (
                                  <>
                                    <Square className="w-2.5 h-2.5 fill-current" /> {uiTexts.readingAudio}
                                  </>
                                ) : (
                                  <>
                                    <Play className="w-2.5 h-2.5 fill-current" /> {uiTexts.listenAudio}
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                        {currentModule.uiMockup.sampleContent.idea && (
                          <div>
                            <label className="text-[11px] text-slate-400 font-semibold block mb-1">{uiTexts.sceneScriptIdea}</label>
                            <div className="p-2.5 rounded-lg bg-slate-950 text-slate-200 text-xs font-mono">
                              {currentModule.uiMockup.sampleContent.idea}
                            </div>
                          </div>
                        )}
                        {currentModule.uiMockup.sampleContent.tags && (
                          <div>
                            <label className="text-[11px] text-slate-400 font-semibold block mb-1">{uiTexts.selectedGenre}</label>
                            <div className="flex flex-wrap gap-1.5">
                              {currentModule.uiMockup.sampleContent.tags.map((t: string, i: number) => (
                                <span key={i} className="px-2 py-1 rounded bg-purple-950/60 text-purple-300 border border-purple-500/30 text-[11px]">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {currentModule.uiMockup.sampleContent.options && (
                          <div className="space-y-1.5">
                            <label className="text-[11px] text-slate-400 font-semibold block">{uiTexts.scriptExtractTask}</label>
                            {currentModule.uiMockup.sampleContent.options.map((opt: string, i: number) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-slate-300 p-1.5 rounded bg-slate-950/40">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                <span>{opt}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {currentModule.uiMockup.sampleContent.title && (
                          <div className="p-4 rounded-xl bg-slate-950 text-center border border-purple-500/30">
                            <p className="text-base font-black text-amber-400">{currentModule.uiMockup.sampleContent.title}</p>
                            <p className="text-xs text-slate-300 mt-1 font-medium">{currentModule.uiMockup.sampleContent.subtitle}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* INTERACTIVE HOTSPOTS CALLOUTS */}
                  {currentModule.hotspots.map((hotspot) => {
                    const isActive = activeHotspot?.id === hotspot.id;
                    return (
                      <div
                        key={hotspot.id}
                        style={{
                          position: 'absolute',
                          left: `${hotspot.xPercent}%`,
                          top: `${hotspot.yPercent}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                        className="z-20 group"
                      >
                        {/* Pulsing Radar Pin */}
                        <button
                          onClick={() => setActiveHotspot(isActive ? null : hotspot)}
                          onMouseEnter={() => setActiveHotspot(hotspot)}
                          className="relative flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white shadow-xl shadow-purple-600/50 hover:scale-125 transition-transform duration-200"
                          title={hotspot.title}
                        >
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 pointer-events-none" />
                          <span className="relative text-xs font-black">✦</span>
                        </button>

                        {/* Floating Hotspot Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 p-2.5 rounded-xl bg-[#0F172A] border border-purple-500/60 shadow-2xl text-left z-30 pointer-events-none">
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-500/30 text-purple-200">
                            {hotspot.badge}
                          </span>
                          <p className="text-xs font-bold text-white mt-1">{hotspot.title}</p>
                          <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">{hotspot.description}</p>
                        </div>
                      </div>
                    );
                  })}

                  {/* Hotspot Guide Hint Bottom Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                      {uiTexts.touchPinsHint}
                    </span>
                    <span className="text-emerald-400 font-semibold">
                      {uiTexts.allModulesCount}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
