import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedComparisonData } from '../data/localizedKinxData';

interface ComparisonTableProps {
  onScrollToDownload: () => void;
  onOpenLeadModal: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  onScrollToDownload,
  onOpenLeadModal,
}) => {
  const { language } = useLanguage();
  const comparisonData = getLocalizedComparisonData(language);

  const uiTexts = {
    vi: {
      badge: 'SO SÁNH MINH BẠCH',
      titlePrefix: 'Tại Sao Content Creator Chọn',
      subtitle: 'Đối chiếu chi tiết giữa giải pháp tự động hóa Kinx Auto với các phương pháp truyền thống.',
      colFeature: 'Tính năng & Tiêu chí',
      colRecommended: 'KHUYÊN DÙNG',
      colManual: 'Làm Thủ Công / Ghép Tool Lẻ',
      ctaBannerTitle: 'Sẵn sàng nâng cấp năng suất sáng tạo video lên gấp 10 lần?',
      ctaBannerDesc: 'Tải ngay bản cài đặt hoặc liên hệ Zalo: 0563.402.950 để nhận kích hoạt nhanh.',
      ctaButton: 'Tải Bản Cài Đặt Miễn Phí',
    },
    en: {
      badge: 'TRANSPARENT COMPARISON',
      titlePrefix: 'Why Top Content Creators Choose',
      subtitle: 'A detailed benchmark comparison between Kinx Auto automation and traditional or fragmented tools.',
      colFeature: 'Feature & Capability',
      colRecommended: 'RECOMMENDED',
      colManual: 'Manual Editing / Fragmented Tools',
      ctaBannerTitle: 'Ready to 10x your video creation productivity?',
      ctaBannerDesc: 'Download the official installer or contact our 24/7 tech team for immediate activation.',
      ctaButton: 'Download Free Installer',
    },
    ja: {
      badge: '客観的な比較',
      titlePrefix: 'トップクリエイターが選ぶ理由：',
      subtitle: 'Kinx Autoの自動化ソリューションと従来の手動作業・個別ツールの違いを徹底比較。',
      colFeature: '機能・評価項目',
      colRecommended: '推奨',
      colManual: '手動編集 / 個別ツールの拼合',
      ctaBannerTitle: '動画制作の生産性を10倍に引き上げる準備はできましたか？',
      ctaBannerDesc: '今すぐインストーラーをダウンロードするか、24時間サポートにお問い合わせください。',
      ctaButton: '無料インストーラーをダウンロード',
    },
    zh: {
      badge: '透明参数与效率对比',
      titlePrefix: '为什么头部内容创作者都在选择',
      subtitle: 'Kinx Auto 全自动一站式方案与传统繁琐手工剪辑及拼凑工具的全面性能对比。',
      colFeature: '功能特性与指标',
      colRecommended: '强烈推荐',
      colManual: '手动剪辑 / 零散工具拼接',
      ctaBannerTitle: '准备好将视频制作产能提升 10 倍了吗？',
      ctaBannerDesc: '立即下载官方安装包体验，或联系 24 小时技术团队获取快速开通支持。',
      ctaButton: '免费下载正式安装包',
    },
  }[language] || {
    badge: 'SO SÁNH MINH BẠCH',
    titlePrefix: 'Tại Sao Content Creator Chọn',
    subtitle: 'Đối chiếu chi tiết giữa giải pháp tự động hóa Kinx Auto với các phương pháp truyền thống.',
    colFeature: 'Tính năng & Tiêu chí',
    colRecommended: 'KHUYÊN DÙNG',
    colManual: 'Làm Thủ Công / Ghép Tool Lẻ',
    ctaBannerTitle: 'Sẵn sàng nâng cấp năng suất sáng tạo video lên gấp 10 lần?',
    ctaBannerDesc: 'Tải ngay bản cài đặt hoặc liên hệ Zalo: 0563.402.950 để nhận kích hoạt nhanh.',
    ctaButton: 'Tải Bản Cài Đặt Miễn Phí',
  };

  return (
    <section id="comparison" className="py-10 sm:py-12 bg-gradient-to-b from-[#0B0F19] via-slate-950 to-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs font-bold text-indigo-300 mb-2">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span>{uiTexts.badge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
            {uiTexts.titlePrefix} <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">Kinx Auto</span>?
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base">
            {uiTexts.subtitle}
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80">
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider w-1/3">
                    {uiTexts.colFeature}
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-purple-300 bg-purple-950/40 border-x border-purple-500/30 w-1/3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span>Kinx Auto (v4.6.1)</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500 text-white font-black">
                        {uiTexts.colRecommended}
                      </span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-400 w-1/3">
                    {uiTexts.colManual}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-slate-200">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 font-bold text-emerald-300 bg-purple-950/20 border-x border-purple-500/20">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{row.kinx}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-400">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span>{row.manual}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/60 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-base font-bold text-white">{uiTexts.ctaBannerTitle}</p>
            <p className="text-xs text-slate-300 mt-0.5">{uiTexts.ctaBannerDesc}</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onScrollToDownload}
              className="flex-1 sm:flex-none glow-button px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-600/30"
            >
              {uiTexts.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ComparisonTable;
