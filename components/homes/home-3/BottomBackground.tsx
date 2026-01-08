import Image from "next/image";

export default function BottomBackground() {
  return (
    <div className="bottom__background bottom-bg-02">
      <div className="bottom-bg-02__02 animate-in-up">
        <Image
          alt="Template background image"
          src="/img/backgrounds/1200x1553_bg04.webp"
          width={1200}
          height={1553}
        />
      </div>
      <div className="bottom-bg-02__01 animate-in-up">
        <Image
          alt="Template background image"
          src="/img/backgrounds/1200x1200_bg05.webp"
          width={1200}
          height={1200}
        />
      </div>
    </div>
  );
}
