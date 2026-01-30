import HoverCursorEffect from "@/components/animation/HoverCursorEffect";
import RevealText from "@/components/animation/RevealText";

export default function About() {
  return (
    <section id="about" className="inner inner-grid-bottom about">
      <div className="inner__wrapper">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Inner Section Name Start */}
            <div className="col-12 col-xl-2">
              <div className="inner__name">
                {/* Content Block - Section Name Start */}
                <div className="content__block name-block">
                  <span className="section-name icon-right animate-in-up">
                    <span className="section-name-caption">About me</span>
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
                <div className="content__block section-text-title">
                  <div className="block__descr">
                    <RevealText as="h2" className=" animate-in-up">
                      Approach and
                      <br />
                      philosophy
                    </RevealText>
                  </div>
                </div>
                {/* Content Block - H2 Section Title End */}
                {/* Content Block - About Me Data Start */}
                <div className="content__block grid-block pre-grid-items">
                  <div className="container-fluid p-0">
                    <div className="row g-0 justify-content-between">
                      <div className="col-12 col-md-8 col-lg-7 col-xxl-8 grid-item about-descr pre-title">
                        <p className="about-descr__text type-basic-160lh animate-in-up">
                            My job isn&apos;t just to design, but to understand what the client really wants, because sometimes it&apos;s hard to convey everything in words, and that&apos;s where my ability to sense the client&apos;s mood and wishes comes in handy, and I then translate them into stunning designs!
                        </p>
                        <div className="btn-group about-descr__btnholder animate-in-up">
                          <HoverCursorEffect
                            as="a"
                            className="btn btn-default hover-default"
                            href="/resume-sample.pdf"
                            target="_blank"
                            download
                          >
                            <span className="btn-caption"> Download CV </span>
                          </HoverCursorEffect>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 col-xxl-3 grid-item about-info pre-title">
                        <div className="about-info__item animate-in-up">
                          <h6>Darina</h6>
                        </div>
                        <div className="about-info__item animate-in-up">
                          <h6>
                            <a
                              className="link-inline text-link"
                              href="tel:+380952083069"
                            >

                            </a>
                          </h6>
                        </div>
                        <div className="about-info__item animate-in-up">
                          <h6>
                            <a
                              className="link-inline text-link"
                              href="mailto:darina@example.com?subject=Message%20from%20your%20site"
                            >
                              hello@yourdomain.com
                            </a>
                          </h6>
                        </div>
                        <div className="about-info__item animate-in-up">
                          <h6>
                            <a
                              className="link-inline text-link"
                              href="https://maps.app.goo.gl/xMJXTEUeHkv6kYRQ6"
                              target="_blank"
                            >
                              Kharkov, Ukraine
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Block - About Me Data End */}
                {/* Content Block - Image Divider Start */}
                <div className="content__block grid-block pre-grid-items">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 grid-item">
                        {/* change the background image in the main.css file - .about-image-1 */}
                        <div className="divider divider-image about-image-1 animate-in-up" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Block - Image Divider End */}
                {/* Content Block - Achievements Start */}
                <div className="content__block grid-block">
                  <div className="achievements d-flex flex-column flex-md-row align-items-md-stretch">
                    <div className="achievements__item d-flex flex-column grid-item animate-in-up">
                      <div className="achievements__card">
                        <p className="achievements__number animate-in-up">
                          40+
                        </p>
                        <p className="achievements__descr animate-in-up">
                          Happy clients
                        </p>
                      </div>
                    </div>
                    <div className="achievements__item d-flex flex-column grid-item animate-in-up">
                      <div className="achievements__card">
                        <p className="achievements__number animate-in-up">2+</p>
                        <p className="achievements__descr animate-in-up">
                          Years of experience
                        </p>
                      </div>
                    </div>
                    <div className="achievements__item d-flex flex-column grid-item animate-in-up">
                      <div className="achievements__card">
                        <p className="achievements__number animate-in-up">
                          50+
                        </p>
                        <p className="achievements__descr animate-in-up">
                          Projects done
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Block - Achievements End */}
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
