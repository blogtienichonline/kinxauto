import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mic,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Download,
  Users,
  Sparkles,
  Layers,
  CheckCircle2,
  Maximize2,
  Radio,
  AudioWaveform as WaveformIcon,
  MessageSquare,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
  Cpu
} from 'lucide-react';
import { USER_ATTACHMENT_IMAGES, AUDIO_SAMPLES } from '../data/images';
import { useLanguage } from '../context/LanguageContext';
import { playSampleAudioUrl, stopAllTTS, setSampleAudioPlaybackRate } from '../utils/ttsPlayer';

interface DialogueVoiceShowcaseProps {
  onOpenLeadModal?: () => void;
  onScrollToDownload?: () => void;
  onOpenLegalModal?: () => void;
}

export const DialogueVoiceShowcase: React.FC<DialogueVoiceShowcaseProps> = ({
  onOpenLeadModal,
  onScrollToDownload,
  onOpenLegalModal,
}) => {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [activeSpeakerIndex, setActiveSpeakerIndex] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.15);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressIntervalRef = useRef<number | null>(null);

  const handleSpeedChange = (newSpeed: number) => {
    setPlaybackSpeed(newSpeed);
    setSampleAudioPlaybackRate(newSpeed);
  };

  // Script dialogue segments aligned with real sample timeline
  const dialogueLines = [
    {
      id: 1,
      speaker: 'Nhân vật 1 (MC / Nam Chính)',
      voiceType: 'Nam Minh (Trầm Ấm)',
      color: 'from-blue-500 to-indigo-600',
      avatarBg: 'bg-blue-600',
      text: 'Chào mừng các bạn đã đến với kênh chia sẻ kiến thức công nghệ AI Kinx Auto!',
      time: '0:00 - 0:04',
      startSec: 0,
      endSec: 4,
    },
    {
      id: 2,
      speaker: 'Nhân vật 2 (Khách Mời / Nữ)',
      voiceType: 'Hoài My (Truyền Cảm)',
      color: 'from-purple-500 to-pink-600',
      avatarBg: 'bg-purple-600',
      text: 'Hôm nay chúng ta sẽ cùng trải nghiệm tính năng tạo Voice Hội thoại đa giọng nói hoàn toàn mới.',
      time: '0:04 - 0:09',
      startSec: 4,
      endSec: 9,
    },
    {
      id: 3,
      speaker: 'Nhân vật 3 (Chuyên Gia Clone)',
      voiceType: 'Kinx Clone Voice Studio',
      color: 'from-amber-500 to-emerald-600',
      avatarBg: 'bg-amber-600',
      text: 'Đặc biệt là hệ thống tự động gán giọng từng nhân vật và xuất file ghép nối chuẩn từng mili-giây!',
      time: '0:09 - 0:15',
      startSec: 9,
      endSec: 15,
    },
  ];

  useEffect(() => {
    return () => {
      stopAllTTS();
      if (progressIntervalRef.current) {
        window.clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const handleTogglePlay = () => {
    if (isPlaying) {
      stopAllTTS();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      playSampleAudioUrl({
        audioUrl: AUDIO_SAMPLES.dialogueConversation,
        playbackRate: playbackSpeed,
        onStart: () => {
          setIsPlaying(true);
        },
        onEnd: () => {
          setIsPlaying(false);
          setCurrentTime(0);
          setActiveSpeakerIndex(0);
        },
        onError: () => {
          setIsPlaying(false);
        },
        onTimeUpdate: (curr, dur) => {
          setCurrentTime(curr);
          if (dur && dur > 0) setDuration(dur);

          // Update active speaker based on current playback time
          const speakerIdx = dialogueLines.findIndex(
            (line) => curr >= line.startSec && curr <= line.endSec
          );
          if (speakerIdx !== -1) {
            setActiveSpeakerIndex(speakerIdx);
          }
        },
      });
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const uiTexts = {
    vi: {
      badge: 'TÍNH NĂNG MỚI ĐỘT PHÁ 2026',
      title: 'Tạo Voice Hội Thoại Đa Dạng Tiếng Nói',
      titleHighlight: 'Multi-Speaker Dialogue Studio',
      desc: 'Tự động phân vai kịch bản và gán các giọng đọc AI khác nhau cho từng nhân vật (MC, Khách mời, Nhân vật A, B, Kể chuyện...). Phần mềm tự động ghép nối các phân đoạn đối đáp mượt mà chuẩn phòng thu 320kbps!',
      listenLive: 'Nghe Thử File Voice Hội Thoại Tạo Ra Thực Tế',
      playingBadge: 'Đang phát âm thanh mẫu...',
      readyBadge: 'Nhấn để nghe thử audio',
      featureHighlights: [
        'Phân vai nhiều nhân vật trong 1 kịch bản duy nhất',
        'Tự do mix giọng Edge TTS & Kinx TTS Clone không giới hạn',
        'Tự động ngắt nghỉ, chuyển giọng tự nhiên không bị giật tiếng',
        'Xuất file MP3/WAV chất lượng cao 320kbps sẵn sàng dựng video',
      ],
      sampleTitle: 'File Audio Hội Thoại Xuất Bản Mẫu (kinxts_conv.wav):',
      downloadAudio: 'Tải File Audio Mẫu (.wav)',
      tryFeatureNow: 'Trải Nghiệm Tính Năng Ngay',
      viewScreenshot: 'Xem Ảnh Giao Diện Thực Tế',
      closeLightbox: 'Đóng',
    },
    en: {
      badge: 'BREAKTHROUGH NEW FEATURE 2026',
      title: 'Multi-Speaker AI Dialogue Studio',
      titleHighlight: 'Conversational Voice Generator',
      desc: 'Automatically assign distinct AI voices to different characters (Host, Guest, Characters A & B, Narrator) within a single script. Kinx Auto stitches back-and-forth dialogue seamlessly with 320kbps studio quality!',
      listenLive: 'Listen to Real Generated Multi-Voice Dialogue Audio',
      playingBadge: 'Playing demo audio...',
      readyBadge: 'Click to play audio sample',
      featureHighlights: [
        'Multi-character role assignment in one single script',
        'Mix Edge TTS & Kinx Cloned Voices freely without limits',
        'Natural conversational pacing, smooth breath & tone transitions',
        'Export studio-grade 320kbps MP3/WAV ready for instant video sync',
      ],
      sampleTitle: 'Generated Sample Dialogue Audio (kinxts_conv.wav):',
      downloadAudio: 'Download Sample Audio (.wav)',
      tryFeatureNow: 'Try Multi-Voice Studio Now',
      viewScreenshot: 'Inspect Real Interface Screenshot',
      closeLightbox: 'Close',
    },
    ja: {
      badge: '2026年最新機能アップデート',
      title: 'マルチ話者 AI 会話音声生成スタジオ',
      titleHighlight: 'Multi-Speaker Dialogue Studio',
      desc: '台本内の複数キャラクター（司会、ゲスト、登場人物A・B、ナレーター）ごとに異なるAI音声を自動割り当て。途切れのない自然な掛け合い音声を320kbps高音質で自動連結生成します。',
      listenLive: '生成された実際の会話音声を試聴する',
      playingBadge: 'サンプル音声を再生中...',
      readyBadge: 'クリックして試聴',
      featureHighlights: [
        '1つの台本で複数キャラクターへの音声割り当てに対応',
        'Edge TTSとクローン音声を自在に組み合わせて出力',
        '自然な相槌・感情・息づかいを再現した滑らかな連結',
        '320kbps 高音質 MP3/WAV 出力ですぐに動画編集へ投入可能',
      ],
      sampleTitle: '実際に出力された会話音声ファイル (kinxts_conv.wav):',
      downloadAudio: 'サンプル音声をダウンロード (.wav)',
      tryFeatureNow: '会話音声スタジオを試す',
      viewScreenshot: '実際の操作画面を見る',
      closeLightbox: '閉じる',
    },
    zh: {
      badge: '2026重磅全新功能',
      title: '多角色多音色 AI 对话语音生成',
      titleHighlight: 'Multi-Speaker Dialogue Studio',
      desc: '一键为剧本中的多个角色（主持人、嘉宾、男女主角、旁白）分别指定不同的 AI 音色与克隆声音。系统自动拼接各分段对白，实现自然流畅的 320kbps 录音室级多人互动对话！',
      listenLive: '试听真实生成的 AI 多人对话音频',
      playingBadge: '正在播放样本对白音频...',
      readyBadge: '点击试听真实效果',
      featureHighlights: [
        '单一文案剧本内支持多角色人物分别配音',
        '自由混搭 Edge TTS 与 Kinx 无限声音克隆',
        '自然对话停顿与语气衔接，告别生硬拼接感',
        '输出 320kbps 高清 MP3/WAV，直连视频工作流',
      ],
      sampleTitle: '真实导出的多人对白音频文件 (kinxts_conv.wav):',
      downloadAudio: '下载对白音频样本 (.wav)',
      tryFeatureNow: '立即体验多人对话配音',
      viewScreenshot: '查看真实软件界面截图',
      closeLightbox: '关闭',
    },
  }[language] || {
    badge: 'TÍNH NĂNG MỚI ĐỘT PHÁ 2026',
    title: 'Tạo Voice Hội Thoại Đa Dạng Tiếng Nói',
    titleHighlight: 'Multi-Speaker Dialogue Studio',
    desc: 'Tự động phân vai kịch bản và gán các giọng đọc AI khác nhau cho từng nhân vật (MC, Khách mời, Nhân vật A, B, Kể chuyện...). Phần mềm tự động ghép nối các phân đoạn đối đáp mượt mà chuẩn phòng thu 320kbps!',
    listenLive: 'Nghe Thử File Voice Hội Thoại Tạo Ra Thực Tế',
    playingBadge: 'Đang phát âm thanh mẫu...',
    readyBadge: 'Nhấn để nghe thử audio',
    featureHighlights: [
      'Phân vai nhiều nhân vật trong 1 kịch bản duy nhất',
      'Tự do mix giọng Edge TTS & Kinx TTS Clone không giới hạn',
      'Tự động ngắt nghỉ, chuyển giọng tự nhiên không bị giật tiếng',
      'Xuất file MP3/WAV chất lượng cao 320kbps sẵn sàng dựng video',
    ],
    sampleTitle: 'File Audio Hội Thoại Xuất Bản Mẫu (kinxts_conv.wav):',
    downloadAudio: 'Tải File Audio Mẫu (.wav)',
    tryFeatureNow: 'Trải Nghiệm Tính Năng Ngay',
    viewScreenshot: 'Xem Ảnh Giao Diện Thực Tế',
    closeLightbox: 'Đóng',
  };

  return (
    <section id="dialogue-showcase" className="py-6 sm:py-8 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 via-[#10172A] to-purple-950/40 border border-purple-500/30 shadow-2xl relative overflow-hidden">
          {/* Ambient background glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-purple-600/15 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-600/15 blur-[100px] pointer-events-none" />

      {/* Header Tag */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/40 text-xs font-black text-purple-300 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
          <span>{uiTexts.badge}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Kinx Auto v4.6.1+</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Users className="w-3.5 h-3.5 text-blue-400" />
            <span>Multi-Speaker AI</span>
          </span>
        </div>
      </div>

      {/* Main Grid: Info + Live Audio Player & Real Screenshot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Col: Info + Audio Player */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight flex items-center gap-2 flex-wrap">
              <span>{uiTexts.title}</span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
                ({uiTexts.titleHighlight})
              </span>
            </h3>
            <p className="mt-2 text-slate-300 text-xs sm:text-sm leading-relaxed">
              {uiTexts.desc}
            </p>
          </div>

          {/* Feature Highlights Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {uiTexts.featureHighlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Interactive Live Dialogue Audio Player Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-950 to-[#0F172A] border border-purple-500/40 shadow-inner relative">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-purple-600/30 border border-purple-500/40 text-purple-300">
                  <Mic className="w-4 h-4 text-purple-400" />
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{uiTexts.sampleTitle}</span>
                  </h4>
                  <span className="text-[11px] text-purple-300 font-mono">
                    Stereo 320kbps • AI Voice Dialogue Rendered
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 ${
                isPlaying
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 animate-pulse'
                  : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}>
                <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-purple-400 animate-ping' : 'bg-slate-500'}`} />
                <span>{isPlaying ? uiTexts.playingBadge : uiTexts.readyBadge}</span>
              </span>
            </div>

            {/* Simulated Animated Waveform Bars */}
            <div className="h-12 bg-slate-900/90 rounded-xl p-2.5 flex items-end justify-between gap-1 border border-slate-800 mb-3 overflow-hidden">
              {[40, 65, 85, 30, 95, 70, 50, 90, 45, 80, 100, 60, 35, 75, 90, 55, 40, 85, 95, 65, 50, 70, 85, 40, 90, 60, 75, 50, 80, 95, 45, 65].map((h, i) => {
                const isActive = isPlaying;
                return (
                  <div
                    key={i}
                    style={{
                      height: isActive ? `${Math.max(15, (h * (Math.sin(i + currentTime * 5) + 1.2)) / 2.2)}%` : `${h * 0.3}%`,
                      transition: 'height 0.15s ease',
                    }}
                    className={`flex-1 rounded-t-sm ${
                      isActive
                        ? i % 3 === 0
                          ? 'bg-purple-400'
                          : i % 3 === 1
                          ? 'bg-pink-400'
                          : 'bg-cyan-400'
                        : 'bg-slate-700'
                    }`}
                  />
                );
              })}
            </div>

            {/* Play Controls + Progress Bar */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleTogglePlay}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg transition-all transform active:scale-95 shrink-0 cursor-pointer ${
                  isPlaying
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 ring-4 ring-rose-500/30'
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 ring-4 ring-purple-500/30'
                }`}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-white" />
                ) : (
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                )}
              </button>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span>{duration > 0 ? formatTime(duration) : '0:15'}</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 transition-all duration-100"
                    style={{
                      width: `${duration > 0 ? (currentTime / duration) * 100 : isPlaying ? 50 : 0}%`,
                    }}
                  />
                </div>
              </div>

              {/* Playback Speed Selector */}
              <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 shrink-0">
                {[1.0, 1.15, 1.25].map((spd) => (
                  <button
                    key={spd}
                    type="button"
                    onClick={() => handleSpeedChange(spd)}
                    className={`px-2 py-1 rounded-lg text-[11px] font-mono font-bold transition-all ${
                      playbackSpeed === spd
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-sm ring-1 ring-purple-400/40'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                    title={`Tốc độ phát ${spd}x`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>

              {/* Download Sample Audio */}
              <a
                href={AUDIO_SAMPLES.dialogueConversation}
                download="kinxts_conv_sample.wav"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors shrink-0 flex items-center gap-1.5 text-xs font-semibold"
                title={uiTexts.downloadAudio}
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">{uiTexts.downloadAudio}</span>
              </a>
            </div>

            {/* Conversation Script Bubbles Live Highlights */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 font-semibold text-purple-300">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Phân Cảnh Đối Thoại Đồng Bộ Với Audio:</span>
                </span>
                <span className="text-[10px] text-slate-500">3 Nhân Vật Tự Động Chuyển Giọng</span>
              </div>

              <div className="space-y-1.5">
                {dialogueLines.map((line, idx) => {
                  const isCurrent = isPlaying && activeSpeakerIndex === idx;
                  return (
                    <div
                      key={line.id}
                      className={`p-2.5 rounded-xl transition-all border text-xs flex items-start gap-2.5 ${
                        isCurrent
                          ? 'bg-purple-950/60 border-purple-400 shadow-md shadow-purple-900/30'
                          : 'bg-slate-900/60 border-slate-800/80 opacity-80'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-lg ${line.avatarBg} text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm`}>
                        {idx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <span className="font-bold text-white text-[11px] truncate">{line.speaker}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-purple-300 font-mono shrink-0">
                            {line.voiceType}
                          </span>
                        </div>
                        <p className="text-slate-300 text-[11px] leading-snug">
                          "{line.text}"
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Real Screenshot Showcase with Zoom */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="relative group rounded-2xl overflow-hidden border-2 border-purple-500/40 shadow-2xl bg-slate-950">
            {/* Top Toolbar */}
            <div className="px-3.5 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
              <span className="font-bold text-purple-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                <span>Giao Diện Tạo Voice Hội Thoại Thực Tế</span>
              </span>
              <button
                type="button"
                onClick={() => setIsZoomed(true)}
                className="flex items-center gap-1 text-[11px] text-cyan-300 hover:text-cyan-200 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30 cursor-pointer"
              >
                <Maximize2 className="w-3 h-3" />
                <span>{uiTexts.viewScreenshot}</span>
              </button>
            </div>

            {/* Image Preview */}
            <div
              className="relative cursor-pointer aspect-[16/10] overflow-hidden bg-slate-900 flex items-center justify-center"
              onClick={() => setIsZoomed(true)}
            >
              <img
                src={USER_ATTACHMENT_IMAGES.voiceDialogue}
                alt="Giao diện Tạo Voice Hội Thoại Đa Dạng Tiếng Nói Kinx Auto"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

              {/* Hover Badge */}
              <div className="absolute bottom-3 left-3 right-3 p-2 rounded-xl bg-slate-900/90 backdrop-blur border border-purple-500/30 flex items-center justify-between text-xs text-white">
                <span className="flex items-center gap-1.5 font-semibold text-slate-200 text-[11px]">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Kinx TTS Multi-Speaker Engine</span>
                </span>
                <span className="text-[11px] text-cyan-400 font-bold underline">
                  Phóng to ↗
                </span>
              </div>
            </div>
          </div>

          {/* Quick CTA button */}
          <div className="mt-4 flex items-center gap-3">
            {onOpenLeadModal && (
              <button
                type="button"
                onClick={onOpenLeadModal}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-98 cursor-pointer"
              >
                <span>{uiTexts.tryFeatureNow}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox for Real Interface Screenshot */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-slate-950 rounded-2xl border border-purple-500/50 overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-white flex items-center gap-2">
                  <Mic className="w-4 h-4 text-purple-400" />
                  <span>Ảnh Chụp Giao Diện Tính Năng Tạo Voice Hội Thoại Đa Dạng Tiếng Nói - Kinx Auto</span>
                </span>
                <button
                  type="button"
                  onClick={() => setIsZoomed(false)}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold cursor-pointer"
                >
                  ✕ {uiTexts.closeLightbox}
                </button>
              </div>

              <div className="flex-1 overflow-auto p-2 bg-slate-950 flex items-center justify-center">
                <img
                  src={USER_ATTACHMENT_IMAGES.voiceDialogue}
                  alt="Tạo Voice Hội Thoại Đa Dạng Tiếng Nói Kinx Auto"
                  className="max-w-full max-h-[75vh] object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Chạy đa luồng • Gán nhiều giọng đọc cho từng nhân vật • Ghép nối MP3/WAV tự động</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleTogglePlay}
                    className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlaying ? 'Dừng audio' : 'Nghe thử audio'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
