"use client";
import { useState, useRef, useEffect } from "react";
import { FEATURES } from "@/config/features";

export default function IntroVideo() {
  const [isVisible, setIsVisible] = useState(FEATURES.SHOW_INTRO_VIDEO);
  const [isClosing, setIsClosing] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Уникальный ключ для принудительного пересоздания видео элемента
  const videoKey = useRef(Date.now());

  useEffect(() => {
    // При монтировании проверяем и запускаем видео если нужно
    const checkAndPlay = () => {
      if (videoRef.current && FEATURES.SHOW_INTRO_VIDEO) {
        if (videoRef.current.paused) {
          videoRef.current.play().catch((error) => {
            console.log("Play failed:", error);
          });
        }
      }
    };

    // Даем время для autoPlay
    const timer = setTimeout(checkAndPlay, 150);

    return () => clearTimeout(timer);
  }, []);

  const handlePlay = () => {
    // Когда видео начинает воспроизводиться, пробуем включить звук
    if (videoRef.current && videoRef.current.muted) {
      // Небольшая задержка перед попыткой включить звук
      setTimeout(() => {
        if (videoRef.current) {
          try {
            videoRef.current.muted = false;
            // Проверяем действительно ли звук включился
            if (!videoRef.current.muted) {
              setIsMuted(false);
            }
          } catch (e) {
            // Если не получилось, оставляем muted
            setIsMuted(true);
          }
        }
      }, 100);
    }
  };

  const handleVolumeChange = () => {
    // Отслеживаем изменения состояния muted
    if (videoRef.current) {
      setIsMuted(videoRef.current.muted);
    }
  };


  const closeVideo = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleVideoEnd = () => {
    closeVideo();
  };

  const handleSkip = () => {
    closeVideo();
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Не показываем если фича флаг выключен
  if (!FEATURES.SHOW_INTRO_VIDEO || !isVisible) {
    return null;
  }

  return (
    <div className={`intro-video-overlay ${isClosing ? "closing" : ""}`}>
      <video
        key={videoKey.current}
        ref={videoRef}
        className="intro-video"
        autoPlay
        playsInline
        muted
        preload="auto"
        onPlay={handlePlay}
        onVolumeChange={handleVolumeChange}
        onEnded={handleVideoEnd}
        src="/video/zayka2.mp4"
      />

      {/* Кнопка звука - показывается только когда звук выключен */}
      {isMuted && (
        <button className="intro-video-sound" onClick={toggleMute}>
          🔇
        </button>
      )}

      {/* Кнопка пропуска */}
      <button className="intro-video-skip" onClick={handleSkip}>
        Пропустить
      </button>
    </div>
  );
}
