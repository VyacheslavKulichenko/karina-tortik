import InitScroll from "@/components/scroll/InitScroll";
import "../public/css/styles.css";
import "../public/css/cake-animation.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { Urbanist } from "next/font/google";
import LenisSmoothScroll from "@/components/scroll/LenisSmoothScroll";
import { PortfolioProvider } from "@/contexts/PortfolioContext";
import ScrollTop from "@/components/scroll/ScrollTop";
import IntroVideo from "@/components/IntroVideo";
import ColorSwitcher from "@/components/headers/ColorSwitcher";
import Header1 from "@/components/headers/Header1";
import Logo from "@/components/headers/Logo";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Karina-tortik",
  description: "Karina-tortik — авторские торты на заказ",
  authors: [{ name: "Slava" }],
  openGraph: {
    title: "Karina-tortik",
    description: "Karina-tortik — авторские торты на заказ",
    type: "website",
  },
};

const setColorSchemeScript = `
(function() {
  try {
    var scheme = localStorage.getItem('color-scheme') || 'light';
    document.documentElement.setAttribute('color-scheme', scheme);
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      color-scheme="dark"
      suppressHydrationWarning
      className="js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: setColorSchemeScript }} />
      </head>
      <body className={urbanist.variable}>
        <PortfolioProvider>
          {/* Intro video overlay */}
          <IntroVideo />
          {/* Static elements that should not re-render on locale change */}
          <Header1 />
          <Logo />
          <ColorSwitcher />
          {children}
          <LenisSmoothScroll />
          <ScrollTop />
          <InitScroll />
        </PortfolioProvider>
      </body>
    </html>
  );
}
