import ImgDesktop from "@/assets/home/desktop/image-speaker-zx7.png";
import ImgMobile from "@/assets/home/mobile/image-speaker-zx7.jpg";
import ImgTablet from "@/assets/home/tablet/image-speaker-zx7.png";
import Image from "next/image";

function Showcase2() {
  return (
    <div className="bg-[#F1F1F1] overflow-hidden py-[101px] px-6 rounded-lg relative flex flex-col justify-center items-start">
      <div
        className={`w-full h-full absolute inset-0 bg-no-repeat bg-[size:327px_320px] bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)] `}
      ></div>
      <div className="relative z-10">
        <h2 className="text-[1.75rem] tracking-[2px] mb-8 ">ZX7 SPEAKER</h2>
        <button className="btn btn-secondary font-bold">see product</button>
      </div>
    </div>
  );
}

export default Showcase2;
