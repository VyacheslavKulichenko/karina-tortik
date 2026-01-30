"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { createPortal } from "react-dom";

// Custom fullscreen image component using React Portal
const ImageWithFullscreen = ({ src, alt }: { src: string; alt: string }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsFullscreen(!isFullscreen);
  };

  const imageElement = (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image
        alt={alt}
        src={src}
        width={800}
        height={600}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      {/* Custom fullscreen button - only show in normal mode */}
      {!isFullscreen && (
        <button
          onClick={handleFullscreenClick}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '44px',
            height: '44px',
            background: 'rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            zIndex: 10,
            backdropFilter: 'blur(4px)',
          }}
          aria-label="Toggle fullscreen"
        >
          ⛶
        </button>
      )}
    </div>
  );

  // Render in portal when fullscreen
  if (isFullscreen && typeof window !== 'undefined') {
    return (
      <>
        {/* Placeholder in original position */}
        <div style={{ width: '100%', aspectRatio: '4/3', background: '#000' }} />
        {/* Image in portal at body level */}
        {createPortal(
          <div
            data-video-fullscreen-portal="true"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: '#000',
              zIndex: 999999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
            }}
          >
            <Image
              alt={alt}
              src={src}
              width={1920}
              height={1440}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '100vh',
                objectFit: 'contain',
              }}
            />
            {/* Close button for fullscreen mode */}
            <button
              onClick={handleFullscreenClick}
              style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                width: '44px',
                height: '44px',
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                zIndex: 1000000,
                backdropFilter: 'blur(4px)',
              }}
              aria-label="Close fullscreen"
            >
              ✕
            </button>
          </div>,
          document.body
        )}
      </>
    );
  }

  return imageElement;
};

// Custom fullscreen video component using React Portal
const VideoWithFullscreen = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPortalFullscreen, setIsPortalFullscreen] = useState(false);
  const savedTimeRef = useRef(0);
  const savedPlayingRef = useRef(false);

  const handleFullscreenClick = (e: React.MouseEvent) => {
    // Stop event propagation to prevent closing modal
    e.stopPropagation();
    e.preventDefault();

    const video = videoRef.current;
    if (!video) return;

    // Save current state
    savedTimeRef.current = video.currentTime;
    savedPlayingRef.current = !video.paused;

    // Toggle fullscreen
    setIsPortalFullscreen(!isPortalFullscreen);
  };

  // Sync video state when switching to/from portal
  useEffect(() => {
    if (!isPortalFullscreen) return;

    const video = videoRef.current;
    if (!video) return;

    // Restore saved state
    video.currentTime = savedTimeRef.current;
    if (savedPlayingRef.current) {
      video.play().catch(() => {});
    }
  }, [isPortalFullscreen]);

  const videoElement = (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}
    >
      <video
        ref={videoRef}
        controls
        preload="metadata"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        playsInline
        webkit-playsinline="true"
        x-webkit-airplay="allow"
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Custom fullscreen button - only show in normal mode */}
      {!isPortalFullscreen && (
        <button
          onClick={handleFullscreenClick}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '44px',
            height: '44px',
            background: 'rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            zIndex: 10,
            backdropFilter: 'blur(4px)',
          }}
          aria-label="Toggle fullscreen"
        >
          ⛶
        </button>
      )}
    </div>
  );

  // Render in portal when fullscreen
  if (isPortalFullscreen && typeof window !== 'undefined') {
    return (
      <>
        {/* Placeholder in original position */}
        <div style={{ width: '100%', aspectRatio: '16/9', background: '#000' }} />
        {/* Video in portal at body level */}
        {createPortal(
          <div
            data-video-fullscreen-portal="true"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: '#000',
              zIndex: 999999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={(e) => {
              // Stop propagation to prevent modal close
              e.stopPropagation();
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
            }}
          >
            {videoElement}
            {/* Close button for fullscreen mode */}
            <button
              onClick={handleFullscreenClick}
              style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                width: '44px',
                height: '44px',
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                zIndex: 1000000,
                backdropFilter: 'blur(4px)',
              }}
              aria-label="Close fullscreen"
            >
              ✕
            </button>
          </div>,
          document.body
        )}
      </>
    );
  }

  return videoElement;
};

export default function PortfolioPopup() {
  const { selectedPortfolio, setSelectedPortfolio } = usePortfolio();

  const contentRef = useRef<HTMLDivElement | null>(null); // .mfp-content
  const popupRef = useRef<HTMLDivElement | null>(null); // .popup

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node | null;
      const content = contentRef.current;
      const popup = popupRef.current;

      if (!target || !popup) return;

      // ✅ ignore clicks inside fullscreen portal
      const targetElement = target as HTMLElement;
      if (targetElement.closest && targetElement.closest('[data-video-fullscreen-portal]')) {
        return;
      }

      // ✅ ignore clicks inside the popup itself
      if (popup.contains(target)) return;

      // ✅ close if click is inside .mfp-content but outside .popup
      if (content?.contains(target)) {
        setSelectedPortfolio(null);
      }

      // ✅ OR close for any other clicks outside .popup
      if (!content?.contains(target)) {
        setSelectedPortfolio(null);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className={`mfp-bg mfp-fade mfp-ready portfolio-popup-bg ${
          selectedPortfolio ? "active" : ""
        }`}
        onClick={() => setSelectedPortfolio(null)}
      />
      <div
        className={`mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready portfolio-popup-wrap ${
          selectedPortfolio ? "active" : ""
        }`}
        tabIndex={-1}
      >
        {/* Popup Close Button Start - Fixed outside scrollable container */}
        <button
          className="mfp-close permanent-light"
          onClick={() => setSelectedPortfolio(null)}
          style={{
            position: 'fixed',
            right: '3rem',
            top: '3rem',
            zIndex: 1047,
          }}
        />
        {/* Popup Close Button End */}
        <div className="mfp-container mfp-inline-holder">
          <div className="mfp-content" ref={contentRef}>
            <div className="popup" ref={popupRef} data-lenis-prevent>
              {/* Popup Content Start */}
              <div className="popup__container">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12">
                      <div className="project">
                        {/* Project Block - Title with Image Start */}
                        <div className="project__block no-padding no-margin project-image-bg">
                          {selectedPortfolio && (
                            <>
                              <Image
                                className="project-image-bg__portrait"
                                alt="Project Illustration"
                                src={selectedPortfolio?.portrait || ""}
                                width={600}
                                height={800}
                              />
                              <Image
                                className="project-image-bg__landscape"
                                alt="Project Illustration"
                                src={selectedPortfolio?.landscape || ""}
                                width={1920}
                                height={800}
                              />{" "}
                            </>
                          )}
                          {/* Text on image removed */}
                        </div>
                        {/* Project Block - Title with Image End */}
                        {/* Project Block - Description Start */}
                        <div className="project__block grid-block grid-items">
                          <div className="project__data">
                            <div className="container-fluid p-0">
                              <div className="row g-0">
                                <div className="col-12 col-xl-4">
                                  <div className="container-fluid p-0">
                                    <div className="row g-0">
                                      {/* project data single item */}
                                      <div className="col-12 col-md-6 grid-item pdata__item">
                                        <p className="data__title tagline-chapter small type-basic-160lh">
                                          Date
                                        </p>
                                        <p className="data__descr small type-basic-160lh">
                                          {selectedPortfolio?.date || ""}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Project Block - Description End */}
                        {/* Project Block - Media Grid (Photos & Videos Alternating) Start */}
                        {selectedPortfolio?.videoFolder && (
                          <div className="project__block grid-block no-margin">
                            <div className="project__illustrations">
                              <div className="container-fluid p-0">
                                <div className="row g-0">
                                  {[1, 2, 3, 4].map((num) => (
                                    <React.Fragment key={num}>
                                      {/* Photo */}
                                      <div className="col-12 col-md-6 col-xl-3 grid-item">
                                        <div className="project__illustration">
                                          <ImageWithFullscreen
                                            src={`/video/${selectedPortfolio.videoFolder}/${num}.jpg`}
                                            alt={`Work Illustration ${num}`}
                                          />
                                        </div>
                                      </div>
                                      {/* Video */}
                                      <div className="col-12 col-md-6 col-xl-3 grid-item">
                                        <div className="project__illustration">
                                          <VideoWithFullscreen
                                            src={`/video/${selectedPortfolio.videoFolder}/${num}.mp4`}
                                          />
                                        </div>
                                      </div>
                                    </React.Fragment>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* Project Block - Media Grid End */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Popup Content End */}
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
