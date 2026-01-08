"use client";

import HoverCursorEffect from "@/components/animation/HoverCursorEffect";
import RevealText from "@/components/animation/RevealText";

import { useForm as useHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactForm } from "@/lib/schemas/contact";
import React from "react";
import { useForm } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useHookForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const [fsState, fsSubmit] = useForm<ContactForm>("meoljlry");

  type ErrorsMap = { [k: string]: { message?: string } | undefined };
  const errs = errors as unknown as ErrorsMap;

  const onSubmit = async (data: ContactForm) => {
    try {
      await fsSubmit(data);
      reset();
      toast.success("Message sent — thanks!");
    } catch {
      // ignore
      toast.error("Submission failed — please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="inner contact inner-grid-bottom no-padding-bottom"
    >
      <div className="inner__wrapper">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Inner Section Name Start */}
            <div className="col-12 col-xl-2">
              <div className="inner__name">
                {/* Content Block - Section Name Start */}
                <div className="content__block name-block">
                  <span className="section-name icon-right animate-in-up">
                    <span className="section-name-caption">Contact</span>
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
                <div className="content__block section-form-title">
                  <div className="block__descr">
                    <RevealText as="h2" className=" animate-in-up">
                      Just say hello!
                    </RevealText>
                    <p className="h2__text type-basic-160lh animate-in-up">
                      Want to know more about me, tell me about your project or
                      just to say hello? Drop me a line and I&apos;ll get back
                      as soon as possible.
                    </p>
                  </div>
                </div>
                {/* Content Block - H2 Section Title End */}
                {/* Content Block - Contact Form Start */}
                <div className="content__block grid-block pre-grid-items">
                  <div className="form-container">
                    {/* Reply Messages Start */}
                    <div className="form__reply centered text-center">
                      <i className="ph-thin ph-smiley reply__icon" />
                      <p className="reply__title">Done!</p>
                      <span className="reply__text">
                        Thanks for your message. I&apos;ll get back as soon as
                        possible.
                      </span>
                    </div>
                    {/* Reply Messages End */}
                    {/* Contact Form Start */}
                    <form
                      className="form contact-form"
                      id="contact-form"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      {/* Hidden Required Fields */}
                      <input
                        type="hidden"
                        name="project_name"
                        defaultValue="Blayden Template"
                      />
                      <input
                        type="hidden"
                        name="admin_email"
                        defaultValue="support@mixdesign.club"
                      />
                      <input
                        type="hidden"
                        name="form_subject"
                        defaultValue="Contact Form Message"
                      />
                      {/* END Hidden Required Fields*/}
                      <div className="container-fluid p-0">
                        <div className="row gx-0">
                          <div className="col-12 col-md-6 form__item animate-in-up">
                            <input
                              {...register("Name")}
                              type="text"
                              name="Name"
                              placeholder="Your name*"
                            />
                            {errors.Name && (
                              <p className="form-error">
                                {String(errors.Name.message)}
                              </p>
                            )}
                          </div>
                          <div className="col-12 col-md-6 form__item animate-in-up">
                            <input
                              {...register("Company")}
                              type="text"
                              name="Company"
                              placeholder="Company name"
                            />
                            {errors.Company && (
                              <p className="form-error">
                                {String(errors.Company.message)}
                              </p>
                            )}
                          </div>
                          <div className="col-12 col-md-6 form__item animate-in-up">
                            <input
                              {...register("E-mail")}
                              type="email"
                              name="E-mail"
                              placeholder="Email*"
                            />
                            {errs["E-mail"] && (
                              <p className="form-error">
                                {String(errs["E-mail"]?.message)}
                              </p>
                            )}
                          </div>
                          <div className="col-12 col-md-6 form__item animate-in-up">
                            <input
                              {...register("Phone")}
                              type="tel"
                              name="Phone"
                              placeholder="Phone"
                            />
                            {errors.Phone && (
                              <p className="form-error">
                                {String(errors.Phone.message)}
                              </p>
                            )}
                          </div>
                          <div className="col-12 form__item animate-in-up">
                            <textarea
                              {...register("Message")}
                              name="Message"
                              placeholder="A few words about your project*"
                              defaultValue={""}
                            />
                            {errors.Message && (
                              <p className="form-error">
                                {String(errors.Message.message)}
                              </p>
                            )}
                          </div>
                          <div className="col-12 form__item animate-in-up">
                            <HoverCursorEffect
                              as="button"
                              className="btn btn-default hover-default"
                              type="submit"
                              disabled={isSubmitting || fsState.submitting}
                            >
                              <span className="btn-caption">
                                Submit request
                              </span>
                            </HoverCursorEffect>
                          </div>
                        </div>
                      </div>
                    </form>
                    <ToastContainer position="bottom-right" />
                    {/* Contact Form End */}
                  </div>
                </div>
                {/* Content Block - Contact Form End */}
                {/* Content Block - Socials Cards Start */}
                <div className="content__block grid-block">
                  <ul className="socials-cards d-flex justify-content-start flex-wrap">
                    {/* socials cards single item */}
                    <li className="socials-cards__item grid-item d-flex animate-in-up">
                      <HoverCursorEffect
                        as="a"
                        className="socials-cards__link d-flex align-items-center justify-content-center"
                        href="https://dribbble.com/"
                        target="_blank"
                      >
                        <i className="ph ph-dribbble-logo" />
                      </HoverCursorEffect>
                    </li>
                    {/* socials cards single item */}
                    <li className="socials-cards__item grid-item d-flex animate-in-up">
                      <HoverCursorEffect
                        as="a"
                        className="socials-cards__link d-flex align-items-center justify-content-center"
                        href="https://www.behance.net/"
                        target="_blank"
                      >
                        <i className="ph ph-behance-logo" />
                      </HoverCursorEffect>
                    </li>
                    {/* socials cards single item */}
                    <li className="socials-cards__item grid-item d-flex animate-in-up">
                      <HoverCursorEffect
                        as="a"
                        className="socials-cards__link d-flex align-items-center justify-content-center"
                        href="https://www.instagram.com/"
                        target="_blank"
                      >
                        <i className="ph ph-instagram-logo" />
                      </HoverCursorEffect>
                    </li>
                    {/* socials cards single item */}
                    <li className="socials-cards__item grid-item d-flex animate-in-up">
                      <HoverCursorEffect
                        as="a"
                        className="socials-cards__link d-flex align-items-center justify-content-center"
                        href="https://www.twitch.tv/"
                        target="_blank"
                      >
                        <i className="ph ph-twitch-logo" />
                      </HoverCursorEffect>
                    </li>
                    {/* socials cards single item */}
                    <li className="socials-cards__item grid-item d-flex animate-in-up">
                      <HoverCursorEffect
                        as="a"
                        className="socials-cards__link d-flex align-items-center justify-content-center"
                        href="https://www.pinterest.com/"
                        target="_blank"
                      >
                        <i className="ph ph-pinterest-logo" />
                      </HoverCursorEffect>
                    </li>
                  </ul>
                </div>
                {/* Content Block - Socials Cards End */}
                {/* Footer Start */}
                <footer className="footer">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12">
                        {/* Content Block - Footer Email Link Start */}
                        <div className="content__block pre-grid-items">
                          {/* footer email link */}
                          <div className="footer__link d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
                            <RevealText
                              as="div"
                              className="footer__text animate-in-up"
                            >
                              Got an idea?
                              <br />
                              Tell me!
                            </RevealText>
                            <div className="footer__btn animate-in-up">
                              <HoverCursorEffect
                                as="a"
                                href="mailto:example@example.com?subject=Message%20from%20your%20site"
                                className="btn btn-circle-icon hover-circle"
                              >
                                <i className="ph-light ph-arrow-right" />
                              </HoverCursorEffect>
                            </div>
                          </div>
                          {/* footer divider line */}
                          <div className="footer__divider animate-in-up" />
                        </div>
                        {/* Content Block - Footer Email Link End */}
                        {/* Content Block - Contact Data Start */}
                        <div className="content__block grid-block">
                          <div className="container-fluid p-0 contact-data">
                            <div className="row g-0">
                              <div className="col-12 col-lg-3 contact-data__item grid-item">
                                <a
                                  href="#home"
                                  className="footer-logo logo-text animate-in-up"
                                >
                                  {/* logo icon */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 50 50"
                                    enableBackground={"new 0 0 50 50"}
                                    xmlSpace="preserve"
                                  >
                                    <style
                                      type="text/css"
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          "\n                                        .mxd-background {\n                                          fill: var(--neutral-bright);\n                                        }\n                                        .mxd-cat {\n                                          clip-path: url(#mxd-path-id-2);\n                                          fill: var(--t-opp-bright);\n                                        }\n                                      ",
                                      }}
                                    />
                                    <path
                                      className="mxd-background"
                                      d="M33.4,50H16.7C7.5,50,0,42.5,0,33.3V16.7C0,7.5,7.5,0,16.7,0h16.7C42.5,0,50,7.5,50,16.7v16.7
                                    C50,42.5,42.5,50,33.4,50z"
                                    />
                                    <g>
                                      <defs>
                                        <path
                                          id="mxd-clip-path-2"
                                          d="M33.4,50H16.7C7.5,50,0,42.5,0,33.3V16.7C0,7.5,7.5,0,16.7,0h16.7C42.5,0,50,7.5,50,16.7v16.7
                                        C50,42.5,42.5,50,33.4,50z"
                                        />
                                      </defs>
                                      <clipPath id="mxd-path-id-2">
                                        <use
                                          xlinkHref="#mxd-clip-path-2"
                                          style={{ overflow: "visible" }}
                                        />
                                      </clipPath>
                                      <path
                                        className="mxd-cat"
                                        d="M29.2,30.8h2.5v2.5v2.5
                                      h-2.5v-2.5V30.8z M18.4,33.3v2.5h2.5v-2.5v-2.5h-2.5V33.3z M35,18.3v2.5h-2.5v-2.5H35z M30,23.3h2.5v-2.5H30V23.3z M25,23.3h-2.5
                                      H20v2.5h2.5H25h2.5H30v-2.5h-2.5H25z M17.5,20.8v2.5H20v-2.5H17.5z M15,18.3v2.5h2.5v-2.5H15z M12.5,23.3v2.5v2.5H15v-2.5v-2.5
                                      v-2.5h-2.5V23.3z M10,30.8v2.5H8.4H5.9v2.5h2.5v2.5H5.9v2.5h2.5v2.5v2.5v2.5v2.5h2.5v-2.5v-2.5v-2.5h2.5h2.5v-2.5h-2.5h-2.5v-2.5
                                      v-2.5v-2.5h1.7v-2.5v-2.5H10V30.8z M37.5,23.3v-2.5H35v2.5v2.5v2.5h2.5v-2.5V23.3z M44.2,35.8v-2.5h-2.5H40v-2.5v-2.5h-2.5v2.5v2.5
                                      h1.7v2.5v2.5v2.5h-2.5h-2.5v2.5h2.5h2.5v2.5v2.5v2.5h2.5v-2.5v-2.5v-2.5v-2.5h2.5v-2.5h-2.5v-2.5H44.2z"
                                      />
                                    </g>
                                  </svg>
                                  {/* logo text */}
                                  <span>Blayden*</span>
                                </a>
                              </div>
                              <div className="col-12 col-md-4 col-lg-3 contact-data__item grid-item">
                                <p className="contact-data__title tagline-chapter animate-in-up">
                                  Location
                                </p>
                                <p className="contact-data__text small type-basic-160lh">
                                  <a
                                    className="link-small-160lh animate-in-up"
                                    href="https://maps.app.goo.gl/CGucvMFbkYuZiprv6"
                                    target="_blank"
                                  >
                                    Kyiv, Ukraine
                                    <br />
                                    02000
                                  </a>
                                </p>
                              </div>
                              <div className="col-12 col-md-4 col-lg-3 contact-data__item grid-item">
                                <p className="contact-data__title tagline-chapter animate-in-up">
                                  Phone
                                </p>
                                <p className="contact-data__text small type-basic-160lh">
                                  <a
                                    className="link-small-160lh animate-in-up"
                                    href="tel:+12127089400"
                                  >
                                    +1 212-708-9400
                                  </a>
                                  <br />
                                  <a
                                    className="link-small-160lh animate-in-up"
                                    href="tel:+15104570211"
                                  >
                                    +1 510-457-0211
                                  </a>
                                </p>
                              </div>
                              <div className="col-12 col-md-4 col-lg-3 contact-data__item grid-item">
                                <p className="contact-data__title tagline-chapter animate-in-up">
                                  Email
                                </p>
                                <p className="contact-data__text small type-basic-160lh">
                                  <a
                                    className="link-small-160lh animate-in-up"
                                    href="mailto:example@example.com?subject=Message%20from%20your%20site"
                                  >
                                    hello@example.com
                                  </a>
                                  <br />
                                  <a
                                    className="link-small-160lh animate-in-up"
                                    href="mailto:example@example.com?subject=Message%20from%20your%20site"
                                  >
                                    support@example.com
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Content Block - Contact Data End */}
                      </div>
                    </div>
                  </div>
                </footer>
                {/* Footer End */}
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
