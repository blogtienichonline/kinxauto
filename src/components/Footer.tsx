import React from 'react';
import {
  Globe,
  ShieldCheck,
  Download,
  MessageCircle,
  Play,
  Users,
  Facebook,
  Scale,
  Lock,
  FileText,
  AlertTriangle,
  Ban,
  Mic,
  ShieldAlert
} from 'lucide-react';
import { APP_IMAGES } from '../data/images';
import { APP_LINKS } from '../data/kinxData';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface FooterProps {
  onScrollToDownload: () => void;
  onOpenLeadModal: () => void;
  onOpenLegalModal: (tab?: 'disclaimer' | 'refund' | 'compliance' | 'voice_compliance' | 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLeadModal,
  onOpenLegalModal,
}) => {
  const { t, language } = useLanguage();

  const footerTexts = {
    vi: {
      features: [
        'Tạo Video Veo 3.1',
        'Khóa Nhân Vật Đồng Nhất',
        'Bóc Tách Kịch Bản YouTube',
        'Edge TTS Miễn Phí 0đ',
        'Tạo Video Bằng Ảnh',
        'Video TMĐT & KOL Review'
      ],
      plans: [
        'Gói Cá Nhân Pro (1 Tháng)',
        'Gói Team Pro/5 Máy (3 Tháng)',
        'Gói 1 Năm Pro (Best Choice)',
        'Gói Doanh Nghiệp (Agency)'
      ],
      demoLabel: 'Video Demo & Hướng Dẫn',
      upgradeLabel: 'Đăng Ký & Nâng Cấp Gói',
      supportLabel: 'Hỗ Trợ Cài Đặt Ultraview 1-1',
      fanpage: 'Fanpage: Kinx Auto Tools',
      zaloGroup: 'Nhóm Zalo: Tham Gia Ngay',
      zaloSupport: 'Zalo Kỹ Thuật: 0563.402.950'
    },
    en: {
      features: [
        'Veo 3.1 Video Engine',
        '100% Consistent Character',
        'YouTube Script Analyzer',
        'Edge TTS Free Voice',
        'Image-to-Video Workflow',
        'E-Com & Virtual KOL Video'
      ],
      plans: [
        'Personal Pro (1 Month)',
        'Team Pro / 5 PCs (3 Months)',
        'Annual Pro (Best Choice)',
        'Enterprise Agency Plan'
      ],
      demoLabel: 'Video Demo & User Guide',
      upgradeLabel: 'Subscribe & Upgrade License',
      supportLabel: '24/7 Dedicated Remote Support',
      fanpage: 'Official Facebook Fanpage',
      zaloGroup: 'Global Creators Community',
      zaloSupport: 'Technical Support Hotline'
    },
    ja: {
      features: [
        'Veo 3.1 動画生成',
        '100% キャラクター固定',
        'YouTube 台本解析',
        'Edge TTS 無料音声合成',
        '画像から動画生成',
        'EC・バーチャルKOL動画'
      ],
      plans: [
        'パーソナルPro (1ヶ月)',
        'チームPro / 5台 (3ヶ月)',
        '1年間Pro (ベストチョイス)',
        '企業・代理店プラン'
      ],
      demoLabel: '公式デモ＆使い方ガイド動画',
      upgradeLabel: 'ライセンス購入・プラン変更',
      supportLabel: '24時間 1対1 リモートサポート',
      fanpage: '公式 Facebook ページ',
      zaloGroup: 'クリエイターコミュニティ',
      zaloSupport: '専任技術サポート窓口'
    },
    zh: {
      features: [
        'Veo 3.1 视频生成引擎',
        '100% 角色一致性深度锁定',
        'YouTube 爆款剧本解析',
        'Edge TTS 免费专业配音',
        '图生视频与画风一致',
        '电商带货与虚拟KOL'
      ],
      plans: [
        '个人专业版 (1个月)',
        '团队专业版 / 5台电脑 (3个月)',
        '年度专业版 (高性价比推荐)',
        '企业定制与公会代理版'
      ],
      demoLabel: '官方实操演示与教学视频',
      upgradeLabel: '在线订阅与全功能解锁',
      supportLabel: '专属 1 对 1 远程协助支持',
      fanpage: '官方 Facebook 主页',
      zaloGroup: '官方创作者交流群',
      zaloSupport: '24小时技术服务热线'
    }
  }[language] || {
    features: [
      'Tạo Video Veo 3.1',
      'Khóa Nhân Vật Đồng Nhất',
      'Bóc Tách Kịch Bản YouTube',
      'Edge TTS Miễn Phí 0đ',
      'Tạo Video Bằng Ảnh',
      'Video TMĐT & KOL Review'
    ],
    plans: [
      'Gói Cá Nhân Pro (1 Tháng)',
      'Gói Team Pro/5 Máy (3 Tháng)',
      'Gói 1 Năm Pro (Best Choice)',
      'Gói Doanh Nghiệp (Agency)'
    ],
    demoLabel: 'Video Demo & Hướng Dẫn',
    upgradeLabel: 'Đăng Ký & Nâng Cấp Gói',
    supportLabel: 'Hỗ Trợ Cài Đặt Ultraview 1-1',
    fanpage: 'Fanpage: Kinx Auto Tools',
    zaloGroup: 'Nhóm Zalo: Tham Gia Ngay',
    zaloSupport: 'Zalo Kỹ Thuật: 0563.402.950'
  };

  return (
    <footer className="bg-[#070A12] border-t border-slate-800/80 pt-10 pb-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Language Selector in Footer */}
        <div className="mb-8 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <p className="text-sm font-bold text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-400" />
              <span>{t('nav.selectLanguage', 'Chọn ngôn ngữ / Select Language')}</span>
            </p>
            <p className="text-xs text-slate-400">
              {t('geoNotice.autoDetected', 'Hệ thống tự động phát hiện theo IP & khu vực')} (Tiếng Việt, English, 日本語, 简体中文)
            </p>
          </div>
          <LanguageSelector variant="navbar" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-slate-800/80">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-purple-500/40 p-0.5 shadow-lg shadow-purple-600/20 shrink-0">
                <img
                  src={APP_IMAGES.logo}
                  alt="Kinx Auto Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-[9px]"
                />
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                Kinx Auto
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                v4.6.1 Pro
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              {t('footer.companyDesc', 'Hệ sinh thái phần mềm tự động hóa sản xuất video AI hàng loạt hàng đầu cho Content Creator, Marketer và Agency MMO. Tích hợp Google Veo 3.1, khóa nhân vật đồng nhất 100% và Edge TTS Voice không giới hạn.')}
            </p>

            <div className="space-y-2.5 pt-1 text-slate-300">
              <a
                href={APP_LINKS.zaloSupport}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-cyan-400" />
                <span>{footerTexts.zaloSupport}</span>
              </a>
              <a
                href={APP_LINKS.zaloGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-300 hover:text-purple-200 font-bold transition-colors"
              >
                <Users className="w-4 h-4 text-purple-400" />
                <span>{footerTexts.zaloGroup}</span>
              </a>
              <a
                href={APP_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold transition-colors"
              >
                <Facebook className="w-4 h-4 text-blue-400 fill-blue-400/20" />
                <span>{footerTexts.fanpage}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Globe className="w-4 h-4 text-purple-400" />
                <span>Website: <strong className="text-white">kinxauto.click</strong></span>
              </div>
            </div>
          </div>

          {/* Col 2: Modules Quick Links */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-xs">{t('footer.featuresCol', 'Tính Năng Cốt Lõi')}</p>
            <ul className="space-y-2">
              {footerTexts.features.map((feature, idx) => (
                <li key={idx}>
                  <a href="#features-deepdive" className="hover:text-purple-400 transition-colors">
                    {feature}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources & Pricing */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-xs">{t('footer.pricingCol', 'Bảng Giá & Dịch Vụ')}</p>
            <ul className="space-y-2">
              {footerTexts.plans.map((plan, idx) => (
                <li key={idx}>
                  <a href="#pricing" className="hover:text-purple-400 transition-colors">
                    {plan}
                  </a>
                </li>
              ))}
              <li><a href="#roi-calculator" className="hover:text-purple-400 transition-colors">{t('calculator.tag', 'Bảng Tính Lợi Nhuận ROI')}</a></li>
              <li><a href="#comparison" className="hover:text-purple-400 transition-colors">{t('comparison.tag', 'So Sánh Tính Năng')}</a></li>
              <li><a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 4: Download & Support */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-xs">{t('footer.downloadCol', 'Tải Về & Trải Nghiệm')}</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={APP_LINKS.windowsDownload}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 hover:underline flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t('download.downloadWin', 'Tải Windows 10/11 (.exe)')}</span>
                </a>
              </li>
              <li>
                <a
                  href={APP_LINKS.macosDownload}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 hover:underline flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t('download.downloadMac', 'Tải macOS (.dmg)')}</span>
                </a>
              </li>
              <li>
                <a
                  href={APP_LINKS.videoIntro}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-400 hover:text-rose-300 hover:underline flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-rose-400" />
                  <span>{footerTexts.demoLabel}</span>
                </a>
              </li>
              <li>
                <button onClick={onOpenLeadModal} className="text-cyan-400 hover:underline text-left">
                  {footerTexts.upgradeLabel}
                </button>
              </li>
              <li>
                <a
                  href={APP_LINKS.zaloSupport}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{footerTexts.supportLabel}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Disclaimer */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-xs flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-purple-400" />
              <span>{t('footer.legalCol', 'Pháp Lý & Tuân Thủ')}</span>
            </p>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onOpenLegalModal('voice_compliance')}
                  className="text-left text-amber-300 hover:text-amber-200 font-semibold transition-colors flex items-center gap-1.5 group"
                >
                  <Mic className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="group-hover:underline">{t('footer.voiceCompliance', 'Miễn Trừ AI Voice & Clone')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('disclaimer')}
                  className="text-left hover:text-purple-300 transition-colors flex items-center gap-1.5 group"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="group-hover:underline">{t('footer.disclaimer', 'Miễn Trừ Trách Nhiệm')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('refund')}
                  className="text-left text-rose-300/90 hover:text-rose-200 font-medium transition-colors flex items-center gap-1.5 group"
                >
                  <Ban className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span className="group-hover:underline">{t('footer.noRefund', 'Chính Sách Không Hoàn Tiền')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('compliance')}
                  className="text-left hover:text-purple-300 transition-colors flex items-center gap-1.5 group"
                >
                  <Scale className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="group-hover:underline">{t('footer.compliance', 'Tuân Thủ Pháp Luật VN')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('privacy')}
                  className="text-left hover:text-purple-300 transition-colors flex items-center gap-1.5 group"
                >
                  <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="group-hover:underline">{t('footer.privacy', 'Bảo Mật Dữ Liệu Cục Bộ')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('terms')}
                  className="text-left hover:text-purple-300 transition-colors flex items-center gap-1.5 group"
                >
                  <FileText className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span className="group-hover:underline">{t('footer.terms', 'Điều Khoản Sở Hữu Bản Quyền')}</span>
                </button>
              </li>
              <li className="pt-1">
                <button
                  onClick={() => onOpenLegalModal('voice_compliance')}
                  className="w-full py-1.5 px-2.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-semibold text-center hover:border-amber-500/50 transition-all flex items-center justify-center gap-1.5"
                >
                  <ShieldAlert className="w-3 h-3 text-amber-400" />
                  <span>{t('footer.viewAllLegal', 'Xem Toàn Bộ Văn Bản Pháp Lý')}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Banner Callout */}
        <div className="my-5 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-slate-400">
          <div className="flex items-start gap-2.5">
            <Scale className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {t('footer.legalNoticeText', 'Kinx Auto là phần mềm công cụ kỹ thuật số hỗ trợ sáng tạo video AI. Nghiêm cấm sử dụng AI Voice Cloning vào mục đích giả mạo, lừa đảo hoặc vi phạm pháp luật. Người dùng được dùng thử miễn phí trước khi mua; Kinx Auto áp dụng chính sách không hoàn tiền sau khi bản quyền đã được kích hoạt, đồng thời cam kết bảo hành kỹ thuật 1-kèm-1 qua Ultraview và tuân thủ Luật An ninh mạng Việt Nam.')}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
            <button
              onClick={() => onOpenLegalModal('voice_compliance')}
              className="px-3 py-1.5 rounded-lg bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/30 font-semibold transition-colors flex items-center gap-1 text-[11px]"
            >
              <Mic className="w-3 h-3 text-amber-400" />
              <span>{t('footer.voiceCompliance', 'Miễn Trừ AI Voice')}</span>
            </button>
            <button
              onClick={() => onOpenLegalModal('refund')}
              className="px-3 py-1.5 rounded-lg bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30 font-semibold transition-colors flex items-center gap-1 text-[11px]"
            >
              <Ban className="w-3 h-3 text-rose-400" />
              <span>{t('footer.noRefund', 'Chính Sách Không Hoàn Tiền')}</span>
            </button>
            <button
              onClick={() => onOpenLegalModal('disclaimer')}
              className="px-3 py-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 font-semibold transition-colors flex items-center gap-1 text-[11px]"
            >
              <span>{t('footer.readFullLegal', 'Tuyên Bố Pháp Lý')}</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>{t('footer.copyright', '© 2026 Kinx Auto (kinxauto.click). Bản quyền thuộc về Kinx Auto Team. Zalo Kỹ Thuật: 0563.402.950.')}</p>
          <div className="flex items-center flex-wrap gap-3 sm:gap-4">
            <button
              onClick={() => onOpenLegalModal('voice_compliance')}
              className="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2 flex items-center gap-1"
            >
              <Mic className="w-3 h-3 text-amber-400" />
              <span>{t('footer.voiceCompliance', 'Miễn Trừ AI Voice & Clone')}</span>
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalModal('refund')}
              className="text-rose-300/90 hover:text-rose-200 transition-colors underline underline-offset-2 flex items-center gap-1"
            >
              <Ban className="w-3 h-3 text-rose-400" />
              <span>{t('footer.noRefund', 'Chính Sách Không Hoàn Tiền')}</span>
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalModal('disclaimer')}
              className="text-slate-400 hover:text-purple-300 transition-colors underline underline-offset-2 flex items-center gap-1"
            >
              <Scale className="w-3 h-3 text-purple-400" />
              <span>{t('footer.disclaimer', 'Tuyên Bố Miễn Trừ Trách Nhiệm')}</span>
            </button>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> {t('footer.safeBadge', '100% An Toàn & Bảo Mật')}
            </span>
            <span>•</span>
            <span>v4.6.1 Build 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
