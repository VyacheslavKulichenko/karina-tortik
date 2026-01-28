"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";

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
        <div className="mfp-container mfp-inline-holder" data-lenis-prevent>
          <div className="mfp-content" ref={contentRef}>
            <div className="popup" ref={popupRef}>
              {/* Popup Close Button Start */}
              <button
                className="mfp-close permanent-light"
                onClick={() => setSelectedPortfolio(null)}
              />
              {/* Popup Close Button End */}
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
                          <div className="project__title">
                            <h3 className="light">
                              {selectedPortfolio?.title || ""}
                            </h3>
                          </div>
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
                                          27.05.2024
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
                                          <img
                                            alt={`Work Illustration ${num}`}
                                            src={`/video/${selectedPortfolio.videoFolder}/${num}.jpg`}
                                          />
                                        </div>
                                      </div>
                                      {/* Video */}
                                      <div className="col-12 col-md-6 col-xl-3 grid-item">
                                        <div className="project__illustration">
                                          <video
                                            controls
                                            preload="metadata"
                                            playsInline
                                          >
                                            <source
                                              src={`/video/${selectedPortfolio.videoFolder}/${num}.mp4`}
                                              type="video/mp4"
                                            />
                                            Your browser does not support the video tag.
                                          </video>
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
