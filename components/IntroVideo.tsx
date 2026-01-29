"use client";
import { useState, useRef, useEffect } from "react";
import { FEATURES } from "@/config/features";

export default function IntroVideo() {
  const [isVisible, setIsVisible] = useState(FEATURES.SHOW_INTRO_VIDEO);
  const [isClosing, setIsClosing] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoKey = useRef(Date.now());

  useEffect(() => {
    // Проверяем через 1.5 секунды - если видео зависло, показываем кнопку Play
    const checkTimer = setTimeout(() => {
      if (videoRef.current && FEATURES.SHOW_INTRO_VIDEO) {
        const video = videoRef.current;

        // Если видео на паузе ИЛИ застряло в начале (< 0.5 сек)
        if (video.paused || video.currentTime < 0.5) {
          setShowPlayButton(true);
        }
      }
    }, 1500);

    return () => clearTimeout(checkTimer);
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

    // Если видео запустилось, скрываем кнопку Play
    setShowPlayButton(false);
  };

  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      // Сбрасываем видео и запускаем с начала
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false; // Включаем звук сразу
      setIsMuted(false);

      videoRef.current.play().then(() => {
        // Успешно запустилось
        setShowPlayButton(false);
      }).catch((error) => {
        console.log("Manual play failed:", error);
        // Если не получилось со звуком, пробуем без звука
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        }
      });
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

      {/* Кнопка Play - показывается если видео зависло */}
      {showPlayButton ? (
        <button className="intro-video-sound" onClick={handlePlayButtonClick}>
          ▶️
        </button>
      ) : (
        /* Кнопка звука - показывается только когда звук выключен */
        isMuted && (
          <button className="intro-video-sound" onClick={toggleMute}>
            🔇
          </button>
        )
      )}

      {/* Кнопка пропуска */}
      <button className="intro-video-skip" onClick={handleSkip}>
        Пропустить
      </button>
    </div>
  );
}
