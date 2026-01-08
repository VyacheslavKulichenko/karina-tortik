import HoverCursorEffect from "@/components/animation/HoverCursorEffect";
import ParallaxItem from "@/components/animation/Parallax";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="main home">
      {/* Main Section Intro Start */}
      <div className="main__intro intro-fullheight-centered">
        {/* Intro Background Start */}
        <div
          className="intro__background intro-bg-03 hero-animate-in-up"
          data-duration="0.9"
          data-delay="100"
        >
          <ParallaxItem speed={0.6} className="intro-bg-03__01">
            <Image
              alt="Blayden Decorative Image"
              src="/img/backgrounds/713x1400_bg05.webp"
              width={713}
              height={1400}
            />
          </ParallaxItem>
          <ParallaxItem speed={0.8} className="intro-bg-03__02">
            <Image
              alt="Blayden Decorative Image"
              src="/img/backgrounds/265x600_bg06.webp"
              width={265}
              height={600}
            />
            <div className="intro-bg__shadow" />
          </ParallaxItem>
        </div>
        {/* Intro Background End */}
        <div className="container-fluid p-0 fullheight-desktop">
          <div className="row g-0 fullheight-desktop align-items-xl-stretch">
            {/* Intro Content Start */}
            <div className="col-12 fullheight-desktop">
              {/* Headline Start */}
              <div
                id="headline"
                className="headline headline-centered d-flex align-items-start flex-column loading-wrap hero-animate-in-up"
                data-duration="0.7"
                data-delay="100"
              >
                <h1 className="headline__title fullwidth d-md-flex flex-md-column">
                  <span className="title__line d-md-flex align-items-md-center justify-content-md-start loading__item">
                    I am Alex Walker
                  </span>
                  <span className="title__line d-md-flex justify-content-md-end loading__item">
                    <em className="text-end">
                      Hello! I&apos;m Alex Walker, digital designer and
                      illustrator based in Odesa, Ukraine
                    </em>
                    <span>digital designer</span>
                  </span>
                  <span className="title__line d-md-flex align-items-center justify-content-xl-start loading__item">
                    <span>&amp; illustrator</span>
                    <HoverCursorEffect
                      as="a"
                      className="btn btn-circle-text hover-circle"
                      href="/resume-sample.pdf"
                      target="_blank"
                      download
                    >
                      <span className="btn-caption">Download CV</span>
                    </HoverCursorEffect>
                  </span>
                </h1>
                <div className="headline__datamobile loading__fade">
                  <p>
                    Hello! I&apos;m Alex Walker, digital designer and
                    illustrator based in Odesa, Ukraine
                  </p>
                  <HoverCursorEffect
                    as="a"
                    className="btn btn-circle-text hover-circle"
                    href="/resume-sample.pdf"
                    target="_blank"
                    download
                  >
                    <span className="btn-caption">Download CV</span>
                  </HoverCursorEffect>
                </div>
              </div>
              {/* Headline End */}
            </div>
            {/* Intro Content End */}
          </div>
        </div>
        {/* Intro Absolute Button Start */}
        <div className="intro__btn-absolute loading__fade">
          <a
            className="btn btn-line-small icon-right slide-right-down"
            href="#portfolio"
          >
            <span className="btn-caption">Scroll for more</span>
            <i className="ph ph-arrow-down-right" />
          </a>
        </div>
        {/* Intro Absolute Button End */}
      </div>
      {/* Main Section Intro End */}
      {/* Main Section Media Start */}
      <div className="main__media media-grid-bottom">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Media Content Start */}
            <div className="col-12">
              {/* Content Block - Image Divider Start */}
              <div className="content__block">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12">
                      {/* change the background image in the main.css file - .main-image-2 */}
                      <div className="divider divider-image-xl main-image-2" />
                      {/* background video */}
                      {/* <div class="divider divider-video-xl">
                    <div class="video-background">
                      <video class="video" id="inner-video" preload="auto" autoplay="autoplay" loop="loop" muted="muted" poster="/img/backgrounds/1920x1080-inner-video-poster.webp">
                        <source type="video/mp4" src="video/video-1.mp4">
                        <source type="video/webm" src="video/video-1.webm">
                        <source type="video/ogv" src="video/video-1.ogv">
                      </video>
                    </div>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Content Block - Image Divider End */}
            </div>
            {/* Media Content End */}
          </div>
        </div>
      </div>
      {/* Main Section Media End */}
    </section>
  );
}
