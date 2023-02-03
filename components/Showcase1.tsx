import { SvgCerclesPattern } from "@/assets/Icons";
import heroImgDesktop from "@/assets/home/desktop/image-speaker-zx9.png";
import heroImgMobile from "@/assets/home/mobile/image-speaker-zx9.png";
import heroImgTablet from "@/assets/home/tablet/image-speaker-zx9.png";
import Image from "next/image";

function Showcase1() {
  return (
    <div className="bg-[#D87D4A] relative py-[55px] px-6 rounded-lg overflow-hidden">
      <SvgCerclesPattern className="absolute left-[-309px] bottom-[-32px] scale-[0.59] " />
      <Image
        src={heroImgMobile}
        alt="ZX9 SPEAKER"
        className="relative z-10 mx-auto"
        height={207}
        width={172.25}
      />
      <div className="text-center relative z-10">
        <h2 className="tablet:text-h1 mt-8 mb-6 text-white uppercase text-[2.25rem] leading-[40px] tracking-[1.29px]">
          ZX9
          <br className="tablet:hidden" />
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
