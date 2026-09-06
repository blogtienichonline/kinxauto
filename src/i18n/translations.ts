import { Language } from './types';

export const TRANSLATIONS: Record<Language, Record<string, any>> = {
  vi: {
    // Top Bar & Navigation
    nav: {
      workflow: 'Quy Trình',
      features: '12 Tính Năng',
      roi: 'Tính Tiết Kiệm',
      comparison: 'So Sánh',
      pricing: 'Bảng Giá',
      reviews: 'Đánh Giá',
      download: 'Tải Về',
      faq: 'FAQ',
      zaloSupport: 'Zalo: 0563.402.950',
      downloadFree: 'Tải Phần Mềm Miễn Phí',
      downloadApp: 'Tải App',
      selectLanguage: 'Chọn ngôn ngữ',
      communityGroup: 'Nhóm Zalo',
      facebookPage: 'Facebook',
      versionBadge: 'v4.6.1',
      tagline: 'Tự Động Hóa Video AI Hàng Loạt'
    },
    // Language notice toast
    geoNotice: {
      detected: 'Đã phát hiện vị trí của bạn:',
      switchedTo: 'Đã tự động chuyển ngôn ngữ sang',
      keep: 'Giữ Tiếng Việt',
      change: 'Đổi ngôn ngữ',
      autoDetected: 'Tự động phát hiện theo IP / Vùng'
    },
    // Hero Section
    hero: {
      badge: 'Công Nghệ AI Veo 3.1 & Edge TTS / Kinx Voice Clone 2026',
      titleHighlight1: 'Phần Mềm Tự Động Hóa',
      titleHighlight2: 'Sáng Tạo Video AI',
      titleHighlight3: 'Hàng Loạt',
      subtitle: 'Sản xuất hàng trăm video mỗi ngày cho YouTube Shorts, TikTok & Reels. Tích hợp công nghệ Veo 3.1, khóa nhân vật đồng nhất 100%, lồng tiếng Edge TTS & Clone mọi giọng nói không giới hạn 0đ và tự động phân tích kịch bản thông minh.',
      featureChips: {
        veo: 'Veo 3.1 Đa Luồng',
        character: 'Khóa Nhân Vật Đồng Nhất',
        edgeTts: 'Edge TTS & Clone Voice 0đ',
        youtube: 'Phân Tích Kịch Bản'
      },
      stats: {
        users: '15.000+ Nhà sáng tạo',
        videosCreated: '2.5M+ Video đã xuất',
        timeSaved: '90% Thời gian tiết kiệm',
        speed: '10x Tốc độ sản xuất'
      },
      buttons: {
        downloadWindows: 'Tải Phần Mềm Miễn Phí (v4.6.1)',
        downloadMac: 'Tải Cho macOS (.dmg)',
        viewPricing: 'Xem Bảng Giá Nâng Cấp',
        watchDemo: 'Xem Video Trải Nghiệm',
        tryFree: 'Đăng Ký Dùng Thử Miễn Phí'
      },
      livePreviewBanner: 'Giao diện thực tế phần mềm Kinx Auto v4.6.1 trên Windows 11'
    },
    // Interactive Flow
    workflow: {
      tag: 'QUY TRÌNH 4 BƯỚC TỰ ĐỘNG HÓA',
      title: 'Từ Ý Tưởng Đến Video AI Hoàn Chỉnh Chỉ Sau 60 Giây',
      subtitle: 'Trải nghiệm trực quan quy trình sản xuất video AI khép kín với 4 bước thông minh',
      step1Title: 'Nhập Ý Tưởng / Link',
      step1Desc: 'Dán link YouTube hoặc gõ 1 câu ý tưởng',
      step2Title: 'AI Viết Kịch Bản',
      step2Desc: 'Tự động phân cảnh 3 hồi chuẩn chỉnh',
      step3Title: 'Voice AI & Clone Giọng',
      step3Desc: 'Edge TTS & Kinx Clone giọng không giới hạn',
      step4Title: 'Render Veo 3.1',
      step4Desc: 'Khóa nhân vật & xuất video 1080p',
      steps: {
        step1: {
          number: '01',
          name: 'Viết Kịch Bản & Prompt',
          desc: 'AI tự động sinh kịch bản phân cảnh hoặc phân tích từ link YouTube công khai.'
        },
        step2: {
          number: '02',
          name: 'Khóa Nhân Vật & Chọn Voice / Clone Giọng',
          desc: 'Giữ khuôn mặt nhân vật đồng nhất 100% qua tất cả các scene và ghép giọng đọc tự nhiên hoặc clone giọng mẫu.'
        },
        step3: {
          number: '03',
          name: 'Render Veo 3.1 Đa Luồng',
          desc: 'Xử lý song song 1 - 10 luồng video độ nét cao 1080p/4K với công nghệ Google Veo 3.1.'
        },
        step4: {
          number: '04',
          name: 'Ghép Nhạc & Xuất Bản',
          desc: 'Tự động tạo phụ đề auto-caption, khớp âm thanh và xuất video MP4 sắc nét về máy.'
        }
      },
      runDemoBtn: 'Chạy Thử Quy Trình Mẫu',
      processingText: 'Đang xử lý render video mẫu...',
      completedText: 'Hoàn thành render 4 phân cảnh!',
      expertTip: 'Mẹo: Bạn có thể nhập kịch bản hoặc dán link YouTube bất kỳ để AI tự động chuyển hóa thành chuỗi prompt phân cảnh.'
    },
    // Features Deepdive
    features: {
      tag: 'BỘ VŨ KHÍ TỰ ĐỘNG HÓA 2026',
      title: '12 Tính Năng Đỉnh Cao Dành Riêng Cho Creator & Agency',
      subtitle: 'Tất cả công cụ mạnh mẽ nhất gói gọn trong một phần mềm máy tính duy nhất',
      viewMockup: 'Xem Giao Diện Thật',
      viewSpecs: 'Thông Số Kỹ Thuật'
    },
    // ROI Calculator
    calculator: {
      tag: 'BẢNG TÍNH LỢI NHUẬN & HIỆU SUẤT',
      title: 'Bạn Sẽ Tiết Kiệm Được Bao Nhiêu',
      titleHighlight: 'Thời Gian & Tiền Bạc?',
      subtitle: 'Kéo thanh trượt bên dưới để ước tính chi phí và thời gian được tối ưu hóa khi sử dụng Kinx Auto.',
      videosPerDay: 'Số video bạn muốn xuất bản mỗi ngày:',
      staffCost: 'Chi phí thuê ngoài / edit thủ công 1 video:',
      kinxCost: 'Chi phí sử dụng Kinx Auto:',
      savedMonthly: 'Tiết Kiệm Mỗi Tháng:',
      savedTime: 'Thời Gian Tiết Kiệm:',
      hoursPerMonth: 'giờ/tháng',
      manualEditTime: 'Thời gian làm thủ công:',
      kinxEditTime: 'Thời gian với Kinx Auto:',
      roiRate: 'Tỷ lệ hoàn vốn đầu tư:',
      downloadCta: 'Bắt Đầu Tiết Kiệm Ngay'
    },
    // Comparison Table
    comparison: {
      tag: 'SO SÁNH MINH BẠCH',
      title: 'Tại Sao Content Creator Chọn',
      subtitle: 'Đối chiếu chi tiết giữa giải pháp tự động hóa Kinx Auto với các phương pháp truyền thống.',
      featureCol: 'Tính Năng & Tiêu Chí',
      kinxCol: 'Kinx Auto v4.6.1',
      manualCol: 'Làm Thủ Công / Thuê Ngoài',
      otherToolsCol: 'Web Tool Khác'
    },
    // Pricing
    pricing: {
      tag: 'BẢNG GIÁ & GÓI ĐĂNG KÝ MINH BẠCH',
      title: 'Chọn Gói Phù Hợp Cho Kênh Của Bạn',
      subtitle: 'Kích hoạt nhanh chóng và hỗ trợ cài đặt kỹ thuật trực tiếp 1-kèm-1 qua Ultraview/Zalo 24/7.',
      monthly: 'Gói 1 Tháng',
      quarterly: 'Gói 3 Tháng',
      semiannual: 'Gói 6 Tháng',
      yearly: 'Gói 1 Năm (Best Choice)',
      selectPlan: 'Chọn Gói Này',
      popularBadge: 'PHỔ BIẾN NHẤT',
      bestValueBadge: 'TIẾT KIỆM 50%',
      discount: 'Giảm',
      freeTrialNotice: '💡 Bạn hoàn toàn có thể tải về dùng thử miễn phí 100% trước khi quyết định nâng cấp.',
      paymentGuaranteed: 'Thanh toán tự động qua VietQR - Kích hoạt ngay trong 30 giây'
    },
    // Testimonials
    testimonials: {
      tag: 'CASE STUDY & REVIEW THỰC CHIẾN',
      title: 'Người Dùng Nói Gì Về Kinx Auto?',
      subtitle: 'Hơn 15.000 Content Creator và Agency MMO đang ứng dụng Kinx Auto để tự động hóa hàng nghìn video mỗi ngày.'
    },
    // FAQ
    faq: {
      tag: 'GIẢI ĐÁP THẮC MẮC THƯỜNG GẶP',
      title: 'Câu Hỏi & Tư Vấn Kỹ Thuật',
      subtitle: 'Mọi điều bạn cần biết trước khi sở hữu phần mềm tự động hóa Kinx Auto.'
    },
    // Download Hub
    download: {
      tag: 'TRUNG TÂM TẢI PHẦN MỀM CHÍNH THỨC',
      title: 'Tải Kinx Auto Phiên Bản 4.6.1',
      subtitle: 'Cài đặt nhanh chóng chỉ trong 1 phút. Hoàn toàn tương thích với Windows 10/11 và macOS.',
      downloadWin: 'Tải Bản Windows (.exe)',
      downloadMac: 'Tải Bản macOS (.dmg)',
      sysReq: 'Cấu hình đề xuất: RAM 8GB+, Dung lượng trống 5GB, Kết nối Internet ổn định',
      trialNotice: 'Bản cài đặt đã bao gồm đầy đủ tài liệu hướng dẫn và kho 50+ prompt mẫu.'
    },
    // Footer
    footer: {
      companyDesc: 'Hệ sinh thái phần mềm tự động hóa sản xuất video AI hàng loạt cho Content Creator, Marketer và Agency MMO. Tích hợp Google Veo 3.1, khóa nhân vật đồng nhất 100% và Edge TTS Voice không giới hạn.',
      featuresCol: 'Tính Năng Nổi Bật',
      pricingCol: 'Bảng Giá & Gói Cước',
      downloadCol: 'Tải Về & Hỗ Trợ',
      legalCol: 'Pháp Lý & Tuân Thủ',
      voiceCompliance: 'Miễn Trừ AI Voice & Clone',
      disclaimer: 'Miễn Trừ Trách Nhiệm',
      noRefund: 'Chính Sách Không Hoàn Tiền',
      compliance: 'Tuân Thủ Pháp Luật VN',
      privacy: 'Bảo Mật Dữ Liệu Cục Bộ',
      terms: 'Điều Khoản Sở Hữu Bản Quyền',
      viewAllLegal: 'Xem Toàn Bộ Văn Bản Pháp Lý',
      legalNoticeText: 'Kinx Auto là phần mềm công cụ kỹ thuật số hỗ trợ sáng tạo video AI. Người dùng được dùng thử miễn phí trước khi mua; Kinx Auto áp dụng chính sách không hoàn tiền sau khi bản quyền đã được kích hoạt, đồng thời cam kết bảo hành kỹ thuật 1-kèm-1 qua Ultraview và tuân thủ Luật An ninh mạng Việt Nam.',
      readFullLegal: 'Đọc Tuyên Bố Đầy Đủ',
      copyright: '© 2026 Kinx Auto (kinxauto.click). Bản quyền thuộc về Kinx Auto Team. Zalo Kỹ Thuật: 0563.402.950.',
      safeBadge: '100% An Toàn & Bảo Mật'
    },
    // Modals
    modal: {
      close: 'Đóng',
      submit: 'Gửi Thông Tin',
      fullName: 'Họ và tên của bạn',
      phone: 'Số điện thoại / Zalo',
      email: 'Địa chỉ Email',
      purpose: 'Mục đích sử dụng',
      agreeTerms: 'Tôi đồng ý với chính sách và điều khoản'
    }
  },

  en: {
    // Top Bar & Navigation
    nav: {
      workflow: 'Workflow',
      features: '12 Features',
      roi: 'ROI Calculator',
      comparison: 'Comparison',
      pricing: 'Pricing',
      reviews: 'Reviews',
      download: 'Download',
      faq: 'FAQ',
      zaloSupport: 'Support: +84 563.402.950',
      downloadFree: 'Download Free Trial',
      downloadApp: 'Get App',
      selectLanguage: 'Select Language',
      communityGroup: 'Community',
      facebookPage: 'Facebook',
      versionBadge: 'v4.6.1',
      tagline: 'Batch AI Video Automation Software'
    },
    // Language notice toast
    geoNotice: {
      detected: 'Detected your location:',
      switchedTo: 'Automatically switched language to',
      keep: 'Keep English',
      change: 'Change Language',
      autoDetected: 'Auto-detected via IP / Geolocation'
    },
    // Hero Section
    hero: {
      badge: 'Google Veo 3.1 & Edge TTS / Kinx Voice Clone Engine 2026',
      titleHighlight1: 'Automated Batch',
      titleHighlight2: 'AI Video Creation',
      titleHighlight3: 'Software',
      subtitle: 'Batch produce hundreds of high-retention videos daily for YouTube Shorts, TikTok & Reels. Built with Veo 3.1 technology, 100% consistent character locking, unlimited Edge TTS neural voiceover & Kinx TTS voice cloning, and smart script analysis.',
      featureChips: {
        veo: 'Veo 3.1 Multi-threading',
        character: '100% Consistent Character',
        edgeTts: 'Edge TTS & Voice Clone 0$',
        youtube: 'Viral Script Analyzer'
      },
      stats: {
        users: '15,000+ Global Creators',
        videosCreated: '2.5M+ Videos Exported',
        timeSaved: '90% Time Saved',
        speed: '10x Faster Production'
      },
      buttons: {
        downloadWindows: 'Download for Windows (.exe)',
        downloadMac: 'Download for macOS (.dmg)',
        viewPricing: 'View Pricing Plans',
        watchDemo: 'Watch Interactive Demo',
        tryFree: 'Start Free Trial Now'
      },
      livePreviewBanner: 'Real software interface of Kinx Auto v4.6.1 on Windows 11 / macOS'
    },
    // Interactive Flow
    workflow: {
      tag: '4-STEP AUTOMATION PIPELINE',
      title: 'From Creative Idea to Full AI Video in 60 Seconds',
      subtitle: 'Experience an intuitive, fully automated end-to-end video production workflow in 4 easy steps',
      step1Title: 'Input Idea / Link',
      step1Desc: 'Paste public YouTube link or enter creative prompt',
      step2Title: 'AI Script Writing',
      step2Desc: 'Automatic 3-act structured scene breakdown',
      step3Title: 'Voice AI & Voice Clone',
      step3Desc: 'Edge TTS & Unlimited Kinx Voice Cloning',
      step4Title: 'Render Veo 3.1',
      step4Desc: 'Face-lock character & export 1080p video',
      steps: {
        step1: {
          number: '01',
          name: 'AI Script & Prompt Gen',
          desc: 'Automatically generate scene-by-scene prompts or analyze viral public YouTube videos.'
        },
        step2: {
          number: '02',
          name: 'Lock Character & Choose Voice / Clone',
          desc: 'Maintain 100% character facial consistency across all scenes with natural multilingual voices or custom cloned voices.'
        },
        step3: {
          number: '03',
          name: 'Multi-Thread Veo 3.1 Render',
          desc: 'Parallel rendering with 1 - 10 threads in crystal-clear 1080p/4K cinematic video quality.'
        },
        step4: {
          number: '04',
          name: 'Audio Sync & Export',
          desc: 'Auto-sync audio narration, generate animated captions, and export high-bitrate MP4 files locally.'
        }
      },
      runDemoBtn: 'Run Interactive Simulation',
      processingText: 'Rendering simulated video clips...',
      completedText: 'Completed 4-scene video generation!',
      expertTip: 'Pro Tip: You can paste any public video link to auto-extract transcripts, breakdown character traits, and generate brand new unique scripts.'
    },
    // Features Deepdive
    features: {
      tag: 'AUTOMATION ARSENAL 2026',
      title: '12 Powerhouse Features Engineered for Creators & Agencies',
      subtitle: 'All the most advanced AI video automation capabilities packed into a lightweight desktop software',
      viewMockup: 'View Real Interface',
      viewSpecs: 'Technical Specs'
    },
    // ROI Calculator
    calculator: {
      tag: 'ROI & SAVINGS CALCULATOR',
      title: 'How Much Time & Money',
      titleHighlight: 'Will You Save?',
      subtitle: 'Adjust the sliders below to estimate your monthly cost and time savings using Kinx Auto.',
      videosPerDay: 'Target videos to publish per day:',
      staffCost: 'Traditional manual / freelancer cost per video:',
      kinxCost: 'Kinx Auto All-in-One Investment:',
      savedMonthly: 'Monthly Money Saved:',
      savedTime: 'Time Saved Every Month:',
      hoursPerMonth: 'hours/month',
      manualEditTime: 'Manual editing time:',
      kinxEditTime: 'With Kinx Auto:',
      roiRate: 'Estimated ROI:',
      downloadCta: 'Start Saving Time & Money'
    },
    // Comparison Table
    comparison: {
      tag: 'HEAD-TO-HEAD COMPARISON',
      title: 'Why Do 15,000+ Creators Choose Kinx Auto?',
      subtitle: 'Unrivaled productivity advantage compared to manual video editing and sluggish web tools',
      featureCol: 'Key Features & Capabilities',
      kinxCol: 'Kinx Auto Desktop v4.6.1',
      manualCol: 'Manual Editing / Outsourcing',
      otherToolsCol: 'Other Cloud Web Tools'
    },
    // Pricing
    pricing: {
      tag: 'LIFETIME & SUBSCRIPTION LICENSES',
      title: 'Choose the Right License for Your Growth Goals',
      subtitle: 'Instant activation - Free trial before purchase - 1-on-1 remote tech support via Ultraview/AnyDesk',
      monthly: '1-Month Pro',
      quarterly: '3-Month Plan',
      semiannual: '6-Month Plan',
      yearly: '1-Year License (Best Value)',
      selectPlan: 'Select This Plan',
      popularBadge: 'MOST POPULAR',
      bestValueBadge: 'SAVE 50%',
      discount: 'Off',
      freeTrialNotice: '💡 You can download and test the 100% free trial version before purchasing a license.',
      paymentGuaranteed: 'Instant license delivery & activation within 30 seconds'
    },
    // Testimonials
    testimonials: {
      tag: 'CREATOR COMMUNITY PROOF',
      title: 'What Creators Are Saying About Kinx Auto',
      subtitle: 'Trusted daily by over 15,000+ YouTube Automation and TikTok Affiliate creators scaling channels to millions of views.'
    },
    // FAQ
    faq: {
      tag: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Technical Support & FAQs',
      subtitle: 'Everything you need to know about hardware specs, AI models, licensing, and workflow automation.'
    },
    // Download Hub
    download: {
      tag: 'OFFICIAL DOWNLOAD CENTER',
      title: 'Download Kinx Auto v4.6.1 Today',
      subtitle: 'Install in under 1 minute. Fully compatible with Windows 10/11 (64-bit) and macOS (Apple Silicon & Intel).',
      downloadWin: 'Download for Windows (.exe)',
      downloadMac: 'Download for macOS (.dmg)',
      sysReq: 'Recommended specs: 8GB+ RAM, 5GB free disk space, stable Internet connection',
      trialNotice: 'The installer includes a quickstart guide and a starter pack of 50+ cinematic Veo prompts.'
    },
    // Footer
    footer: {
      companyDesc: 'Comprehensive desktop software ecosystem for automated batch AI video creation. Built with Google Veo 3.1, 100% character consistency locking, and unlimited neural TTS audio export.',
      featuresCol: 'Key Features',
      pricingCol: 'Pricing Plans',
      downloadCol: 'Download & Support',
      legalCol: 'Legal & Compliance',
      voiceCompliance: 'AI Voice & Clone Disclaimer',
      disclaimer: 'Disclaimer & Liability',
      noRefund: 'Strict No-Refund Policy',
      compliance: 'Legal Compliance',
      privacy: 'Local-First Privacy',
      terms: 'Copyright & IP Terms',
      viewAllLegal: 'View Complete Legal Policies',
      legalNoticeText: 'Kinx Auto is a desktop digital automation tool for creative multimedia workflows. Users can try the software for free before buying; Kinx Auto applies a strict non-refundable policy upon license activation, alongside dedicated 1-on-1 tech support.',
      readFullLegal: 'Read Full Policies',
      copyright: '© 2026 Kinx Auto (kinxauto.click). All rights reserved. Technical hotline: +84 563.402.950.',
      safeBadge: '100% Secure & Local Privacy'
    },
    // Modals
    modal: {
      close: 'Close',
      submit: 'Submit Request',
      fullName: 'Your Full Name',
      phone: 'Phone / WhatsApp / Zalo',
      email: 'Email Address',
      purpose: 'Intended Usage',
      agreeTerms: 'I agree to the terms and privacy policy'
    }
  },

  ja: {
    // Top Bar & Navigation
    nav: {
      workflow: 'ワークフロー',
      features: '12の主要機能',
      roi: 'ROIコスト計算',
      comparison: '他社比較',
      pricing: '料金プラン',
      reviews: '利用者の声',
      download: 'ダウンロード',
      faq: 'よくある質問',
      zaloSupport: 'サポート: +84 563.402.950',
      downloadFree: '無料体験版をダウンロード',
      downloadApp: 'アプリ入手',
      selectLanguage: '言語を選択',
      communityGroup: 'コミュニティ',
      facebookPage: 'Facebook',
      versionBadge: 'v4.6.1',
      tagline: 'AI動画一括自動生成ソフトウェア'
    },
    // Language notice toast
    geoNotice: {
      detected: '現在地を検出しました：',
      switchedTo: '言語を自動的に日本語に切り替えました',
      keep: '日本語のまま利用',
      change: '言語を変更',
      autoDetected: 'IP/位置情報により自動設定'
    },
    // Hero Section
    hero: {
      badge: 'Google Veo 3.1 ＆ Edge TTS / Kinx ボイスクローン 2026',
      titleHighlight1: '一括自動化',
      titleHighlight2: 'AI動画制作',
      titleHighlight3: 'ソフトウェア',
      subtitle: 'YouTube Shorts、TikTok、Reels向けの動画を毎日数百本一括作成。Google Veo 3.1エンジン、100%同一キャラクター保持機能、無制限ニューラル音声合成＆無制限ボイスクローン、スマート台本解析を完全統合。',
      featureChips: {
        veo: 'Veo 3.1 マルチスレッド',
        character: '同一キャラ100%保持',
        edgeTts: 'Edge TTS ＆ 声クローン 0円',
        youtube: '人気動画の台本分析'
      },
      stats: {
        users: '15,000人以上のクリエイター',
        videosCreated: '250万本以上の出力実績',
        timeSaved: '制作時間を90%削減',
        speed: '制作スピード10倍向上'
      },
      buttons: {
        downloadWindows: 'Windows版をDL (.exe)',
        downloadMac: 'macOS版をDL (.dmg)',
        viewPricing: '料金プランを見る',
        watchDemo: 'デモを体験する',
        tryFree: '今すぐ無料で試す'
      },
      livePreviewBanner: 'Kinx Auto v4.6.1 実際のデスクトップ画面（Windows 11 / macOS対応）'
    },
    // Interactive Flow
    workflow: {
      tag: '4ステップの自動化パイプライン',
      title: 'アイデアから完成動画までわずか60秒',
      subtitle: '直感的な4つのステップで、完全自動の動画制作プロセスを体験してください',
      step1Title: 'アイデア / URL入力',
      step1Desc: 'YouTubeリンクを貼るか、プロンプトを入力',
      step2Title: 'AI台本・構成作成',
      step2Desc: '3幕構成のシーン別スクリプトを自動生成',
      step3Title: '音声AI ＆ ボイスクローン',
      step3Desc: 'Edge TTS ＆ Kinx 無制限ボイスクローン',
      step4Title: 'Veo 3.1 レンダリング',
      step4Desc: 'キャラ固定＆1080p高精細動画を出力',
      steps: {
        step1: {
          number: '01',
          name: 'AI台本＆プロンプト生成',
          desc: 'シーンごとのプロンプトを自動生成、またはYouTube動画からテキストを抽出・再構成。'
        },
        step2: {
          number: '02',
          name: 'キャラ固定＆音声・クローン選択',
          desc: 'すべてのカットで顔と服装の整合性を100%保持し、自然な音声またはクローン音声を付与。'
        },
        step3: {
          number: '03',
          name: 'Veo 3.1 並列レンダリング',
          desc: '1〜10スレッドの高速並列処理で、1080p/4Kの高精細シネマティック映像を一括出力。'
        },
        step4: {
          number: '04',
          name: '音声同期・字幕＆書き出し',
          desc: '自動テロップ生成、BGM同期をワンクリックで行い、MP4ファイルとしてPCへ直接保存。'
        }
      },
      runDemoBtn: 'シミュレーションを実行',
      processingText: 'サンプル動画を生成中...',
      completedText: '4シーンの動画レンダリングが完了しました！',
      expertTip: 'プロのコツ：YouTubeリンクを貼り付けるだけで、AIが字幕を自動抽出して新しいオリジナル台本を書き直します。'
    },
    // Features Deepdive
    features: {
      tag: '2026年最新 自動化ツール群',
      title: 'クリエイター＆代理店のための12の強力な機能',
      subtitle: '最先端のAI動画自動化技術を、軽量なデスクトップソフトウェア1本に凝縮',
      viewMockup: '実画面を見る',
      viewSpecs: '仕様詳細'
    },
    // ROI Calculator
    calculator: {
      tag: 'ROI 投資対効果シミュレーター',
      title: 'どれほどのコストと時間',
      titleHighlight: 'を削減できるか？',
      subtitle: 'スライダーを動かして、Kinx Auto導入時の削減時間と費用を即座に計算してください。',
      videosPerDay: '1日の制作目標本数：',
      staffCost: '動画1本当たりの従来の外注・編集単価：',
      kinxCost: 'Kinx Auto 導入費用：',
      savedMonthly: '毎月の削減コスト：',
      savedTime: '毎月削減できる作業時間：',
      hoursPerMonth: '時間/月',
      manualEditTime: '手作業での制作時間：',
      kinxEditTime: 'Kinx Auto使用時：',
      roiRate: '予想投資回収率：',
      downloadCta: '今すぐコスト削減を始める'
    },
    // Comparison Table
    comparison: {
      tag: '徹底比較表',
      title: 'なぜ15,000人以上のクリエイターに選ばれるのか？',
      subtitle: '手作業の編集や一般的なクラウドWebツールとの圧倒的な差',
      featureCol: '機能・評価項目',
      kinxCol: 'Kinx Auto v4.6.1',
      manualCol: '手作業・外注制作',
      otherToolsCol: '他社クラウドWebツール'
    },
    // Pricing
    pricing: {
      tag: 'ライセンス料金プラン',
      title: 'あなたの運用規模に合わせた最適なプラン',
      subtitle: '即時アクティベーション・購入前の無料体験版あり・Ultraviewによる1対1技術サポート付き',
      monthly: '1ヶ月プロプラン',
      quarterly: '3ヶ月プラン',
      semiannual: '6ヶ月プラン',
      yearly: '1年間プラン（一番人気）',
      selectPlan: 'このプランを選択',
      popularBadge: '人気No.1',
      bestValueBadge: '50%割引',
      discount: '割引',
      freeTrialNotice: '💡 有料ライセンスのご購入前に、100%無料体験版をダウンロードしてお試しいただけます。',
      paymentGuaranteed: '決済完了後、30秒以内に自動でライセンスを発行'
    },
    // Testimonials
    testimonials: {
      tag: 'ユーザーの声と実績',
      title: '愛用クリエイターからの実際の評価',
      subtitle: 'YouTube ShortsやTikTokで月間数百万再生を達成したクリエイターのリアルな活用実績。'
    },
    // FAQ
    faq: {
      tag: 'よくあるご質問',
      title: '技術サポートとよくある質問',
      subtitle: '動作環境、AIモデル、ライセンス、操作方法についての詳しい回答'
    },
    // Download Hub
    download: {
      tag: '公式ダウンロードセンター',
      title: 'Kinx Auto v4.6.1 をダウンロード',
      subtitle: 'わずか1分でセットアップ完了。Windows 10/11 (64-bit) および macOS (Mシリーズ・Intel) に完全対応。',
      downloadWin: 'Windows版をダウンロード (.exe)',
      downloadMac: 'macOS版をダウンロード (.dmg)',
      sysReq: '推奨スペック：メモリ8GB以上、空き容量5GB以上、安定したインターネット環境',
      trialNotice: 'インストーラーにはスタートガイドと50種類以上のVeoプロンプト集が同梱されています。'
    },
    // Footer
    footer: {
      companyDesc: 'コンテンツクリエイター、マーケター、広告代理店のための次世代AI動画一括生成エコシステム。Google Veo 3.1、キャラクター同一性100%固定、無制限ニューラル音声を統合。',
      featuresCol: '主要機能',
      pricingCol: '料金・ライセンス',
      downloadCol: 'ダウンロード＆サポート',
      legalCol: '法的情報とコンプライアンス',
      voiceCompliance: 'AI音声＆ボイスクローン免責',
      disclaimer: '免責事項',
      noRefund: '返金不可ポリシー',
      compliance: '法令・コミュニティ規約遵守',
      privacy: 'ローカルファースト個人情報保護',
      terms: '著作権・利用規約',
      viewAllLegal: 'すべての法的文書を見る',
      legalNoticeText: 'Kinx Autoはデスクトップ型のデジタル制作支援ツールです。購入前に無料体験が可能であり、デジタルライセンス発行後の返金には対応しておりません。専任技術者による遠隔サポートを提供いたします。',
      readFullLegal: '全文を読む',
      copyright: '© 2026 Kinx Auto (kinxauto.click). All rights reserved. サポートホットライン: +84 563.402.950.',
      safeBadge: '100% 安全・ローカル保存'
    },
    // Modals
    modal: {
      close: '閉じる',
      submit: '送信する',
      fullName: 'お名前',
      phone: '電話番号 / WhatsApp / Zalo',
      email: 'メールアドレス',
      purpose: '利用目的',
      agreeTerms: '利用規約およびプライバシーポリシーに同意する'
    }
  },

  zh: {
    // Top Bar & Navigation
    nav: {
      workflow: '全自动流程',
      features: '12大核心功能',
      roi: '省钱计算器',
      comparison: '竞品对比',
      pricing: '价格方案',
      reviews: '用户评价',
      download: '下载客户端',
      faq: '常见问题',
      zaloSupport: '客服热线: +84 563.402.950',
      downloadFree: '免费下载试用',
      downloadApp: '获取软件',
      selectLanguage: '选择语言',
      communityGroup: '交流群组',
      facebookPage: 'Facebook',
      versionBadge: 'v4.6.1',
      tagline: '批量AI视频全自动创作软件'
    },
    // Language notice toast
    geoNotice: {
      detected: '已检测到您的所在地区：',
      switchedTo: '已自动为您切换语言为',
      keep: '保持中文',
      change: '更换语言',
      autoDetected: '根据IP及地理位置自动识别'
    },
    // Hero Section
    hero: {
      badge: 'Google Veo 3.1 与 Edge TTS / Kinx 声音克隆引擎 2026',
      titleHighlight1: '批量自动化',
      titleHighlight2: 'AI视频创作',
      titleHighlight3: '软件',
      subtitle: '每天批量生成数百条爆款视频，专为 YouTube Shorts、TikTok 和 Reels 设计。集成 Google Veo 3.1、100%角色一致性锁定、零成本Edge TTS配音与Kinx TTS无限声音克隆、智能爆款文案解析。',
      featureChips: {
        veo: 'Veo 3.1 多线程并发',
        character: '100%角色面部一致性',
        edgeTts: 'Edge TTS 与 声音克隆 0元',
        youtube: '爆款视频文案提取'
      },
      stats: {
        users: '15,000+ 创作者信赖',
        videosCreated: '250万+ 成功导出视频',
        timeSaved: '节省 90% 制作时间',
        speed: '制作速度提升 10 倍'
      },
      buttons: {
        downloadWindows: '下载 Windows 版 (.exe)',
        downloadMac: '下载 macOS 版 (.dmg)',
        viewPricing: '查看授权方案',
        watchDemo: '观看交互演示',
        tryFree: '立即免费体验'
      },
      livePreviewBanner: 'Kinx Auto v4.6.1 真实客户端操作界面（支持 Windows 11 / macOS）'
    },
    // Interactive Flow
    workflow: {
      tag: '四步全自动生产流水线',
      title: '从创意文案到高清视频仅需60秒',
      subtitle: '直观体验4步闭环全自动AI视频生产，告别繁琐的手工剪辑',
      step1Title: '输入创意 / 视频链接',
      step1Desc: '粘贴公开视频链接或输入一句话文案',
      step2Title: 'AI智能剧本创作',
      step2Desc: '标准三幕式分镜提示词自动拆解',
      step3Title: 'Voice AI 拟真配音与声音克隆',
      step3Desc: 'Edge TTS 与 Kinx 无限制声音克隆',
      step4Title: 'Veo 3.1 多线程渲染',
      step4Desc: '锁定人物面孔并导出 1080p 超清视频',
      steps: {
        step1: {
          number: '01',
          name: 'AI智能剧本与提示词',
          desc: '自动生成分镜提示词，或一键从公开发布的视频中提取文案并改写。'
        },
        step2: {
          number: '02',
          name: '锁定人物与配音/克隆选择',
          desc: '在所有分镜镜头中100%保持人物五官一致，并搭配逼真的多语种解说或定制克隆声线。'
        },
        step3: {
          number: '03',
          name: 'Veo 3.1 多线程渲染',
          desc: '支持1至10线程极速并行渲染，一键批量输出1080p/4K电影级超清画质。'
        },
        step4: {
          number: '04',
          name: '自动字幕与音画合成',
          desc: '全自动生成动态花字字幕、对齐背景音效，直接将高清MP4视频保存到本地电脑。'
        }
      },
      runDemoBtn: '运行流程模拟',
      processingText: '正在渲染演示视频片段...',
      completedText: '已完成4个分镜视频的渲染！',
      expertTip: '专家建议：只需粘贴公开视频链接，AI便可智能提取字幕并重新撰写100%原创分镜剧本。'
    },
    // Features Deepdive
    features: {
      tag: '2026全新生产力工具箱',
      title: '专为创作者与MCN机构打造的12大顶级功能',
      subtitle: '将最先进的AI视频自动化生产力，凝聚于一款轻量级桌面端软件之中',
      viewMockup: '查看实机界面',
      viewSpecs: '技术参数'
    },
    // ROI Calculator
    calculator: {
      tag: '投资回报率(ROI)与成本计算器',
      title: '您能节省多少制作成本',
      titleHighlight: '与宝贵时间？',
      subtitle: '拖动下方滑块，实时测算使用 Kinx Auto 为您节省的月度制作成本与工时。',
      videosPerDay: '每日计划产出视频数量：',
      staffCost: '传统人工剪辑 / 外包制作单价：',
      kinxCost: 'Kinx Auto 软件全套投入：',
      savedMonthly: '每月节省资金：',
      savedTime: '每月节省工时：',
      hoursPerMonth: '小时/月',
      manualEditTime: '传统手工耗时：',
      kinxEditTime: 'Kinx Auto耗时：',
      roiRate: '预估回报率：',
      downloadCta: '立即开始降本增效'
    },
    // Comparison Table
    comparison: {
      tag: '直观竞品对比',
      title: '为何超过15,000+ 创作者选择 Kinx Auto？',
      subtitle: '全方位对比传统手工制作与普通网页工具的颠覆性优势',
      featureCol: '核心功能与对比维度',
      kinxCol: 'Kinx Auto 客户端 v4.6.1',
      manualCol: '人工剪辑 / 外包制作',
      otherToolsCol: '其他云端网页工具'
    },
    // Pricing
    pricing: {
      tag: '软件授权与价格方案',
      title: '选择最适合您团队业务发展的授权方案',
      subtitle: '即买即用 - 支持购买前100%免费试用 - 提供 Ultraview/AnyDesk 1对1远程技术保障',
      monthly: '1个月专业版',
      quarterly: '3个月季度版',
      semiannual: '6个月半年版',
      yearly: '1年旗舰版（最受欢迎）',
      selectPlan: '选择此方案',
      popularBadge: '最受欢迎',
      bestValueBadge: '立省50%',
      discount: '优惠',
      freeTrialNotice: '💡 在购买正式授权之前，您可以随时下载并免费试用完整功能。',
      paymentGuaranteed: '支付完成后 30 秒内全自动激活授权'
    },
    // Testimonials
    testimonials: {
      tag: '来自全球创作者的真实反馈',
      title: '用户如何评价 Kinx Auto？',
      subtitle: '真实案例见证通过 YouTube 自动化及 TikTok 带货达成数百万级播放量。'
    },
    // FAQ
    faq: {
      tag: '常见疑问解答',
      title: '技术支持与常见问题',
      subtitle: '为您详细解答关于电脑配置、AI模型、授权许可及操作流程的一切疑问。'
    },
    // Download Hub
    download: {
      tag: '官方正版下载中心',
      title: '下载 Kinx Auto v4.6.1 正式版',
      subtitle: '1分钟极速安装。完美兼容 Windows 10/11 (64位) 及 macOS (Apple M芯片与Intel芯片)。',
      downloadWin: '下载 Windows 安装包 (.exe)',
      downloadMac: '下载 macOS 安装包 (.dmg)',
      sysReq: '推荐配置：内存 8GB 以上、可用存储空间 5GB 以上、稳定的网络连接',
      trialNotice: '安装包内已包含新手视频教程及50+套精选爆款提示词库。'
    },
    // Footer
    footer: {
      companyDesc: '专为内容创作者、跨境出海团队及MCN打造的批量AI视频自动化生产桌面软件。深度融合 Google Veo 3.1、100%人物一致性锁定与无限量语音导出。',
      featuresCol: '核心功能',
      pricingCol: '价格与方案',
      downloadCol: '下载与技术支持',
      legalCol: '法律合规与政策',
      voiceCompliance: 'AI声音克隆免责声明',
      disclaimer: '免责声明',
      noRefund: '不予退款政策',
      compliance: '法律法规合规承诺',
      privacy: '本地优先隐私保护',
      terms: '版权与知识产权条款',
      viewAllLegal: '查看完整法律条款',
      legalNoticeText: 'Kinx Auto 是一款用于多媒体创意流程的桌面端数字工具软件。用户在购买前享有充分的免费试用权利；授权码一经激活概不退款，我们提供全方位一对一远程技术保障支持。',
      readFullLegal: '阅读完整政策',
      copyright: '© 2026 Kinx Auto (kinxauto.click). 版权所有。技术支持热线: +84 563.402.950.',
      safeBadge: '100% 安全 · 本地隐私保障'
    },
    // Modals
    modal: {
      close: '关闭',
      submit: '提交申请',
      fullName: '您的姓名',
      phone: '联系电话 / WhatsApp / 微信',
      email: '电子邮箱地址',
      purpose: '主要用途',
      agreeTerms: '我已阅读并同意相关条款与隐私政策'
    }
  }
};
