import RevealText from "@/components/animation/RevealText";
import Image from "next/image";
import { home2 } from "@/data/services.json";

export default function Services() {
  return (
    <section id="services" className="inner inner-grid-bottom services">
      <div className="inner__wrapper">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Inner Section Name Start */}
            <div className="col-12 col-xl-2">
              <div className="inner__name">
                {/* Content Block - Section Name Start */}
                <div className="content__block name-block">
                  <span className="section-name icon-right animate-in-up">
                    <span className="section-name-caption">Services</span>
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
                <div className="content__block section-grid-title">
                  <div className="block__descr">
                    <RevealText as="h2" className=" animate-in-up">
                      Creating
                      <br />
                      impactful projects
                    </RevealText>
                  </div>
                </div>
                {/* Content Block - H2 Section Title End */}
                {/* Content Block - Services/Features Cards V2 Block Start */}
                <div className="content__block grid-block">
                  <div className="container-fluid p-0">
                    <div className="row g-0 align-items-stretch cards">
                      {home2.map((it, idx) => (
                        <div
                          key={it.id}
                          className="col-12 col-md-6 cards__item grid-item animate-in-up"
                          data-delay={idx % 2 === 0 ? "0" : "600"}
                        >
                          <div className="cards__card d-flex flex-column">
                            <div className="cards__descr">
                              <h3
                                className="cards__title animate-in-up"
                                dangerouslySetInnerHTML={{
                                  __html: it.title.replace(/\n/g, "<br />"),
                                }}
                              />
                              <p className="cards__text type-basic-160lh animate-in-up">
                                {it.text}
                              </p>
                            </div>
                            <div className="cards__image cards__image-v2 d-flex animate-in-up">
                              <Image
                                alt="Service/Feature Image"
                                src={it.src}
                                width={1200}
                                height={1200}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Content Block - Services/Features Cards V2 Block End */}
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
