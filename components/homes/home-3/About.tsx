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
                    <span className="section-name-caption">О моей выпечке</span>
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
                      Продукты и
                      <br />
                      ингридиенты
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
                            Большое значение имеет не только внешний вид торта и его вкус, но и в первую очередь продукты из которых его готовят. В своём производстве я использую только качественные натуральные продукты и ингридиенты, в которых отсутствуют транс жиры и пальмовое масло.

                        </p>
                        <div className="btn-group about-descr__btnholder animate-in-up">
                          <HoverCursorEffect
                            as="a"
                            className="btn btn-default hover-default"
                            href="/cake-price.pdf"
                            target="_blank"
                            download
                          >
                            <span className="btn-caption"> Скачать прайс </span>
                          </HoverCursorEffect>
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
                          100+
                        </p>
                        <p className="achievements__descr animate-in-up">
                          Счастливых клиентов
                        </p>
                      </div>
                    </div>
                    <div className="achievements__item d-flex flex-column grid-item animate-in-up">
                      <div className="achievements__card">
                        <p className="achievements__number animate-in-up">7+</p>
                        <p className="achievements__descr animate-in-up">
                          Лет опыта
                        </p>
                      </div>
                    </div>
                    <div className="achievements__item d-flex flex-column grid-item animate-in-up">
                      <div className="achievements__card">
                        <p className="achievements__number animate-in-up">
                          500+
                        </p>
                        <p className="achievements__descr animate-in-up">
                          Приготовленных тортов
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
