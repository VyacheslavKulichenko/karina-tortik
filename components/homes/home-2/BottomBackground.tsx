import Image from "next/image";

export default function BottomBackground() {
  return (
    <div className="bottom__background bottom-bg-03">
      <div className="bottom-bg-03__01 animate-in-up">
        <Image
          alt="Template background image"
          src="/img/backgrounds/800x800_bg07.webp"
          width={800}
          height={800}
        />
      </div>
      <div className="bottom-bg-03__02 animate-in-up">
        <Image
          alt="Template background image"
          src="/img/backgrounds/800x800_bg07.webp"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}
