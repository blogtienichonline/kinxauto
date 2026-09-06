import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Download,
  Monitor,
  Apple,
  CheckCircle2,
  MessageCircle,
  Image as ImageIcon,
  Play,
  Video,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { USER_ATTACHMENT_IMAGES } from '../data/images';
import { APP_LINKS } from '../data/kinxData';
import { useLanguage } from '../context/LanguageContext';

interface DownloadSectionProps {
  onOpenLeadModal: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = () => {
  const { language } = useLanguage();
  const [downloadingOS, setDownloadingOS] = useState<string | null>(null);
  const [activePreviewImg, setActivePreviewImg] = useState<string>(USER_ATTACHMENT_IMAGES.videoFlow);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>, osName: 'Windows' | 'macOS') => {
    setDownloadingOS(osName);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setDownloadingOS(null);
    }, 2000);
  };

  const uiTexts = {
    vi: {
      badge: 'TRUNG TÂM TẢI PHẦN MỀM CHÍNH THỨC',
      title: 'Tải Kinx Auto',
      titleHighlight: 'Phiên Bản 4.6.1',
      subtitle: 'Cài đặt nhanh chóng chỉ trong 1 phút. Hoàn toàn tương thích với Windows 10/11 và macOS.',
      liveScreensLabel: 'ẢNH GIAO DIỆN BẢN CÀI ĐẶT THỰC TẾ:',
      thumbs: {
        videoFlow: 'Tạo Video Flow',
        charLock: 'Khóa Nhân Vật',
        voice: 'Tạo Voice AI',
        script: 'Tạo Kịch Bản',
        thumbnail: 'Thumbnail YouTube',
        ecommerce: 'Video TMĐT KOL',
      },
      imgBottomLeft: '✓ Đầy đủ tính năng như trong hình',
      imgBottomRight: 'Bản chuẩn 100% không gắn quảng cáo',
      winCard: {
        badge: 'Bản Mới Nhất (v4.6.1)',
        title: 'Kinx Auto cho Windows',
        compat: 'Tương thích: Windows 10, Windows 11 (64-bit). Hỗ trợ cài đặt tự động.',
        feat1: 'Dung lượng bộ cài: ~145 MB',
        feat2: 'Tích hợp sẵn Google Veo 3.1 & Nano Banana Pro',
        feat3: 'Tự động cập nhật bản vá lỗi mới',
        btnDownloading: 'Đang Khởi Động Tải...',
        btnDownload: 'Tải Bộ Cài Windows (.exe)',
        note: 'Link tải trực tiếp từ máy chủ tốc độ cao • Hỗ trợ Windows 10/11',
      },
      macCard: {
        badge: 'Apple Silicon & Intel',
        title: 'Kinx Auto cho macOS',
        compat: 'Tương thích: macOS Monterey, Ventura, Sonoma, Sequoia (M1/M2/M3/M4 & Intel).',
        feat1: 'Dung lượng bộ cài: ~160 MB (.dmg)',
        feat2: 'Tối ưu hóa đa nhân Apple Silicon siêu êm',
        feat3: 'Không cần cài đặt phức tạp, kéo thả là chạy',
        btnDownloading: 'Đang Khởi Động Tải...',
        btnDownload: 'Tải Bộ Cài macOS (.dmg)',
        note: 'Hỗ trợ chip Apple Silicon M1/M2/M3/M4 và chip Intel',
      },
      tutorial: {
        badge: 'VIDEO HƯỚNG DẪN CÀI ĐẶT CHI TIẾT',
        title: 'Xem Video Hướng Dẫn Tải & Cài Đặt Kinx Auto',
        desc: 'Xem từng bước thao tác thực tế từ tải về, giải nén đến cài đặt và bắt đầu sử dụng phần mềm.',
        openYoutube: 'Mở trên YouTube',
        guideFull: 'Video hướng dẫn đầy đủ từ A-Z',
        needRemote: 'Cần hỗ trợ qua Ultraview? Nhắn Zalo 0563.402.950',
      },
      stepsSection: {
        title: '3 Bước Để Bắt Đầu Tạo Video Trong 5 Phút',
        step1Title: 'Tải & Cài Đặt',
        step1Desc: 'Tải file cài đặt về máy tính và mở file để hoàn tất cài đặt tự động.',
        step2Title: 'Nâng Cấp Gói Tự Động',
        step2Desc: 'Nâng cấp gói tự động trực tiếp từ hệ thống để mở khóa toàn bộ 12 module, hoặc liên hệ Zalo 0563.402.950 để được hỗ trợ.',
        step3Title: 'Sản Xuất Video Triệu View',
        step3Desc: 'Nạp kịch bản, chọn luồng render và xuất bản hàng loạt video chất lượng cao.',
      },
      bannerSupport: {
        title: 'Bạn Cần Kỹ Thuật Viên Hỗ Trợ Cài Đặt Từ Xa?',
        desc: 'Nhắn ngay Zalo Kỹ Thuật: 0563.402.950 để được hỗ trợ qua Ultraview ngay tức thì.',
        btnChat: 'Chat Zalo Hỗ Trợ 24/7',
      }
    },
    en: {
      badge: 'OFFICIAL SOFTWARE DOWNLOAD HUB',
      title: 'Download Kinx Auto',
      titleHighlight: 'Version 4.6.1',
      subtitle: 'Lightning-fast 1-minute setup. Fully compatible with Windows 10/11 and macOS.',
      liveScreensLabel: 'LIVE INSTALLER INTERFACE CAPTURE:',
      thumbs: {
        videoFlow: 'Batch Video Flow',
        charLock: 'Consistent Char',
        voice: 'Voice Studio',
        script: 'Script Engine',
        thumbnail: 'YT Thumbnail',
        ecommerce: 'E-Com KOL Video',
      },
      imgBottomLeft: '✓ Complete features exactly as showcased',
      imgBottomRight: '100% Clean official build - No ads',
      winCard: {
        badge: 'Latest Release (v4.6.1)',
        title: 'Kinx Auto for Windows',
        compat: 'Compatibility: Windows 10, Windows 11 (64-bit). Auto-installer included.',
        feat1: 'Installer size: ~145 MB',
        feat2: 'Pre-integrated with Google Veo 3.1 & Nano Banana Pro',
        feat3: 'Automatic updates & patches',
        btnDownloading: 'Starting Download...',
        btnDownload: 'Download Windows Installer (.exe)',
        note: 'Direct high-speed CDN download • Supports Windows 10/11',
      },
      macCard: {
        badge: 'Apple Silicon & Intel',
        title: 'Kinx Auto for macOS',
        compat: 'Compatibility: macOS Monterey, Ventura, Sonoma, Sequoia (M1/M2/M3/M4 & Intel).',
        feat1: 'Installer size: ~160 MB (.dmg)',
        feat2: 'Multi-core hardware acceleration for Apple Silicon',
        feat3: 'No complex setup, drag-and-drop to launch',
        btnDownloading: 'Starting Download...',
        btnDownload: 'Download macOS Installer (.dmg)',
        note: 'Supports Apple Silicon M1/M2/M3/M4 and Intel processors',
      },
      tutorial: {
        badge: 'DETAILED STEP-BY-STEP SETUP VIDEO',
        title: 'Watch Setup & Installation Video Guide',
        desc: 'Watch the real-time walkthrough from downloading and extracting to running your first AI batch.',
        openYoutube: 'Open on YouTube',
        guideFull: 'Complete A-to-Z tutorial video',
        needRemote: 'Need remote setup support? Contact our 24/7 live team',
      },
      stepsSection: {
        title: '3 Quick Steps to Start Producing Videos in 5 Minutes',
        step1Title: 'Download & Install',
        step1Desc: 'Download the installer to your PC/Mac and run the auto-setup wizard.',
        step2Title: 'Instant Activation',
        step2Desc: 'Activate your plan directly inside the software or contact 24/7 support for instant 1-on-1 license provisioning.',
        step3Title: 'Produce Viral Videos',
        step3Desc: 'Load your scripts, set rendering threads, and publish dozens of high-retention videos effortlessly.',
      },
      bannerSupport: {
        title: 'Need a Senior Engineer to Guide Remote Setup?',
        desc: 'Contact our dedicated 24/7 technical hotline for immediate screen-share assistance.',
        btnChat: '24/7 Live Tech Chat',
      }
    },
    ja: {
      badge: '公式ソフトウェアダウンロードセンター',
      title: 'Kinx Auto',
      titleHighlight: 'バージョン 4.6.1 をダウンロード',
      subtitle: '1分でクイックインストール完了。Windows 10/11 および macOS に完全対応。',
      liveScreensLabel: '実際の操作画面プレビュー:',
      thumbs: {
        videoFlow: 'ビデオフロー',
        charLock: 'キャラクター固定',
        voice: '音声スタジオ',
        script: '台本生成',
        thumbnail: 'サムネイル作成',
        ecommerce: 'EC・KOL動画',
      },
      imgBottomLeft: '✓ 表示通りの全機能をそのまま搭載',
      imgBottomRight: '100% 安全認証・広告一切なし',
      winCard: {
        badge: '最新リリース (v4.6.1)',
        title: 'Windows 版 Kinx Auto',
        compat: '対応環境: Windows 10, Windows 11 (64-bit)。自動導入対応。',
        feat1: 'インストーラーサイズ: 約145MB',
        feat2: 'Google Veo 3.1 ＆ Nano Banana Pro 統合済み',
        feat3: '最新パッチ自動更新機能付き',
        btnDownloading: 'ダウンロード開始中...',
        btnDownload: 'Windows版をダウンロード (.exe)',
        note: '高速CDN直結ダウンロード • Windows 10/11 対応',
      },
      macCard: {
        badge: 'Apple Silicon & Intel 対応',
        title: 'macOS 版 Kinx Auto',
        compat: '対応環境: macOS Monterey, Ventura, Sonoma, Sequoia (M1/M2/M3/M4 & Intel)。',
        feat1: 'インストーラーサイズ: 約160MB (.dmg)',
        feat2: 'Apple Silicon 多コア最適化で超静音・爆速動作',
        feat3: '複雑な設定不要、ドラッグ＆ドロップですぐ起動',
        btnDownloading: 'ダウンロード開始中...',
        btnDownload: 'macOS版をダウンロード (.dmg)',
        note: 'Apple Silicon M1/M2/M3/M4 および Intel プロセッサ対応',
      },
      tutorial: {
        badge: '動画による詳細導入チュートリアル',
        title: 'Kinx Auto のダウンロード＆インストール手順動画',
        desc: 'ダウンロードから展開、インストール、初回動画生成までの全手順を分かりやすく解説。',
        openYoutube: 'YouTubeで開く',
        guideFull: 'AからZまで完全網羅の解説動画',
        needRemote: 'リモート導入サポートが必要ですか？24時間サポートへ',
      },
      stepsSection: {
        title: '5分で動画制作を開始する3つのステップ',
        step1Title: 'ダウンロード＆インストール',
        step1Desc: 'インストーラーをダウンロードし、起動して自動セットアップを完了します。',
        step2Title: '自動アクティベーション',
        step2Desc: 'システムから直接プランを有効化し全12モジュールを解放、またはサポートへご連絡ください。',
        step3Title: 'ミリオン再生動画を量産',
        step3Desc: '台本を読み込み、並列スレッドを設定して高品質な動画を量産・公開します。',
      },
      bannerSupport: {
        title: '専任エンジニアによるリモート導入サポートをご希望ですか？',
        desc: '24時間年中無休のリモートサポート窓口までお気軽にお問い合わせください。',
        btnChat: '24時間チャットサポート',
      }
    },
    zh: {
      badge: '官方软件下载与更新中心',
      title: '下载 Kinx Auto 官方正式版',
      titleHighlight: 'v4.6.1',
      subtitle: '极速 1 分钟免繁琐配置安装，全面适配 Windows 10/11 及 macOS 系统。',
      liveScreensLabel: '正式版软件实际界面图：',
      thumbs: {
        videoFlow: '批量视频生成',
        charLock: '角色一致性',
        voice: 'AI 配音录音棚',
        script: 'AI 剧本创作',
        thumbnail: 'YouTube 封面',
        ecommerce: '电商带货视频',
      },
      imgBottomLeft: '✓ 完整解锁所有实拍界面功能模块',
      imgBottomRight: '100% 官方绿色正式版 - 绝无任何广告',
      winCard: {
        badge: '最新稳定版 (v4.6.1)',
        title: 'Kinx Auto Windows 版',
        compat: '系统要求：Windows 10, Windows 11 (64位)。支持一键安装。',
        feat1: '安装包体积：约 145 MB',
        feat2: '内置搭载 Google Veo 3.1 与 Nano Banana Pro',
        feat3: '内置自动检查与无缝更新机制',
        btnDownloading: '正在启动下载...',
        btnDownload: '下载 Windows 正式版 (.exe)',
        note: '官方高速 CDN 直链下载 • 兼容 Windows 10/11',
      },
      macCard: {
        badge: '适配 Apple Silicon 与 Intel',
        title: 'Kinx Auto macOS 版',
        compat: '系统要求：macOS Monterey, Ventura, Sonoma, Sequoia (M1/M2/M3/M4 及 Intel)。',
        feat1: '安装包体积：约 160 MB (.dmg)',
        feat2: '深度针对 Apple Silicon 多核算力硬件加速',
        feat3: '免复杂环境依赖，拖拽即可即刻运行',
        btnDownloading: '正在启动下载...',
        btnDownload: '下载 macOS 正式版 (.dmg)',
        note: '完美原生支持 Apple Silicon M1/M2/M3/M4 与 Intel 处理器',
      },
      tutorial: {
        badge: '官方保姆级安装与使用视频教学',
        title: '观看 Kinx Auto 官方下载安装与快速上手指南',
        desc: '跟随视频手把手完成下载、解压、环境初始化及首次批量视频渲染。',
        openYoutube: '在 YouTube 上播放',
        guideFull: '全流程保姆级 A-Z 视频指南',
        needRemote: '需要远程协助配置？联系 24 小时技术团队',
      },
      stepsSection: {
        title: '只需 3 步，5 分钟内开启全自动视频创作',
        step1Title: '下载并安装软件',
        step1Desc: '将安装包下载到电脑，一键运行即可自动完成安装。',
        step2Title: '在线开通与激活',
        step2Desc: '在线一键开通解锁全部12大核心模块，或联系在线技术团队获取专属协助。',
        step3Title: '批量产出爆款视频',
        step3Desc: '导入分镜脚本，选择多线程渲染，极速批量导出高清视频并全网发布。',
      },
      bannerSupport: {
        title: '需要资深技术人员提供远程 1 对 1 安装协助？',
        desc: '立即联系 24 小时在线技术工程师，享受屏幕共享与全程专属调试服务。',
        btnChat: '24小时技术咨询与支持',
      }
    },
  }[language] || {
    badge: 'TRUNG TÂM TẢI PHẦN MỀM CHÍNH THỨC',
    title: 'Tải Kinx Auto',
    titleHighlight: 'Phiên Bản 4.6.1',
    subtitle: 'Cài đặt nhanh chóng chỉ trong 1 phút. Hoàn toàn tương thích với Windows 10/11 và macOS.',
    liveScreensLabel: 'ẢNH GIAO DIỆN BẢN CÀI ĐẶT THỰC TẾ:',
    thumbs: {
      videoFlow: 'Tạo Video Flow',
      charLock: 'Khóa Nhân Vật',
      voice: 'Tạo Voice AI',
      script: 'Tạo Kịch Bản',
      thumbnail: 'Thumbnail YouTube',
      ecommerce: 'Video TMĐT KOL',
    },
    imgBottomLeft: '✓ Đầy đủ tính năng như trong hình',
    imgBottomRight: 'Bản chuẩn 100% không gắn quảng cáo',
    winCard: {
      badge: 'Bản Mới Nhất (v4.6.1)',
      title: 'Kinx Auto cho Windows',
      compat: 'Tương thích: Windows 10, Windows 11 (64-bit). Hỗ trợ cài đặt tự động.',
      feat1: 'Dung lượng bộ cài: ~145 MB',
      feat2: 'Tích hợp sẵn Google Veo 3.1 & Nano Banana Pro',
      feat3: 'Tự động cập nhật bản vá lỗi mới',
      btnDownloading: 'Đang Khởi Động Tải...',
      btnDownload: 'Tải Bộ Cài Windows (.exe)',
      note: 'Link tải trực tiếp từ máy chủ tốc độ cao • Hỗ trợ Windows 10/11',
    },
    macCard: {
      badge: 'Apple Silicon & Intel',
      title: 'Kinx Auto cho macOS',
      compat: 'Tương thích: macOS Monterey, Ventura, Sonoma, Sequoia (M1/M2/M3/M4 & Intel).',
      feat1: 'Dung lượng bộ cài: ~160 MB (.dmg)',
      feat2: 'Tối ưu hóa đa nhân Apple Silicon siêu êm',
      feat3: 'Không cần cài đặt phức tạp, kéo thả là chạy',
      btnDownloading: 'Đang Khởi Động Tải...',
      btnDownload: 'Tải Bộ Cài macOS (.dmg)',
      note: 'Hỗ trợ chip Apple Silicon M1/M2/M3/M4 và chip Intel',
    },
    tutorial: {
      badge: 'VIDEO HƯỚNG DẪN CÀI ĐẶT CHI TIẾT',
      title: 'Xem Video Hướng Dẫn Tải & Cài Đặt Kinx Auto',
      desc: 'Xem từng bước thao tác thực tế từ tải về, giải nén đến cài đặt và bắt đầu sử dụng phần mềm.',
      openYoutube: 'Mở trên YouTube',
      guideFull: 'Video hướng dẫn đầy đủ từ A-Z',
      needRemote: 'Cần hỗ trợ qua Ultraview? Nhắn Zalo 0563.402.950',
    },
    stepsSection: {
      title: '3 Bước Để Bắt Đầu Tạo Video Trong 5 Phút',
      step1Title: 'Tải & Cài Đặt',
      step1Desc: 'Tải file cài đặt về máy tính và mở file để hoàn tất cài đặt tự động.',
      step2Title: 'Nâng Cấp Gói Tự Động',
      step2Desc: 'Nâng cấp gói tự động trực tiếp từ hệ thống để mở khóa toàn bộ 12 module, hoặc liên hệ Zalo 0563.402.950 để được hỗ trợ.',
      step3Title: 'Sản Xuất Video Triệu View',
      step3Desc: 'Nạp kịch bản, chọn luồng render và xuất bản hàng loạt video chất lượng cao.',
    },
    bannerSupport: {
      title: 'Bạn Cần Kỹ Thuật Viên Hỗ Trợ Cài Đặt Từ Xa?',
      desc: 'Nhắn ngay Zalo Kỹ Thuật: 0563.402.950 để được hỗ trợ qua Ultraview ngay tức thì.',
      btnChat: 'Chat Zalo Hỗ Trợ 24/7',
    }
  };

  const previewThumbnails = [
    { title: uiTexts.thumbs.videoFlow, img: USER_ATTACHMENT_IMAGES.videoFlow },
    { title: uiTexts.thumbs.charLock, img: USER_ATTACHMENT_IMAGES.consistentCharacter },
    { title: uiTexts.thumbs.voice, img: USER_ATTACHMENT_IMAGES.voiceTts },
    { title: uiTexts.thumbs.script, img: USER_ATTACHMENT_IMAGES.aiScriptGen },
    { title: uiTexts.thumbs.thumbnail, img: USER_ATTACHMENT_IMAGES.youtubeThumbnail },
    { title: uiTexts.thumbs.ecommerce, img: USER_ATTACHMENT_IMAGES.ecommerceKol },
  ];

  return (
    <section id="download-hub" className="py-10 sm:py-12 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-bold text-purple-300 mb-2">
            <Download className="w-3.5 h-3.5 text-purple-400" />
            <span>{uiTexts.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {uiTexts.title} <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">{uiTexts.titleHighlight}</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base">
            {uiTexts.subtitle}
          </p>
        </div>

        {/* Live Interface Preview Before Download */}
        <div className="max-w-4xl mx-auto mb-8 rounded-3xl bg-slate-900/90 border border-purple-500/30 p-4 sm:p-6 shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
              <ImageIcon className="w-4 h-4 text-purple-400" />
              <span>{uiTexts.liveScreensLabel}</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              {previewThumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePreviewImg(thumb.img)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all ${
                    activePreviewImg === thumb.img
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {thumb.title}
                </button>
              ))}
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 group shadow-inner">
            <img
              src={activePreviewImg}
              alt="Kinx Auto Screenshot"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain bg-[#060a12] transition-all duration-300"
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] text-slate-300 border border-slate-800">
              <span className="font-semibold text-cyan-300">{uiTexts.imgBottomLeft}</span>
              <span className="text-emerald-400 font-bold">{uiTexts.imgBottomRight}</span>
            </div>
          </div>
        </div>

        {/* Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Windows Download Card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-900/90 via-slate-900 to-[#0F172A] border-2 border-purple-500/40 shadow-2xl hover:border-purple-500 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Monitor className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {uiTexts.winCard.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">{uiTexts.winCard.title}</h3>
              <p className="text-xs text-slate-400 mt-1">
                {uiTexts.winCard.compat}
              </p>

              <div className="mt-6 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{uiTexts.winCard.feat1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{uiTexts.winCard.feat2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{uiTexts.winCard.feat3}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
              <a
                href={APP_LINKS.windowsDownload}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleDownload(e, 'Windows')}
                className="w-full glow-button py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-purple-600/30 transition-all text-center cursor-pointer"
              >
                <Download className="w-5 h-5 animate-bounce" />
                <span>{downloadingOS === 'Windows' ? uiTexts.winCard.btnDownloading : uiTexts.winCard.btnDownload}</span>
              </a>
              <p className="text-[11px] text-center text-slate-400">
                {uiTexts.winCard.note}
              </p>
            </div>
          </div>

          {/* macOS Download Card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-slate-800 text-slate-200 border border-slate-700">
                  <Apple className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {uiTexts.macCard.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">{uiTexts.macCard.title}</h3>
              <p className="text-xs text-slate-400 mt-1">
                {uiTexts.macCard.compat}
              </p>

              <div className="mt-6 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{uiTexts.macCard.feat1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{uiTexts.macCard.feat2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{uiTexts.macCard.feat3}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
              <a
                href={APP_LINKS.macosDownload}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleDownload(e, 'macOS')}
                className="w-full py-4 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 border border-slate-700 transition-all text-center cursor-pointer"
              >
                <Download className="w-5 h-5 text-purple-400" />
                <span>{downloadingOS === 'macOS' ? uiTexts.macCard.btnDownloading : uiTexts.macCard.btnDownload}</span>
              </a>
              <p className="text-[11px] text-center text-slate-400">
                {uiTexts.macCard.note}
              </p>
            </div>
          </div>
        </div>

        {/* Video Tutorial Guide */}
        <div className="mt-16 max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900 to-[#0F172A] border-2 border-indigo-500/40 p-5 sm:p-8 shadow-2xl overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-xs font-bold text-red-300 mb-2">
                <Video className="w-3.5 h-3.5 text-red-400" />
                <span>{uiTexts.tutorial.badge}</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-white">
                {uiTexts.tutorial.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {uiTexts.tutorial.desc}
              </p>
            </div>

            <a
              href="https://www.youtube.com/watch?v=0aOttL5NUlM&list=PLA_TsQk2kDiD9oCscM1CVhFfoCv1UW47z"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center gap-2 whitespace-nowrap shadow-lg shadow-red-600/30 transition-all shrink-0 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>{uiTexts.tutorial.openYoutube}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
            </a>
          </div>

          {/* Responsive YouTube Embed Container */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0aOttL5NUlM?list=PLA_TsQk2kDiD9oCscM1CVhFfoCv1UW47z"
              title="Kinx Auto Installation Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{uiTexts.tutorial.guideFull}</span>
            </div>
            <a
              href="https://zalo.me/0563402950"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline font-medium"
            >
              {uiTexts.tutorial.needRemote}
            </a>
          </div>
        </div>

        {/* 3 Quick Installation Steps */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-center font-display text-xl sm:text-2xl font-bold text-white mb-8">
            {uiTexts.stepsSection.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                1
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{uiTexts.stepsSection.step1Title}</h4>
              <p className="text-xs text-slate-400">{uiTexts.stepsSection.step1Desc}</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                2
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{uiTexts.stepsSection.step2Title}</h4>
              <p className="text-xs text-slate-400">{uiTexts.stepsSection.step2Desc}</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                3
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{uiTexts.stepsSection.step3Title}</h4>
              <p className="text-xs text-slate-400">{uiTexts.stepsSection.step3Desc}</p>
            </div>
          </div>
        </div>

        {/* Remote Support Direct Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-cyan-950/60 border border-blue-500/30 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-500/20 text-cyan-300">
              <MessageCircle className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{uiTexts.bannerSupport.title}</p>
              <p className="text-xs text-slate-300 mt-0.5">{uiTexts.bannerSupport.desc}</p>
            </div>
          </div>
          <a
            href="https://zalo.me/0563402950"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-lg shadow-blue-600/30 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{uiTexts.bannerSupport.btnChat}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default DownloadSection;
