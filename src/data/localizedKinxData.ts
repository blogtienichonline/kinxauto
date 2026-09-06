import { Language } from '../i18n/types';
import { FeatureModule, PricingPlan, Testimonial, FaqItem } from '../types';
import { APP_IMAGES, USER_ATTACHMENT_IMAGES } from './images';
import { KINX_MODULES, PRICING_PLANS, TESTIMONIALS, FAQ_ITEMS } from './kinxData';

export interface LocalizedGalleryItem {
  id: string;
  title: string;
  category: 'video' | 'character' | 'audio_script' | 'marketing';
  categoryLabel: string;
  imageUrl: string;
  badge: string;
  description: string;
  highlights: string[];
  moduleLink?: string;
}

export type GalleryItem = LocalizedGalleryItem;

export interface LocalizedComparisonRow {
  feature: string;
  kinx: string;
  manual: string;
  otherAi: string;
}

// ==================== COMPARISON DATA ====================
const COMPARISON_DATA_BY_LANG: Record<Language, LocalizedComparisonRow[]> = {
  vi: [
    {
      feature: 'Thời gian sản xuất 1 video hoàn chỉnh',
      kinx: '1 - 3 phút (Tự động 100%)',
      manual: '2 - 4 tiếng (Cắt ghép thủ công)',
      otherAi: '30 - 45 phút (Phải chuyển nhiều tool)',
    },
    {
      feature: 'Chi phí duy trì mỗi tháng',
      kinx: '550.000đ trọn gói All-in-One',
      manual: '5.000.000đ - 15.000.000đ (Thuê Editor)',
      otherAi: '2.500.000đ - 4.000.000đ (Mua lẻ từng tool)',
    },
    {
      feature: 'Khóa nhân vật đồng nhất (Face Lock)',
      kinx: 'Có sẵn (Khóa 100% qua mọi cảnh)',
      manual: 'Không thể (Nếu vẽ AI sẽ bị đổi mặt)',
      otherAi: 'Rất phức tạp, dễ bị méo mặt',
    },
    {
      feature: 'Tạo Video Google Veo 3.1 không giới hạn',
      kinx: 'Có sẵn (Đa luồng 1-10 luồng song song)',
      manual: 'Không có',
      otherAi: 'Bị giới hạn credit / token đắt đỏ',
    },
    {
      feature: 'Giọng đọc Voice AI & Clone Giọng (Edge TTS & Kinx TTS)',
      kinx: 'Miễn phí trọn đời (Edge TTS 50+ thứ tiếng & Kinx TTS Clone giọng không giới hạn)',
      manual: 'Phải tự thu âm hoặc thuê voice đắt đỏ',
      otherAi: 'Tính phí theo từng ký tự (ElevenLabs rất đắt)',
    },
    {
      feature: 'Bóc tách kịch bản từ link YouTube',
      kinx: 'Tự động bóc tách & viết lại trong 5s',
      manual: 'Phải nghe và gõ lại từng từ',
      otherAi: 'Không hỗ trợ bóc tách trực tiếp',
    },
    {
      feature: 'Hỗ trợ kỹ thuật & Hướng dẫn sử dụng',
      kinx: 'Hỗ trợ 1-1 qua Zalo & Ultraview 24/7',
      manual: 'Tự mày mò, không ai hỗ trợ',
      otherAi: 'Chỉ có email bot tiếng Anh',
    },
  ],
  en: [
    {
      feature: 'Production time per finished video',
      kinx: '1 - 3 mins (100% Automated)',
      manual: '2 - 4 hours (Manual editing)',
      otherAi: '30 - 45 mins (Switching multiple web tools)',
    },
    {
      feature: 'Monthly operating cost',
      kinx: '$24/month All-in-One Package',
      manual: '$250 - $800/mo (Hiring Editors)',
      otherAi: '$120 - $200/mo (Fragmented tools)',
    },
    {
      feature: 'Consistent Character Locking (Face Lock)',
      kinx: 'Built-in (100% Lock across all scenes)',
      manual: 'Impossible without redraw errors',
      otherAi: 'Complex & faces morph between scenes',
    },
    {
      feature: 'Unlimited Google Veo 3.1 Video Creation',
      kinx: 'Included (1-10 Multi-thread rendering)',
      manual: 'Not available',
      otherAi: 'Strict limits with costly tokens',
    },
    {
      feature: 'Studio Voiceover AI & Unlimited Voice Clone (Edge & Kinx TTS)',
      kinx: 'Free Lifetime (50+ Neural Languages & Unlimited Custom Voice Cloning)',
      manual: 'Manual recording / Hiring expensive voice actors',
      otherAi: 'Priced per character & costly limits (ElevenLabs)',
    },
    {
      feature: 'Script Extraction from YouTube Link',
      kinx: 'Instant extraction & rewrite in 5s',
      manual: 'Manually transcribe and edit',
      otherAi: 'No direct video parsing supported',
    },
    {
      feature: 'Technical Support & 1-on-1 Guidance',
      kinx: '1-on-1 Setup & Support via Ultraview/Chat 24/7',
      manual: 'Self-guided trial & error',
      otherAi: 'Slow generic automated email tickets',
    },
  ],
  ja: [
    {
      feature: '完成動画1本の制作時間',
      kinx: '1〜3分（100%完全自動化）',
      manual: '2〜4時間（手作業での編集・切抜）',
      otherAi: '30〜45分（複数ツール間のデータ移行）',
    },
    {
      feature: '月額ランニングコスト',
      kinx: '約3,500円/月 オールインワン',
      manual: '30,000円〜80,000円（外注・編集者雇用）',
      otherAi: '15,000円〜25,000円（ツール個別課金）',
    },
    {
      feature: 'キャラクター一貫性ロック（Face Lock）',
      kinx: '標準装備（全シーンで顔と服装を完全固定）',
      manual: 'AI描画での顔ズレ防止は極めて困難',
      otherAi: '顔の崩れ・シーン毎の別人化が頻発',
    },
    {
      feature: 'Google Veo 3.1 無制限動画生成',
      kinx: '無制限生成（最大10スレッド並列処理）',
      manual: '利用不可',
      otherAi: 'クレジット従量課金が高額',
    },
    {
      feature: '高品質AI音声合成＆無制限ボイスクローン (Edge & Kinx TTS)',
      kinx: '永久無料（日本語・50言語＆サンプル音声からの無制限声クローン）',
      manual: 'ナレーター依頼または自作録音（高コスト）',
      otherAi: '文字数単位の従量課金・高額（ElevenLabs等）',
    },
    {
      feature: 'YouTubeリンクからの台本自動抽出',
      kinx: '5秒で字幕抽出＆3幕構成台本へリライト',
      manual: '動画を聞き取って手動文字起こし',
      otherAi: '直接抽出非対応',
    },
    {
      feature: '技術サポート・導入支援',
      kinx: '24時間年中無休のリモート＆チャットサポート',
      manual: 'すべて独学・自力解決',
      otherAi: '返信の遅い英語メールサポートのみ',
    },
  ],
  zh: [
    {
      feature: '制作一条完整视频所需时间',
      kinx: '1 - 3 分钟（100% 全自动完成）',
      manual: '2 - 4 小时（传统人工剪辑拼接）',
      otherAi: '30 - 45 分钟（需在多个网页工具间切换）',
    },
    {
      feature: '每月运营维护成本',
      kinx: '¥160/月 一站式全功能畅享',
      manual: '¥1,500 - ¥4,000/月（雇佣剪辑师）',
      otherAi: '¥800 - ¥1,500/月（各个零散工具订阅）',
    },
    {
      feature: '人物角色面容一致性锁定 (Face Lock)',
      kinx: '内置支持（跨镜头100%面孔/服装锁定）',
      manual: '无法保证（AI绘画每张都会变形）',
      otherAi: '操作极繁琐且非常容易面部失真',
    },
    {
      feature: 'Google Veo 3.1 无限视频生成',
      kinx: '无限制支持（支持1-10多线程并发渲染）',
      manual: '无此能力',
      otherAi: '严格限制 Token / 点数收费昂贵',
    },
    {
      feature: 'AI 拟真配音与无限声音克隆 (Edge TTS & Kinx TTS)',
      kinx: '终身免费（支持中文各地方言、50+语种及样本声音无限克隆）',
      manual: '需自行录音或雇佣配音员（耗时且昂贵）',
      otherAi: '按字数计费，克隆收费极高（如 ElevenLabs）',
    },
    {
      feature: '一键提取 YouTube 视频文案',
      kinx: '5秒自动提取字幕并智能重写爆款分镜',
      manual: '需手动听写并人工重新梳理',
      otherAi: '不支持直接链接解析与提炼',
    },
    {
      feature: '技术支持与远程专属指导',
      kinx: '24/7 远程 1对1 调试与全流程教学',
      manual: '自行摸索，缺乏专业支持',
      otherAi: '仅提供回复缓慢的英文工单',
    },
  ]
};

// ==================== GALLERY ITEMS ====================
export const getLocalizedGalleryItems = (lang: Language): LocalizedGalleryItem[] => {
  if (lang === 'en') {
    return [
      {
        id: 'video-flow',
        title: 'Veo 3 / Veo 3.1 Video Flow',
        category: 'video',
        categoryLabel: 'AI Video & Cinema',
        imageUrl: USER_ATTACHMENT_IMAGES.videoFlow,
        badge: 'Veo 3.1 Multi-Thread',
        description: 'Batch render cinematic AI videos automatically from prompts, running 1-10 threads simultaneously with auto disk saving.',
        highlights: ['Render sharp 1080p Veo 3.1 videos', 'Import hundreds of prompts at once', 'Automatic project folder organization'],
        moduleLink: 'veo-flow'
      },
      {
        id: 'image-to-video',
        title: 'Image to Video Generator',
        category: 'video',
        categoryLabel: 'AI Video & Cinema',
        imageUrl: USER_ATTACHMENT_IMAGES.imageToVideo,
        badge: 'Veo Image-to-Video',
        description: 'Turn still pictures into cinematic motion videos with Veo 3/3.1. Supports batch uploads, motion direction, and HD export.',
        highlights: ['Smooth motion animation from still images', 'Inherits original lighting & character aesthetics', 'Multi-threaded batch video rendering'],
        moduleLink: 'image-to-video'
      },
      {
        id: 'video-extension',
        title: 'Long Video Extension (Frame Continuity)',
        category: 'video',
        categoryLabel: 'AI Video & Cinema',
        imageUrl: USER_ATTACHMENT_IMAGES.videoExtension,
        badge: 'Seamless Continuity',
        description: 'Overcomes short AI video limits by anchoring on the exact final frame of the previous clip to build continuous, full-length movies.',
        highlights: ['Seamless frame transitions without jump cuts', 'Extend videos from 8s to 1 min, 5 mins effortlessly', 'Auto-stitches all generated scenes into 1 movie'],
        moduleLink: 'video-extension'
      },
      {
        id: 'consistent-character',
        title: '100% Consistent Character Lock',
        category: 'character',
        categoryLabel: 'Character & Comics',
        imageUrl: USER_ATTACHMENT_IMAGES.consistentCharacter,
        badge: '100% Face Lock',
        description: 'Lock character facial identity, physique, and outfit across countless camera angles and storytelling scenes.',
        highlights: ['Multi-angle facial recognition (Front/Side/Back)', 'Smart syntax tag @char1, @char2', 'Build multi-episode series with zero morphing'],
        moduleLink: 'consistent-character'
      },
      {
        id: 'comic-storyboard',
        title: 'AI Comic Book & Storyboard',
        category: 'character',
        categoryLabel: 'Character & Comics',
        imageUrl: USER_ATTACHMENT_IMAGES.comicBookGenerator,
        badge: 'Manga & Manhwa',
        description: 'Convert novel text into structured multi-panel comic strips with consistent protagonist design and speech bubbles.',
        highlights: ['Auto panel breakdown with camera angles', 'Consistent character lock across chapters', 'Export high-res printable 4K panels'],
        moduleLink: 'comic-book-generator'
      },
      {
        id: 'unlimited-image-pro',
        title: 'Unlimited Image Pro (Nano Banana Pro)',
        category: 'character',
        categoryLabel: 'Character & Comics',
        imageUrl: USER_ATTACHMENT_IMAGES.unlimitedImagePro,
        badge: 'Batch Image Render',
        description: 'High-speed batch image generation with Nano Banana Pro engine. Supports seed locking for unified styles and direct local storage.',
        highlights: ['Run 1-8 parallel rendering threads', 'Image-to-Image reference support', '100% automatic local drive project saving'],
        moduleLink: 'unlimited-image-pro'
      },
      {
        id: 'voice-tts',
        title: 'Multi-Speaker Dialogue & Voice AI Studio (Edge & Kinx Clone)',
        category: 'audio_script',
        categoryLabel: 'Voice & Scripts',
        imageUrl: USER_ATTACHMENT_IMAGES.voiceDialogue,
        badge: 'NEW: Multi-Speaker Dialogue & Clone',
        description: 'Create natural multi-character conversational dialogue in one script, plus zero-cost Edge TTS and unlimited Kinx TTS voice cloning from any audio sample.',
        highlights: ['Assign distinct AI voices per character in 1 script', 'Export 320kbps studio-quality MP3/WAV dialogue', 'Unlimited custom voice cloning with zero character limits'],
        moduleLink: 'voice-tts'
      },
      {
        id: 'ai-script-gen',
        title: 'AI Script & Story Generator',
        category: 'audio_script',
        categoryLabel: 'Voice & Scripts',
        imageUrl: USER_ATTACHMENT_IMAGES.aiScriptGen,
        badge: 'Gemini Story Master',
        description: 'Turn rough ideas into 3-act scripts with high audience retention, scalable from 60s shorts to 30-minute narrative films.',
        highlights: ['First 3-second hook optimization', 'Detailed scene descriptions & character lines', 'Covers 20+ viral storytelling genres'],
        moduleLink: 'ai-script-generator'
      },
      {
        id: 'video-prompts-maker',
        title: 'Cinematic Prompts Maker',
        category: 'audio_script',
        categoryLabel: 'Voice & Scripts',
        imageUrl: USER_ATTACHMENT_IMAGES.videoPromptsMaker,
        badge: 'Cinematic Prompts',
        description: 'Deep prompt engine featuring camera lens libraries, lighting presets, and Hollywood framing rules tailored for Veo 3.1.',
        highlights: ['Dolly Zoom, FPV drone & pan camera presets', 'Golden hour, Cyberpunk, Rembrandt lighting', 'Generate 50 batch prompts in 1 click'],
        moduleLink: 'video-prompts-maker'
      },
      {
        id: 'youtube-analyzer',
        title: 'YouTube Video & Script Analyzer',
        category: 'audio_script',
        categoryLabel: 'Voice & Scripts',
        imageUrl: USER_ATTACHMENT_IMAGES.youtubeAnalyzer,
        badge: 'Market Research',
        description: 'Extract subtitles from public YouTube links, analyze scene structures, and rewrite 100% unique viral scripts.',
        highlights: ['Parse subtitles from any YouTube link in 5s', 'Auto rewrite into 3-act short form scripts', 'Generates SEO titles, descriptions & tags'],
        moduleLink: 'youtube-analyzer'
      },
      {
        id: 'ecommerce-kol',
        title: 'E-commerce AI & Shared KOL',
        category: 'marketing',
        categoryLabel: 'E-Commerce & Marketing',
        imageUrl: USER_ATTACHMENT_IMAGES.ecommerceKol,
        badge: 'TikTok Shop / Affiliate',
        description: 'Generate dozens of realistic product review videos daily featuring a unified virtual influencer/KOL model.',
        highlights: ['Consistent virtual host across product catalog', 'Highlight key product specs automatically', 'Boost affiliate commissions & conversions'],
        moduleLink: 'ecommerce-kol'
      },
      {
        id: 'viral-thumbnail',
        title: 'High-CTR YouTube Thumbnail AI',
        category: 'marketing',
        categoryLabel: 'E-Commerce & Marketing',
        imageUrl: USER_ATTACHMENT_IMAGES.youtubeThumbnail,
        badge: 'Click-Through Boost',
        description: 'Generate high-contrast YouTube thumbnails with expressive character portraits, dramatic glow, and 3D typography.',
        highlights: ['25%+ CTR boost over standard thumbnails', 'Auto composition & visual contrast balance', 'Export 1280x720 and 1920x1080 presets'],
        moduleLink: 'youtube-thumbnail'
      }
    ];
  }

  if (lang === 'ja') {
    return [
      {
        id: 'video-flow',
        title: 'Veo 3 / Veo 3.1 ビデオフロー生成',
        category: 'video',
        categoryLabel: 'AI動画・シネマ',
        imageUrl: USER_ATTACHMENT_IMAGES.videoFlow,
        badge: 'Veo 3.1 マルチスレッド',
        description: 'プロンプトから映画品質のAI動画を一括自動生成。1〜10スレッドの並列処理でPCへ自動保存。',
        highlights: ['1080p 高精細 Veo 3.1 出力', '数百件のプロンプトを一括インポート', 'プロジェクト別フォルダ自動保存'],
        moduleLink: 'veo-flow'
      },
      {
        id: 'image-to-video',
        title: '画像から動画生成 (Image to Video)',
        category: 'video',
        categoryLabel: 'AI動画・シネマ',
        imageUrl: USER_ATTACHMENT_IMAGES.imageToVideo,
        badge: 'Veo 画像動画変換',
        description: '静止画を Google Veo 3/3.1 で躍動感ある動画へ自動変換。一括画像入力とカメラワーク指定に対応。',
        highlights: ['静止画を滑らかな動画へ高精度変換', '元画像の照明・質感を完全継承', 'マルチスレッドで高速一括出力'],
        moduleLink: 'image-to-video'
      },
      {
        id: 'video-extension',
        title: '長編動画拡張 (フレーム連続生成)',
        category: 'video',
        categoryLabel: 'AI動画・シネマ',
        imageUrl: USER_ATTACHMENT_IMAGES.videoExtension,
        badge: 'シームレス連続生成',
        description: '前クリップの最終フレームを起点に次シーンを生成。途切れることなく長編映画を自動連結生成。',
        highlights: ['シーン間の違和感やカクつきのない滑らかな連結', '8秒動画から1分・5分へ自在拡張', '生成クリップを自動で1本に結合'],
        moduleLink: 'video-extension'
      },
      {
        id: 'consistent-character',
        title: 'キャラクター一貫性ロック (100%固定)',
        category: 'character',
        categoryLabel: 'キャラクター・漫画',
        imageUrl: USER_ATTACHMENT_IMAGES.consistentCharacter,
        badge: '顔完全ロック',
        description: '多彩なカメラアングルや背景でも、キャラクターの顔立ち・体格・衣装を100%同一に保ちます。',
        highlights: ['全方位アングル認識（正面・横顔・後姿）', 'スマート構文タグ @char1, @char2', '連続ドラマ制作でも顔崩れゼロ'],
        moduleLink: 'consistent-character'
      },
      {
        id: 'comic-storyboard',
        title: 'AI 漫画・絵コンテ自動生成',
        category: 'character',
        categoryLabel: 'キャラクター・漫画',
        imageUrl: USER_ATTACHMENT_IMAGES.comicBookGenerator,
        badge: 'マンガ・絵コンテ',
        description: '小説やテキストをコマ割り漫画へ自動変換。キャラクターの一貫性を保ちながら吹き出し付きで生成。',
        highlights: ['自動コマ割り＆アングル指定', 'チャプター間での主人公一貫性ロック', '4K高解像度出力対応'],
        moduleLink: 'comic-book-generator'
      },
      {
        id: 'unlimited-image-pro',
        title: 'Unlimited 高速画像生成 Pro (Nano Banana)',
        category: 'character',
        categoryLabel: 'キャラクター・漫画',
        imageUrl: USER_ATTACHMENT_IMAGES.unlimitedImagePro,
        badge: '一括画像レンダリング',
        description: 'Nano Banana Proエンジンによる超高速画像一括生成。Seed固定で統一感ある世界観を維持。',
        highlights: ['1〜8スレッド並列レンダリング', 'Image-to-Image 参照画像モード対応', 'プロジェクトごとにローカル自動保存'],
        moduleLink: 'unlimited-image-pro'
      },
      {
        id: 'voice-tts',
        title: 'マルチ話者 AI 会話音声生成＆無制限ボイスクローン (Edge & Kinx TTS)',
        category: 'audio_script',
        categoryLabel: '音声・台本',
        imageUrl: USER_ATTACHMENT_IMAGES.voiceDialogue,
        badge: '最新: 会話音声＆無制限クローン',
        description: '1つの台本で複数キャラクターごとの異なる音声を自動割り当て。Edge TTSとサンプル音声からの無制限ボイスクローンに対応。',
        highlights: ['複数キャラの掛け合い音声を1クリック生成', '320kbps スタジオ品質 MP3/WAV 出力', 'サンプルから無制限に声を複製・クローン'],
        moduleLink: 'voice-tts'
      },
      {
        id: 'ai-script-gen',
        title: 'AI 台本・ストーリー自動生成',
        category: 'audio_script',
        categoryLabel: '音声・台本',
        imageUrl: USER_ATTACHMENT_IMAGES.aiScriptGen,
        badge: 'Gemini 台本マスター',
        description: '短いアイデアから視聴維持率を高める3幕構成の本格台本を生成。60秒ショートから30分長編まで自在調整。',
        highlights: ['冒頭3秒で惹きつけるフック最適化', 'シーン詳細・構図・セリフを自動生成', '20以上の多彩なジャンルに対応'],
        moduleLink: 'ai-script-generator'
      },
      {
        id: 'video-prompts-maker',
        title: 'シネマティックプロンプト生成',
        category: 'audio_script',
        categoryLabel: '音声・台本',
        imageUrl: USER_ATTACHMENT_IMAGES.videoPromptsMaker,
        badge: '映画プロンプト',
        description: 'ドリーズーム、FPV、ゴールデンアワーなど、ハリウッド映画の構図・照明をVeo向けに自動最適化。',
        highlights: ['豊富なシネマカメラアングルプリセット', '高品質ライティングプリセット', '1クリックで50件のプロンプト一括生成'],
        moduleLink: 'video-prompts-maker'
      },
      {
        id: 'youtube-analyzer',
        title: 'YouTube 分析＆台本自動リライト',
        category: 'audio_script',
        categoryLabel: '音声・台本',
        imageUrl: USER_ATTACHMENT_IMAGES.youtubeAnalyzer,
        badge: '市場リサーチ',
        description: 'YouTubeリンクから字幕を瞬時に抽出し、構成を分析して100%オリジナルの新作台本へ自動書き換え。',
        highlights: ['リンクから5秒で字幕・セリフを抽出', '3幕構成のショート動画台本へリライト', 'SEOタイトル・説明文・タグを自動提案'],
        moduleLink: 'youtube-analyzer'
      },
      {
        id: 'ecommerce-kol',
        title: 'EC動画＆バーチャルKOLレビュー',
        category: 'marketing',
        categoryLabel: 'EC・マーケティング',
        imageUrl: USER_ATTACHMENT_IMAGES.ecommerceKol,
        badge: 'TikTok Shop / アフィリエイト',
        description: '専属のバーチャルKOLモデルを活用し、毎日数十本の商品紹介・レビュー動画を自動量産。',
        highlights: ['ショップ全体で統一されたKOLモデル', '商品特徴・魅力を自動テロップ化', '購入率・アフィリエイト報酬を最大化'],
        moduleLink: 'ecommerce-kol'
      },
      {
        id: 'viral-thumbnail',
        title: '高CTR YouTubeサムネイル生成',
        category: 'marketing',
        categoryLabel: 'EC・マーケティング',
        imageUrl: USER_ATTACHMENT_IMAGES.youtubeThumbnail,
        badge: 'クリック率最大化',
        description: '表情豊かなキャラクター、立体文字、ハイコントラストで視聴者の目を引くサムネイルを自動作成。',
        highlights: ['平均クリック率(CTR) 25%+ 向上', '視覚的黄金比による自動構図', '1280x720 / 1920x1080 規格出力'],
        moduleLink: 'youtube-thumbnail'
      }
    ];
  }

  if (lang === 'zh') {
    return [
      {
        id: 'video-flow',
        title: 'Veo 3 / 3.1 批量视频工作流',
        category: 'video',
        categoryLabel: 'AI视频与电影',
        imageUrl: USER_ATTACHMENT_IMAGES.videoFlow,
        badge: 'Veo 3.1 多线程',
        description: '根据提示词全自动批量渲染电影级AI视频，支持1-10线程并发处理并自动保存至本地。',
        highlights: ['渲染 1080p 超清 Veo 3.1 视频', '支持批量导入上百条提示词', '按项目自动归档管理本地目录'],
        moduleLink: 'veo-flow'
      },
      {
        id: 'image-to-video',
        title: '图生视频工具 (Image to Video)',
        category: 'video',
        categoryLabel: 'AI视频与电影',
        imageUrl: USER_ATTACHMENT_IMAGES.imageToVideo,
        badge: 'Veo 图生视频',
        description: '使用 Google Veo 3/3.1 将静态图片转换为高动态流畅视频，支持批量投图与镜头运动控制。',
        highlights: ['静态图像瞬间化身丝滑动态镜头', '完美继承原图光影与人物画风', '多线程并发极速批量导出'],
        moduleLink: 'image-to-video'
      },
      {
        id: 'video-extension',
        title: '长视频无缝延展 (尾帧续写)',
        category: 'video',
        categoryLabel: 'AI视频与电影',
        imageUrl: USER_ATTACHMENT_IMAGES.videoExtension,
        badge: '无缝连续生成',
        description: '突破短视频生成时长限制，自动锁定前一段末尾帧作为下一段起点，实现丝滑连贯长视频。',
        highlights: ['无跳帧卡顿的丝滑镜头过渡', '从8秒自由拓展至1分钟、5分钟大片', '自动合并导出完整单一视频文件'],
        moduleLink: 'video-extension'
      },
      {
        id: 'consistent-character',
        title: '人物角色一致性 (100%锁脸)',
        category: 'character',
        categoryLabel: '角色与漫画',
        imageUrl: USER_ATTACHMENT_IMAGES.consistentCharacter,
        badge: '100% 面部锁定',
        description: '跨越多个镜头与不同复杂场景，100%锁定角色面容、身形与服装，杜绝换脸与画风崩塌。',
        highlights: ['多角度面部特征智能提取（正/侧/背）', '智能指令标签 @nv1, @nv2', '制作多集连贯短剧不崩脸'],
        moduleLink: 'consistent-character'
      },
      {
        id: 'comic-storyboard',
        title: 'AI 漫画条漫与故事板生成',
        category: 'character',
        categoryLabel: '角色与漫画',
        imageUrl: USER_ATTACHMENT_IMAGES.comicBookGenerator,
        badge: '漫画与分镜',
        description: '将长篇小说文本一键转换为连贯多格漫画，保持主角形象高度一致并自带气泡对话。',
        highlights: ['智能分格与影视级分镜镜头调度', '跨章节主角形象100%锁定', '支持 4K 超清可打印级导出'],
        moduleLink: 'comic-book-generator'
      },
      {
        id: 'unlimited-image-pro',
        title: 'Unlimited 批量生图 Pro (Nano Banana)',
        category: 'character',
        categoryLabel: '角色与漫画',
        imageUrl: USER_ATTACHMENT_IMAGES.unlimitedImagePro,
        badge: '批量图像渲染',
        description: '搭载 Nano Banana Pro 引擎的高速批量生图利器。支持固定 Seed 统一画风与全本地保存。',
        highlights: ['1-8 线程并发高速批量渲染', '支持参考图垫图 (Image-to-Image)', '按项目全自动本地归档保存'],
        moduleLink: 'unlimited-image-pro'
      },
      {
        id: 'voice-tts',
        title: '多角色多音色 AI 对话语音生成与 Kinx 无限声音克隆',
        category: 'audio_script',
        categoryLabel: '配音与文案',
        imageUrl: USER_ATTACHMENT_IMAGES.voiceDialogue,
        badge: '全新: 多人对白配音 & 声音克隆',
        description: '单份剧本文案支持为多个角色分别指定不同 AI 音色，搭配免费 Edge TTS 及 Kinx 样本声音无限克隆技术。',
        highlights: ['单份文案支持多角色自动分段换声对白', '输出 320kbps 录音室级 MP3/WAV 音频', '支持任意样本音频无限克隆声线'],
        moduleLink: 'voice-tts'
      },
      {
        id: 'ai-script-gen',
        title: 'AI 剧本文案与故事大师',
        category: 'audio_script',
        categoryLabel: '配音与文案',
        imageUrl: USER_ATTACHMENT_IMAGES.aiScriptGen,
        badge: 'Gemini 故事引擎',
        description: '将粗糙想法一键转化为高完播率的三幕式爆款分镜脚本，支持从60秒短视频到30分钟长篇故事。',
        highlights: ['前3秒黄金黄金抓人钩子 (Hook)', '包含详细镜头描述与角色台词', '覆盖20+热门吸睛故事题材'],
        moduleLink: 'ai-script-generator'
      },
      {
        id: 'video-prompts-maker',
        title: '电影级分镜提示词生成器',
        category: 'audio_script',
        categoryLabel: '配音与文案',
        imageUrl: USER_ATTACHMENT_IMAGES.videoPromptsMaker,
        badge: '影视级 Prompt',
        description: '专为 Veo 3.1 量身定制的镜头指令引擎，内置希区柯克变焦、无人机航拍、伦勃朗光等大师预设。',
        highlights: ['涵盖15+专业电影级镜头运镜手法', '黄金时刻、赛博朋克等光影预设', '一键批量生成50条英文分镜指令'],
        moduleLink: 'video-prompts-maker'
      },
      {
        id: 'youtube-analyzer',
        title: 'YouTube 爆款拆解与文案重写',
        category: 'audio_script',
        categoryLabel: '配音与文案',
        imageUrl: USER_ATTACHMENT_IMAGES.youtubeAnalyzer,
        badge: '市场情报拆解',
        description: '只需粘贴公开 YouTube 链接，5秒提取全部字幕并智能分析结构，为您重写100%原创分镜脚本。',
        highlights: ['5秒极速提取字幕与对话文本', '智能重构为三幕式爆款短视频脚本', '生成高吸引力SEO标题、描述与标签'],
        moduleLink: 'youtube-analyzer'
      },
      {
        id: 'ecommerce-kol',
        title: '电商带货视频与虚拟KOL合成',
        category: 'marketing',
        categoryLabel: '电商与营销',
        imageUrl: USER_ATTACHMENT_IMAGES.ecommerceKol,
        badge: 'TikTok / 带货分佣',
        description: '一键复用专属虚拟KOL面孔，批量为海量商品生成表情生动、卖点突出的带货评测视频。',
        highlights: ['全店铺统一的虚拟带货主播面容', '自动提取并强化商品核心卖点', '大幅提升带货转化率与佣金收益'],
        moduleLink: 'ecommerce-kol'
      },
      {
        id: 'viral-thumbnail',
        title: '高点击率 (CTR) 爆款封面生成',
        category: 'marketing',
        categoryLabel: '电商与营销',
        imageUrl: USER_ATTACHMENT_IMAGES.youtubeThumbnail,
        badge: '点击率提升',
        description: '利用夸张表情、高对比度光效与3D立体文字，一键生成吸睛的 YouTube 爆款封面。',
        highlights: ['平均点击率 (CTR) 提升 25% 以上', '自动契合视觉黄金分割比例', '支持 1280x720 及 1920x1080 导出'],
        moduleLink: 'youtube-thumbnail'
      }
    ];
  }

  // Default Vietnamese
  return [
    {
      id: 'video-flow',
      title: 'Tạo Video Veo 3 / Veo 3.1 Flow',
      category: 'video',
      categoryLabel: 'Video & Phim AI',
      imageUrl: USER_ATTACHMENT_IMAGES.videoFlow,
      badge: 'Veo 3.1 Đa Luồng',
      description: 'Render video AI điện ảnh hàng loạt, tự động hóa từ prompt, chạy 1 - 10 luồng song song không giới hạn và tự động lưu về máy tính.',
      highlights: ['Render Veo 3.1 1080p sắc nét', 'Hỗ trợ import danh sách hàng trăm prompt', 'Tự động lưu và quản lý thư mục theo project'],
      moduleLink: 'veo-flow'
    },
    {
      id: 'image-to-video',
      title: 'Tạo Video Bằng Ảnh (Image to Video)',
      category: 'video',
      categoryLabel: 'Video & Phim AI',
      imageUrl: USER_ATTACHMENT_IMAGES.imageToVideo,
      badge: 'Veo Image-to-Video',
      description: 'Tự động chuyển ảnh tĩnh thành video chuyển động sống động với Google Veo 3 / 3.1. Hỗ trợ nạp ảnh hàng loạt, điều khiển chuyển động camera và xuất video độ nét cao.',
      highlights: ['Biến ảnh tĩnh thành video chuyển động mượt mà', 'Tự động kế thừa ánh sáng & phong cách ảnh gốc', 'Chạy song song đa luồng xuất video hàng loạt'],
      moduleLink: 'image-to-video'
    },
    {
      id: 'video-extension',
      title: 'Mở Rộng Video Dài (Frame Continuation)',
      category: 'video',
      categoryLabel: 'Video & Phim AI',
      imageUrl: USER_ATTACHMENT_IMAGES.videoExtension,
      badge: 'Nối Cảnh Liền Mạch',
      description: 'Tự động trích xuất khung hình cuối cùng của video trước làm điểm bắt đầu video sau, tạo nên các thước phim dài bất tận mượt mà không hề bị đứt đoạn.',
      highlights: ['Nối tiếp khung hình mượt mà không bị giật hay nhảy hình', 'Mở rộng video từ 8 giây lên 1 phút, 5 phút tùy ý', 'Hỗ trợ tự động ghép nối thành 1 file video hoàn chỉnh'],
      moduleLink: 'video-extension'
    },
    {
      id: 'consistent-character',
      title: 'NV Đồng Nhất (Khóa Nhân Vật 100%)',
      category: 'character',
      categoryLabel: 'Nhân Vật & Truyện Tranh',
      imageUrl: USER_ATTACHMENT_IMAGES.consistentCharacter,
      badge: 'Khóa Mặt 100%',
      description: 'Công nghệ giữ chuẩn 100% diện mạo khuôn mặt, vóc dáng và trang phục của nhân vật qua vô số góc quay và bối cảnh khác nhau.',
      highlights: ['Nhận diện đa góc quay (Front/Side/Back)', 'Cú pháp thông minh @nv1, @nv2', 'Tạo phim dài tập không bao giờ bị lệch mặt'],
      moduleLink: 'consistent-character'
    },
    {
      id: 'comic-storyboard',
      title: 'Tạo Truyện Tranh Bằng AI (Comic Book)',
      category: 'character',
      categoryLabel: 'Nhân Vật & Truyện Tranh',
      imageUrl: USER_ATTACHMENT_IMAGES.comicBookGenerator,
      badge: 'Manga & Manhwa',
      description: 'Tự động chuyển câu chuyện văn bản thành các trang truyện tranh phân ô chuyên nghiệp với nhân vật đồng nhất và thoại bóng.',
      highlights: ['Tự động phân ô kịch bản kèm góc máy', 'Đồng nhất nhân vật xuyên suốt bộ truyện', 'Xuất ảnh độ phân giải cao chuẩn in ấn'],
      moduleLink: 'comic-book-generator'
    },
    {
      id: 'unlimited-image-pro',
      title: 'Unlimited Tạo Ảnh Pro (Nano Banana Pro)',
      category: 'character',
      categoryLabel: 'Nhân Vật & Truyện Tranh',
      imageUrl: USER_ATTACHMENT_IMAGES.unlimitedImagePro,
      badge: 'Render Hàng Loạt',
      description: 'Công cụ render ảnh hàng loạt tốc độ cao với model Nano Banana Pro. Hỗ trợ import hàng trăm prompt từ file TXT, kiểm soát Seed cố định phong cách.',
      highlights: ['Chạy đồng thời từ 1 đến 8 luồng render siêu tốc', 'Hỗ trợ chế độ Dùng Ảnh Tham Chiếu (Image-to-Image)', 'Tự động phân loại thư mục lưu trữ máy tính'],
      moduleLink: 'unlimited-image-pro'
    },
    {
      id: 'voice-tts',
      title: 'Tạo Voice AI, Voice Hội Thoại Đa Dạng Tiếng Nói & Kinx Clone Giọng Đa Luồng',
      category: 'audio_script',
      categoryLabel: 'Voice & Kịch Bản',
      imageUrl: USER_ATTACHMENT_IMAGES.voiceDialogue,
      badge: 'MỚI: Voice Hội Thoại & Clone Không Giới Hạn',
      description: 'Studio âm thanh AI đỉnh cao: Tạo voice hội thoại đa dạng tiếng nói phân vai nhiều nhân vật trong 1 kịch bản, Edge TTS miễn phí 50+ thứ tiếng và Kinx TTS Clone mọi giọng nói không giới hạn từ file audio mẫu.',
      highlights: ['Tạo Voice Hội thoại phân vai MC, Khách mời, Nhân vật A/B trong cùng kịch bản', 'Xuất âm thanh MP3/WAV 320kbps phòng thu ghép nối tự động', 'Clone giọng nói mẫu không giới hạn số lượng và chạy đa luồng siêu tốc'],
      moduleLink: 'voice-tts'
    },
    {
      id: 'ai-script-gen',
      title: 'Tạo Kịch Bản Bằng AI',
      category: 'audio_script',
      categoryLabel: 'Voice & Kịch Bản',
      imageUrl: USER_ATTACHMENT_IMAGES.aiScriptGen,
      badge: 'AI Gemini Master',
      description: 'Biến ý tưởng thô thành kịch bản phân cảnh chuẩn 3 hồi kịch tính, tự động căn chỉnh thời lượng từ video ngắn 60s đến phim dài 30 phút.',
      highlights: ['Cấu trúc Hook giữ chân người xem 3s đầu', 'Phân chia phân cảnh chi tiết kèm mô tả hình ảnh', 'Đa dạng thể loại: kịch tính, hài hước, kinh dị'],
      moduleLink: 'ai-script-generator'
    },
    {
      id: 'video-prompts-maker',
      title: 'Tạo Prompt Kịch Bản Điện Ảnh',
      category: 'audio_script',
      categoryLabel: 'Voice & Kịch Bản',
      imageUrl: USER_ATTACHMENT_IMAGES.videoPromptsMaker,
      badge: 'Cinematic Prompts',
      description: 'Bộ công cụ tạo câu lệnh prompt chuyên sâu tích hợp thư viện góc máy điện ảnh, chuyển động camera và preset ánh sáng cho Veo 3.1.',
      highlights: ['Góc máy Dolly Zoom, Pan, Tilt, Drone', 'Preset ánh sáng Golden Hour, Cyberpunk, Film Noir', 'Sinh hàng loạt 50 prompt chỉ 1 cú nhấp chuột'],
      moduleLink: 'video-prompts-maker'
    },
    {
      id: 'youtube-analyzer',
      title: 'Phân Tích & Nghiên Cứu Kịch Bản YouTube',
      category: 'audio_script',
      categoryLabel: 'Voice & Kịch Bản',
      imageUrl: USER_ATTACHMENT_IMAGES.youtubeAnalyzer,
      badge: 'Nghiên Cứu Thị Trường',
      description: 'Trích xuất phụ đề từ video YouTube công khai, phân tích cấu trúc bối cảnh và viết lại kịch bản mới độc quyền hoàn toàn.',
      highlights: ['Trích xuất phụ đề chi tiết từ bất kỳ link YouTube trong 5s', 'Tự động viết lại kịch bản mới (Rewrite) sáng tạo', 'Gợi ý tiêu đề hấp dẫn & bộ thẻ tags SEO'],
      moduleLink: 'youtube-analyzer'
    },
    {
      id: 'ecommerce-kol',
      title: 'Video TMĐT AI & Ghép KOL Chung',
      category: 'marketing',
      categoryLabel: 'TMĐT & Marketing',
      imageUrl: USER_ATTACHMENT_IMAGES.ecommerceKol,
      badge: 'TikTok Shop / Affiliate',
      description: 'Tạo hàng chục video review bán hàng mỗi ngày với cùng 1 gương mặt KOL mẫu và sản phẩm chân thật sắc nét.',
      highlights: ['Đồng nhất khuôn mặt KOL xuyên suốt gian hàng', 'Tự động chèn mô tả & tính năng nổi bật', 'Tối ưu tỷ lệ chuyển đổi đơn hàng TikTok Shop'],
      moduleLink: 'ecommerce-kol'
    },
    {
      id: 'viral-thumbnail',
      title: 'Tạo Thumbnail YouTube Triệu View',
      category: 'marketing',
      categoryLabel: 'TMĐT & Marketing',
      imageUrl: USER_ATTACHMENT_IMAGES.youtubeThumbnail,
      badge: 'Tăng Tỷ Lệ Click CTR',
      description: 'Tự động thiết kế thumbnail YouTube chuẩn điện ảnh với biểu cảm nhân vật kịch tính, ánh sáng bắt mắt và chữ 3D nổi bật.',
      highlights: ['Tăng tỷ lệ click (CTR) thêm 25%+', 'Bố cục chuẩn thị giác người xem', 'Xuất ảnh chuẩn kích thước 1280x720 HD'],
      moduleLink: 'youtube-thumbnail'
    }
  ];
};

// ==================== PRICING PLANS ====================
export const getLocalizedPricingPlans = (lang: Language): PricingPlan[] => {
  if (lang === 'en') {
    return [
      {
        id: 'personal-pro',
        name: 'Personal Pro',
        targetAudience: 'All-in-one professional package with full 12 AI modules and extreme performance.',
        priceFormatted: '$24',
        billingPeriod: '/ month',
        subHighlight: 'No Veo 3 account required - Maximum savings',
        popular: false,
        features: [
          'Unlimited Veo 3 / Veo 3.1 Text-to-Video, Image-to-Video & 100% Consistent Character',
          'Full Neural AI Voiceover suite: Adam, Ngoc Huyen, Studio Voices & 50+ languages',
          'Kinx TTS UNLIMITED Voice Cloning technology from any reference audio file',
          'Unlimited Image / Whisk / Nano Banana generation',
          'Export 720p / 1080p Full HD video without watermark',
          'Automated AI 3-act scripts, YouTube link extractor & cinematic prompts',
          'Seamless video extension, click-worthy thumbnail generator & virtual KOL creator',
          'Up to 20 ultra-fast parallel rendering threads',
          'Unlock all 12 proprietary Kinx Auto AI modules & tools',
          '1-on-1 Ultraview / VIP Support 24/7 & free auto-updates to v4.6.1+'
        ],
        ctaText: 'Select This Plan',
        ctaType: 'secondary'
      },
      {
        id: 'team-pro-5',
        name: 'Team Pro / 5 Devices',
        targetAudience: 'Multi-device expansion for MMO studios, teams & creative agencies.',
        originalPrice: '$120',
        priceFormatted: '$79',
        billingPeriod: '/ month',
        subHighlight: 'No Veo 3 account required - 5 simultaneous PCs',
        popular: false,
        features: [
          'Unlimited Veo 3 / Veo 3.1 & 100% Consistent Character video generation',
          'Full AI Voices: Adam, Ngoc Huyen, Multi-accent & 50+ languages',
          'UNLIMITED Voice Cloning for all 5 workstations simultaneously',
          'Unlimited Image / Whisk / Nano Banana generation',
          'Export 720p / 1080p Full HD video with no monthly limits',
          'Unlock all 12 proprietary AI modules (Script, YouTube Parser, E-com KOL...)',
          'Simultaneous usage across 5 computers with full power',
          'Up to 20 parallel threads per machine',
          'Smart Gemini API key rotation system to avoid interruptions',
          'Dedicated remote setup and workflow optimization for all 5 devices'
        ],
        ctaText: 'Select Team Plan',
        ctaType: 'secondary'
      },
      {
        id: 'year-pro-1',
        name: '1-Year Pro / 1 Device',
        targetAudience: 'Most cost-effective and optimal choice for long-term content creators.',
        originalPrice: '$288',
        priceFormatted: '$199',
        billingPeriod: '/ year',
        subHighlight: 'No Veo 3 account required - Save over $89/year',
        badge: 'BEST VALUE',
        popular: true,
        features: [
          'Unlimited Veo 3 / Veo 3.1 & 100% Consistent Character generation for 12 months',
          'VIP Unlocked AI Voices: Adam, Ngoc Huyen & Studio narrator models',
          'UNLIMITED Voice Cloning from any audio clip',
          'Unlimited Image / Whisk / Nano Banana generation',
          'Export 720p / 1080p Full HD with highest rendering priority',
          'Automated AI scriptwriting, YouTube extractor, Video Extender & KOL studio',
          'Up to 20 parallel threads for silky smooth video rendering',
          'Unlock all 12 modules & free automatic upgrades to all future v4.6.1+ releases',
          'Save over $89 compared to monthly recurring subscription',
          'VIP 1-on-1 priority technical support via Ultraview & Zalo 24/7'
        ],
        ctaText: 'Select 1-Year Plan',
        ctaType: 'primary'
      },
      {
        id: 'enterprise',
        name: 'Enterprise Agency',
        targetAudience: 'Exclusive dedicated infrastructure solution for enterprise studios & MCNs.',
        originalPrice: '$450',
        priceFormatted: '$350',
        billingPeriod: '/ month',
        subHighlight: 'Additional 10% discount on annual billing',
        popular: false,
        features: [
          'Unlimited Veo 3 / Veo 3.1 & 100% Consistent Character video generation',
          'Full enterprise access to Adam, Ngoc Huyen AI Voices & unlimited voice cloning',
          'Unlimited Image / Whisk / Nano Banana generation',
          'Export 720p / 1080p Full HD / 4K with uncapped bandwidth',
          'Unlock all 12 highest-tier AI modules and tools',
          'Up to 30 simultaneous workstations supported',
          'Up to 20 parallel threads per machine',
          'Completely unlimited monthly video generation capacity',
          'Dedicated private cloud render server for maximum rendering speeds',
          'Full automation training materials & dedicated 24/7 technical specialist'
        ],
        ctaText: 'Select Enterprise',
        ctaType: 'secondary'
      }
    ];
  }

  if (lang === 'ja') {
    return [
      {
        id: 'personal-pro',
        name: 'パーソナル Pro',
        targetAudience: '全12種類のAI武器と超高パフォーマンスを備えたプロ向けプラン。',
        priceFormatted: '¥3,500',
        billingPeriod: '/ 月',
        subHighlight: 'Veo 3アカウント契約不要・大幅コスト削減',
        popular: false,
        features: [
          'Veo 3 / Veo 3.1 テキスト/画像/キャラクター100%一致動画 無制限生成',
          'AIナレーション音声完全搭載（Adam、Ngoc Huyen、スタジオ品質ボイス）',
          '任意の音声ファイルから【無制限ボイスクローン (Voice Cloning)】対応',
          '画像 / Whisk / Nano Banana 無制限高画質生成',
          '720p / 1080p フルHD動画ダウンロード（ウォーターマークなし）',
          'AI台本自動作成、YouTubeリンク分析＆映画風プロンプト自動生成',
          '動画シームレス延長、バズるサムネイル生成＆ECバーチャルKOL動画制作',
          '最大20スレッドの超高速並列処理',
          'Kinx Autoの全12種類AIツールモジュールを完全開放',
          'Ultraviewによる1対1のリモートサポート＆v4.6.1+無料アップデート'
        ],
        ctaText: 'このプランを選択',
        ctaType: 'secondary'
      },
      {
        id: 'team-pro-5',
        name: 'チーム Pro / 5台',
        targetAudience: '制作スタジオ・MMOチーム向け5台同時稼働拡張プラン。',
        originalPrice: '¥17,500',
        priceFormatted: '¥11,800',
        billingPeriod: '/ 月',
        subHighlight: 'Veo 3アカウント不要・PC5台同時使用可能',
        popular: false,
        features: [
          'Veo 3 / Veo 3.1 & キャラクター100%一致動画 無制限生成',
          'Adam、Ngoc Huyen音声を含むAI音声フルセット＆多言語対応',
          '5台すべてで【無制限ボイスクローン】利用可能',
          '画像 / Whisk / Nano Banana 無制限生成',
          '720p / 1080p フルHD動画無制限ダウンロード',
          '全12種類のAIツール（台本、YouTube抽出、EC動画など）完全開放',
          '最大5台のPCで同時にフルパフォーマンス稼働',
          '各PC最大20スレッドの高速並列処理',
          'Gemini APIキー自動ローテーションで途切れない生成を実現',
          '5台すべてのPCへのリモートセットアップ＆最適化サポート'
        ],
        ctaText: 'チームプランを選択',
        ctaType: 'secondary'
      },
      {
        id: 'year-pro-1',
        name: '1年間 Pro / 1台',
        targetAudience: '長期コンテンツクリエイター向け最も経済的でお得なプラン。',
        originalPrice: '¥42,000',
        priceFormatted: '¥29,800',
        billingPeriod: '/ 年',
        subHighlight: 'Veo 3アカウント不要・年間約12,000円お得',
        badge: '一番人気・最安値',
        popular: true,
        features: [
          '12ヶ月間 Veo 3 / Veo 3.1 & キャラクター100%一致動画 無制限生成',
          'Adam、Ngoc Huyenを含むVIP AI音声＆無制限ボイスクローン完全開放',
          '画像 / Whisk / Nano Banana 高画質無制限生成',
          '720p / 1080p フルHD動画ダウンロード（最優先レンダリング帯域）',
          'AI台本自動作成、YouTube分析、長尺動画延長＆バーチャルKOL',
          '最大20スレッドの高速処理でスムーズな動画制作',
          '全12種類モジュール開放＆1年間のv4.6.1+新機能自動無料アップデート',
          '月払いと比較して大幅にコストを削減',
          'VIP優先1対1リモートサポート（Ultraview / 24時間受付）'
        ],
        ctaText: '1年プランを選択',
        ctaType: 'primary'
      },
      {
        id: 'enterprise',
        name: 'エンタープライズ',
        targetAudience: '大規模MCN・映像制作会社向け専用インフラソリューション。',
        originalPrice: '¥65,000',
        priceFormatted: '¥52,000',
        billingPeriod: '/ 月',
        subHighlight: '年間払いでさらに10%OFF',
        popular: false,
        features: [
          'Veo 3 / Veo 3.1 & キャラクター一致動画 無制限生成',
          'Adam、Ngoc Huyen音声および無制限ボイスクローン完全利用権',
          '画像 / Whisk / Nano Banana 無制限生成',
          '720p / 1080p フルHD / 4K動画無制限ダウンロード',
          '全12種類の最高峰AIモジュール＆ツール完全利用可能',
          '最大30台のPCで同時接続・並列稼働',
          '1台あたり最大20スレッドの並列処理',
          '月間動画生成数の上限一切なし',
          '超高速処理用プライベートクラウド専用サーバー提供',
          'オートメーション導入研修資料の提供＆専任技術サポート'
        ],
        ctaText: '企業プランを選択',
        ctaType: 'secondary'
      }
    ];
  }

  if (lang === 'zh') {
    return [
      {
        id: 'personal-pro',
        name: '个人专业版 (Personal Pro)',
        targetAudience: '集全套 12 大 AI 自动化武器于一体的高性能专业方案。',
        priceFormatted: '¥160',
        billingPeriod: '/ 月',
        subHighlight: '无需自备 Veo 3 账号 - 极速开箱即用',
        popular: false,
        features: [
          '无限制生成 Veo 3 / Veo 3.1 文生视频/图生视频/一致性角色视频（100%锁脸）',
          '全套 AI 拟真配音：包含 Adam、Ngọc Huyền (玉玄)、工作室级专业发音人',
          'Kinx TTS【无限制声音克隆 (Voice Cloning)】，支持任意参考音频',
          '无限制生成 图像 / Nano Banana / Whisk 多线程视觉素材',
          '极速下载 720p / 1080p 全高清无水印视频',
          '自动撰写 3 幕式 AI 爆款文案，一键提取 YouTube 视频结构并生成电影级 Prompt',
          '无缝长视频延展、高点击率爆款封面生成及电商虚拟 KOL 口播视频制作',
          '支持高达 20 线程极速并发渲染',
          '解锁全部 12 大独家 AI 自动化生产力模块',
          'Ultraview / 专属客服 1 对 1 远程协助，终身免费推送 v4.6.1+ 更新'
        ],
        ctaText: '选择此方案',
        ctaType: 'secondary'
      },
      {
        id: 'team-pro-5',
        name: '团队专业版 (5台电脑)',
        targetAudience: '专为短视频矩阵团队、MMO 工作室与 Agency 打造的 5 设备并发方案。',
        originalPrice: '¥800',
        priceFormatted: '¥550',
        billingPeriod: '/ 月',
        subHighlight: '无需自备 Veo 3 账号 - 支持 5 台设备同时使用',
        popular: false,
        features: [
          '无限制生成 Veo 3 / Veo 3.1 及 100% 角色一致性视频',
          '全套 AI 配音：Adam、Ngọc Huyền 及 50+ 种多语言发音人',
          '5 台设备均享【无限制声音克隆】黑科技',
          '无限制生成 图像 / Whisk / Nano Banana 视觉素材',
          '极速下载 720p / 1080p 全高清视频（单月不限导出次数）',
          '解锁全部 12 大 AI 生产力模块（文案、YouTube 解析、电商 KOL 等）',
          '支持 5 台电脑同时在线高负荷运行',
          '单机支持高达 20 线程并发渲染',
          '智能 Gemini API Key 自动轮询机制，确保 24 小时稳定不中断',
          '全流程 5 台设备远程安装部署与工作流调优支持'
        ],
        ctaText: '选择团队版',
        ctaType: 'secondary'
      },
      {
        id: 'year-pro-1',
        name: '年度专业版 (1台电脑)',
        targetAudience: '长期创作者与自媒体人的最具性价比与最高收益之选。',
        originalPrice: '¥1,920',
        priceFormatted: '¥1,380',
        billingPeriod: '/ 年',
        subHighlight: '无需自备 Veo 3 账号 - 年付立省巨额费用',
        badge: '最高性价比',
        popular: true,
        features: [
          '整年无限制生成 Veo 3 / Veo 3.1 及 100% 角色一致性视频',
          'VIP 解锁 Adam、Ngọc Huyền 及无限制声音克隆核心能力',
          '无限制生成 图像 / Whisk / Nano Banana 视觉素材',
          '极速下载 720p / 1080p 全高清视频，享受最高优先级云端带宽',
          '自动生成 AI 文案、YouTube 拆解、长视频延展与电商 KOL 视频',
          '单机支持高达 20 线程并发处理，流畅稳定不卡顿',
          '解锁全部 12 大功能模块，1 年内免费升级所有 v4.6.1+ 全新版本',
          '相比月付订购立省大量成本',
          'VIP 专属 1 对 1 远程售后支持（Ultraview / 24小时响应）'
        ],
        ctaText: '选择年度版',
        ctaType: 'primary'
      },
      {
        id: 'enterprise',
        name: '企业定制版 (Enterprise)',
        targetAudience: '面向大型 MCN 机构、影视传媒与企业的专属独立云端方案。',
        originalPrice: '¥3,000',
        priceFormatted: '¥2,480',
        billingPeriod: '/ 月',
        subHighlight: '按年结算立享额外 9 折优惠',
        popular: false,
        features: [
          '无限制生成 Veo 3 / Veo 3.1 及 100% 角色一致性视频',
          '全权限使用 Adam、Ngọc Huyền AI 发音人及无限声音克隆',
          '无限制生成 图像 / Whisk / Nano Banana 视觉素材',
          '极速下载 720p / 1080p / 4K 全高清视频，带宽无上限',
          '解锁全部 12 大最高阶 AI 模块与自动化工具',
          '最多支持 30 台设备同时运行',
          '单台设备支持 20 线程并发渲染',
          '单月无限制视频生成与导出上限',
          '配备独立云端私有服务器，确保极致渲染与生成速度',
          '提供企业级自动化培训教材及专属技术专家 7x24 小时服务'
        ],
        ctaText: '选择企业定制版',
        ctaType: 'secondary'
      }
    ];
  }

  return PRICING_PLANS;
};

// ==================== TESTIMONIALS ====================
export const getLocalizedTestimonials = (lang: Language): Testimonial[] => {
  if (lang === 'en') {
    return [
      {
        id: '1',
        author: 'Alex Henderson',
        role: 'Owner of 12 YouTube Shorts Channels',
        channelName: '@HistoryMysteries (840k Subs)',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
        stats: '+1.8M Views/day',
        quote: 'Previously our 3-person team struggled to finish 2 videos per day. Since adopting Kinx Auto, the Consistent Character and Veo 3.1 Prompt features allow us to publish 15 videos daily at almost zero marginal cost. AdSense revenue quadrupled!',
        verified: true,
        platform: 'youtube'
      },
      {
        id: '2',
        author: 'Sarah Chen',
        role: 'Top 1 Beauty & Cosmetics Creator on TikTok Shop',
        channelName: '@SarahBeautyVault (520k Follow)',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
        stats: '$18,000/mo Revenue',
        quote: 'The AI E-commerce tool with virtual KOL faces has been a true revolution. I just upload fresh product photos and the software generates high-converting review videos with crystal-clear voiceovers. Click-to-cart rates surged by 280%!',
        verified: true,
        platform: 'tiktok'
      },
      {
        id: '3',
        author: 'Marcus Vance',
        role: 'Founder of Short-Form MMO Agency',
        channelName: 'Vance AI Studio',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
        stats: 'Managing 35 Monetized Channels',
        quote: 'Having tested dozens of tools, Kinx Auto is by far the most stable. No crashes, ultra-smooth multi-threading, and 24/7 technical support is always ready to remote-in and assist within minutes.',
        verified: true,
        platform: 'facebook'
      }
    ];
  }

  if (lang === 'ja') {
    return [
      {
        id: '1',
        author: '佐藤 健太',
        role: 'YouTube Shorts 12チャンネル運営代表',
        channelName: '@世界の未解決ミステリー (登録者84万人)',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
        stats: '+180万再生/日',
        quote: '以前は3人のチームで1日2本の動画を作るのが限界でした。Kinx Autoを導入してからは、キャラクター一貫性機能とVeo 3.1プロンプト生成により、毎日15本をほぼゼロコストで公開できるようになりました。収益は4倍に跳ね上がりました！',
        verified: true,
        platform: 'youtube'
      },
      {
        id: '2',
        author: '高橋 美咲',
        role: 'TikTok Shop コスメ部門トップクリエイター',
        channelName: '@MisakiBeauty (フォロワー52万人)',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
        stats: '月商2,800万円突破',
        quote: 'バーチャルKOLを活用したEC動画機能は革命的です。新商品の写真をアップするだけで、自然な日本語ナレーション付きの本格レビュー動画が自動完成します。カート追加率は280%急増しました！',
        verified: true,
        platform: 'tiktok'
      },
      {
        id: '3',
        author: '中村 翔平',
        role: 'ショート動画制作・運用エージェンシー代表',
        channelName: 'Nakamura AI Media',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
        stats: '35チャンネル一括運用中',
        quote: '市場のツールを何十個も試しましたが、Kinx Autoが群を抜いて安定しています。マルチスレッド処理が非常にスムーズで、トラブル時も24時間年中無休で迅速に対応してくれます。',
        verified: true,
        platform: 'facebook'
      }
    ];
  }

  if (lang === 'zh') {
    return [
      {
        id: '1',
        author: '张逸辰',
        role: '12个 YouTube Shorts 矩阵频道主理人',
        channelName: '频道 @历史探索与未解之谜 (84万订阅)',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
        stats: '日均播放量 +180 万',
        quote: '以前3人团队每天只能肝出2条视频。自从用上 Kinx Auto，角色一致性锁定与 Veo 3.1 分镜指令让我们每天稳定产出15条精品视频，成本几乎为零，AdSense 收益直接翻了4倍！',
        verified: true,
        platform: 'youtube'
      },
      {
        id: '2',
        author: '陈诗雅',
        role: 'TikTok Shop 美妆带货头部创作者',
        channelName: '@ShishiBeauty (52万粉丝)',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
        stats: '单月带货流水 ¥135 万',
        quote: '虚拟KOL带货视频功能简直是生产力革命！我只需要上传新品图片，软件就能自动生成带有标准发音配音的专业评测视频，加购转化率飙升了280%！',
        verified: true,
        platform: 'tiktok'
      },
      {
        id: '3',
        author: '林浩峰',
        role: '海外短视频出海矩阵机构创始人',
        channelName: '浩峰 AI 矩阵工作室',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
        stats: '操盘管理 35 个出海收益频道',
        quote: '测评过市面上几十款AI工具，Kinx Auto 是运行最稳定的一款。多线程批量生成毫不卡顿，最关键的是24小时远程支持响应极其迅速，遇到任何配置问题几分钟内就能搞定。',
        verified: true,
        platform: 'facebook'
      }
    ];
  }

  return TESTIMONIALS;
};

// ==================== FAQS ====================
export const getLocalizedFaqs = (lang: Language): FaqItem[] => {
  if (lang === 'en') {
    return [
      {
        question: 'Does Kinx Auto require a powerful graphics card (GPU)?',
        answer: 'No! Kinx Auto executes rendering via high-speed cloud infrastructure with Google Veo 3.1 servers. Your PC only needs Windows 10/11 64-bit or macOS (Apple Silicon or Intel) with 4GB+ RAM.',
        category: 'installation'
      },
      {
        question: 'Is Veo 3.1 in Kinx Auto limited by video count or token charges?',
        answer: 'Completely unlimited! Once activated (Personal Pro, Team, or 1-Year Pro), you have unlimited video creation capabilities without per-second token fees.',
        category: 'features'
      },
      {
        question: 'Can I download and test the free trial before upgrading?',
        answer: 'Yes! Download the installer directly from kinxauto.click and try out features. You can upgrade anytime or contact 24/7 technical support for 1-on-1 assistance.',
        category: 'pricing'
      },
      {
        question: 'How does the 100% Consistent Character feature work?',
        answer: 'Kinx Auto leverages multidimensional visual embedding algorithms. Upload 1 reference portrait, and the AI locks key facial landmarks into subsequent scenes to prevent morphing.',
        category: 'features'
      },
      {
        question: 'What kind of support is included when subscribing?',
        answer: 'Our dedicated technicians provide 1-on-1 setup via Ultraview, TeamViewer, or AnyDesk. We configure everything and guide you to your first finished video.',
        category: 'support'
      },
      {
        question: 'If I switch to a new computer, can I transfer my license?',
        answer: 'Absolutely! Licenses are flexible and allow smooth migration to your new machine without extra charges.',
        category: 'support'
      }
    ];
  }

  if (lang === 'ja') {
    return [
      {
        question: '高性能なグラフィックボード（高価なGPU）は必要ですか？',
        answer: 'いいえ、不要です！Kinx AutoはGoogle Veo 3.1の高速クラウド基盤でレンダリングを処理するため、Windows 10/11 (64bit) または macOS (Intel/M1/M2/M3)、RAM 4GB以上のPCであれば快適に動作します。',
        category: 'installation'
      },
      {
        question: 'Veo 3.1での動画生成本数制限やトークン追加課金はありますか？',
        answer: '一切ありません！Kinx Autoの各プラン（Pro、Team、年額Pro）をご契約中は、動画を何本生成しても追加のトークン課金は発生せず無制限にご利用いただけます。',
        category: 'features'
      },
      {
        question: '有料プラン契約前に無料トライアルで試すことはできますか？',
        answer: 'はい、可能です！公式サイトからインストーラーをダウンロードして無料体験版をお試しいただけます。気に入っていただけましたらシステムから随時アップグレードが可能です。',
        category: 'pricing'
      },
      {
        question: 'キャラクター一貫性ロック（Consistent Characters）はどのように機能しますか？',
        answer: '独自の多次元リファレンス埋め込み技術を採用しています。顔がはっきり写った画像を1枚アップロードするだけで、AIが特徴量を固定し、各シーンで顔が別人化するのを完全に防ぎます。',
        category: 'features'
      },
      {
        question: '契約後の初期設定や使い方のサポート体制はどうなっていますか？',
        answer: '専任エンジニアがリモートツール（Ultraview / AnyDesk等）を通じて1対1で導入設定から最初の動画完成まで丁寧にご案内します。24時間体制でいつでもご相談いただけます。',
        category: 'support'
      },
      {
        question: 'パソコンを買い替えた場合、ライセンスの移行は可能ですか？',
        answer: 'もちろん可能です！新しいパソコンへの移行は追加費用なしでスムーズに行っていただけます。',
        category: 'support'
      }
    ];
  }

  if (lang === 'zh') {
    return [
      {
        question: 'Kinx Auto 是否需要昂贵的高配置独立显卡 (GPU)？',
        answer: '完全不需要！Kinx Auto 基于 Google Veo 3.1 高速云端算力集群进行视频渲染。您的电脑只需运行 Windows 10/11 64位 或 macOS (Intel/M1/M2/M3/M4)，配备 4GB 以上内存即可流畅运行。',
        category: 'installation'
      },
      {
        question: '软件中的 Veo 3.1 视频生成是否有数量限制或 Token 扣费？',
        answer: '不限次数！开通 Kinx Auto 套餐（个人 Pro、团队版或年费 Pro）后，您即可享有无限制的视频生成权限，无需为每秒视频额外支付 Token 点数费用。',
        category: 'features'
      },
      {
        question: '购买正式版前是否可以先免费下载体验试用？',
        answer: '当然可以！您可以直接从官网下载安装包体验试用版。随后可随时在线升级解锁全部12项高级功能，或联系24小时客服获得1对1远程演示。',
        category: 'pricing'
      },
      {
        question: '人物角色一致性 (Consistent Characters) 是如何实现不崩脸的？',
        answer: 'Kinx Auto 采用独家多维面部特征嵌入算法。只需上传1张清晰人物正脸照，算法即可自动提取关键轮廓并在后续所有分镜动作中深度锁定，确保画面绝不走形。',
        category: 'features'
      },
      {
        question: '购买套餐后能获得怎样的技术支持与指导？',
        answer: '我们的技术团队提供 1对1 远程协助（支持 Ultraview / AnyDesk / 远程桌面），协助您完成最佳环境配置并指导您制作出第一条成品视频，全天候 24/7 在线服务。',
        category: 'support'
      },
      {
        question: '如果更换新电脑，软件授权是否可以转移迁移？',
        answer: '完全支持！您可以轻松将使用权限迁移至新电脑设备上，无需重复购买或支付额外迁移费用。',
        category: 'support'
      }
    ];
  }

  return FAQ_ITEMS;
};

// ==================== COMPARISON GETTER ====================
export const getLocalizedComparisonData = (lang: Language): LocalizedComparisonRow[] => {
  return COMPARISON_DATA_BY_LANG[lang] || COMPARISON_DATA_BY_LANG.vi;
};

// ==================== MODULES GETTER ====================
export const getLocalizedModules = (lang: Language): FeatureModule[] => {
  if (lang === 'vi') {
    return KINX_MODULES;
  }

  // Localized overlays for core fields
  return KINX_MODULES.map((mod) => {
    if (lang === 'en') {
      const enTitles: Record<string, { name: string; tagline: string; description: string; highlights: string[] }> = {
        'veo-flow': {
          name: 'Veo 3 / 3.1 Batch Video Flow',
          tagline: 'Batch render cinematic AI videos from prompt lists in 1080p Full HD',
          description: 'Fully automated batch video production engine powered by Google Veo 3.1. Runs 1 to 10 multi-threaded jobs, supports 9:16 vertical and 16:9 widescreen, automatically saving finished videos directly to your PC.',
          highlights: [
            'Multi-threaded rendering (1 to 10 parallel jobs) for maximum speed',
            'Full support for 9:16 Shorts/TikTok and 16:9 widescreen YouTube formats',
            'Batch import hundreds of prompts from TXT files in one click',
            'Auto file renaming and project directory management'
          ]
        },
        'image-to-video': {
          name: 'Image to Video (Veo Motion)',
          tagline: 'Transform still images into dynamic cinematic videos with Veo 3.1',
          description: 'Turns static character or landscape photos into lifelike motion video clips. Controls camera movement, lighting continuity, and cinematic zooms with zero distortion.',
          highlights: [
            'Deep AI camera movement control (Pan, Zoom, Tilt, Orbit)',
            'Batch drag-and-drop support for dozens of images at once',
            'Inherits realistic lighting and original photo atmosphere',
            'Direct output in 720p/1080p HD ready for timeline editing'
          ]
        },
        'consistent-character': {
          name: 'Consistent Characters (100% Lock)',
          tagline: 'Lock face, physique and costume 100% across infinite storytelling scenes',
          description: 'Exclusive multi-angle facial recognition locking technology. Upload 1 character image, and Kinx Auto locks identity throughout complex narrative prompts.',
          highlights: [
            'Zero facial morphing across diverse camera angles',
            'Smart syntax tagging (@char1, @char2) inside story prompts',
            'Create multi-episode anime and series with recognizable protagonists',
            'Supports single-subject and multi-character interaction scenes'
          ]
        },
        'voice-tts': {
          name: 'AI Voiceover & Unlimited Voice Cloning (Edge & Kinx TTS)',
          tagline: 'Lifelike studio narration & unlimited voice cloning - Multi-threaded with zero API costs',
          description: 'Integrated studio-quality Edge TTS engine with 50+ languages combined with Kinx TTS unlimited voice cloning from any audio sample. Batch export high-fidelity 320kbps MP3s simultaneously.',
          highlights: [
            'Natural, expressive neural voiceover without robotic pauses',
            'Unlimited custom voice cloning from short audio reference files',
            'Over 50+ international languages with multi-thread parallel rendering',
            'Import long multi-thousand-word scripts with automatic scene splitting'
          ]
        },
        'ai-script-generator': {
          name: 'AI Script & Story Engine',
          tagline: 'Generate viral 3-act scripts from 1,000 to 20,000 words in 10 seconds',
          description: 'Input any rough concept or news link, and the AI crafts a complete narrative script structured specifically for video retention and audience engagement.',
          highlights: [
            'Flexible lengths: 1,000 words (~1.5m) to 20,000 words (~30m)',
            'Over 20 viral storytelling genres (Action, Drama, Horror, Mystery...)',
            'Auto scene breakdown with visual cues and character dialogue',
            'Structured JSON/TXT output ready for instant Video Flow input'
          ]
        },
        'video-prompts-maker': {
          name: 'Cinematic Prompts Generator',
          tagline: 'Automatically generate Hollywood-grade prompts with camera and lighting tags',
          description: 'Converts raw scripts into detailed English prompt commands optimized for Veo 3.1. Choose from 15+ camera angles and 10+ lighting presets.',
          highlights: [
            'Over 15+ professional cinematic camera framing presets',
            'Lighting and atmosphere controls (Golden Hour, Rembrandt, Neon...)',
            'Standardized JSON formatting linked with character tags',
            'Craft world-class prompts without advanced English writing skills'
          ]
        },
        'youtube-analyzer': {
          name: 'YouTube Script & Competitor Analyzer',
          tagline: 'Analyze public YouTube videos - Extract subtitles, structure and rewrite',
          description: 'Paste any public YouTube link to extract subtitles, analyze narrative pacing, and rewrite 100% unique viral scripts for your own channel.',
          highlights: [
            'Extract transcripts from any public YouTube link in 5s',
            'Auto rewrite into original 3-act storytelling scripts',
            'Summarize long videos into catchy TikTok/Reels shorts',
            'Generates high-CTR titles, descriptions and SEO hashtag bundles'
          ]
        },
        'comic-storyboard': {
          name: 'AI Comic Book & Manga Generator',
          tagline: 'Convert novel chapters into multi-panel comic strips with speech bubbles',
          description: 'Build complete comic book chapters and webtoon strips with structured panel layouts, speech bubbles, and consistent protagonist visuals.',
          highlights: [
            'Automatic panel composition with dynamic camera angles',
            'Consistent character identity across all comic panels',
            'Built-in speech bubble typesetting with multiple font styles',
            'Export ultra-high-resolution 4K printable comic pages'
          ]
        },
        'viral-thumbnail': {
          name: 'High-CTR YouTube Thumbnail AI',
          tagline: 'Generate high-contrast cinematic YouTube thumbnails that maximize click rates',
          description: 'Create high-converting YouTube thumbnails with dramatic character facial expressions, cinematic lighting, and eye-catching 3D typography.',
          highlights: [
            'Boost click-through rates (CTR) by over 25%',
            'Dramatic lighting, glow effects and 3D typography presets',
            'Export standard 1280x720 and 1920x1080 HD formats',
            'Integrate seamlessly with Consistent Character models'
          ]
        },
        'video-extension': {
          name: 'Long-Form Video Continuity (Extension)',
          tagline: 'Create seamless long videos from the final keyframe of previous clips',
          description: 'Extends video clips from 8 seconds up to multiple minutes by taking the final frame of the previous clip as the starting anchor.',
          highlights: [
            'Seamless scene transitions with zero visual jumps',
            'Extend videos from 8 seconds to 1 minute, 5 minutes or longer',
            'Inherits character position, background lighting and camera angle',
            'PRO auto-merge mode joins all clips into one finished file'
          ]
        },
        'ecommerce-kol': {
          name: 'E-commerce AI & Shared KOL Model',
          tagline: 'Batch produce product review videos featuring a unified virtual influencer',
          description: 'Designed for TikTok Shop, Shopee, and Affiliate marketing. Use 1 virtual model face and product photos to generate dozens of realistic review videos.',
          highlights: [
            'Produce 50+ sales videos daily across extensive product catalogs',
            'Unified virtual influencer face across your entire storefront',
            'Automatically highlights product features and call-to-actions',
            'Dramatically elevates affiliate conversion rates'
          ]
        },
        'video-merger-utils': {
          name: 'Video Merger, API Rotation & Utilities',
          tagline: 'Fast video merger, audio normalization & automated Gemini API key rotation',
          description: 'All-in-one utility hub: Fast FFmpeg lossless video joining, automatic API key pool rotation, and 24/7 direct customer support.',
          highlights: [
            'Instant lossless video joining powered by built-in FFmpeg',
            'Automated API key pool rotation prevents quota exhaustion',
            'Easy interface language switching',
            '24/7 dedicated support via Ultraview and live chat'
          ]
        }
      };

      const overlay = enTitles[mod.id];
      if (overlay) {
        return {
          ...mod,
          name: overlay.name,
          tagline: overlay.tagline,
          description: overlay.description,
          highlights: overlay.highlights,
        };
      }
    }

    if (lang === 'ja') {
      const jaTitles: Record<string, { name: string; tagline: string; description: string; highlights: string[] }> = {
        'veo-flow': {
          name: 'Veo 3 / 3.1 ビデオフロー一括生成',
          tagline: 'プロンプト一覧から映画品質のAI動画を1080pで自動一括レンダリング',
          description: 'Google Veo 3.1を搭載した全自動バッチ動画生成エンジン。1〜10スレッド並列処理、縦型9:16および横型16:9に対応し、PCへ自動保存。',
          highlights: [
            '1〜10スレッド並列処理による超高速レンダリング',
            'TikTok/Shorts向け縦型9:16およびYouTube向け横型16:9に完全対応',
            'TXTファイルから数百件のプロンプトをワンクリック一括読み込み',
            'プロジェクト別ファイル名自動リネームとフォルダ自動整理'
          ]
        },
        'image-to-video': {
          name: '画像から動画生成 (Image to Video)',
          tagline: '静止画を Google Veo 3.1 で躍動感あふれる動画へ自動変換',
          description: '人物や風景の静止画から滑らかな動きを持つ動画クリップを生成。カメラワークや光の質感を崩さず維持します。',
          highlights: [
            'カメラワーク制御（パン、ズーム、ティルト、回転）',
            '数十枚の画像をドラッグ＆ドロップで一括読み込み',
            '元画像の照明や世界観を忠実に再現',
            '720p/1080p HD画質で直接出力'
          ]
        },
        'consistent-character': {
          name: 'キャラクター一貫性ロック (100%固定)',
          tagline: '全シーンで主人公の顔・体格・衣装を100%固定し別人化を防止',
          description: '独自の多次元顔認識ロック技術を搭載。1枚の人物写真を読み込ませるだけで、様々なアングルでも同一人物を維持します。',
          highlights: [
            '多彩なカメラアングルでも顔立ちの崩れゼロ',
            '台本プロンプト内でのスマートタグ構文（@char1, @char2）対応',
            '同一主人公による長編ドラマやアニメシリーズの制作が可能',
            '単一人物から複数キャラクターの同時登場シーンまで対応'
          ]
        },
        'voice-tts': {
          name: 'AI音声合成＆無制限ボイスクローン (Edge & Kinx TTS)',
          tagline: '滑らかなナレーション＆サンプル音声からの無制限ボイスクローン - マルチスレッド並列処理',
          description: 'スタジオ品質のEdge TTS（50言語以上）とKinx TTS無制限ボイスクローン技術を完全統合。音声サンプルから任意の声を忠実に複製し、高音質MP3をマルチスレッドで一括生成。',
          highlights: [
            '機械的でない自然な抑揚と滑らかなアナウンサー品質発音',
            'わずか数秒のサンプル音声から無制限にカスタムボイスをクローン',
            '日本語（Nanami, Keita等）を含む50言語以上の多言語音声',
            '320kbps 高音質 MP3 のマルチスレッド一括出力'
          ]
        },
        'ai-script-generator': {
          name: 'AI 台本・ストーリー自動生成',
          tagline: 'アイデア入力からわずか10秒で1,000〜20,000文字の本格3幕構成台本を作成',
          description: '短いキーワードやニュース記事のURLを入力するだけで、視聴維持率を最大化する起承転結の台本をAIが自動作成します。',
          highlights: [
            '長さの自在調整：1,000文字（約1.5分）〜20,000文字（約30分）',
            '20以上の人気ジャンル（アクション、ホラー、恋愛、解説など）',
            'シーンごとの映像描写とセリフを自動整理',
            'Video Flowへ直接読み込める標準形式で出力'
          ]
        },
        'video-prompts-maker': {
          name: 'シネマティックプロンプト生成器',
          tagline: 'カメラアングルと照明効果を組み込んだ映画級プロンプトを自動出力',
          description: 'テキスト台本をVeo 3.1向けの高度な英語プロンプトに変換。15以上のプロ用画角と10以上のシネマライティングを選択可能。',
          highlights: [
            '15以上の映画撮影用カメラワーク（ドリーズーム、FPV等）',
            'ライティングプリセット（ゴールデンアワー、ネオン等）',
            'キャラクタータグと自動連動する標準JSON形式',
            '英語が苦手でも最高峰のプロンプトを簡単作成'
          ]
        },
        'youtube-analyzer': {
          name: 'YouTube 分析＆台本自動リライト',
          tagline: '人気YouTube動画の字幕を抽出・構造分析して完全新作台本を生成',
          description: '公開YouTubeリンクを貼るだけで字幕を自動抽出し、構成を学習して100%オリジナルの新作台本へリライトします。',
          highlights: [
            'YouTubeリンクから5秒で字幕とセリフを自動抽出',
            '3幕構成の魅力的な新作ショート台本へ自動書き換え',
            '長編動画から要点を絞ったショート動画用台本を自動作成',
            '高CTRタイトル、概要欄、SEOタグを一括提案'
          ]
        },
        'comic-storyboard': {
          name: 'AI 漫画・絵コンテ自動生成',
          tagline: '小説やテキストをコマ割り漫画へ自動変換し吹き出し付きで生成',
          description: '小説やストーリーテキストから、統一されたキャラクターのコマ割り漫画やWebtoon用絵コンテを自動作成します。',
          highlights: [
            'ダイナミックなカメラワークによる自動コマ割り',
            'チャプター全編を通じた主人公の一貫性ロック',
            'フォント選択可能な吹き出し自動配置機能',
            '4K超高解像度での印刷用出力に対応'
          ]
        },
        'viral-thumbnail': {
          name: '高CTR YouTubeサムネイル生成',
          tagline: 'クリック率を最大化する表情豊かな映画級サムネイルを自動作成',
          description: 'インパクトのある表情、立体的な3D文字、劇的なライティングで視聴者の目を引くサムネイルを自動生成。',
          highlights: [
            '平均クリック率（CTR）を25%以上向上',
            'ドラマチックな照明効果と3Dテキストプリセット',
            '1280x720および1920x1080のHDサイズ標準出力',
            'キャラクター一貫性モデルとのシームレスな連携'
          ]
        },
        'video-extension': {
          name: '長尺動画継続生成 (Video Extension)',
          tagline: '前クリップの最終フレームから違和感なく繋がる長編動画を作成',
          description: '8秒の動画を前のクリップの最後のコマを基準にして連続生成し、数分間の長い動画へとスムーズに拡張します。',
          highlights: [
            'コマ飛びやチラつきのない滑らかなシーン連結',
            '8秒動画から1分、5分以上の長編動画へ自由拡張',
            '照明、カメラ画角、キャラクター位置を自然に継承',
            'PROモードで全分割動画を1本の完成ファイルへ自動結合'
          ]
        },
        'ecommerce-kol': {
          name: 'EC動画＆バーチャルKOLレビュー',
          tagline: '統一された専属バーチャルKOLモデルによる商品レビュー動画を自動量産',
          description: 'TikTok Shopやアフィリエイト向けに、1枚のモデル写真と商品画像から高品質なレビュー動画を毎日数十本自動生成。',
          highlights: [
            '多数の商品に対して毎日50本以上の販売動画を量産',
            '全商品カタログで統一されたバーチャルインフルエンサーの顔',
            '商品の特徴やメリットを自動テロップ表示',
            'アフィリエイト報酬と購入転換率を最大化'
          ]
        },
        'video-merger-utils': {
          name: '動画結合・API自動ローテーション・便利ツール',
          tagline: '高速動画結合、音量自動調整、Gemini APIキーの自動ローテーション',
          description: '強力な補助ツール群：劣化なしの超高速動画結合、APIキー上限時の自動切り替えプール、24時間年中無休のリモートサポート。',
          highlights: [
            '内蔵FFmpegによる数秒での劣化なし高速動画結合',
            'APIキー自動ローテーションでクォータ切れを防止',
            '日本語・英語・中国語・ベトナム語の簡単切り替え',
            '24時間年中無休のリモート技術サポート対応'
          ]
        }
      };

      const overlay = jaTitles[mod.id];
      if (overlay) {
        return {
          ...mod,
          name: overlay.name,
          tagline: overlay.tagline,
          description: overlay.description,
          highlights: overlay.highlights,
        };
      }
    }

    if (lang === 'zh') {
      const zhTitles: Record<string, { name: string; tagline: string; description: string; highlights: string[] }> = {
        'veo-flow': {
          name: 'Veo 3 / 3.1 批量视频工作流',
          tagline: '根据提示词列表批量渲染 1080p 全高清电影级 AI 视频',
          description: '基于 Google Veo 3.1 的全自动批量视频生成系统。支持 1 至 10 多线程并发，完美适配 9:16 竖屏短视频与 16:9 横屏长视频，自动保存至本地。',
          highlights: [
            '1 至 10 多线程并发处理，生产速度提升数倍',
            '全面支持 9:16 竖屏 (Shorts/TikTok) 与 16:9 横屏 (YouTube)',
            '支持一键从 TXT 文件导入上百条批量分镜提示词',
            '按项目自动智能重命名并归档管理本地视频目录'
          ]
        },
        'image-to-video': {
          name: '图生视频工具 (Veo Image to Video)',
          tagline: '使用 Veo 3.1 将静态图片转换为高动态流畅运镜视频',
          description: '将人物肖像或风景照片转化为生动的电影级动态镜头。精确控制摄像机运镜轨迹与光影氛围，画面绝不走样。',
          highlights: [
            '深度控制运镜轨迹（平移、推拉、俯仰、环绕）',
            '支持批量拖拽导入数十张图片并发生成',
            '完美继承原图的写实光影与人物质感',
            '直接输出 720p/1080p 高清视频，便于后期剪辑'
          ]
        },
        'consistent-character': {
          name: '人物角色一致性 (100%锁脸)',
          tagline: '跨越海量叙事分镜，100%锁定角色面容、身形与服装不走形',
          description: '独家多维面部特征提取与锁定技术。只需上传1张人物参考图，即可在后续复杂的剧本文案中牢牢锁定主角身份。',
          highlights: [
            '多角度镜头调度下实现面容零失真',
            '在分镜提示词中支持智能角色标签构词（@char1, @char2）',
            '轻松打造多集连贯动漫或真人短剧',
            '支持单主角特写及多角色复杂互动场景'
          ]
        },
        'voice-tts': {
          name: 'AI 拟真配音与无限制声音克隆 (Edge TTS & Kinx TTS)',
          tagline: '专业播音员级拟真发音与任意声音无限克隆 - 多线程并发，零 API 额外成本',
          description: '强强联手：不仅拥有覆盖中文方言及 50+ 语言的终身免费 Edge TTS 引擎，更深度搭载 Kinx TTS 无限声音克隆技术，只需几秒音频样本即可复制专属声音，多线程并发高速导出。',
          highlights: [
            '发音自然流畅、富含情感，告别机械卡顿感',
            '支持上传任意样本音频，不限数量克隆专属声音',
            '涵盖 50+ 国际语言及各地区男女声线',
            '多线程并发极速导出 320kbps 广播级 MP3 音频'
          ]
        },
        'ai-script-generator': {
          name: 'AI 爆款剧本文案引擎',
          tagline: '输入构思只需 10 秒即可生成 1,000 至 20,000 字的标准三幕式剧本',
          description: '只需输入一个粗略想法或粘贴新闻链接，AI 即可根据观众完播率算法自动生成结构严谨的分镜故事剧本。',
          highlights: [
            '字数随心调整：从 1,000 字 (~1.5分) 到 20,000 字 (~30分)',
            '20+ 热门爆款剧本题材（动作、惊悚、情感、悬疑、科幻等）',
            '自动拆解分镜镜头、视觉画面描述与人物对白',
            '标准 JSON/TXT 格式输出，可直接载入 Video Flow 批量渲染'
          ]
        },
        'video-prompts-maker': {
          name: '电影级分镜提示词生成器',
          tagline: '自动生成带有专业运镜与灯光效果的 Hollywood 级英文分镜指令',
          description: '将中文小说剧本转换为专为 Veo 3.1 优化的深度英文提示词。内置 15+ 电影机位角度与 10+ 大师级光影预设。',
          highlights: [
            '涵盖 15+ 电影运镜手法（希区柯克变焦、穿越机航拍、跟拍等）',
            '光影与氛围预设（黄金时刻、伦勃朗光、赛博朋克霓虹等）',
            '与角色识别标签深度绑定的标准化格式',
            '即使不精通英文也能轻松生成顶尖提示词'
          ]
        },
        'youtube-analyzer': {
          name: 'YouTube 爆款拆解与文案重写',
          tagline: '深度分析公开 YouTube 视频 - 一键提取字幕、剖析结构并原创重写',
          description: '只需粘贴公开 YouTube 链接，5秒提取字幕并分析完播节奏，为您重写 100% 原创的爆款视频脚本。',
          highlights: [
            '5秒极速提取任何 YouTube 视频的完整字幕与对白',
            '自动重新创作编写为全新三幕式故事脚本',
            '将长视频智能浓缩为吸睛的短视频脚本',
            '一键生成高点击率 SEO 标题、文案描述与标签合集'
          ]
        },
        'comic-storyboard': {
          name: 'AI 漫画条漫与故事板生成',
          tagline: '将小说章节一键转换为连贯多格条漫与气泡对话框',
          description: '将小说或故事文本直接转换为排版精美、主角形象一致的多格漫画与分镜条漫，支持自主调整对话气泡。',
          highlights: [
            '自动智能分格并匹配影视级镜头调度',
            '跨章节全流程锁定主角外貌与服饰一致性',
            '内置多种字体样式的气泡排版与对话框生成',
            '支持 4K 超高清分辨率印刷级图像导出'
          ]
        },
        'viral-thumbnail': {
          name: '高点击率 (CTR) 爆款封面生成',
          tagline: '一键生成高对比度、极具张力的电影级 YouTube 爆款封面',
          description: '利用夸张的面部表情、电影级光影对比与 3D 立体发光文字，全自动设计大幅提升点击率的视频封面。',
          highlights: [
            '视频点击率 (CTR) 平均提升 25% 以上',
            '高动态光效、氛围光晕与 3D 艺术字预设',
            '支持标准 1280x720 及 1920x1080 全高清导出',
            '与一致性角色模型深度无缝协同'
          ]
        },
        'video-extension': {
          name: '长视频无缝延展续写 (Video Extension)',
          tagline: '提取上一段视频的最后一帧作为起点，无缝生成连贯长篇视频',
          description: '以首段视频的尾帧为基准锚点持续向后延展，将 8 秒短镜头无缝拼接扩展为数分钟的完整连贯长视频。',
          highlights: [
            '画面过渡丝滑，彻底告别画面跳跃与卡顿感',
            '自由将视频延展至 1 分钟、5 分钟甚至更长',
            '自动继承上一画面的光影、机位角度与人物站位',
            'PRO 模式支持一键自动将所有分段无损合并为单一视频文件'
          ]
        },
        'ecommerce-kol': {
          name: '电商带货视频与虚拟KOL合成',
          tagline: '全店复用统一虚拟红人面孔，批量生成高转化率商品评测带货视频',
          description: '专为 TikTok Shop、Shopee 及分佣带货量身定制。只需 1 张虚拟达人肖像与商品白底图，每天批量生成数十条真实带货视频。',
          highlights: [
            '每天可为海量商品 SKU 自动批量产出 50+ 条营销视频',
            '全店铺所有带货视频保持高度一致的专属虚拟红人面孔',
            '自动提取并高亮展示商品卖点与促销引导语',
            '显著提高短视频带货转化率与佣金收益'
          ]
        },
        'video-merger-utils': {
          name: '视频极速合并、API智能轮询与实用工具',
          tagline: '无损合并多段视频、音量均衡与 Gemini API 秘钥池自动智能轮替',
          description: '一站式工具箱：基于内置 FFmpeg 实现秒级无损视频拼接，API 秘钥用尽时自动轮替，以及 24/7 专属远程技术支持。',
          highlights: [
            '内置 FFmpeg 引擎，数秒内完成数百个视频片段无损合并',
            '智能 API Key 轮询管理，彻底告别调用额度超限中断',
            '轻松切换多国语言界面',
            '24/7 全天候专业远程协助与一对一答疑'
          ]
        }
      };

      const overlay = zhTitles[mod.id];
      if (overlay) {
        return {
          ...mod,
          name: overlay.name,
          tagline: overlay.tagline,
          description: overlay.description,
          highlights: overlay.highlights,
        };
      }
    }

    return mod;
  });
};
