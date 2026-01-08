import HoverCursorEffect from "@/components/animation/HoverCursorEffect";
import RevealText from "@/components/animation/RevealText";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import Image from "next/image";

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
                <div className="content__block grid-block pre-offcanvas-grid-block">
                  <div className="container-fluid p-0">
                    <div className="row g-0 justify-content-between">
                      <div className="col-12 col-md-4 grid-item about-info pre-title">
                        <div className="about-info__item animate-in-up">
                          <h6>Alex Walker</h6>
                        </div>
                        <div className="about-info__item animate-in-up">
                          <h6>
                            <a
                              className="link-inline text-link"
                              href="tel:+12127089400"
                            >
                              +1 212-708-9400
                            </a>
                          </h6>
                        </div>
                        <div className="about-info__item animate-in-up">
                          <h6>
                            <a
                              className="link-inline text-link"
                              href="mailto:example@example.com?subject=Message%20from%20your%20site"
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
                              Odesa, Ukraine
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="col-12 col-md-8 grid-item about-descr pre-title">
                        <p className="about-descr__text type-basic-160lh animate-in-up">
                          I wonder if I&apos;ve been changed in the night? Let
                          me think. Was I the same when I got up this morning? I
                          almost think I can remember feeling a little
                          different. But if I&apos;m not the same, the next
                          question is &apos;Who in the world am I?&apos; Ah,
                          that&apos;s the great puzzle!
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
                    </div>
                  </div>
                </div>
                {/* Content Block - About Me Data End */}
              </div>
            </div>
            {/* Inner Section Content End */}
            {/* Inner Section Aside Start */}
            <div className="col-12 col-xl-2" />
            {/* Inner Section Aside End */}
          </div>
        </div>
        {/* Inner Section Off-canvas Content (Fullwidth Social Media Marquee & Lines) Start */}
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              {/* Content Block - Follow Me Marquee with SVG Objects Start */}
              <div className="content__block no-padding">
                {/* Marquee V1 Divider Start */}
                <VelocityMarquee className="items items--gsap">
                  {/* single item */}
                  <div className="item icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 92.3 93.1"
                      fill="currentColor"
                    >
                      <g>
                        <rect
                          x="45.7"
                          className="st0"
                          width={1}
                          height="93.1"
                        />
                        <rect
                          x="45.7"
                          y={0}
                          transform="matrix(0.8412 -0.5407 0.5407 0.8412 -17.8476 32.3497)"
                          className="st0"
                          width={1}
                          height="93.1"
                        />
                        <rect
                          x="45.7"
                          y={0}
                          transform="matrix(0.4155 -0.9096 0.9096 0.4155 -15.3764 69.2119)"
                          className="st0"
                          width={1}
                          height="93.1"
                        />
                        <rect
                          x="-0.4"
                          y="46.1"
                          transform="matrix(0.9898 -0.1425 0.1425 0.9898 -6.1646 7.0506)"
                          className="st0"
                          width="93.1"
                          height={1}
                        />
                        <rect
                          x="-0.4"
                          y="46.1"
                          transform="matrix(0.7556 -0.655 0.655 0.7556 -19.2157 41.618)"
                          className="st0"
                          width="93.1"
                          height={1}
                        />
                        <rect
                          x="-0.4"
                          y="46.1"
                          transform="matrix(0.2812 -0.9597 0.9597 0.2812 -11.5032 77.7858)"
                          className="st0"
                          width="93.1"
                          height={1}
                        />
                        <rect
                          x="45.7"
                          y={0}
                          transform="matrix(0.9595 -0.2817 0.2817 0.9595 -11.2479 14.8866)"
                          className="st0"
                          width={1}
                          height="93.1"
                        />
                        <rect
                          x="45.7"
                          y={0}
                          transform="matrix(0.6549 -0.7557 0.7557 0.6549 -19.2631 50.9572)"
                          className="st0"
                          width={1}
                          height="93.1"
                        />
                        <rect
                          x="45.7"
                          y={0}
                          transform="matrix(0.1423 -0.9898 0.9898 0.1423 -6.4999 85.629)"
                          className="st0"
                          width={1}
                          height="93.1"
                        />
                        <rect
                          x="-0.4"
                          y="46.1"
                          transform="matrix(0.9097 -0.4153 0.4153 0.9097 -15.1716 23.381)"
                          className="st0"
                          width="93.1"
                          height={1}
                        />
                        <rect
                          x="-0.4"
                          y="46.1"
                          transform="matrix(0.5411 -0.8409 0.8409 0.5411 -17.9774 60.1901)"
                          className="st0"
                          width="93.1"
                          height={1}
                        />
                      </g>
                    </svg>
                  </div>
                  {/* single item */}
                  <div className="item image image-1">
                    <Image
                      alt="Image"
                      src="/img/marquee/01.webp"
                      width={1000}
                      height={1300}
                    />
                  </div>
                  {/* single item */}
                  <div className="item icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 89.2 82.8"
                      fill="currentColor"
                    >
                      <g>
                        <g>
                          <rect className="st0" width="89.2" height={1} />
                          <rect
                            y="20.5"
                            className="st0"
                            width="89.2"
                            height={1}
                          />
                          <rect
                            y="40.9"
                            className="st0"
                            width="89.2"
                            height={1}
                          />
                          <rect
                            y="61.4"
                            className="st0"
                            width="89.2"
                            height={1}
                          />
                          <rect
                            y="81.8"
                            className="st0"
                            width="89.2"
                            height={1}
                          />
                        </g>
                        <rect
                          x="2.5"
                          y="10.2"
                          transform="matrix(0.9712 -0.2384 0.2384 0.9712 -1.2518 11.1229)"
                          className="st0"
                          width="85.7"
                          height={1}
                        />
                        <rect
                          x="2.5"
                          y="30.7"
                          transform="matrix(0.9712 -0.2384 0.2384 0.9712 -6.1265 11.7116)"
                          className="st0"
                          width="85.7"
                          height={1}
                        />
                        <rect
                          x="2.5"
                          y="51.2"
                          transform="matrix(0.9712 -0.2384 0.2384 0.9712 -11.0059 12.3009)"
                          className="st0"
                          width="85.7"
                          height={1}
                        />
                        <rect
                          x="2.5"
                          y="71.6"
                          transform="matrix(0.9712 -0.2384 0.2384 0.9712 -15.8827 12.8923)"
                          className="st0"
                          width="85.7"
                          height={1}
                        />
                      </g>
                    </svg>
                  </div>
                  {/* single item */}
                  <div className="item image image-2">
                    <Image
                      alt="Image"
                      src="/img/marquee/02.webp"
                      width={1000}
                      height={1300}
                    />
                  </div>
                  {/* single item */}
                  <div className="item icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 84 84"
                      fill="currentColor"
                    >
                      <g>
                        <path
                          d="M42,84C18.8,84,0,65.1,0,42S18.8,0,42,0s42,18.8,42,42S65.1,84,42,84z M42,1C19.4,1,1,19.4,1,42
                        s18.4,41,41,41s41-18.4,41-41S64.6,1,42,1z"
                        />
                        <path
                          d="M42,69.8c-15.8,0-28.6-12.8-28.6-28.6h1c0,15.2,12.4,27.6,27.6,27.6s27.6-12.4,27.6-27.6h1
                        C70.6,57,57.7,69.8,42,69.8z"
                        />
                        <g>
                          <path
                            d="M31.7,31.1H17.8v-0.5c0-3.8,3.1-7,7-7s7,3.1,7,7L31.7,31.1L31.7,31.1z M18.8,30.1h11.9
                          c-0.2-3-2.8-5.5-5.9-5.5S19.1,27.1,18.8,30.1L18.8,30.1z"
                          />
                          <path
                            d="M66.2,31.1H52.2v-0.5c0-3.8,3.1-7,7-7s7,3.1,7,7L66.2,31.1L66.2,31.1z M53.3,30.1h11.9
                          c-0.2-3-2.8-5.5-5.9-5.5S53.5,27.1,53.3,30.1L53.3,30.1z"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  {/* single item */}
                  <div className="item image image-3">
                    <Image
                      alt="Image"
                      src="/img/marquee/03.webp"
                      width={1000}
                      height={1300}
                    />
                  </div>
                </VelocityMarquee>
                {/* Marquee V1 Divider End */}
              </div>
              {/* Content Block - Follow Me Marquee with SVG Objects End */}
            </div>
          </div>
        </div>
        {/* Inner Section Off-canvas Content (Fullwidth Social Media Marquee & Lines) Start */}
      </div>
    </section>
  );
}
