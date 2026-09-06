import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Download,
  Play,
  Sparkles,
  ShieldCheck,
  Zap,
  Users,
  Film,
  Cpu,
  Flame,
  ArrowRight,
  Monitor,
  Apple,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { APP_IMAGES } from '../data/images';
import { APP_LINKS } from '../data/kinxData';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroProps {
  onScrollToDownload: () => void;
  onOpenLeadModal: () => void;
  onSelectFeatureTab: (tabId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToDownload,
  onOpenLeadModal,
  onSelectFeatureTab,
}) => {
  const { t, language } = useLanguage();
  const [showcaseMode, setShowcaseMode] = useState<'video' | 'screenshots'>('video');
  const [selectedPreviewImage, setSelectedPreviewImage] = useState<
    'videoFlow' | 'character' | 'voice' | 'comic' | 'ecommerce' | 'thumbnail' | 'script'
  >('videoFlow');

  const handleDownloadClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    onScrollToDownload();
  };

  const uiTexts = {
    vi: {
      announcement: 'Tích Hợp Google Veo 3.1 & Nano Banana Pro Mới Nhất',
      cleanSecurity: '100% Sạch Mã Độc - Không Quảng Cáo',
      videoTitle: 'Kinx Auto v4.6.1 - Video Giới Thiệu Tính Năng',
      btnVideo: 'Xem Video Nhúng Trực Tiếp',
      btnScreenshots: 'Ảnh Giao Diện 12 Module',
      videoDescHeader: 'Video Demo Toàn Diện Các Tính Năng Kinx Auto v4.6.1',
      videoDescText: 'Tự động viết kịch bản, sinh prompt, lồng tiếng Voice AI & render video Veo 3.1 đa luồng không giới hạn.',
      openYoutube: 'Mở trên YouTube',
      downloadSetup: 'Tải Bản Cài Đặt',
      realPhotosLabel: 'Ảnh thực tế phần mềm:',
      queueHeader: 'HÀNG ĐỢI RENDER VEO 3.1',
      queueStatus: 'Đang chạy đa luồng',
      queueDesc: 'Tự động hóa 100% quy trình sản xuất video AI chuẩn 1080p',
      modelLabel: 'Model sinh video:',
      charLockLabel: 'Khóa nhân vật:',
      charLockValue: '100% Khớp khuôn mặt',
      voiceLabel: 'Bộ giọng lồng tiếng:',
      voiceValue: 'Edge TTS Hoài My 0đ',
      supportLabel: 'Zalo hỗ trợ:',
      supportValue: '0563.402.950',
      sampleIllustration: 'MINH HỌA THỰC TẾ',
      softwareScreenshot: 'Ảnh chụp trực tiếp từ phần mềm Kinx Auto v4.6.1',
      exportLocal: 'Tự động xuất 100% Local',
      stat1: 'Content Creator Tin Dùng',
      stat2: 'Video AI Đã Xuất Bản',
      stat3: 'Tiết Kiệm Thời Gian & Chi Phí',
      stat4: 'Zalo Kỹ Thuật Hỗ Trợ 1-1',
      tabs: {
        videoFlow: { label: '🎬 Tạo Video Flow', tag: 'Veo 3.1', badge: 'Tạo Video Flow - Veo 3.1', desc: 'Giao diện tính năng Tạo Video Flow với Veo 3.1 đa luồng tốc độ cao' },
        character: { label: '👥 NV Đồng Nhất', tag: '100% Khóa mặt', badge: '100% NV Đồng Nhất', desc: 'Giao diện tính năng NV Đồng Nhất - Khóa chuẩn 100% diện mạo nhân vật' },
        voice: { label: '🎙️ Tạo Voice AI', tag: 'Edge TTS 0đ', badge: 'Edge TTS Studio', desc: 'Giao diện tính năng Tạo Voice Edge TTS miễn phí đa luồng' },
        comic: { label: '📖 Tạo Truyện Tranh', tag: 'BETA', badge: 'AI Comic Book BETA', desc: 'Giao diện tính năng Tạo Truyện Tranh AI phân cảnh sinh động kèm ô thoại' },
        ecommerce: { label: '🛍️ Video TMĐT KOL', tag: 'TikTok Shop', badge: 'Video TMĐT & KOL', desc: 'Giao diện tính năng Video TMĐT AI ghép ảnh KOL chung và sản phẩm' },
        thumbnail: { label: '🖼️ Thumbnail YouTube', tag: 'Tăng CTR', badge: 'YouTube Thumbnail Pro', desc: 'Giao diện tính năng Tạo Thumbnail YouTube giật tít tương phản cao' },
        script: { label: '📝 Kịch Bản AI', tag: 'Gemini Engine', badge: 'AI Kịch Bản Master', desc: 'Giao diện tính năng Tạo Kịch Bản bằng AI tự động phân cảnh 3 hồi' },
      }
    },
    en: {
      announcement: 'Powered by Google Veo 3.1 & Nano Banana Pro Engine',
      cleanSecurity: '100% Clean & Verified - No Ads',
      videoTitle: 'Kinx Auto v4.6.1 - Official Feature Walkthrough',
      btnVideo: 'Watch Direct Video Demo',
      btnScreenshots: '12 Modules Screenshots',
      videoDescHeader: 'Comprehensive Feature Walkthrough of Kinx Auto v4.6.1',
      videoDescText: 'Auto script writing, prompt builder, studio voiceovers & unlimited multi-threaded Veo 3.1 rendering.',
      openYoutube: 'Open on YouTube',
      downloadSetup: 'Download Installer',
      realPhotosLabel: 'Software live captures:',
      queueHeader: 'VEO 3.1 RENDER QUEUE',
      queueStatus: 'Multi-threading Active',
      queueDesc: '100% automated AI video production pipeline in 1080p HD',
      modelLabel: 'Video Model:',
      charLockLabel: 'Character Lock:',
      charLockValue: '100% Facial Landmark Match',
      voiceLabel: 'Voice Engine:',
      voiceValue: 'Edge TTS Studio ($0 Cost)',
      supportLabel: 'Tech Support:',
      supportValue: '24/7 Live Desk',
      sampleIllustration: 'LIVE DEMO CAPTURE',
      softwareScreenshot: 'Direct screenshot from Kinx Auto v4.6.1 interface',
      exportLocal: '100% Local Auto Export',
      stat1: 'Active Content Creators',
      stat2: 'AI Videos Published',
      stat3: 'Time & Cost Saved',
      stat4: '24/7 Dedicated 1-on-1 Support',
      tabs: {
        videoFlow: { label: '🎬 Batch Video Flow', tag: 'Veo 3.1', badge: 'Video Flow - Veo 3.1 Multi-Thread', desc: 'Batch video rendering interface powered by Google Veo 3.1 with ultra-high speed' },
        character: { label: '👥 Consistent Char', tag: '100% Lock', badge: '100% Consistent Character', desc: 'Face lock interface ensuring zero identity drift across all narrative scenes' },
        voice: { label: '🎙️ AI Voice Studio', tag: 'Edge TTS $0', badge: 'Neural Edge TTS Studio', desc: 'Free multi-threaded studio neural narration across 50+ languages' },
        comic: { label: '📖 AI Comic Book', tag: 'BETA', badge: 'AI Comic Book BETA', desc: 'Manga & Webtoon generation panel breakdown with speech bubbles' },
        ecommerce: { label: '🛍️ E-Com KOL Video', tag: 'TikTok Shop', badge: 'E-Commerce & Virtual KOL', desc: 'High-converting TikTok Shop review videos featuring unified avatar' },
        thumbnail: { label: '🖼️ YouTube Thumbnail', tag: 'High CTR', badge: 'YouTube Thumbnail Pro', desc: 'High-contrast cinematic thumbnails engineered for maximum CTR' },
        script: { label: '📝 AI Script Master', tag: 'Gemini Engine', badge: 'AI Script & Story Master', desc: 'AI scriptwriting engine creating viral 3-act scripts from any prompt' },
      }
    },
    ja: {
      announcement: '最新 Google Veo 3.1 ＆ Nano Banana Pro 搭載',
      cleanSecurity: '100% 安全認証済み・広告なし',
      videoTitle: 'Kinx Auto v4.6.1 - 公式機能紹介デモ動画',
      btnVideo: '動画デモを直接再生',
      btnScreenshots: '12大モジュールUI画面',
      videoDescHeader: 'Kinx Auto v4.6.1 全機能総合デモ動画',
      videoDescText: '台本自動生成、プロンプト作成、スタジオ品質音声合成、Veo 3.1並列レンダリングを完全自動化。',
      openYoutube: 'YouTubeで開く',
      downloadSetup: 'インストーラーをダウンロード',
      realPhotosLabel: 'ソフトの実際の操作画面:',
      queueHeader: 'VEO 3.1 レンダリングキュー',
      queueStatus: 'マルチスレッド並列実行中',
      queueDesc: '1080p映画品質AI動画制作パイプラインを100%自動化',
      modelLabel: '動画生成モデル:',
      charLockLabel: 'キャラクター固定:',
      charLockValue: '100% 顔認識一致',
      voiceLabel: '音声合成エンジン:',
      voiceValue: 'Edge TTS 無料スタジオ',
      supportLabel: 'サポート窓口:',
      supportValue: '24時間年中無休',
      sampleIllustration: '実際の操作例',
      softwareScreenshot: 'Kinx Auto v4.6.1 本番環境からのキャプチャ',
      exportLocal: 'PCへ100%ローカル直接保存',
      stat1: '導入クリエイター数',
      stat2: '生成済みAI動画本数',
      stat3: '制作時間・コスト削減率',
      stat4: '24時間 1対1 技術サポート',
      tabs: {
        videoFlow: { label: '🎬 ビデオフロー生成', tag: 'Veo 3.1', badge: 'ビデオフロー - Veo 3.1', desc: 'Google Veo 3.1によるマルチスレッド超高速バッチ動画生成画面' },
        character: { label: '👥 キャラクター固定', tag: '100%固定', badge: '100% キャラクター固定', desc: '全シーンで主人公の顔立ちと衣装を100%完全固定する画面' },
        voice: { label: '🎙️ AI音声スタジオ', tag: 'Edge TTS 0円', badge: 'Edge TTS スタジオ', desc: '完全無料で多言語対応のマルチスレッド自然音声生成画面' },
        comic: { label: '📖 AI漫画生成', tag: 'BETA', badge: 'AI漫画・Webtoon BETA', desc: 'ストーリーからコマ割り・吹き出し付き漫画ページを自動生成する画面' },
        ecommerce: { label: '🛍️ EC・KOL動画', tag: 'TikTok Shop', badge: 'EC・バーチャルKOL動画', desc: '同一バーチャルモデルによるTikTok Shop向け商品レビュー動画生成画面' },
        thumbnail: { label: '🖼️ サムネイル作成', tag: 'CTR向上', badge: 'YouTube サムネイル Pro', desc: 'クリック率を最大化する高コントラスト映画調サムネイル生成画面' },
        script: { label: '📝 AI台本作成', tag: 'Gemini Engine', badge: 'AI 台本・ストーリー生成', desc: 'プロンプトから視聴維持率の高い3幕構成台本を自動作成する画面' },
      }
    },
    zh: {
      announcement: '全面搭载最新 Google Veo 3.1 与 Nano Banana Pro 引擎',
      cleanSecurity: '100% 绿色安全无插件 - 无广告',
      videoTitle: 'Kinx Auto v4.6.1 - 官方全功能实测演示视频',
      btnVideo: '在线播放演示视频',
      btnScreenshots: '12大核心模块界面截图',
      videoDescHeader: 'Kinx Auto v4.6.1 全功能综合实操演示视频',
      videoDescText: '自动撰写脚本、智能分镜指令、AI专业配音与 Veo 3.1 多线程高速渲染一站式闭环。',
      openYoutube: '在 YouTube 上播放',
      downloadSetup: '下载正式安装包',
      realPhotosLabel: '软件实际运行截图：',
      queueHeader: 'VEO 3.1 渲染任务队列',
      queueStatus: '多线程并发运行中',
      queueDesc: '100% 全自动化 1080p 高清 AI 视频生产闭环',
      modelLabel: '视频生成模型：',
      charLockLabel: '角色一致性：',
      charLockValue: '100% 面部特征深度锁定',
      voiceLabel: '配音引擎：',
      voiceValue: 'Edge TTS 免费录音棚 (0成本)',
      supportLabel: '技术支持：',
      supportValue: '24小时在线服务',
      sampleIllustration: '真实效果演示',
      softwareScreenshot: 'Kinx Auto v4.6.1 正式版系统实机截图',
      exportLocal: '100% 本地极速直接导出',
      stat1: '全球活跃创作者',
      stat2: '累计导出 AI 视频',
      stat3: '综合时间与成本节省',
      stat4: '24小时专属 1 对 1 技术服务',
      tabs: {
        videoFlow: { label: '🎬 批量视频生成', tag: 'Veo 3.1', badge: '批量视频生成 - Veo 3.1 多线程', desc: '基于 Google Veo 3.1 的多线程超高速批量视频渲染控制台' },
        character: { label: '👥 角色一致性', tag: '100%锁脸', badge: '100% 角色一致性锁定', desc: '跨分镜深度面部特征与服装锁定，彻底解决画面崩脸问题' },
        voice: { label: '🎙️ AI 配音工作台', tag: 'Edge TTS 0元', badge: 'Edge TTS 录音棚', desc: '免费终身使用的多线程专业广播级神经网络多语种配音引擎' },
        comic: { label: '📖 AI 漫画分镜', tag: 'BETA', badge: 'AI 漫画与条漫 BETA', desc: '文本一键智能分镜、角色固定与对话气泡全自动排版生成' },
        ecommerce: { label: '🛍️ 电商带货视频', tag: 'TikTok Shop', badge: '电商带货与虚拟KOL', desc: '统一虚拟数字人模特面孔的高转化 TikTok Shop 商品评测视频' },
        thumbnail: { label: '🖼️ YouTube 封面', tag: '高点击率', badge: '爆款 YouTube 封面 Pro', desc: '高对比度、电影级立体字与夸张表情的 YouTube 爆款封面生成器' },
        script: { label: '📝 AI 剧本创作', tag: 'Gemini Engine', badge: 'AI 剧本故事生成器', desc: '输入简短构思自动生成符合黄金3幕式节奏的专业分镜剧本' },
      }
    },
  }[language] || {
    announcement: 'Tích Hợp Google Veo 3.1 & Nano Banana Pro Mới Nhất',
    cleanSecurity: '100% Sạch Mã Độc - Không Quảng Cáo',
    videoTitle: 'Kinx Auto v4.6.1 - Video Giới Thiệu Tính Năng',
    btnVideo: 'Xem Video Nhúng Trực Tiếp',
    btnScreenshots: 'Ảnh Giao Diện 12 Module',
    videoDescHeader: 'Video Demo Toàn Diện Các Tính Năng Kinx Auto v4.6.1',
    videoDescText: 'Tự động viết kịch bản, sinh prompt, lồng tiếng Voice AI & render video Veo 3.1 đa luồng không giới hạn.',
    openYoutube: 'Mở trên YouTube',
    downloadSetup: 'Tải Bản Cài Đặt',
    realPhotosLabel: 'Ảnh thực tế phần mềm:',
    queueHeader: 'HÀNG ĐỢI RENDER VEO 3.1',
    queueStatus: 'Đang chạy đa luồng',
    queueDesc: 'Tự động hóa 100% quy trình sản xuất video AI chuẩn 1080p',
    modelLabel: 'Model sinh video:',
    charLockLabel: 'Khóa nhân vật:',
    charLockValue: '100% Khớp khuôn mặt',
    voiceLabel: 'Bộ giọng lồng tiếng:',
    voiceValue: 'Edge TTS Hoài My 0đ',
    supportLabel: 'Zalo hỗ trợ:',
    supportValue: '0563.402.950',
    sampleIllustration: 'MINH HỌA THỰC TẾ',
    softwareScreenshot: 'Ảnh chụp trực tiếp từ phần mềm Kinx Auto v4.6.1',
    exportLocal: 'Tự động xuất 100% Local',
    stat1: 'Content Creator Tin Dùng',
    stat2: 'Video AI Đã Xuất Bản',
    stat3: 'Tiết Kiệm Thời Gian & Chi Phí',
    stat4: 'Zalo Kỹ Thuật Hỗ Trợ 1-1',
    tabs: {
      videoFlow: { label: '🎬 Tạo Video Flow', tag: 'Veo 3.1', badge: 'Tạo Video Flow - Veo 3.1', desc: 'Giao diện tính năng Tạo Video Flow với Veo 3.1 đa luồng tốc độ cao' },
      character: { label: '👥 NV Đồng Nhất', tag: '100% Khóa mặt', badge: '100% NV Đồng Nhất', desc: 'Giao diện tính năng NV Đồng Nhất - Khóa chuẩn 100% diện mạo nhân vật' },
      voice: { label: '🎙️ Tạo Voice AI', tag: 'Edge TTS 0đ', badge: 'Edge TTS Studio', desc: 'Giao diện tính năng Tạo Voice Edge TTS miễn phí đa luồng' },
      comic: { label: '📖 Tạo Truyện Tranh', tag: 'BETA', badge: 'AI Comic Book BETA', desc: 'Giao diện tính năng Tạo Truyện Tranh AI phân cảnh sinh động kèm ô thoại' },
      ecommerce: { label: '🛍️ Video TMĐT KOL', tag: 'TikTok Shop', badge: 'Video TMĐT & KOL', desc: 'Giao diện tính năng Video TMĐT AI ghép ảnh KOL chung và sản phẩm' },
      thumbnail: { label: '🖼️ Thumbnail YouTube', tag: 'Tăng CTR', badge: 'YouTube Thumbnail Pro', desc: 'Giao diện tính năng Tạo Thumbnail YouTube giật tít tương phản cao' },
      script: { label: '📝 Kịch Bản AI', tag: 'Gemini Engine', badge: 'AI Kịch Bản Master', desc: 'Giao diện tính năng Tạo Kịch Bản bằng AI tự động phân cảnh 3 hồi' },
    }
  };

  const featureBadges = [
    { label: t('hero.featureChips.veo', 'Veo 3.1 Đa Luồng'), icon: Sparkles, color: 'text-purple-400', featureId: 'veo-flow' },
    { label: t('hero.featureChips.character', 'Khóa Nhân Vật Đồng Nhất 100%'), icon: Users, color: 'text-cyan-400', featureId: 'consistent-character' },
    { label: t('hero.featureChips.youtube', 'Tách Kịch Bản Từ Video'), icon: Film, color: 'text-amber-400', featureId: 'youtube-analyzer' },
    { label: t('hero.featureChips.edgeTts', 'Edge TTS Voice 0đ Miễn Phí'), icon: Cpu, color: 'text-emerald-400', featureId: 'voice-tts' },
  ];

  const currentTab = uiTexts.tabs[selectedPreviewImage] || uiTexts.tabs.videoFlow;

  return (
    <section className="relative pt-24 pb-10 lg:pt-28 lg:pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/20 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-700/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-700/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Announcement Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-purple-500/30 text-xs sm:text-sm font-semibold text-purple-300 mb-6 shadow-inner"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-white font-bold">KINX AUTO V4.6.1</span>
            <span className="text-slate-400">|</span>
            <span className="flex items-center gap-1 text-slate-200">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              {uiTexts.announcement}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] sm:leading-[1.15]"
          >
            {t('hero.titleHighlight1', 'Phần Mềm Tự Động Hóa')}{' '}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              {t('hero.titleHighlight2', 'Sáng Tạo Video AI')}
            </span>{' '}
            {t('hero.titleHighlight3', 'Hàng Loạt')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            {t('hero.subtitle', 'Sản xuất hàng trăm video mỗi ngày cho YouTube Shorts, TikTok & Reels. Tự động viết kịch bản, lồng tiếng truyền cảm, render video Veo 3.1 đa luồng và khóa chuẩn 100% nhân vật đồng nhất.')}
          </motion.p>

          {/* Quick Feature Badges (Clickable to jump to feature) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {featureBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <button
                  key={badge.label}
                  onClick={() => onSelectFeatureTab(badge.featureId)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/50 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-all shadow-sm group cursor-pointer"
                >
                  <Icon className={`w-4 h-4 ${badge.color} group-hover:scale-110 transition-transform`} />
                  <span>{badge.label}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={handleDownloadClick}
              className="glow-button w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 text-white font-bold text-base shadow-xl shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Download className="w-5 h-5 animate-bounce" />
              <span>{t('hero.buttons.downloadWindows', 'Tải Phần Mềm Miễn Phí (v4.6.1)')}</span>
            </button>

            <button
              onClick={onOpenLeadModal}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-slate-800/90 hover:bg-slate-700/90 text-white font-bold text-sm sm:text-base border border-slate-700/80 hover:border-cyan-500/50 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>{t('hero.buttons.tryFree', 'Đăng Ký Dùng Thử Miễn Phí')}</span>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
            </button>
          </motion.div>

          {/* Compatibility & Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400"
          >
            <div className="flex items-center gap-1.5">
              <Monitor className="w-3.5 h-3.5 text-blue-400" />
              <span>Windows 10 / 11 (64-bit)</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Apple className="w-3.5 h-3.5 text-slate-200" />
              <span>macOS (Apple Silicon & Intel)</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{uiTexts.cleanSecurity}</span>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Interactive Software Showcase Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 lg:mt-16 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-purple-500/40 via-slate-800/40 to-slate-900/60 shadow-2xl shadow-purple-950/40">
            {/* App Window Frame */}
            <div className="rounded-[14px] bg-[#0F172A] overflow-hidden border border-slate-700/60">
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#0B0F19] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-300 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    {uiTexts.videoTitle}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowcaseMode('video')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      showcaseMode === 'video'
                        ? 'bg-red-600 text-white shadow-md shadow-red-600/30 border border-red-400/50'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{uiTexts.btnVideo}</span>
                  </button>
                  <button
                    onClick={() => setShowcaseMode('screenshots')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      showcaseMode === 'screenshots'
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 border border-purple-400/50'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{uiTexts.btnScreenshots}</span>
                  </button>
                </div>
              </div>

              {/* Window Interior Content */}
              <div className="p-3 sm:p-5 bg-gradient-to-b from-slate-950/95 to-[#0B0F19]">
                {showcaseMode === 'video' ? (
                  /* DIRECT EMBEDDED YOUTUBE VIDEO PLAYER */
                  <div className="space-y-4">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-slate-800 shadow-2xl">
                      <iframe
                        src="https://www.youtube.com/embed/C9Mu5d85g9E?rel=0"
                        title={uiTexts.videoTitle}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-2 text-xs">
                      <div>
                        <h3 className="font-bold text-white text-sm flex items-center gap-2">
                          <span>{uiTexts.videoDescHeader}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-extrabold bg-red-500/20 text-red-400 border border-red-500/30">
                            YouTube HD
                          </span>
                        </h3>
                        <p className="text-slate-400 text-xs mt-0.5">
                          {uiTexts.videoDescText}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={APP_LINKS.videoIntro}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-purple-300 hover:text-white font-medium flex items-center gap-1.5 border border-slate-700 transition-all"
                        >
                          <span>{uiTexts.openYoutube}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={onScrollToDownload}
                          className="glow-button px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold flex items-center gap-1.5 shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>{uiTexts.downloadSetup}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* MODULE SCREENSHOTS VIEW */
                  <div>
                    {/* Visual View Selector Tabs */}
                    <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1 no-scrollbar">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
                        {uiTexts.realPhotosLabel}
                      </span>
                      {[
                        { id: 'videoFlow', label: uiTexts.tabs.videoFlow.label, img: APP_IMAGES.videoFlow, tag: uiTexts.tabs.videoFlow.tag },
                        { id: 'character', label: uiTexts.tabs.character.label, img: APP_IMAGES.consistentCharacter, tag: uiTexts.tabs.character.tag },
                        { id: 'voice', label: uiTexts.tabs.voice.label, img: APP_IMAGES.voiceTts, tag: uiTexts.tabs.voice.tag },
                        { id: 'comic', label: uiTexts.tabs.comic.label, img: APP_IMAGES.comicBookGenerator, tag: uiTexts.tabs.comic.tag },
                        { id: 'ecommerce', label: uiTexts.tabs.ecommerce.label, img: APP_IMAGES.ecommerceKol, tag: uiTexts.tabs.ecommerce.tag },
                        { id: 'thumbnail', label: uiTexts.tabs.thumbnail.label, img: APP_IMAGES.youtubeThumbnail, tag: uiTexts.tabs.thumbnail.tag },
                        { id: 'script', label: uiTexts.tabs.script.label, img: APP_IMAGES.aiScriptGen, tag: uiTexts.tabs.script.tag },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setSelectedPreviewImage(tab.id as any)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                            selectedPreviewImage === tab.id
                              ? 'bg-purple-600/90 text-white border border-purple-400/50 shadow-md shadow-purple-600/20'
                              : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <span>{tab.label}</span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-black/40 text-purple-200 font-mono">
                            {tab.tag}
                          </span>
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      {/* Left Sidebar Mock */}
                      <div className="md:col-span-4 space-y-2.5">
                        <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/40">
                          <div className="flex items-center justify-between text-xs text-purple-300 font-bold mb-1">
                            <span>{uiTexts.queueHeader}</span>
                            <span className="text-emerald-400">{uiTexts.queueStatus}</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
                            <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full w-[85%] animate-pulse" />
                          </div>
                          <p className="text-[11px] text-slate-400 mt-2">
                            {uiTexts.queueDesc}
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
                          <div className="flex items-center justify-between text-slate-300">
                            <span>{uiTexts.modelLabel}</span>
                            <span className="font-mono text-purple-300 font-bold">Google Veo 3.1 & Nano</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-300">
                            <span>{uiTexts.charLockLabel}</span>
                            <span className="font-mono text-cyan-300 font-bold">{uiTexts.charLockValue}</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-300">
                            <span>{uiTexts.voiceLabel}</span>
                            <span className="font-mono text-emerald-300 font-bold">{uiTexts.voiceValue}</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-300">
                            <span>{uiTexts.supportLabel}</span>
                            <span className="font-mono text-cyan-300 font-bold">{uiTexts.supportValue}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Showcase Screen Visual with Real Image */}
                      <div className="md:col-span-8 relative">
                        <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 aspect-video flex flex-col justify-between p-3 shadow-2xl group">
                          {/* Real Image Render Background */}
                          <div className="absolute inset-0 -z-0">
                            <img
                              src={
                                selectedPreviewImage === 'videoFlow'
                                  ? APP_IMAGES.videoFlow
                                  : selectedPreviewImage === 'character'
                                  ? APP_IMAGES.consistentCharacter
                                  : selectedPreviewImage === 'voice'
                                  ? APP_IMAGES.voiceTts
                                  : selectedPreviewImage === 'comic'
                                  ? APP_IMAGES.comicBookGenerator
                                  : selectedPreviewImage === 'ecommerce'
                                  ? APP_IMAGES.ecommerceKol
                                  : selectedPreviewImage === 'thumbnail'
                                  ? APP_IMAGES.youtubeThumbnail
                                  : APP_IMAGES.aiScriptGen
                              }
                              alt="Kinx Auto UI"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-contain bg-slate-950/80 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
                          </div>

                          {/* Video Top Bar Overlay */}
                          <div className="relative z-10 flex items-center justify-between">
                            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-emerald-400 border border-emerald-500/40 flex items-center gap-1.5 shadow-lg">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                              KINX AUTO V4.6.1
                            </span>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-purple-950/80 backdrop-blur-md text-purple-200 border border-purple-500/40 shadow-lg">
                              {currentTab.badge}
                            </span>
                          </div>

                          {/* Video Prompt Subtitle Overlay */}
                          <div className="relative z-10 bg-black/85 backdrop-blur-md p-2.5 rounded-lg border border-slate-700/80 mt-auto">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                                {uiTexts.sampleIllustration}
                              </span>
                              <span className="text-[11px] text-slate-200 font-mono line-clamp-1">
                                {currentTab.desc}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-[11px] text-slate-400">
                              <span>{uiTexts.softwareScreenshot}</span>
                              <span className="text-emerald-400 font-semibold">{uiTexts.exportLocal}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div id="stats-bar" className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <p className="font-display font-extrabold text-2xl sm:text-4xl bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              15.000+
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{uiTexts.stat1}</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <p className="font-display font-extrabold text-2xl sm:text-4xl bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
              1.200.000+
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{uiTexts.stat2}</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <p className="font-display font-extrabold text-2xl sm:text-4xl bg-gradient-to-r from-cyan-400 to-emerald-300 bg-clip-text text-transparent">
              95%
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{uiTexts.stat3}</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <p className="font-display font-extrabold text-2xl sm:text-4xl bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
              24/7
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{uiTexts.stat4}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
