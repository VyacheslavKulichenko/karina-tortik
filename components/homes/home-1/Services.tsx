import RevealText from "@/components/animation/RevealText";
import StackCards from "@/components/animation/StackCards";
import Image from "next/image";
import { home1 } from "@/data/services.json";

export default function Services() {
  return (
    <section id="services" className="inner inner-stack-bottom services">
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
                <div className="content__block pre-stack-text-block">
                  <div className="block__descr">
                    <RevealText as="h2" className=" animate-in-up">
                      Creating
                      <br />
                      impactful projects
                    </RevealText>
                    <p className="h2__text type-basic-160lh animate-in-up">
                      I wonder if I&apos;ve been changed in the night? Let me
                      think. Was I the same when I got up this morning? I almost
                      think I can remember feeling a little different.
                    </p>
                  </div>
                </div>
                {/* Content Block - H2 Section Title End */}
                {/* Content Block - Services/Features Stacking Cards Block Start */}
                <div className="content__block">
                  <StackCards className="stack-wrapper">
                    {home1.map((it) => (
                      <div key={it.id} className="services-stack__inner">
                        <div className="services-stack__title">
                          <h3
                            dangerouslySetInnerHTML={{
                              __html: it.title.replace(/\n/g, "<br />"),
                            }}
                          />
                        </div>
                        <div className="services-stack__descr">
                          <i className={it.icon} />
                          <p className="services-stack__text type-basic-160lh">
                            {it.text}
                          </p>
                        </div>
                        <div className="services-stack__image">
                          <Image
                            className="service-img service-img-s"
                            alt={it.title}
                            src={it.imgS}
                            width={1200}
                            height={1000}
                          />
                          <Image
                            className="service-img service-img-m"
                            alt={it.title}
                            src={it.imgM}
                            width={800}
                            height={1000}
                          />
                        </div>
                      </div>
                    ))}
                  </StackCards>
                </div>
                {/* Content Block - Services/Features Stacking Cards Block End */}
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
