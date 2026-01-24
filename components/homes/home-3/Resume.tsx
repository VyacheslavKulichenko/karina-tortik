import RevealText from "@/components/animation/RevealText";
import Image from "next/image";
import resume from "@/data/resume.json";
import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="inner inner-type-bottom resume">
      <div className="inner__wrapper">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Inner Section Name Start */}
            <div className="col-12 col-xl-2">
              <div className="inner__name">
                {/* Content Block - Section Name Start */}
                <div className="content__block name-block">
                  <span className="section-name icon-right animate-in-up">
                    <span className="section-name-caption">Resume</span>
                    <i className="ph ph-arrow-down-right" />
                  </span>
                </div>
                {/* Content Block - Section Name Start */}
              </div>
            </div>
            {/* Inner Section Name End */}
            {/* Inner Section Content Start */}
            <div className="col-12 col-xl-8">
              <div className="inner__content">
                {/* Content Block - H2 Section Title Start */}
                <div className="content__block section-tagline-title">
                  <div className="block__descr">
                    <RevealText as="h2" className=" animate-in-up">
                      The design
                      <br />
                      journey
                    </RevealText>
                  </div>
                </div>
                {/* Content Block - H2 Section Title End */}
                {/* Content Block - My Education Start */}
                <div className="content__block pre-text-items">
                  {/* Section Subtitle Start */}
                  <div className="block__subtitle">
                    <p className="tagline-chapter animate-in-up">
                      My education
                    </p>
                  </div>
                  {/* Section Subtitle End */}
                  {/* Resume Lines V1 Start */}
                  <div className="container-fluid p-0 resume-lines">
                    {(resume.home3?.education || []).map((e) => (
                      <React.Fragment key={e.id}>
                        <div className="resume-divider animate-in-up" />
                        <div className="row g-0 resume-lines__item">
                          <div className="col-12 col-md-4 col-lg-2">
                            <p className="resume-lines__date type-basic-160lh animate-in-up">
                              {e.date}
                            </p>
                          </div>
                          <div className="col-12 col-md-4 col-lg-5">
                            <h4 className="resume-lines__title animate-in-up">
                              {e.title}
                            </h4>
                            {e.source && (
                              <a
                                className="resume-lines__source link-small-underline animate-in-up"
                                href={e.sourceUrl || "#"}
                                target="_blank"
                              >
                                {e.source}
                              </a>
                            )}
                          </div>
                          <div className="col-12 col-md-4 col-lg-5">
                            <p className="resume-lines__descr type-basic-160lh animate-in-up">
                              {e.description}
                            </p>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                    <div className="resume-divider animate-in-up" />
                  </div>
                  {/* Resume Lines V1 End */}
                </div>
                {/* Content Block - My Education End */}
                {/* Content Block - Work Experience Start */}
                <div className="content__block pre-text-items">
                  {/* Section Subtitle Start */}
                  <div className="block__subtitle">
                    <p className="tagline-chapter animate-in-up">
                      Work experience
                    </p>
                  </div>
                  {/* Section Subtitle End */}
                  {/* Resume Lines V1 Start */}
                  <div className="container-fluid p-0 resume-lines">
                    {(resume.home3?.experience || []).map((e) => (
                      <React.Fragment key={e.id}>
                        <div className="resume-divider animate-in-up" />
                        <div className="row g-0 resume-lines__item">
                          <div className="col-12 col-md-4 col-lg-2">
                            <p className="resume-lines__date type-basic-160lh animate-in-up">
                              {e.date}
                            </p>
                          </div>
                          <div className="col-12 col-md-4 col-lg-5">
                            <h4 className="resume-lines__title animate-in-up">
                              {e.title}
                            </h4>
                            {e.source && (
                              <p className="resume-lines__source small animate-in-up">
                                in the{" "}
                                <a
                                  className="link-small-underline"
                                  href="#"
                                  target="_blank"
                                >
                                  {e.source}
                                </a>{" "}
                                agency
                              </p>
                            )}
                          </div>
                          <div className="col-12 col-md-4 col-lg-5">
                            <p className="resume-lines__descr type-basic-160lh animate-in-up">
                              {e.description}
                            </p>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                    <div className="resume-divider animate-in-up" />
                  </div>
                  {/* Resume Lines V1 End */}
                </div>
                {/* Content Block - Work Experience End */}
                {/* Content Block - Tools Cards Start */}
                <div className="content__block grid-block pre-text-items">
                  {/* Section Subtitle Start */}
                  <div className="block__subtitle grid-block-subtitle">
                    <p className="tagline-chapter animate-in-up">
                      My favourite tools
                    </p>
                  </div>
                  {/* Section Subtitle End */}
                  {/* Tools Cards Start */}
                  <div className="tools-cards d-flex justify-content-start flex-wrap">
                    {(resume.home3?.tools || []).map((tool) => (
                      <div
                        key={tool.id}
                        className="tools-cards__item d-flex grid-item animate-in-up"
                      >
                        <div className="tools-cards__card">
                          <Image
                            className="tools-cards__icon animate-in-up"
                            alt={tool.alt || "Tool"}
                            src={tool.src}
                            width={120}
                            height={90}
                          />
                          {tool.alt && (
                            <h6 className="tools-cards__caption tagline-tool animate-in-up">
                              {tool.alt}
                            </h6>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Tools Cards End */}
                </div>
                {/* Content Block - Tools Cards End */}
              </div>
            </div>
            {/* Inner Section Content End */}
            {/* Inner Section Aside Start */}
            <div className="col-12 col-xl-2" />
            {/* Inner Section Aside End */}
          </div>
        </div>
      </div>
    </section>
  );
}
