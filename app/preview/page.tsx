import ColorSwitcher from "@/components/headers/ColorSwitcher";
import Header1 from "@/components/headers/Header1";
import Logo from "@/components/headers/Logo";
import BottomBackground from "@/components/preview/BottomBackground";
import Cta from "@/components/preview/Cta";
import Demo from "@/components/preview/Demo";
import Intro from "@/components/preview/Intro";
import "../../public/css/main-demo.css";
const menuItems = [
  {
    href: "#intro",
    caption: "Home",
    icon: "ph ph-house-simple",
  },
  {
    href: "#demo",
    caption: "Demo",
    icon: "ph ph-squares-four",
  },
  {
    href: "#purchase",
    caption: "Purchase",
    icon: "ph ph-shopping-bag",
  },
];
export default function PreviewPage() {
  return (
    <>
      <div className="demo">
        <Header1 menuItems={menuItems} />
        <Logo />
        <ColorSwitcher parentClass="top-controls loading__fade" hasBuyBtn />
        <main id="page-content" className="page-content">
          <Intro />
          <Demo />
          <Cta />
        </main>
        <BottomBackground />{" "}
      </div>
    </>
  );
}
