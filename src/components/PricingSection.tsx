import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ShieldCheck, Zap, ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedPricingPlans } from '../data/localizedKinxData';

interface PricingSectionProps {
  onScrollToDownload?: () => void;
}

const highlightFeatureKeywords = (text: string) => {
  const keywords = [
    'Adam',
    'Ngọc Huyền',
    'Ngoc Huyen',
    'Hoài My',
    'Nam Minh',
    'KHÔNG GIỚI HẠN',
    'không giới hạn',
    'Clone giọng nói',
    'Voice Cloning',
    '无限制声音克隆',
    '無制限ボイスクローン',
    'Veo 3',
    'Veo 3.1',
    '100%',
    '12 Module',
    '20 Luồng',
    '5 máy',
    '30 máy',
    'Dedicated Cloud Server',
    'Ultraview'
  ];

  const pattern = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const isKeyword = keywords.some(k => k.toLowerCase() === part.toLowerCase());
    if (isKeyword) {
      const lower = part.toLowerCase();
      if (['adam', 'ngọc huyền', 'ngoc huyen', 'clone giọng nói', 'voice cloning', 'không giới hạn', '无限制声音克隆', '無制限ボイスクローン'].includes(lower)) {
        return (
          <span key={index} className="font-bold text-cyan-300">
            {part}
          </span>
        );
      }
      return (
        <span key={index} className="font-semibold text-white">
          {part}
        </span>
      );
    }
    return part;
  });
};

export const PricingSection: React.FC<PricingSectionProps> = ({
}) => {
  const { language } = useLanguage();
  const pricingPlans = getLocalizedPricingPlans(language);

  const uiTexts = {
    vi: {
      badge: 'BẢNG GIÁ & GÓI ĐĂNG KÝ MINH BẠCH',
      title: 'Chọn Gói Phù Hợp Cho Kênh Của Bạn',
      subtitle: 'Kích hoạt nhanh chóng và hỗ trợ cài đặt kỹ thuật trực tiếp 1-kèm-1 qua Ultraview/Zalo 24/7.',
      discountBadge: 'Giá Tiết Kiệm',
      defaultCta: 'Chọn Gói Này',
      guaranteeTitle: 'Bảo Hành Kích Hoạt 100%',
      guaranteeDesc: 'Hỗ trợ Ultraview cài đặt trực tiếp tận tình',
      updateTitle: 'Cập Nhật v4.6.1+ Tự Động',
      updateDesc: 'Nhận tính năng mới nhất hoàn toàn miễn phí',
    },
    en: {
      badge: 'TRANSPARENT PRICING & PLANS',
      title: 'Choose the Perfect Plan for Your Content Channel',
      subtitle: 'Instant activation and dedicated 1-on-1 remote setup support available 24/7.',
      discountBadge: 'Discounted Price',
      defaultCta: 'Select This Plan',
      guaranteeTitle: '100% Activation Guarantee',
      guaranteeDesc: 'Dedicated 1-on-1 setup support via remote desktop',
      updateTitle: 'Automatic v4.6.1+ Updates',
      updateDesc: 'Receive all future feature upgrades at zero extra cost',
    },
    ja: {
      badge: '明瞭な料金プラン一覧',
      title: 'チャンネル規模に合わせた最適なプランを選択',
      subtitle: '即時アクティベーションと24時間体制の1対1リモート導入サポート付き。',
      discountBadge: '特別割引',
      defaultCta: 'このプランを選択',
      guaranteeTitle: '100% 動作・認証保証',
      guaranteeDesc: 'リモートツールによる丁寧な導入サポート',
      updateTitle: 'v4.6.1+ 自動アップデート対応',
      updateDesc: '最新機能を永続的に無料でお届け',
    },
    zh: {
      badge: '透明套餐与价格方案',
      title: '选择最契合您内容矩阵的专属套餐',
      subtitle: '开通即刻生效，技术团队 24 小时在线提供 1 对 1 远程配置与全程教学。',
      discountBadge: '优惠特价',
      defaultCta: '立即选购该套餐',
      guaranteeTitle: '100% 激活与运行保障',
      guaranteeDesc: '专属技术人员远程 1 对 1 协助安装与配置',
      updateTitle: '自动无缝升级至最新 v4.6.1+',
      updateDesc: '全量免费享受后续最新 AI 模块迭代与特性',
    },
  }[language] || {
    badge: 'BẢNG GIÁ & GÓI ĐĂNG KÝ MINH BẠCH',
    title: 'Chọn Gói Phù Hợp Cho Kênh Của Bạn',
    subtitle: 'Kích hoạt nhanh chóng và hỗ trợ cài đặt kỹ thuật trực tiếp 1-kèm-1 qua Ultraview/Zalo 24/7.',
    discountBadge: 'Giá Tiết Kiệm',
    defaultCta: 'Chọn Gói Này',
    guaranteeTitle: 'Bảo Hành Kích Hoạt 100%',
    guaranteeDesc: 'Hỗ trợ Ultraview cài đặt trực tiếp tận tình',
    updateTitle: 'Cập Nhật v4.6.1+ Tự Động',
    updateDesc: 'Nhận tính năng mới nhất hoàn toàn miễn phí',
  };

  return (
    <section id="pricing" className="py-10 sm:py-12 bg-[#0B0F19] relative">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-bold text-purple-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{uiTexts.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black text-white tracking-tight sm:whitespace-nowrap">
            {uiTexts.title}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {uiTexts.subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid (4 Columns matching reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch max-w-7xl mx-auto pt-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl pt-7 pb-6 px-5 sm:px-6 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#0F172A] via-[#0B0F19] to-[#0B0F19] border-2 border-indigo-500 shadow-2xl shadow-indigo-950/80 xl:-translate-y-2'
                  : 'bg-[#0D1322]/90 border border-slate-800/90 hover:border-slate-700'
              }`}
            >
              {/* Badge for popular / best value */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-[11px] font-black uppercase tracking-wider shadow-lg shadow-indigo-600/40 border border-indigo-400/50 whitespace-nowrap block">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-5">
                  <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 min-h-[36px] leading-relaxed">
                    {plan.targetAudience}
                  </p>

                  <div className="mt-4">
                    {plan.originalPrice ? (
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs text-slate-400 line-through font-mono">
                          {plan.originalPrice}
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {uiTexts.discountBadge}
                        </span>
                      </div>
                    ) : (
                      <div className="h-4" />
                    )}
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-3xl font-black text-white tracking-tight">
                        {plan.priceFormatted}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {plan.billingPeriod}
                      </span>
                    </div>

                    {plan.subHighlight && (
                      <p className="text-xs font-medium text-cyan-400 mt-1">
                        {plan.subHighlight}
                      </p>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-slate-800/80">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlightFeatureKeywords(feat)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <a
                  href="https://zalo.me/0563402950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? 'glow-button bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/30 hover:scale-[1.02]'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-purple-500/50'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{plan.ctaText || uiTexts.defaultCta}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees and Payment Badges */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">{uiTexts.guaranteeTitle}</p>
              <p className="text-[11px] text-slate-400">{uiTexts.guaranteeDesc}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">{uiTexts.updateTitle}</p>
              <p className="text-[11px] text-slate-400">{uiTexts.updateDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
