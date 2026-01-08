import Image from "next/image";

export default function BottomBackground() {
  return (
    <div className="bottom__background bottom-bg-01">
      <div className="bottom-bg-01__02 animate-in-up" data-delay="100">
        <Image
          alt="Template background image"
          src="/img/backgrounds/1200x1200_bg01.webp"
          width={1200}
          height={1200}
        />
      </div>
      <div className="bottom-bg-01__01 animate-in-up" data-delay="100">
        <Image
          alt="Template background image"
          src="/img/backgrounds/1200x1200_bg01.webp"
          width={1200}
          height={1200}
        />
      </div>
    </div>
  );
}
