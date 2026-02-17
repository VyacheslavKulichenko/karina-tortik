import ColorSwitcher from "@/components/headers/ColorSwitcher";
import Header1 from "@/components/headers/Header1";
import Logo from "@/components/headers/Logo";
import About from "@/components/homes/home-3/About";
import BottomBackground from "@/components/homes/home-3/BottomBackground";
import Contact from "@/components/homes/home-3/Contact";
import Hero from "@/components/homes/home-3/Hero";
import Portfolios from "@/components/homes/home-3/Portfolios";
import Services from "@/components/homes/home-3/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Darina-CV",
  description: "Darina - Personal Portfolio & Resume",
};
export default function page() {
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
        <Contact />
      </main>
      <BottomBackground />
    </>
  );
}
