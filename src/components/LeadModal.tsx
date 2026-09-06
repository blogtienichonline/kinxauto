import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  X,
  MessageCircle,
  CheckCircle2,
  Send,
  ShieldCheck,
  Gift,
  Play,
  Monitor,
  Apple,
  Users,
  Facebook,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { APP_LINKS } from '../data/kinxData';
import { useLanguage } from '../context/LanguageContext';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [channelType, setChannelType] = useState('youtube_shorts');
  const [os, setOs] = useState('windows');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const leadTexts = {
    vi: {
      badge: 'Quà Tặng Tri Ân',
      title: 'Tải Tool &',
      titleHighlight: 'Đăng Ký Tài Khoản Dùng Thử Miễn Phí',
      desc: 'Điền thông tin bên dưới để nhận link tải tool, kích hoạt tài khoản dùng thử miễn phí và nhận trọn bộ prompt triệu view qua Zalo trong 3 phút.',
      nameLabel: 'Họ và tên của bạn:',
      namePlaceholder: 'Ví dụ: Nguyễn Văn Hưng',
      phoneLabel: 'Số điện thoại / Zalo nhận kích hoạt:',
      phonePlaceholder: 'Ví dụ: 0987.xxx.xxx',
      channelLabel: 'Nền tảng mục tiêu:',
      channelOptions: [
        { val: 'youtube_shorts', label: 'YouTube Shorts' },
        { val: 'tiktok', label: 'TikTok Video' },
        { val: 'facebook_reels', label: 'Facebook Reels' },
        { val: 'affiliate', label: 'Review TMĐT / Shopee' },
      ],
      osLabel: 'Hệ điều hành máy tính:',
      osOptions: [
        { val: 'windows', label: 'Windows 10 / 11' },
        { val: 'macos', label: 'macOS (Macbook)' },
      ],
      submitBtn: 'Tải Tool & Đăng Ký Dùng Thử Miễn Phí',
      security: 'Bảo mật thông tin 100%',
      successTitle: 'Đăng Ký Thành Công!',
      successDesc: (userName: string, userPhone: string) => `Cảm ơn ${userName || 'bạn'}. Chuyên viên kỹ thuật sẽ liên hệ hỗ trợ đăng ký, kích hoạt dùng thử và gửi bộ 50+ Prompt Veo 3.1 triệu view qua Zalo ${userPhone} trong vòng 3 phút!`,
      downloadBoxTitle: '⚡ Tải bộ cài đặt ngay bên dưới:',
      downloadVersion: 'v4.6.1 mới nhất',
      btnWin: 'Tải Windows (.exe)',
      btnMac: 'Tải macOS (.dmg)',
      installNote: '• Sau khi tải về và cài đặt, mở Zalo 0563.402.950 để kích hoạt tài khoản dùng thử và nhận trọn bộ Prompt!',
      btnZalo: 'Nhắn Zalo Kích Hoạt (0563.402.950)',
      btnGroup: 'Nhóm Zalo',
      btnPage: 'Fanpage',
      btnVideo: 'Video HD',
      btnClose: 'Đóng'
    },
    en: {
      badge: 'Exclusive Bonus Included',
      title: 'Download App &',
      titleHighlight: 'Start Free Trial Account',
      desc: 'Submit your contact info to receive the direct download link, activate your free trial, and claim the 50+ Viral Veo 3.1 Prompt Pack within 3 minutes.',
      nameLabel: 'Your Full Name:',
      namePlaceholder: 'e.g. Alex Johnson',
      phoneLabel: 'Phone / WhatsApp for Activation:',
      phonePlaceholder: 'e.g. +1 555-0199',
      channelLabel: 'Target Platform:',
      channelOptions: [
        { val: 'youtube_shorts', label: 'YouTube Shorts' },
        { val: 'tiktok', label: 'TikTok Video' },
        { val: 'facebook_reels', label: 'Facebook Reels' },
        { val: 'affiliate', label: 'E-commerce Affiliate' },
      ],
      osLabel: 'Desktop Operating System:',
      osOptions: [
        { val: 'windows', label: 'Windows 10 / 11' },
        { val: 'macos', label: 'macOS (Apple Silicon / Intel)' },
      ],
      submitBtn: 'Get Tool & Start Free Trial',
      security: '100% Data Privacy Guaranteed',
      successTitle: 'Registration Successful!',
      successDesc: (userName: string, userPhone: string) => `Thank you ${userName || 'Creator'}. Our support specialist will reach out to activate your free trial and deliver your 50+ Veo 3.1 Viral Prompt Pack to ${userPhone} shortly!`,
      downloadBoxTitle: '⚡ Instant Software Download Links:',
      downloadVersion: 'v4.6.1 Latest Release',
      btnWin: 'Download Windows (.exe)',
      btnMac: 'Download macOS (.dmg)',
      installNote: '• After downloading, message support to instantly unlock your trial credits and full prompt database!',
      btnZalo: 'Contact Support Hotline',
      btnGroup: 'Creator Community',
      btnPage: 'Official Page',
      btnVideo: 'Quick Guide',
      btnClose: 'Close'
    },
    ja: {
      badge: '限定プロンプト特典付き',
      title: 'ソフトダウンロード＆',
      titleHighlight: '無料トライアルアカウント登録',
      desc: '下記フォームをご入力いただくと、ダウンロードリンクの発行、無料体験版のアクティベーション、およびバズるAIプロンプト50選を即座にお届けします。',
      nameLabel: 'お名前:',
      namePlaceholder: '例: 田中 太郎',
      phoneLabel: 'ご連絡先電話番号 / SNS:',
      phonePlaceholder: '例: 090-xxxx-xxxx',
      channelLabel: 'ターゲット媒体:',
      channelOptions: [
        { val: 'youtube_shorts', label: 'YouTube Shorts' },
        { val: 'tiktok', label: 'TikTok 動画' },
        { val: 'facebook_reels', label: 'Facebook Reels' },
        { val: 'affiliate', label: '物販・アフィリエイト' },
      ],
      osLabel: 'ご利用のPC OS:',
      osOptions: [
        { val: 'windows', label: 'Windows 10 / 11' },
        { val: 'macos', label: 'macOS (Macbook / iMac)' },
      ],
      submitBtn: 'ソフトを入手して無料体験を開始',
      security: '100% 個人情報保護',
      successTitle: 'お申し込みが完了しました！',
      successDesc: (userName: string, userPhone: string) => `ありがとうございます、${userName || '様'}。専任スタッフが ${userPhone} 宛てに体験版ライセンスと特典プロンプト50選をお送りいたします！`,
      downloadBoxTitle: '⚡ インストーラーダウンロード：',
      downloadVersion: '最新版 v4.6.1',
      btnWin: 'Windows版をDL (.exe)',
      btnMac: 'macOS版をDL (.dmg)',
      installNote: '• インストール完了後、サポート宛てにご連絡いただくと即時にライセンス有効化が行われます。',
      btnZalo: '専任サポートへ連絡',
      btnGroup: '公式コミュニティ',
      btnPage: '公式ページ',
      btnVideo: 'チュートリアル動画',
      btnClose: '閉じる'
    },
    zh: {
      badge: '新手专属豪礼',
      title: '下载软件并',
      titleHighlight: '免费开通试用账号',
      desc: '填写以下信息即可获取最新版安装包直链、开通免费试用权限，并在3分钟内免费领取《50套百万播放爆款提示词全集》。',
      nameLabel: '您的姓名 / 称呼：',
      namePlaceholder: '例如：张先生',
      phoneLabel: '手机号 / 微信号（接收激活码）：',
      phonePlaceholder: '例如：138xxxx8888',
      channelLabel: '主要出海运营平台：',
      channelOptions: [
        { val: 'youtube_shorts', label: 'YouTube Shorts' },
        { val: 'tiktok', label: 'TikTok 短视频' },
        { val: 'facebook_reels', label: 'Facebook Reels' },
        { val: 'affiliate', label: '电商带货 / 独立站' },
      ],
      osLabel: '您的电脑操作系统：',
      osOptions: [
        { val: 'windows', label: 'Windows 10 / 11' },
        { val: 'macos', label: 'macOS (苹果电脑)' },
      ],
      submitBtn: '立即下载软件并领取免费试用',
      security: '100% 隐私信息安全承诺',
      successTitle: '提交成功！',
      successDesc: (userName: string, userPhone: string) => `感谢 ${userName || '您'} 的注册！技术专员将在 3 分钟内通过 ${userPhone} 为您激活测试账号并发送 50+ 爆款视频分镜提示词全集！`,
      downloadBoxTitle: '⚡ 安装包极速下载通道：',
      downloadVersion: 'v4.6.1 稳定最新版',
      btnWin: '下载 Windows 安装包 (.exe)',
      btnMac: '下载 macOS 安装包 (.dmg)',
      installNote: '• 下载并安装完成后，联系专属客服即可秒级激活试用权限并领取全部提示词包！',
      btnZalo: '联系客服激活 (0563.402.950)',
      btnGroup: '官方交流群',
      btnPage: '官方专页',
      btnVideo: '高清实操视频',
      btnClose: '关闭'
    }
  }[language] || {
    badge: 'Quà Tặng Tri Ân',
    title: 'Tải Tool &',
    titleHighlight: 'Đăng Ký Tài Khoản Dùng Thử Miễn Phí',
    desc: 'Điền thông tin bên dưới để nhận link tải tool, kích hoạt tài khoản dùng thử miễn phí và nhận trọn bộ prompt triệu view qua Zalo trong 3 phút.',
    nameLabel: 'Họ và tên của bạn:',
    namePlaceholder: 'Ví dụ: Nguyễn Văn Hưng',
    phoneLabel: 'Số điện thoại / Zalo nhận kích hoạt:',
    phonePlaceholder: 'Ví dụ: 0987.xxx.xxx',
    channelLabel: 'Nền tảng mục tiêu:',
    channelOptions: [
      { val: 'youtube_shorts', label: 'YouTube Shorts' },
      { val: 'tiktok', label: 'TikTok Video' },
      { val: 'facebook_reels', label: 'Facebook Reels' },
      { val: 'affiliate', label: 'Review TMĐT / Shopee' },
    ],
    osLabel: 'Hệ điều hành máy tính:',
    osOptions: [
      { val: 'windows', label: 'Windows 10 / 11' },
      { val: 'macos', label: 'macOS (Macbook)' },
    ],
    submitBtn: 'Tải Tool & Đăng Ký Dùng Thử Miễn Phí',
    security: 'Bảo mật thông tin 100%',
    successTitle: 'Đăng Ký Thành Công!',
    successDesc: (userName: string, userPhone: string) => `Cảm ơn ${userName || 'bạn'}. Chuyên viên kỹ thuật sẽ liên hệ hỗ trợ đăng ký, kích hoạt dùng thử và gửi bộ 50+ Prompt Veo 3.1 triệu view qua Zalo ${userPhone} trong vòng 3 phút!`,
    downloadBoxTitle: '⚡ Tải bộ cài đặt ngay bên dưới:',
    downloadVersion: 'v4.6.1 mới nhất',
    btnWin: 'Tải Windows (.exe)',
    btnMac: 'Tải macOS (.dmg)',
    installNote: '• Sau khi tải về và cài đặt, mở Zalo 0563.402.950 để kích hoạt tài khoản dùng thử và nhận trọn bộ Prompt!',
    btnZalo: 'Nhắn Zalo Kích Hoạt (0563.402.950)',
    btnGroup: 'Nhóm Zalo',
    btnPage: 'Fanpage',
    btnVideo: 'Video HD',
    btnClose: 'Đóng'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.5 }
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-lg rounded-3xl bg-slate-900 border border-purple-500/40 shadow-2xl p-6 sm:p-8 relative overflow-hidden"
      >
        {/* Decorative Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-purple-600/20 blur-[60px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-2 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                <Gift className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {leadTexts.badge}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {leadTexts.title}{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
                {leadTexts.titleHighlight}
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {leadTexts.desc}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  {leadTexts.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={leadTexts.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-500 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  {leadTexts.phoneLabel} <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder={leadTexts.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-500 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    {leadTexts.channelLabel}
                  </label>
                  <select
                    value={channelType}
                    onChange={(e) => setChannelType(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-500 focus:outline-none text-white text-xs"
                  >
                    {leadTexts.channelOptions.map((opt) => (
                      <option key={opt.val} value={opt.val}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    {leadTexts.osLabel}
                  </label>
                  <select
                    value={os}
                    onChange={(e) => setOs(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-500 focus:outline-none text-white text-xs"
                  >
                    {leadTexts.osOptions.map((opt) => (
                      <option key={opt.val} value={opt.val}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="glow-button w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-purple-600/30 hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{leadTexts.submitBtn}</span>
                </button>
              </div>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> {leadTexts.security}
              </span>
              <a
                href="https://zalo.me/0563402950"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:underline flex items-center gap-1"
              >
                <MessageCircle className="w-3 h-3" /> Zalo: 0563.402.950
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">{leadTexts.successTitle}</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              {leadTexts.successDesc(name, phone)}
            </p>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 text-left space-y-2.5">
              <p className="font-bold text-purple-300 flex items-center justify-between">
                <span>{leadTexts.downloadBoxTitle}</span>
                <span className="text-[10px] text-emerald-400 font-normal">{leadTexts.downloadVersion}</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  href={APP_LINKS.windowsDownload}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-purple-200 hover:text-white flex items-center justify-center gap-2 font-semibold text-xs transition-all"
                >
                  <Monitor className="w-4 h-4 text-blue-400" />
                  <span>{leadTexts.btnWin}</span>
                </a>
                <a
                  href={APP_LINKS.macosDownload}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-center gap-2 font-semibold text-xs transition-all"
                >
                  <Apple className="w-4 h-4 text-slate-300" />
                  <span>{leadTexts.btnMac}</span>
                </a>
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                {leadTexts.installNote}
              </p>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-2.5">
              <a
                href={APP_LINKS.zaloSupport}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-blue-600/30 hover:scale-105 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{leadTexts.btnZalo}</span>
              </a>
              <a
                href={APP_LINKS.zaloGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/40 text-purple-300 hover:text-white font-semibold text-xs flex items-center gap-1.5 transition-all"
              >
                <Users className="w-3.5 h-3.5 text-purple-400" />
                <span>{leadTexts.btnGroup}</span>
              </a>
              <a
                href={APP_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2.5 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 border border-blue-500/40 text-blue-300 hover:text-white font-semibold text-xs flex items-center gap-1.5 transition-all"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-400" />
                <span>{leadTexts.btnPage}</span>
              </a>
              <a
                href={APP_LINKS.videoIntro}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2.5 rounded-xl bg-rose-950/40 hover:bg-rose-900/50 border border-rose-500/40 text-rose-300 hover:text-white font-semibold text-xs flex items-center gap-1.5 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-rose-400" />
                <span>{leadTexts.btnVideo}</span>
              </a>
              <button
                onClick={handleReset}
                className="px-3 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-medium text-xs transition-all cursor-pointer"
              >
                {leadTexts.btnClose}
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default LeadModal;
