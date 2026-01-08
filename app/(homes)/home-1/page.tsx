import ColorSwitcher from "@/components/headers/ColorSwitcher";
import Header1 from "@/components/headers/Header1";
import Logo from "@/components/headers/Logo";
import About from "@/components/homes/home-1/About";
import BottomBackground from "@/components/homes/home-1/BottomBackground";
import Contact from "@/components/homes/home-1/Contact";
import Hero from "@/components/homes/home-1/Hero";
import Portfolios from "@/components/homes/home-1/Portfolios";
import Resume from "@/components/homes/home-1/Resume";
import Services from "@/components/homes/home-1/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Home 01 || Blayden - Personal Portfolio & Resume React Nextjs Template",
  description: "Blayden - Personal Portfolio & Resume React Nextjs Template",
};
export default function Home() {
  return (
    <>
      <Header1 />
      <Logo />
      <ColorSwitcher />
      <main id="page-content" className="page-content">
        <Hero />
        <Portfolios />
        <About />
        <Services />
        <Resume />
        <Contact />
      </main>
      <BottomBackground />
    </>
  );
}
