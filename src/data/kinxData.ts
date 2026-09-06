import { FeatureModule, PricingPlan, Testimonial, FaqItem, SectionConfig } from '../types';
import { APP_IMAGES } from './images';

export const APP_LINKS = {
  videoIntro: 'https://youtu.be/C9Mu5d85g9E?si=-rDK6zL5BdVxouOo',
  videoEmbed: 'https://www.youtube.com/embed/C9Mu5d85g9E?autoplay=1&rel=0',
  windowsDownload: 'https://tai.tainguyenweb.com/QL62s3',
  macosDownload: 'https://tai.tainguyenweb.com/etTRB3',
  zaloSupport: 'https://zalo.me/0563402950',
  zaloGroup: 'https://zalo.me/g/xzavnfmbfc6gkuc7pmrd',
  facebook: 'https://www.facebook.com/kinx.auto.tools/',
  hotline: '0563.402.950',
};

export const INITIAL_SECTIONS: SectionConfig[] = [
  { id: 'hero', title: 'Banner Giới Thiệu & Tải Nhanh (Hero)', description: 'Khu vực mở đầu ấn tượng với CTA tải phần mềm và video showcase', enabled: true, order: 0 },
  { id: 'stats-bar', title: 'Chỉ Số Ấn Tượng & Đối Tác', description: 'Số liệu 15.000+ người dùng, 1.2M+ video render, đối tác nền tảng', enabled: true, order: 1 },
  { id: 'interactive-flow', title: 'Quy Trình Tạo Video Tự Động 1-Click', description: 'Mô phỏng trực quan từ Ý tưởng -> Kịch bản -> Voice -> Prompt -> Video', enabled: true, order: 2 },
  { id: 'features-deepdive', title: '12 Vũ Khí Đột Phá Của Kinx Auto', description: 'Trình khám phá chi tiết 12 module kèm thẻ chú thích tính năng trực tiếp', enabled: true, order: 3 },
  { id: 'dialogue-showcase', title: 'Tính Năng Mới: Voice Hội Thoại Đa Dạng Tiếng Nói & Nghe Thử Audio', description: 'Trình diễn tạo voice hội thoại phân vai nhiều nhân vật và nghe audio mẫu .wav trực tiếp', enabled: true, order: 4 },
  { id: 'software-gallery', title: 'Album Ảnh Giao Diện & Tính Năng Thực Tế', description: 'Thư viện ảnh chụp toàn bộ 12 chức năng của phần mềm với chế độ phóng to Lightbox', enabled: true, order: 5 },
  { id: 'roi-calculator', title: 'Bảng Tính Hiệu Suất & Tiết Kiệm Chi Phí', description: 'Công cụ tính toán số giờ và số tiền tiết kiệm mỗi tháng', enabled: true, order: 6 },
  { id: 'comparison', title: 'So Sánh Kinx Auto vs Cách Thủ Công', description: 'Bảng đối chiếu tốc độ, chi phí đầu tư, công sức và độ ổn định', enabled: true, order: 7 },
  { id: 'pricing', title: 'Bảng Giá & Các Gói Đăng Ký', description: 'Các gói Gói Cá Nhân Pro, Gói Team Pro 5 Máy, Gói 1 Năm Tiết Kiệm, Gói Doanh nghiệp', enabled: true, order: 8 },
  { id: 'testimonials', title: 'Đánh Giá & Case Study Triệu View', description: 'Review chân thực từ các admin kênh YouTube Automation & TikTok Affiliate', enabled: true, order: 9 },
  { id: 'download-hub', title: 'Trung Tâm Tải Về & Cài Đặt (Windows/Mac)', description: 'Link tải trực tiếp bộ cài v4.6.1, hướng dẫn 3 bước cài đặt siêu nhanh', enabled: true, order: 10 },
  { id: 'faq', title: 'Câu Hỏi Thường Gặp (FAQ)', description: 'Giải đáp thắc mắc về cấu hình máy, đăng ký & nâng cấp gói, cập nhật tính năng', enabled: true, order: 11 },
];

export const KINX_MODULES: FeatureModule[] = [
  {
    id: 'veo-flow',
    name: 'Tạo Video Veo 3 / Veo 3.1 Flow',
    tagline: 'Render video AI điện ảnh hàng loạt - Đa luồng tốc độ cao không giới hạn',
    category: 'video',
    badge: 'HOT NHẤT 2025',
    badgeColor: 'purple',
    icon: 'Video',
    description: 'Tự động hóa toàn diện quy trình tạo video bằng Google Veo 3 / Veo 3.1. Hỗ trợ import prompt từ file TXT/JSON, chạy đồng thời từ 1 đến 10 luồng, tự động lưu và nối tiếp tác vụ mượt mà.',
    highlights: [
      'Render Veo 3.1 chất lượng cao 720p/1080p Cinematic',
      'Chạy song song đa luồng (Multi-threading) không nghẽn',
      'Tự động thử lại khi gặp sự cố mạng (Auto Retry)',
      'Tự động lưu trực tiếp vào thư mục máy tính (Auto Save)'
    ],
    metrics: [
      { label: 'Tốc độ render', value: 'Gấp 8x' },
      { label: 'Tỷ lệ thành công', value: '99.4%' },
      { label: 'Chi phí/Video', value: '~0 VNĐ' }
    ],
    uiMockup: {
      title: 'Tạo video bằng Veo3/Veo 3.1',
      subtitle: 'Tự động hóa quy trình tạo video hàng loạt.',
      tabs: ['CÀI ĐẶT VIDEO', 'NGUỒN DỮ LIỆU', 'LỊCH SỬ CHẠY'],
      activeTab: 'CÀI ĐẶT VIDEO',
      controlBar: {
        model: 'Veo 3 / 3.1',
        threads: 5,
        ratio: '16:9 Ngang & 9:16 Dọc',
        resolution: '720p / 1080p'
      },
      sampleContent: [
        { id: 1, prompt: '3D animated cinematic children\'s mystery film, 9:16 vertical, Tom in cozy kitchen...', status: 'Thành công!', duration: '0:00 / 0:08', imgBg: 'bg-emerald-950/40' },
        { id: 2, prompt: 'Mother opens the front door during a rainy afternoon and gently hugs Milo cat...', status: 'Thành công!', duration: '0:00 / 0:08', imgBg: 'bg-indigo-950/40' },
        { id: 3, prompt: 'Milo walks alone along a rainy dark neighborhood at night, green eyes glowing...', status: 'Đang chạy (85%)', duration: '0:00 / 0:08', imgBg: 'bg-purple-950/40' },
        { id: 4, prompt: 'Tom waking up in midnight, moonlight shining on yellow hoodie and bedroom...', status: 'Chờ xử lý', duration: '0:00 / 0:08', imgBg: 'bg-slate-900/60' }
      ]
    },
    hotspots: [
      { id: 'h1', xPercent: 25.8, yPercent: 22.5, title: 'Cài Đặt Model Veo 3 / 3.1 & Số Luồng', description: 'Tùy chọn engine tạo video tiên tiến nhất của Google, chỉnh tỉ lệ 16:9 hoặc 9:16 và số luồng render song song.', badge: 'Model & Luồng' },
      { id: 'h2', xPercent: 42.0, yPercent: 22.5, title: 'Thêm Prompt [TXT / JSON] & Tự Động Lưu', description: 'Nạp hàng loạt hàng trăm prompt từ file, tự động lưu trực tiếp vào thư mục máy tính và tự động thử lại khi lỗi mạng.', badge: 'Import & Auto Save' },
      { id: 'h3', xPercent: 76.5, yPercent: 22.5, title: 'Nút Chạy Tất Cả & Thống Kê Tiến Trình', description: 'Một cú nhấp chuột để kích hoạt toàn bộ hàng đợi, hiển thị trực quan số lượng Đang chạy, Thành công và % tiến độ.', badge: 'Batch Run' },
      { id: 'h4', xPercent: 23.5, yPercent: 66.5, title: 'Trình Phát Xem Trước Video Hoàn Thành', description: 'Kiểm tra ngay video vừa render xong tại chỗ với độ phân giải cao và thanh điều khiển trình phát MP4.', badge: 'Live Player' }
    ],
    realImage: APP_IMAGES.videoFlow,
    imageCaption: 'Giao diện tính năng Tạo Video Flow với Veo 3.1 đa luồng tốc độ cao tự động lưu về máy tính'
  },
  {
    id: 'image-to-video',
    name: 'Tạo Video Bằng Ảnh (Image to Video Flow)',
    tagline: 'Biến ảnh tĩnh thành video chuyển động sống động - Thổi hồn cho từng bức ảnh',
    category: 'video',
    badge: 'VEO 3.1 IMAGE-TO-VIDEO',
    badgeColor: 'purple',
    icon: 'Video',
    description: 'Chuyển đổi ảnh 2D, ảnh chân dung, phong cảnh hoặc ảnh sản phẩm thành video chuyển động tự nhiên với độ phân giải cao bằng Google Veo 3 / 3.1. Hỗ trợ nạp hàng loạt ảnh cùng lúc từ thư mục và xuất video siêu tốc.',
    highlights: [
      'Chuyển ảnh tĩnh thành video chuyển động mượt mà 1080p',
      'Tự động kế thừa ánh sáng, màu sắc và phong cách của ảnh gốc',
      'Điều khiển góc máy xoay, zoom, pan cinematic theo ý muốn',
      'Nạp hàng loạt ảnh từ thư mục và render đa luồng tự động'
    ],
    metrics: [
      { label: 'Chất lượng xuất', value: '1080p Full HD' },
      { label: 'Độ mượt chuyển động', value: '60 FPS' },
      { label: 'Xử lý hàng loạt', value: 'Đa luồng' }
    ],
    uiMockup: {
      title: 'Tạo Video bằng Ảnh',
      subtitle: 'Tự động hóa quy trình tạo video từ ảnh với Veo 3 / 3.1',
      tabs: ['CHỌN ẢNH NGUỒN', 'CÀI ĐẶT CHUYỂN ĐỘNG', 'LỊCH SỬ RENDER'],
      activeTab: 'CHỌN ẢNH NGUỒN',
      controlBar: {
        model: 'Veo 3.1 Image-to-Video',
        threads: 4,
        ratio: '16:9 Ngang & 9:16 Dọc',
        resolution: '1080p HD'
      },
      sampleContent: [
        { id: 1, prompt: 'Cinematic camera pan across ancient glowing key in mystery room...', status: 'Thành công!', duration: '0:00 / 0:08', imgBg: 'bg-indigo-950/40' },
        { id: 2, prompt: 'Milo cat eyes glowing gently with slight head movement...', status: 'Thành công!', duration: '0:00 / 0:08', imgBg: 'bg-purple-950/40' }
      ]
    },
    hotspots: [
      { id: 'h1', xPercent: 26, yPercent: 24, title: 'Khu Vực Kéo Thả Ảnh Nguồn', description: 'Nạp ảnh đơn hoặc chọn nguyên thư mục ảnh để chuyển thành video hàng loạt.', badge: 'Image Source' },
      { id: 'h2', xPercent: 52, yPercent: 24, title: 'Tùy Chỉnh Model Veo & Chuyển Động', description: 'Chọn mức độ chuyển động, góc lia máy quay và số luồng render song song.', badge: 'Motion Settings' },
      { id: 'h3', xPercent: 78, yPercent: 24, title: 'Nút Chạy Tất Cả (Batch Render)', description: 'Tự động kích hoạt hàng đợi và lưu video trực tiếp vào thư mục máy tính.', badge: 'Batch Run' },
      { id: 'h4', xPercent: 28, yPercent: 65, title: 'Xem Trước Video Xuất Bản', description: 'Trình phát video kiểm tra độ mượt chuyển động của ảnh sau khi render xong.', badge: 'Video Preview' }
    ],
    realImage: APP_IMAGES.imageToVideo,
    imageCaption: 'Giao diện tính năng Tạo Video bằng Ảnh với Google Veo 3 / 3.1 render đa luồng chất lượng cao'
  },
  {
    id: 'consistent-character',
    name: 'Tạo Video Nhân Vật Đồng Nhất',
    tagline: '100% Giữ nguyên khuôn mặt, trang phục & phong cách qua mọi phân cảnh',
    category: 'video',
    badge: 'ĐỘT PHÁ CÔNG NGHỆ',
    badgeColor: 'cyan',
    icon: 'Users',
    description: 'Giải quyết triệt để vấn đề lớn nhất của AI Video: nhân vật bị biến dạng hoặc đổi mặt qua các cảnh. Kinx Auto cho phép bạn nạp 1 ảnh nhân vật tổng hoặc từng ảnh đơn để AI khóa chặt danh tính nhân vật suốt cả bộ phim.',
    highlights: [
      'Khóa khuôn mặt nhân vật chính xác từng góc quay',
      'Hỗ trợ quản lý nhiều nhân vật cùng xuất hiện trong 1 cảnh',
      'Duy trì phong cách hoạt hình 3D, Anime hoặc Người thật',
      'Nhúng trực tiếp biến cú pháp @nv1, @nv2 vào prompt'
    ],
    metrics: [
      { label: 'Độ đồng nhất', value: '100%' },
      { label: 'Số nhân vật/cảnh', value: 'Lên tới 5 NV' },
      { label: 'Tiết kiệm sửa lỗi', value: '100%' }
    ],
    uiMockup: {
      title: 'Tạo Video NV Đồng Nhất',
      subtitle: 'Mẹo: Tải 1 ảnh chứa tổng các nhân vật hoặc ảnh đơn',
      tabs: ['Ảnh tổng', 'Ảnh đơn', 'Quản lý kho nhân vật'],
      activeTab: 'Ảnh tổng',
      controlBar: {
        model: 'Veo 3.1 Consistent NV',
        threads: 4,
        ratio: '16:9 Ngang',
        resolution: '720p (Gốc)'
      },
      sampleContent: [
        { id: 1, prompt: 'Chinese animated cinematic 3D, medium shot of a woman standing proudly in countryside courtyard...', status: 'Hoàn thành!', char: 'Bà cụ Dư / Mẹ Tô' },
        { id: 2, prompt: 'Close-up on Bà cụ Dư with a sarcastic expression pointing toward the room...', status: 'Hoàn thành!', char: 'Bà cụ Dư' },
        { id: 3, prompt: 'Inside the Tô family courtyard, Mẹ Tô sits crying quietly while Cha Tô clenches both fists...', status: 'Hoàn thành!', char: 'Cha Tô & Mẹ Tô' }
      ]
    },
    hotspots: [
      { id: 'h1', xPercent: 24, yPercent: 22, title: 'Khu Vực Nạp Ảnh Nhân Vật Mẫu', description: 'Kéo thả ảnh chân dung hoặc ảnh nhóm nhân vật để AI phân tích và khóa chặt đặc điểm khuôn mặt.', badge: 'Face Lock' },
      { id: 'h2', xPercent: 52, yPercent: 22, title: 'Tùy Chỉnh Model, Luồng & Tự Động Lưu', description: 'Cấu hình engine Veo Consistent, số luồng chạy và thư mục lưu video đầu ra.', badge: 'Automation' },
      { id: 'h3', xPercent: 78, yPercent: 22, title: 'Nút Chạy Tất Cả (Batch Process)', description: 'Render toàn bộ các cảnh phim với nhân vật đồng nhất 100% không bị lệch mặt.', badge: 'Run All' },
      { id: 'h4', xPercent: 28, yPercent: 65, title: 'Prompt Gắn Định Danh Nhân Vật @nv', description: 'Cú pháp thông minh liên kết hành động của từng nhân vật trong kịch bản.', badge: 'Smart Syntax' }
    ],
    realImage: APP_IMAGES.consistentCharacter,
    imageCaption: 'Giao diện tính năng NV Đồng Nhất - Khóa chuẩn 100% diện mạo nhân vật qua các góc quay'
  },
  {
    id: 'voice-tts',
    name: 'Tạo Voice AI, Voice Hội Thoại Đa Dạng Tiếng Nói & Clone Giọng Đa Luồng',
    tagline: 'Chuyển văn bản thành giọng đọc truyền cảm, tạo hội thoại đối đáp đa nhân vật & Clone mọi giọng nói không giới hạn',
    category: 'core',
    badge: 'MỚI: VOICE HỘI THOẠI & CLONE KHÔNG GIỚI HẠN',
    badgeColor: 'emerald',
    icon: 'Mic',
    description: 'Tích hợp bộ 3 công nghệ âm thanh AI đỉnh cao: (1) Tạo Voice Hội Thoại Đa Dạng Tiếng Nói phân vai nhiều nhân vật trong 1 kịch bản, (2) Bộ chuyển giọng đọc Edge TTS miễn phí 100% không tốn token với 50+ ngôn ngữ quốc tế, và (3) Công nghệ Kinx TTS Clone giọng nói không giới hạn từ file mẫu audio bất kỳ. Hỗ trợ chạy đa luồng xuất hàng loạt file MP3/WAV 320kbps chuẩn phòng thu, ghép nối đối đáp mượt mà không bị ngắt quãng.',
    highlights: [
      'MỚI: Tạo Voice Hội thoại phân vai MC, Khách mời, Nhân vật A/B trong cùng 1 kịch bản',
      'Edge TTS Đa Luồng: Đầy đủ giọng Bắc, Nam (Hoài My, Nam Minh...) & 50+ ngôn ngữ quốc tế',
      'Kinx TTS Voice Cloning: Nhân bản giọng nói bất kỳ từ file mẫu audio chỉ vài giây không giới hạn',
      'Tự động ghép nối phân đoạn đối thoại chuẩn từng mili-giây, xuất MP3/WAV 320kbps phòng thu'
    ],
    metrics: [
      { label: 'Chi phí Voice & Clone', value: '0 VNĐ' },
      { label: 'Tốc độ tạo audio', value: '1.5 Giây/câu' },
      { label: 'Số nhân vật hội thoại', value: 'Đa nhân vật / Kịch bản' }
    ],
    uiMockup: {
      title: 'Tạo Voice & Hội Thoại Kinx TTS Multi-Speaker',
      subtitle: 'Tạo voice hội thoại đa dạng tiếng nói, Edge TTS & Clone giọng không giới hạn đa luồng',
      tabs: ['Voice Hội Thoại Đa Dạng Tiếng Nói', 'Edge TTS: Hoài My / Nam Minh', 'Kinx TTS: Clone Giọng Mẫu', 'Chạy Đa Luồng'],
      activeTab: 'Voice Hội Thoại Đa Dạng Tiếng Nói',
      controlBar: {
        model: 'Multi-Speaker Dialogue & Kinx TTS Clone',
        threads: 5,
        ratio: 'MP3/WAV Stereo 320kbps',
        customInfo: 'Hội Thoại Đa Giọng: Sẵn sàng | Đa luồng: 5'
      },
      sampleContent: [
        { id: 1, text: 'Chào mừng các bạn đã đến với kênh chia sẻ kiến thức công nghệ AI Kinx Auto!', voice: 'Nhân vật 1: Nam Minh (MC)', duration: '0:00 / 0:04', status: 'Khớp 100%' },
        { id: 2, text: 'Hôm nay chúng ta sẽ cùng trải nghiệm tính năng tạo Voice Hội thoại đa giọng nói hoàn toàn mới.', voice: 'Nhân vật 2: Hoài My (Khách mời)', duration: '0:04 / 0:09', status: 'Khớp 100%' },
        { id: 3, text: 'Đặc biệt là hệ thống tự động gán giọng từng nhân vật và xuất file ghép nối chuẩn từng mili-giây!', voice: 'Nhân vật 3: Kinx Clone Studio', duration: '0:09 / 0:15', status: 'Khớp 100%' }
      ]
    },
    hotspots: [
      { id: 'h1', xPercent: 26, yPercent: 22, title: 'Phân Vai Kịch Bản & Gán Giọng Từng Nhân Vật', description: 'Gán giọng đọc khác nhau cho từng dòng thoại của MC, Khách mời hoặc nhân vật trong kịch bản.', badge: 'Multi-Speaker' },
      { id: 'h2', xPercent: 52, yPercent: 22, title: 'Kinx TTS Voice Cloning Không Giới Hạn', description: 'Nạp file audio mẫu vài giây để nhân bản/clone giọng đọc bất kỳ, không giới hạn số lượng giọng clone.', badge: 'Unlimited Clone' },
      { id: 'h3', xPercent: 78, yPercent: 22, title: 'Xuất Audio Hội Thoại Đa Luồng Siêu Tốc', description: 'Chạy song song 1 - 10 luồng xuất hàng loạt file MP3 320kbps tự động ghép nối mượt mà.', badge: 'Multi-Thread 320k' },
      { id: 'h4', xPercent: 28, yPercent: 65, title: 'Thanh Nghe Thử Trực Tiếp File Xuất Bản (.wav)', description: 'Tích hợp trình nghe thử audio hội thoại thực tế trước khi xuất bản video hoàn chỉnh.', badge: 'Live WAV Preview' }
    ],
    realImage: APP_IMAGES.voiceDialogue,
    imageCaption: 'Giao diện tính năng Tạo Voice Hội Thoại Đa Dạng Tiếng Nói & Kinx TTS Clone giọng nói không giới hạn chạy đa luồng siêu tốc'
  },
  {
    id: 'ai-script-generator',
    name: 'Quản Lý Kịch Bản Bằng AI',
    tagline: 'Viết kịch bản chuẩn cấu trúc 3 hồi từ 1.000 đến 20.000 từ trong 10 giây',
    category: 'script',
    badge: 'TỐI ƯU GIỮ CHÂN VIEW',
    badgeColor: 'purple',
    icon: 'FileText',
    description: 'Chỉ cần gõ 1 ý tưởng ngắn hoặc dán link bài báo, AI sẽ tự động sáng tạo kịch bản hoàn chỉnh theo đúng phong cách bạn muốn (Kể chuyện, Hành động, Tình cảm, Kinh dị, Hài hước, Bí ẩn trinh thám...).',
    highlights: [
      'Tùy chọn độ dài linh hoạt: 1.000 từ (~1.5p) đến 20.000 từ (~30p)',
      'Hơn 20 thể loại nội dung chuyên sâu bắt trọn thị hiếu khán giả',
      'Tự động phân cảnh kèm gợi ý bối cảnh và câu thoại nhân vật',
      'Định dạng đầu ra chuẩn cấu trúc JSON/TXT để nạp trực tiếp vào Video Flow'
    ],
    metrics: [
      { label: 'Thời gian viết', value: '15 Giây' },
      { label: 'Độ dài kịch bản', value: 'Đến 20.000 từ' },
      { label: 'Thể loại hỗ trợ', value: '20+ Thể loại' }
    ],
    uiMockup: {
      title: 'Quản lý Kịch Bản bằng AI',
      subtitle: 'Tạo Kịch Bản bằng AI mới theo ý tưởng hoặc bài báo',
      tabs: ['Tạo Kịch Bản bằng AI', 'Tạo Tiêu đề/Mô tả', 'Lịch sử'],
      activeTab: 'Tạo Kịch Bản bằng AI',
      controlBar: {
        model: 'Gemini 2.5 Flash Script Engine',
        threads: 1,
        customInfo: 'Độ dài: 2000 từ ~3 phút đọc | Phong cách: Kể chuyện'
      },
      sampleContent: {
        idea: 'Cuộc chiến King Kong và quái vật bí ẩn dưới lòng Đảo Đầu Lâu',
        tags: ['Kể chuyện', 'Hành động/Chiến đấu', 'Bí ẩn/Trinh thám', 'Fantasy/Thần thoại', 'Kinh dị/Horror'],
        durations: ['1000 từ (~1.5p)', '2000 từ (~3p)', '3500 từ (~5p)', '7000 từ (~10p)', '10000 từ (~15p)', '20000 từ (~30p)']
      }
    },
    hotspots: [
      { id: 'h1', xPercent: 26, yPercent: 26, title: 'Nhập Ý Tưởng / Link Bài Báo', description: 'Gõ chủ đề bất kỳ hoặc dán link bài báo báo điện tử để AI viết lại thành kịch bản phân cảnh.', badge: 'Prompt Input' },
      { id: 'h2', xPercent: 48, yPercent: 48, title: 'Chọn Độ Dài & Thể Loại Kịch Bản', description: 'Căn chỉnh chính xác từ 1.000 đến 20.000 từ và chọn hơn 20 thể loại cuốn hút.', badge: 'Genre & Length' },
      { id: 'h3', xPercent: 78, yPercent: 24, title: 'Nút Tạo Kịch Bản Bằng AI', description: 'Kích hoạt tạo kịch bản 3 hồi hoàn chỉnh chỉ trong 10-15 giây.', badge: 'Generate' },
      { id: 'h4', xPercent: 50, yPercent: 75, title: 'Bảng Xuất Kịch Bản Đầy Đủ & Tách Cảnh', description: 'Hiển thị chi tiết từng phân cảnh, mô tả bối cảnh và câu thoại nhân vật.', badge: 'Scene Output' }
    ],
    realImage: APP_IMAGES.aiScriptGen,
    imageCaption: 'Giao diện tính năng Tạo Kịch Bản bằng AI tự động phân cảnh chuẩn cấu trúc 3 hồi'
  },
  {
    id: 'video-prompts-maker',
    name: 'Tạo Prompt Kịch Bản (Cinematic Prompts)',
    tagline: 'Tự động sinh Prompt hình ảnh chuẩn điện ảnh với camera, ánh sáng & góc máy',
    category: 'script',
    badge: 'CHUẨN HOLLYWOOD',
    badgeColor: 'amber',
    icon: 'Sparkles',
    description: 'Chuyển kịch bản chữ thành các câu prompt tiếng Anh chuyên sâu cho Veo/Midjourney. Tùy chọn sẵn kho góc máy (Góc rộng, FPV, Drone, Dolly Zoom...) và ánh sáng (Rembrandt, Golden Hour, Neon, High-key...).',
    highlights: [
      'Gợi ý sẵn 15+ góc máy máy quay chuyên nghiệp',
      'Thiết lập ánh sáng & không khí cinematic tăng chiều sâu video',
      'Định dạng đầu ra chuẩn JSON tự động khớp với nhân vật',
      'Không cần giỏi tiếng Anh vẫn tạo được prompt đỉnh cao'
    ],
    metrics: [
      { label: 'Góc máy có sẵn', value: '15+ Kiểu' },
      { label: 'Hiệu ứng ánh sáng', value: '10+ Preset' },
      { label: 'Chính xác kịch bản', value: '100%' }
    ],
    uiMockup: {
      title: 'Create Video Prompts',
      subtitle: 'Create cinematic prompts from stories, manage character collections and history.',
      tabs: ['Create New', 'History (0)', 'Collection (0)'],
      activeTab: 'Create New',
      controlBar: {
        model: 'Prompt Master Engine',
        ratio: 'Điện ảnh (Cinematic)',
        customInfo: 'Số lượng Prompt: 10 prompt'
      },
      sampleContent: {
        cameraModes: ['Ống kính góc rộng', 'Ống kính tele', 'Góc nhìn FPV', 'Góc quay Flycam', 'Ngang tầm mắt', 'Góc thấp (Low Angle)', 'Dolly Zoom', 'Tracking'],
        lightingModes: ['Ánh sáng tự nhiên', 'Ánh sáng 3 điểm', 'Rembrandt', 'Giờ vàng (Golden hour)', 'Ánh sáng Neon', 'Ánh sáng ma mị (Eerie)']
      }
    },
    hotspots: [
      { id: 'h1', xPercent: 26, yPercent: 30, title: 'Khu Vực Nhập Truyện / Kịch Bản', description: 'Dán câu chuyện cần chuyển thành prompt, phần mềm tự phân tích nhân vật và bối cảnh.', badge: 'Story Input' },
      { id: 'h2', xPercent: 68, yPercent: 32, title: 'Menu Chọn Góc Máy & Ánh Sáng', description: 'Tùy chọn nhanh góc quay FPV, Flycam, Dolly Zoom và ánh sáng Golden Hour, Rembrandt...', badge: 'Cinematic Camera' },
      { id: 'h3', xPercent: 78, yPercent: 22, title: 'Nút Tạo Prompt Hàng Loạt', description: 'Nhấn để AI tự động xuất danh sách prompt tương ứng cho toàn bộ các cảnh phim.', badge: 'Batch Generator' },
      { id: 'h4', xPercent: 42, yPercent: 72, title: 'Danh Sách Prompt Điện Ảnh Xuất Ra', description: 'Các câu lệnh prompt tiếng Anh chuyên nghiệp sẵn sàng nạp trực tiếp vào Veo 3.1.', badge: 'Prompt List' }
    ],
    realImage: APP_IMAGES.videoPromptsMaker,
    imageCaption: 'Giao diện tính năng Tạo Prompt Kịch Bản tối ưu hóa góc máy và ánh sáng điện ảnh cho Veo 3.1'
  },
  {
    id: 'youtube-analyzer',
    name: 'Phân Tích & Nghiên Cứu Kịch Bản Video AI',
    tagline: 'Phân tích video YouTube công khai - Học hỏi cấu trúc, nhân vật & sáng tạo kịch bản mới',
    category: 'script',
    badge: 'NGHIÊN CỨU THỊ TRƯỜNG',
    badgeColor: 'purple',
    icon: 'Youtube',
    description: 'Thấy một chủ đề video đang thịnh hành? Chỉ cần dán link YouTube công khai hoặc tải file video lên, Kinx Auto sẽ trích xuất phụ đề, phân tích cấu trúc bối cảnh và viết lại kịch bản mới độc quyền hoàn toàn cho bạn.',
    highlights: [
      'Trích xuất phụ đề chi tiết từ bất kỳ link YouTube công khai nào',
      'Tự động viết lại kịch bản mới (Rewrite) sáng tạo, chuẩn cấu trúc',
      'Tóm tắt kịch bản thành video ngắn TikTok/Reels cuốn hút',
      'Gợi ý tiêu đề hấp dẫn, mô tả thu hút và bộ thẻ hashtag chuẩn SEO'
    ],
    metrics: [
      { label: 'Thời gian trích xuất', value: '5 Giây' },
      { label: 'Sáng tạo nội dung', value: '100% Unique' },
      { label: 'Hỗ trợ nguồn', value: 'YouTube / File Video' }
    ],
    uiMockup: {
      title: 'Phân tích kịch bản AI',
      subtitle: 'Nguồn dữ liệu: YouTube URL hoặc Tải Video',
      tabs: ['Tạo Mới', 'Lịch sử'],
      activeTab: 'Tạo Mới',
      controlBar: {
        model: 'Video Intelligence AI',
        customInfo: 'Nguồn: YouTube URL: https://www.youtube.com/watch?v=...'
      },
      sampleContent: {
        options: [
          'Lấy kịch bản đầy đủ của nội dung, nhân vật bối cảnh',
          'Phân tích chi tiết nội dung',
          'Viết thành kịch bản mới dựa trên nội dung video',
          'Tóm tắt nội dung thành 5 gạch đầu dòng chính',
          'Viết lại dưới dạng kịch bản video ngắn',
          'Tạo tiêu đề hấp dẫn & bộ thẻ tags phù hợp'
        ]
      }
    },
    hotspots: [
      { id: 'h1', xPercent: 36, yPercent: 28, title: 'Ô Nhập Link Video YouTube', description: 'Hỗ trợ mọi video YouTube công khai, tự động trích xuất phụ đề và nội dung thoại.', badge: 'Link Scraper' },
      { id: 'h2', xPercent: 36, yPercent: 58, title: 'Menu Tác Vụ Phân Tích Thông Minh', description: 'Chọn viết lại kịch bản mới, tóm tắt video ngắn hoặc trích xuất nhân vật bối cảnh.', badge: 'AI Parser' },
      { id: 'h3', xPercent: 78, yPercent: 24, title: 'Nút Bắt Đầu Phân Tích', description: 'Xử lý ngay lập tức và trả kết quả kịch bản sẵn sàng đưa sang Video Flow.', badge: 'Fast Process' },
      { id: 'h4', xPercent: 50, yPercent: 82, title: 'Kết Quả Kịch Bản & Tiêu Đề Gợi Ý', description: 'Toàn bộ nội dung kịch bản viết lại kèm bộ thẻ hashtag chuẩn SEO YouTube.', badge: 'Script Result' }
    ],
    realImage: APP_IMAGES.youtubeAnalyzer,
    imageCaption: 'Giao diện tính năng Kịch bản AI - Phân tích phụ đề và viết lại kịch bản từ link YouTube trong 5 giây'
  },
  {
    id: 'youtube-thumbnail',
    name: 'Tạo Thumbnail YouTube Giật Tít',
    tagline: 'Tự động tạo ảnh thu nhỏ tương phản cao, giật tít bắt mắt tăng CTR cực mạnh',
    category: 'image',
    badge: 'TĂNG 300% CTR',
    badgeColor: 'amber',
    icon: 'Image',
    description: 'Thumbnail quyết định 80% tỷ lệ click (CTR) của video. Kinx Auto tự động phân tích kịch bản để tạo ra ảnh thumbnail phong cách điện ảnh, tương phản cao kèm chữ tít tiếng Việt nổi bật thu hút người xem ngay lập tức.',
    highlights: [
      'Tạo thumbnail trực tiếp từ kịch bản hoặc nhập nội dung tùy chỉnh',
      'Phong cách Điện ảnh Cinematic, Tương phản cao chuẩn xu hướng',
      'Hỗ trợ tỷ lệ 16:9 (YouTube) và 9:16 (TikTok/Shorts)',
      'Tự động chèn text giật tít tiếng Việt sắc nét và nổi bật'
    ],
    metrics: [
      { label: 'Tăng CTR', value: '+300%' },
      { label: 'Thời gian tạo', value: '5 Giây' },
      { label: 'Độ phân giải', value: '4K Ultra HD' }
    ],
    uiMockup: {
      title: 'Tạo Thumbnail YouTube',
      subtitle: 'Từ Kịch Bản hoặc Nhập Thủ Công',
      tabs: ['Từ Kịch Bản', 'Nhập Thủ Công'],
      activeTab: 'Từ Kịch Bản',
      controlBar: {
        model: 'Cinematic Thumbnail Engine',
        ratio: '16:9 (Ngang) & 9:16 (Dọc)',
        customInfo: 'Phong cách: Điện ảnh (Cinematic) | Kiểu: Tương phản cao'
      },
      sampleContent: {
        title: 'CUỘC CHIẾN KING KONG',
        subtitle: 'BÍ ẨN ĐẢO ĐẦU LÂU - SỰ TRỞ LẠI CỦA HUYỀN THOẠI',
        previewDesc: 'Khung cảnh tàu nghiên cứu hiện đại tiến vào sương mù hòn đảo bí ẩn...'
      }
    },
    hotspots: [
      { id: 'h1', xPercent: 28, yPercent: 32, title: 'Thiết Lập Phong Cách & Tiêu Đề', description: 'Lựa chọn phong cách Cinematic, Anime, 3D Disney với tone màu tương phản cao.', badge: 'Style Preset' },
      { id: 'h2', xPercent: 78, yPercent: 24, title: 'Nút Tạo Thumbnail Ngay', description: 'Render ảnh siêu nét với prompt tự động tối ưu hóa cho thuật toán YouTube.', badge: 'Instant Render' },
      { id: 'h3', xPercent: 68, yPercent: 55, title: 'Khung Xem Trước Thumbnail Hoàn Chỉnh', description: 'Hình ảnh sống động kèm typography chữ tiêu đề tiếng Việt nổi bật giữa khung hình.', badge: 'Thumbnail Preview' },
      { id: 'h4', xPercent: 28, yPercent: 75, title: 'Tùy Chỉnh Typography & Bố Cục Chữ', description: 'Căn lề, đổi font chữ và hiệu ứng viền phát sáng cho dòng tít giật gân.', badge: 'Text Effects' }
    ],
    realImage: APP_IMAGES.youtubeThumbnail,
    imageCaption: 'Giao diện tính năng Tạo Thumbnail YouTube giật tít tương phản cao kéo CTR tăng vọt'
  },
  {
    id: 'unlimited-image-pro',
    name: 'Unlimited Tạo Ảnh Pro (Nano Banana Pro)',
    tagline: 'Render hàng trăm ảnh chất lượng cao song song - Kiểm soát Seed & Tỷ lệ',
    category: 'image',
    badge: 'RENDER HÀNG LOẠT',
    badgeColor: 'purple',
    icon: 'Layers',
    description: 'Công cụ render ảnh hàng loạt tốc độ cao với model Nano Banana Pro. Hỗ trợ import hàng trăm prompt từ file TXT, kiểm soát Seed cố định phong cách, tự động lưu ảnh vào thư mục máy tính.',
    highlights: [
      'Chạy đồng thời từ 1 đến 8 luồng render ảnh siêu tốc',
      'Hỗ trợ chế độ Dùng Ảnh Tham Chiếu (Image-to-Image)',
      'Tự động phân loại thư mục lưu trữ theo từng dự án',
      'Giao diện trực quan xem trước trạng thái từng ảnh (Hoàn thành / Đang chạy)'
    ],
    metrics: [
      { label: 'Số ảnh render', value: 'Không giới hạn' },
      { label: 'Số luồng', value: '1-8 Luồng' },
      { label: 'Tự động lưu', value: '100% Local' }
    ],
    uiMockup: {
      title: 'Tạo Ảnh Pro',
      subtitle: 'Model: Nano Banana Pro | Tỷ lệ: 16:9 Ngang | Seed: 545706 | Luồng: 3',
      tabs: ['Từ Kịch Bản', 'Thêm Prompt từ Txt', 'Dùng ảnh tham chiếu'],
      activeTab: 'Từ Kịch Bản',
      controlBar: {
        model: 'Nano Banana Pro',
        threads: 3,
        ratio: '16:9 Ngang',
        customInfo: 'Tổng: 80 | Đang chạy: 8 | Đã xong: 72 | Lỗi: 0'
      },
      sampleContent: [
        { id: 1, name: 'Ảnh #1', prompt: 'Inside @bus1 on a freezing late-autumn morning, @nv1 sits beside @nv2...', status: 'Hoàn thành!' },
        { id: 2, name: 'Ảnh #2', prompt: 'Documentary style, natural ambience, no camera cut, no morphing...', status: 'Hoàn thành!' },
        { id: 3, name: 'Ảnh #3', prompt: 'Continue from exact approved final frame of previous clip...', status: 'Hoàn thành!' },
        { id: 4, name: 'Ảnh #4', prompt: 'Yellow school bus on dusty road with passengers looking outside...', status: 'Hoàn thành!' }
      ]
    },
    hotspots: [
      { id: 'h1', xPercent: 26, yPercent: 22, title: 'Cài Đặt Model & Khóa Seed', description: 'Cố định chỉ số Seed để tất cả ảnh trong cùng 1 tập phim có chung tone màu và bối cảnh.', badge: 'Seed Control' },
      { id: 'h2', xPercent: 48, yPercent: 22, title: 'Thêm Prompt Từ File & Ảnh Tham Chiếu', description: 'Hỗ trợ nạp hàng trăm prompt từ file TXT hoặc đính kèm ảnh tham chiếu Image-to-Image.', badge: 'Input Data' },
      { id: 'h3', xPercent: 78, yPercent: 22, title: 'Nút Chạy Tất Cả (Batch Run)', description: 'Kích hoạt cả hàng đợi 80 bức ảnh tự động hoàn thành trong vài phút.', badge: 'Batch Run' },
      { id: 'h4', xPercent: 26, yPercent: 65, title: 'Lưới Quản Lý Từng Phân Cảnh', description: 'Theo dõi trực tiếp hình ảnh render và nút Chạy lại (Retry) cho từng ảnh nếu cần.', badge: 'Grid Manager' }
    ],
    realImage: APP_IMAGES.unlimitedImagePro,
    imageCaption: 'Giao diện tính năng Tạo Ảnh pro với Nano Banana Pro kiểm soát Seed và render đa luồng'
  },
  {
    id: 'comic-book-generator',
    name: 'Tạo Truyện Tranh AI (Comic Book BETA)',
    tagline: 'Chuyển kịch bản thành bộ truyện tranh phân cảnh chuyên nghiệp kèm thoại',
    category: 'image',
    badge: 'TÍNH NĂNG MỚI',
    badgeColor: 'cyan',
    icon: 'BookOpen',
    description: 'Biến câu chuyện thành các trang truyện tranh (Comic Book / Manga / Manhwa) đầy màu sắc với các khung phân cảnh sống động và lời thoại nhân vật kịch tính.',
    highlights: [
      'Tự động phân chia khung truyện thành các Scene 1, 2, 3... hợp lý',
      'Định dạng phong cách Comic Book Mỹ, Manga Nhật Bản hoặc Webtoon',
      'Tự động vẽ bối cảnh rừng rậm, phi thuyền, quái vật chi tiết',
      'Đầy đủ ô thoại, chữ tượng thanh (VÚT!, RẦM!) chuẩn truyện tranh'
    ],
    metrics: [
      { label: 'Số khung hình', value: '8 Cảnh/Trang' },
      { label: 'Phong cách', value: 'Comic / Manga' },
      { label: 'Thời gian tạo', value: '30 Giây/Trang' }
    ],
    uiMockup: {
      title: 'TRUYỆN TRANH AI (BETA)',
      subtitle: 'Tạo truyện tranh chuyên nghiệp từ kịch bản hoặc ý tưởng của bạn.',
      tabs: ['CHỌN TRUYỆN CÓ SẴN', 'TỰ NHẬP NỘI DUNG'],
      activeTab: 'CHỌN TRUYỆN CÓ SẴN',
      controlBar: {
        model: 'Comic Book Vector Engine',
        threads: 5,
        ratio: '16:9 Ngang',
        customInfo: 'Thể loại: Comic Book | Số cảnh: 8 | Seed: 354648'
      },
      sampleContent: [
        { id: 1, scene: 'Phân cảnh 1', desc: 'Đoàn thám hiểm tiếp cận hòn đảo bí ẩn trên boong tàu...', status: 'HOÀN THÀNH' },
        { id: 2, scene: 'Phân cảnh 2', desc: 'Tiến sâu vào rừng nguyên sinh phát hiện dấu chân quái vật...', status: 'HOÀN THÀNH' },
        { id: 3, scene: 'Phân cảnh 3', desc: 'Quái vật thằn lằn khổng lồ bất ngờ lao ra tấn công (VÚT!)...', status: 'HOÀN THÀNH' }
      ]
    },
    hotspots: [
      { id: 'h1', xPercent: 26, yPercent: 24, title: 'Menu Chọn Phong Cách & Layout Truyện', description: 'Lựa chọn phong cách Comic Book, Anime, Cartoon hoặc Tranh màu nước.', badge: 'Comic Style' },
      { id: 'h2', xPercent: 52, yPercent: 24, title: 'Tùy Chỉnh Số Cảnh & Khóa Seed', description: 'Cài đặt số lượng phân cảnh và giữ vững phong cách vẽ qua từng trang truyện.', badge: 'Layout Settings' },
      { id: 'h3', xPercent: 78, yPercent: 24, title: 'Nút Bắt Đầu Tạo Tất Cả', description: 'Tự động tạo toàn bộ các trang truyện tranh theo đúng mạch phân cảnh kịch bản.', badge: 'Batch Comic' },
      { id: 'h4', xPercent: 28, yPercent: 65, title: 'Khung Tranh Phân Cảnh & Ô Thoại Chi Tiết', description: 'Mỗi khung tranh được render hoàn chỉnh với nhân vật, bối cảnh và ô thoại.', badge: 'Panel View' }
    ],
    realImage: APP_IMAGES.comicBookGenerator,
    imageCaption: 'Giao diện tính năng Tạo Truyện Tranh AI phân cảnh sinh động kèm ô thoại tự động'
  },
  {
    id: 'video-extension',
    name: 'Mở Rộng Video Dài (Frame Continuation)',
    tagline: 'Nối tiếp cảnh từ khung hình cuối - Tạo phim dài vô tận không bị đứt đoạn',
    category: 'video',
    badge: 'ĐỘC QUYỀN',
    badgeColor: 'purple',
    icon: 'Maximize2',
    description: 'Khắc phục hạn chế video AI ngắn 5-8 giây. Tính năng Mở rộng video dài của Kinx Auto tự động lấy khung hình cuối cùng của video trước làm điểm bắt đầu của video tiếp theo, tạo ra chuỗi chuyển động liền mạch như một bộ phim hoàn chỉnh.',
    highlights: [
      'Nối tiếp khung hình mượt mà không bị giật hay nhảy hình',
      'Mở rộng video từ 8 giây lên 30 giây, 1 phút, 5 phút tùy ý',
      'Tự động kế thừa ánh sáng, góc máy và vị trí nhân vật',
      'Hỗ trợ chế độ PRO tự động ghép thành 1 file video hoàn chỉnh'
    ],
    metrics: [
      { label: 'Độ dài video', value: 'Không giới hạn' },
      { label: 'Độ mượt nối cảnh', value: '100% Liền mạch' },
      { label: 'Tự động ghép file', value: 'Tích hợp sẵn' }
    ],
    uiMockup: {
      title: 'Mở rộng video dài (Video Extension)',
      subtitle: 'Tạo video dài từ khung hình cuối của video trước.',
      tabs: ['Từ file TXT', 'Tự động nối cảnh', 'Xóa file cũ'],
      activeTab: 'Từ file TXT',
      controlBar: {
        model: 'Veo 3.1 Long Form Continuity',
        threads: 1,
        ratio: '9:16 Dọc & 16:9 Ngang',
        customInfo: 'Tổng: 20 cảnh | Đang chờ: 20'
      },
      sampleContent: [
        { id: 1, prompt: 'Tom is a 9-year-old boy with messy dark-brown hair in cozy kitchen...', status: 'Sẵn sàng' },
        { id: 2, prompt: 'Tom quickly steps between mother and hugs the frightened cat Milo...', status: 'Sẵn sàng' },
        { id: 3, prompt: 'Mother opens front door during rainy afternoon and gently places Milo...', status: 'Sẵn sàng' }
      ]
    },
    hotspots: [
      { id: 'h1', xPercent: 26, yPercent: 24, title: 'Nạp File TXT & Khung Ảnh Gốc', description: 'Tự động trích xuất frame cuối của video trước làm mốc xuất phát của video sau.', badge: 'Keyframe Anchor' },
      { id: 'h2', xPercent: 52, yPercent: 24, title: 'Công Tắc Tự Động Lưu & Nối Liền Mạch', description: 'Bật công tắc để phần mềm tự động ghép nối tất cả các phân đoạn thành 1 file duy nhất.', badge: 'Auto Join' },
      { id: 'h3', xPercent: 78, yPercent: 24, title: 'Nút Chạy Tất Cả (20 Phân Đoạn)', description: 'Chạy toàn bộ chuỗi kịch bản để tạo ra video dài hoàn chỉnh.', badge: 'Continuous Run' },
      { id: 'h4', xPercent: 28, yPercent: 65, title: 'Danh Sách Phân Đoạn Video Nối Tiếp', description: 'Theo dõi tiến độ tạo từng đoạn video và video thành phẩm dài.', badge: 'Timeline Queue' }
    ],
    realImage: APP_IMAGES.videoExtension,
    imageCaption: 'Giao diện tính năng Mở rộng video dài từ khung hình cuối cùng của video trước'
  },
  {
    id: 'ecommerce-kol',
    name: 'Video TMĐT AI & Ghép KOL Chung',
    tagline: 'Tự động tạo video review sản phẩm đồng nhất với KOL bán hàng TikTok & Shopee',
    category: 'ecommerce',
    badge: 'XU HƯỚNG AFFILIATE',
    badgeColor: 'emerald',
    icon: 'ShoppingBag',
    description: 'Dành riêng cho dân làm TikTok Shop, Shopee và Affiliate. Bạn chỉ cần 1 ảnh khuôn mặt idol/KOL mẫu và ảnh các sản phẩm, Kinx Auto sẽ tự động tạo ra hàng chục video review bán hàng với biểu cảm chân thật và sản phẩm rõ nét.',
    highlights: [
      'Tạo hàng chục video bán hàng mỗi ngày cho hàng nghìn mã sản phẩm',
      'Đồng nhất khuôn mặt KOL xuyên suốt toàn bộ gian hàng',
      'Tự động chèn mô tả sản phẩm và tính năng nổi bật',
      'Tối ưu tỷ lệ chuyển đổi đơn hàng và tăng hoa hồng Affiliate'
    ],
    metrics: [
      { label: 'Tăng đơn hàng', value: '+250%' },
      { label: 'Chi phí thuê KOL', value: 'Tiết kiệm 99%' },
      { label: 'Sản lượng video', value: '50+ Video/ngày' }
    ],
    uiMockup: {
      title: 'Video TMĐT AI',
      subtitle: 'Tạo video sản phẩm đồng nhất với ảnh KOL chung.',
      tabs: ['Tải Prompt (.txt)', 'Thêm ảnh hàng loạt', 'Chạy tất cả'],
      activeTab: 'Tải Prompt (.txt)',
      controlBar: {
        model: 'Nano Banana 2 + Veo 3.1',
        threads: 4,
        ratio: '9:16 (Portrait)',
        customInfo: 'Sẵn sàng: 6 | Thành công: 0'
      },
      sampleContent: [
        { id: 1, task: 'Task 1', product: 'Mô tả sản phẩm: Serum dưỡng trắng da mờ thâm nám...', status: 'Sẵn sàng' },
        { id: 2, task: 'Task 2', product: 'Mô tả sản phẩm: Kem chống nắng nâng tone kiềm dầu...', status: 'Sẵn sàng' },
        { id: 3, task: 'Task 3', product: 'Mô tả sản phẩm: Sữa rửa mặt tạo bọt dịu nhẹ...', status: 'Sẵn sàng' }
      ]
    },
    hotspots: [
      { id: 'h1', xPercent: 26, yPercent: 24, title: 'Khu Vực Tải Ảnh KOL Chung', description: 'Nạp ảnh gương mặt đại diện duy nhất để xuất hiện trên tất cả video bán hàng.', badge: 'KOL Model' },
      { id: 'h2', xPercent: 48, yPercent: 24, title: 'Thêm Ảnh Sản Phẩm Hàng Loạt', description: 'Kéo thả ảnh sản phẩm thực tế cần quảng cáo cho từng video.', badge: 'Product Slot' },
      { id: 'h3', xPercent: 78, yPercent: 24, title: 'Nút Chạy Tất Cả Video TMĐT', description: 'Tự động tạo ra chuỗi video TikTok Shop chuyên nghiệp chỉ trong ít phút.', badge: 'Batch E-com' },
      { id: 'h4', xPercent: 28, yPercent: 65, title: 'Danh Sách Task & Video Review Thành Phẩm', description: 'Theo dõi video review của từng sản phẩm kèm link tải trực tiếp.', badge: 'Task Queue' }
    ],
    realImage: APP_IMAGES.ecommerceKol,
    imageCaption: 'Giao diện tính năng Video TMĐT AI ghép ảnh KOL chung và quảng cáo sản phẩm TikTok Shop'
  },
  {
    id: 'video-merger-utils',
    name: 'Ghép File, Ping Map & Tiện Ích Hỗ Trợ',
    tagline: 'Tự động gộp video, tối ưu âm thanh & đồng bộ tài khoản Gemini API không giới hạn',
    category: 'core',
    badge: 'TIỆN ÍCH ALL-IN-ONE',
    badgeColor: 'cyan',
    icon: 'Wrench',
    description: 'Trọn bộ công cụ bổ trợ đắc lực: Ghép nối hàng trăm file video và audio không suy giảm chất lượng, quản lý Pool API Key Gemini tự động đảo key khi hết hạn, xem lịch sử và quản lý thư mục lưu thông minh.',
    highlights: [
      'Ghép nối video siêu tốc chỉ vài giây bằng engine FFmpeg tích hợp',
      'Hỗ trợ quản lý hàng loạt API Key Gemini tự động xoay vòng',
      'Đổi ngôn ngữ giao diện Tiếng Việt / English dễ dàng',
      'Bộ phận kỹ thuật hỗ trợ 24/7 qua Zalo: 0563.402.950'
    ],
    metrics: [
      { label: 'Tốc độ ghép file', value: 'Tức thì (<3s)' },
      { label: 'Quản lý API Key', value: 'Auto-Rotate' },
      { label: 'Hỗ trợ kỹ thuật', value: '24/7 Zalo' }
    ],
    uiMockup: {
      title: 'Kinx Auto Hub & Settings',
      subtitle: 'Phiên bản 4.6.1 - Zalo hỗ trợ: 0563.402.950',
      tabs: ['API Key Gemini', 'Ghép file', 'Hỗ trợ kỹ thuật'],
      activeTab: 'API Key Gemini',
      controlBar: {
        model: 'Auto Key Pool Manager',
        customInfo: 'Gói Cá Nhân Pro - Hạn: 28/11/2027'
      },
      sampleContent: {
        features: [
          'Quản lý Key Gemini thông minh (tự động chuyển key khi hết quota)',
          'Công cụ ghép nối nhiều video thành 1 video dài',
          'Tích hợp Ping Map NV & Bản đồ nhân vật hoạt hình',
          'Zalo hỗ trợ kích hoạt: 0563.402.950'
        ]
      }
    },
    hotspots: [
      { id: 'h1', xPercent: 12, yPercent: 68, title: 'Menu Quản Lý API Key Gemini', description: 'Dán danh sách API key để phần mềm tự động điều phối không lo gián đoạn.', badge: 'Key Pool' },
      { id: 'h2', xPercent: 12, yPercent: 75, title: 'Kênh Hỗ Trợ 24/7 qua Zalo', description: 'Đội ngũ kỹ thuật hỗ trợ qua Ultraview và Zalo 0563.402.950.', badge: 'Support 24/7' },
      { id: 'h3', xPercent: 12, yPercent: 88, title: 'Thông Tin Phiên Bản 4.6.1', description: 'Tự động cập nhật các thuật toán mới nhất của Veo và Edge TTS hoàn toàn miễn phí.', badge: 'Auto Update' }
    ],
    realImage: APP_IMAGES.videoFlow,
    imageCaption: 'Tự động tối ưu hoá tài nguyên hệ thống và hỗ trợ kỹ thuật Ultraview 24/7'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'personal-pro',
    name: 'Gói Cá Nhân Pro',
    targetAudience: 'Gói chuyên nghiệp đầy đủ 12 module vũ khí tự động hóa và hiệu suất cao.',
    priceFormatted: '550.000 đ',
    billingPeriod: '/ tháng',
    subHighlight: 'Không cần tài khoản Veo 3 - Tiết kiệm chi phí',
    popular: false,
    features: [
      'Tạo không giới hạn video Veo 3 / Veo 3.1 Text to Video, Video từ Ảnh & NV Đồng nhất 100%',
      'Trọn bộ giọng đọc AI: Giọng Adam, Ngọc Huyền, Hoài My, Nam Minh... truyền cảm chuẩn phòng thu',
      'Công nghệ Kinx TTS Clone giọng nói KHÔNG GIỚI HẠN từ file audio mẫu bất kỳ',
      'Tạo không giới hạn Ảnh Pro / Nano Banana / Whisk đa luồng chất lượng cao',
      'Tải video 720p / 1080p Full HD siêu nét không logo / watermark',
      'Tự động tạo kịch bản AI 3 hồi, phân tích link YouTube & sinh prompt điện ảnh',
      'Mở rộng video dài liền mạch, tạo thumbnail giật tít & làm video TMĐT KOL',
      'Tốc độ xử lý đa luồng lên đến 20 Luồng chạy song song',
      'Mở khóa toàn bộ 12 Module chức năng tools độc quyền của Kinx Auto',
      'Hỗ trợ kỹ thuật 1-kèm-1 qua Ultraview / Zalo 24/7 & Cập nhật v4.6.1+ miễn phí'
    ],
    ctaText: 'Chọn Gói Này',
    ctaType: 'secondary'
  },
  {
    id: 'team-pro-5',
    name: 'Gói Team Pro/5 Máy',
    targetAudience: 'Gói mở rộng 5 máy cùng lúc cho Team MMO, Studio & Agency.',
    originalPrice: '2.750.000 đ',
    priceFormatted: '1.900.000 đ',
    billingPeriod: '/ tháng',
    subHighlight: 'Không cần tài khoản Veo 3 - Dùng đồng thời 5 máy',
    popular: false,
    features: [
      'Tạo không giới hạn video Veo 3 / Veo 3.1 & Khóa nhân vật đồng nhất 100%',
      'Trọn bộ giọng đọc AI: Giọng Adam, Ngọc Huyền, Hoài My, Nam Minh & 50+ ngôn ngữ',
      'Công nghệ Clone giọng nói KHÔNG GIỚI HẠN số lượng giọng cho cả 5 máy',
      'Tạo không giới hạn Ảnh Pro / Nano Banana / Whisk đa luồng',
      'Tải video 720p / 1080p Full HD không giới hạn số lượng video/tháng',
      'Mở khóa trọn bộ 12 Module tools (Kịch bản AI, YouTube Parser, Video TMĐT KOL...)',
      'Sử dụng đồng thời 5 máy tính cùng lúc với hiệu suất tối đa',
      'Số luồng lên đến 20 Luồng song song mỗi máy',
      'Quản lý API Key Gemini thông minh tự động xoay vòng không lo gián đoạn',
      'Hỗ trợ cài đặt và tối ưu quy trình cho toàn bộ 5 máy qua Ultraview 24/7'
    ],
    ctaText: 'Chọn Gói Team',
    ctaType: 'secondary'
  },
  {
    id: 'year-pro-1',
    name: 'Gói 1 Năm Pro/1 Máy',
    targetAudience: 'Lựa chọn tiết kiệm và tối ưu nhất cho nhà sáng tạo nội dung lâu dài.',
    originalPrice: '6.600.000 đ',
    priceFormatted: '5.950.000 đ',
    billingPeriod: '/ năm',
    subHighlight: 'Không cần tài khoản Veo 3 - Tiết kiệm 650.000 đ',
    badge: 'TIẾT KIỆM NHẤT',
    popular: true,
    features: [
      'Tạo không giới hạn video Veo 3 / Veo 3.1 & Khóa nhân vật đồng nhất 100% trong 12 tháng',
      'Mở khóa VIP trọn bộ giọng đọc AI Adam, Ngọc Huyền, Hoài My, Nam Minh...',
      'Công nghệ Clone giọng nói KHÔNG GIỚI HẠN từ bất kỳ file audio nào',
      'Tạo không giới hạn Ảnh Pro / Nano Banana / Whisk đa luồng',
      'Tải video 720p / 1080p Full HD siêu nét, ưu tiên băng thông render nhanh nhất',
      'Tự động tạo kịch bản AI, bóc tách YouTube, mở rộng video dài & TMĐT KOL',
      'Số luồng lên đến 20 Luồng xử lý mượt mà không giật lag',
      'Mở khóa toàn bộ 12 Module tools và tự động cập nhật miễn phí mọi phiên bản v4.6.1+',
      'Tiết kiệm hơn 650.000đ so với gia hạn từng tháng',
      'Hỗ trợ kỹ thuật VIP 1-kèm-1 qua Ultraview / Zalo 24/7'
    ],
    ctaText: 'Chọn Gói 1 Năm',
    ctaType: 'primary'
  },
  {
    id: 'enterprise',
    name: 'Gói Doanh nghiệp',
    targetAudience: 'Giải pháp hạ tầng độc quyền toàn diện cho công ty & MCN lớn.',
    originalPrice: '10.500.000 đ',
    priceFormatted: '8.500.000 đ',
    billingPeriod: '/ tháng',
    subHighlight: 'Giảm thêm 10% khi thanh toán theo năm',
    popular: false,
    features: [
      'Tạo không giới hạn video Veo 3 / Veo 3.1 & Khóa nhân vật đồng nhất 100%',
      'Toàn quyền sử dụng giọng đọc AI Adam, Ngọc Huyền & Clone giọng nói không giới hạn',
      'Tạo không giới hạn Ảnh Pro / Whisk / Nano Banana',
      'Tải video 720p / 1080p Full HD / 4K không giới hạn băng thông',
      'Mở khóa toàn bộ 12 Module tools cao cấp nhất của Kinx Auto',
      'Sử dụng đồng thời lên đến 30 máy tính cùng lúc',
      'Số luồng lên đến 20 Luồng song song trên từng máy',
      'Không giới hạn số lượng Video được xuất bản trong tháng',
      'Sử dụng Server riêng (Dedicated Cloud Server) cho tốc độ render tối đa',
      'Bàn giao tài liệu đào tạo Automation & Hỗ trợ kỹ thuật riêng 24/7'
    ],
    ctaText: 'Chọn Gói Doanh Nghiệp',
    ctaType: 'secondary'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Nguyễn Thành Nam',
    role: 'Chủ hệ thống 12 kênh YouTube Shorts',
    channelName: 'Kênh @LichSuBiAn (840k Subs)',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    stats: '+1.8 Triệu View/ngày',
    quote: 'Trước đây mỗi ngày team 3 người chỉ dựng được 2 video hoàn chỉnh. Từ khi dùng Kinx Auto, tính năng Nhân vật đồng nhất và tạo Prompt Veo 3.1 giúp mình xuất bản 15 video mỗi ngày với chi phí gần như bằng 0. Doanh thu AdSense tăng gấp 4 lần!',
    verified: true,
    platform: 'youtube'
  },
  {
    id: '2',
    author: 'Trần Thu Trang',
    role: 'Top 1 TikTok Shop Creator Mỹ Phẩm',
    channelName: '@TrangBeautyStore (520k Follow)',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    stats: 'Doanh số 450M/tháng',
    quote: 'Tính năng Video TMĐT AI với KOL mẫu thật sự là một cuộc cách mạng. Mình chỉ cần nạp ảnh sản phẩm mới về, phần mềm tự tạo video review chuyên nghiệp với giọng đọc Hoài My chuẩn chỉ. Tỷ lệ click vào giỏ hàng tăng vọt 280%!',
    verified: true,
    platform: 'tiktok'
  },
  {
    id: '3',
    author: 'Lê Hoàng Phong',
    role: 'Founder MMO Agency Reels & Shorts',
    channelName: 'Phong AI Studio',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
    stats: 'Quản lý 35 Kênh MMO',
    quote: 'Đã thử qua hàng chục tool trên thị trường nhưng Kinx Auto là phần mềm ổn định nhất. Không bị lỗi crash, đa luồng mượt mà và đặc biệt là Zalo 0563.402.950 hỗ trợ cực kỳ nhiệt tình, có vấn đề gì ultraview fix ngay trong 5 phút.',
    verified: true,
    platform: 'facebook'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Kinx Auto có yêu cầu cấu hình máy tính mạnh (VGA khủng) không?',
    answer: 'Không! Kinx Auto xử lý render dựa trên hạ tầng đám mây tốc độ cao của Google Veo và server chuyên dụng. Máy tính của bạn chỉ cần chạy hệ điều hành Windows 10/11 64-bit hoặc macOS (Intel / M1 / M2 / M3), RAM tối thiểu 4GB là đã có thể chạy mượt mà.',
    category: 'installation'
  },
  {
    question: 'Veo 3.1 trong Kinx Auto có bị giới hạn số lượng video hay tính phí token không?',
    answer: 'Không giới hạn! Khi đăng ký và kích hoạt gói Kinx Auto (Gói Cá Nhân Pro, Gói Team hoặc Gói 1 Năm), bạn được cấp quyền tạo video không giới hạn số lượng, không phải trả thêm tiền token cho từng giây video.',
    category: 'features'
  },
  {
    question: 'Tôi có thể tải thử và dùng thử trước khi đăng ký nâng cấp gói không?',
    answer: 'Có! Bạn có thể tải ngay bộ cài đặt từ trang kinxauto.click và trải nghiệm bản dùng thử. Sau đó bạn có thể nâng cấp gói tự động trực tiếp từ hệ thống để mở khóa toàn bộ 12 tính năng không giới hạn, hoặc liên hệ Zalo Kỹ Thuật 0563.402.950 để được hỗ trợ kích hoạt nhanh và hướng dẫn qua Ultraview 24/7.',
    category: 'pricing'
  },
  {
    question: 'Tính năng Nhân vật đồng nhất (Consistent Characters) hoạt động như thế nào?',
    answer: 'Kinx Auto sử dụng thuật toán nhúng tham chiếu đa chiều độc quyền. Bạn chỉ cần tải lên 1 bức ảnh nhân vật rõ mặt, phần mềm sẽ tự trích xuất đặc trưng nhận dạng và khóa chặt khuôn mặt đó vào các kịch bản hành động tiếp theo, đảm bảo không bị biến dạng mặt qua các cảnh.',
    category: 'features'
  },
  {
    question: 'Khi đăng ký gói, tôi được hỗ trợ cài đặt như thế nào?',
    answer: 'Đội ngũ kỹ thuật viên của Kinx Auto sẽ hỗ trợ bạn 1-kèm-1 qua Ultraview, TeamViewer hoặc AnyDesk. Chúng tôi sẽ cài đặt, cấu hình tối ưu và hướng dẫn bạn làm ra video đầu tiên cho đến khi thành thạo. Zalo: 0563.402.950 luôn sẵn sàng 24/7.',
    category: 'support'
  },
  {
    question: 'Nếu đổi sang máy tính mới, tôi có được chuyển quyền sử dụng gói không?',
    answer: 'Hoàn toàn được! Phần mềm không giới hạn số lượng máy tính sử dụng, bạn có thể tự do đăng nhập và cài đặt trên nhiều thiết bị mà không cần liên hệ hỗ trợ hay mất thêm bất kỳ chi phí nào.',
    category: 'support'
  }
];
