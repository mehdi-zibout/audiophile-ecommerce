import { SvgCerclesPattern } from "@/assets/Icons";
import ImgDesktop from "@/assets/home/desktop/image-speaker-zx9.png";
import cerclesPattern from "@/assets/home/desktop/pattern-circles.svg";
import ImgMobile from "@/assets/home/mobile/image-speaker-zx9.png";
import ImgTablet from "@/assets/home/tablet/image-speaker-zx9.png";
import Image from "next/image";

function Showcase1() {
  return (
    <div className="bg-[#D87D4A] relative py-[55px] px-6 tablet:px-[171px] overflow-hidden rounded-lg  group">
      <div
        className="absolute inset-0  w-full  h-full 
        cercles  bg-[size:558px_558px] bg-[position:center_-120px] bg-opacity-[20.21%] tablet:bg-[position:center_-345px] tablet:bg-[size:944px_944px]
        group-hover:animate-[scale_1s_ease-in-out_infinite]
        "
      />

      <Image
        src={ImgMobile}
        alt="ZX9 SPEAKER"
        className="relative z-10 mx-auto tablet:hidden"
        height={207}
        width={172.25}
      />
      <Image
        src={ImgTablet}
        alt="ZX9 SPEAKER"
        className="relative z-10 mx-auto hidden tablet:block desktop:hidden"
        height={237}
        width={197.21}
      />
      <div className="text-center relative z-10">
        <h2 className="tablet:text-h1 mt-8 mb-6 text-white uppercase text-[2.25rem] leading-[40px] tracking-[1.29px]">
          ZX9
          <br className="" />
          SPEAKER
        </h2>
        <p className="text-body text-white text-opacity-75 mb-6">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className="btn btn-secondary-inverted">see product</button>
      </div>
    </div>
  );
}

export default Showcase1;
