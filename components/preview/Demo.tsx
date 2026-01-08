import Image from "next/image";
import Link from "next/link";
import RevealText from "../animation/RevealText";

export default function Demo() {
  return (
    <section id="demo" className="demo__inner inner-type-bottom">
      <div className="inner__wrapper">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Preview Section Name Start */}
            <div className="col-12 col-xl-2">
              <div className="inner__name">
                {/* Content Block - Section Name Start */}
                <div className="content__block name-block">
                  <span className="section-name icon-right animate-in-up">
                    <span className="section-name-caption">Demo</span>
                    <i className="ph ph-arrow-down-right" />
                  </span>
                </div>
                {/* Content Block - Section Name Start */}
              </div>
            </div>
            {/* Preview Section Name End */}
            {/* Preview Section Content Start */}
            <div className="col-12 col-xl-8">
              <div className="inner__content">
                {/* Content Block - H2 Section Title Start */}
                <div className="content__block section-grid-title">
                  <div className="block__descr">
                    <RevealText as="h2" className=" animate-in-up">
                      Clean &amp; functional
                      <br />
                      demo pages
                    </RevealText>
                  </div>
                </div>
                {/* Content Block - H2 Section Title End */}
                {/* Content Block - Card Start */}
                <div className="content__block grid-block">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      {/* card single item */}
                      <div className="col-12 card grid-item animate-in-up">
                        <div className="card__item">
                          <Link
                            href={`/home-1`}
                            className="card__link"
                            target="_blank"
                          >
                            <div className="card__image">
                              <Image
                                alt="Preview"
                                src="/img/demo/screens/1.webp"
                                width={1920}
                                height={1200}
                              />
                            </div>
                            <div className="card__caption d-flex justify-content-between align-items-center animate-in-up">
                              <h5 className="card__text">Demo page #1</h5>
                              <span className="card__icon" />
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* card single item */}
                      <div className="col-12 card grid-item animate-in-up">
                        <div className="card__item">
                          <Link
                            href={`/home-2`}
                            className="card__link"
                            target="_blank"
                          >
                            <div className="card__image">
                              <Image
                                alt="Preview"
                                src="/img/demo/screens/2.webp"
                                width={1920}
                                height={1200}
                              />
                            </div>
                            <div className="card__caption d-flex justify-content-between align-items-center animate-in-up">
                              <h5 className="card__text">Demo page #2</h5>
                              <span className="card__icon" />
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* card single item */}
                      <div className="col-12 card grid-item animate-in-up">
                        <div className="card__item">
                          <Link
                            href={`/home-3`}
                            className="card__link"
                            target="_blank"
                          >
                            <div className="card__image">
                              <Image
                                alt="Preview"
                                src="/img/demo/screens/3.webp"
                                width={1920}
                                height={1200}
                              />
                            </div>
                            <div className="card__caption d-flex justify-content-between align-items-center animate-in-up">
                              <h5 className="card__text text-link">
                                Demo page #3
                              </h5>
                              <span className="card__icon" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Block - Card End */}
              </div>
            </div>
            {/* Preview Section Content End */}
            {/* Preview Section Aside Start */}
            <div className="col-12 col-xl-2" />
            {/* Preview Section Aside End */}
          </div>
        </div>
      </div>
    </section>
  );
}
