import About from "@/components/homes/home-3/About";
import BottomBackground from "@/components/homes/home-3/BottomBackground";
import Contact from "@/components/homes/home-3/Contact";
import Hero from "@/components/homes/home-3/Hero";
import Portfolios from "@/components/homes/home-3/Portfolios";
import Services from "@/components/homes/home-3/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karina-tortik",
  description: "Karina-tortik — авторские торты на заказ",
};

export default function HomePage() {
  return (
    <>
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
