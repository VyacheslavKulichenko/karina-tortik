import Image from "next/image";
import ParallaxItem from "../animation/Parallax";

export default function Intro() {
  return (
    <section id="intro" className="demo__intro">
      {/* Intro Content Start */}
      <div className="intro__content">
        {/* Intro Background Start */}
        <div className="intro__background intro-bg-01 hero-animate-in-up">
          <ParallaxItem speed={0.6} className="intro-bg-01__01">
            <Image
              alt="Background Objects"
              src="/img/demo/1200x1200_bg01.webp"
              width={1200}
              height={1200}
            />
            <div className="intro-bg__shadow" />
          </ParallaxItem>
          <ParallaxItem speed={0.8} className="intro-bg-01__03">
            <Image
              alt="Background Objects"
              src="/img/demo/1200x1200_bg03.webp"
              width={1200}
              height={1200}
            />
          </ParallaxItem>
          <ParallaxItem speed={0.8} className="intro-bg-01__02">
            <Image
              alt="Background Objects"
              src="/img/demo/1200x1200_bg02.webp"
              width={1200}
              height={1200}
            />
            <div className="intro-bg__shadow" />
          </ParallaxItem>
          <ParallaxItem speed={0.6} className="intro-bg-01__04">
            <Image
              alt="Background Objects"
              src="/img/demo/1200x1200_bg04.webp"
              width={1200}
              height={1200}
            />
          </ParallaxItem>
        </div>
        {/* Intro Background End */}
        <div className="container-fluid p-0 fullheight-desktop">
          <div className="row g-0 fullheight-desktop align-items-xl-stretch">
            <div className="col-12 col-xl-2" />
            <div className="col-12 col-xl-8 fullheight-desktop">
              {/* Headline Start */}
              <div
                id="headline"
                className="headline d-flex align-items-start flex-column loading-wrap"
              >
                <p
                  data-duration="0.7"
                  data-delay="100"
                  className="headline__subtitle space-bottom loading__item hero-animate-in-up"
                >
                  Portfolio
                  <br />
                  &amp; resume Next.Js template
                </p>
                <h1
                  className="headline__title loading__item hero-animate-in-up"
                  data-duration="0.7"
                  data-delay="300"
                >
                  Make your work stand out
                </h1>
                <div
                  className="headline__btn loading__item hero-animate-in-up"
                  data-duration="0.7"
                  data-delay="500"
                >
                  <a
                    className="btn btn-line-small icon-right slide-right-down"
                    href="#demo"
                  >
                    <span className="btn-caption">View demos</span>
                    <i className="ph ph-arrow-down-right" />
                  </a>
                </div>
              </div>
              {/* Headline End */}
            </div>
            <div className="col-12 col-xl-2" />
          </div>
        </div>
      </div>
      {/* Intro Content End */}
      {/* Intro  Media Start */}
      <div className="intro__media media-grid-bottom">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12 col-xl-2" />
            <div className="col-12 col-xl-8">
              {/* Content Block - Image Divider Start */}
              <div className="content__block">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12">
                      <div className="divider divider-image intro-image-1 animate-in-up" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Content Block - Image Divider End */}
            </div>
            <div className="col-12 col-xl-2" />
          </div>
        </div>
      </div>
      {/* Intro Media End */}
    </section>
  );
}
