"use client";
import Image from "next/image";
import imageBestGearDesktop from "../public/assets/shared/desktop/image-best-gear.jpg";
import imageBestGearTablet from "../public/assets/shared/tablet/image-best-gear.jpg";
import imageBestGearMobile from "../public/assets/shared/mobile/image-best-gear.jpg";
function About() {
  return (
    <div className="flex flex-col-reverse desktop:flex-row justify-center items-center ">
      <div className="tablet:px-[55px] desktop:pl-0 desktop:pr-[125px] desktop:w-[570px] flex   h-full flex-col items-center  justify-center text-center desktop:text-left">
        <h2 className="uppercase text-h4 tablet:text-h2 text-black text-center desktop:text-left  w-full">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio
          gear
        </h2>
        <p className="text-opacity-50 mt-8 text-black text-body  w-full">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <Image
        className="hidden desktop:block rounded-lg"
        src={imageBestGearDesktop}
        alt="handsome guy using our gear"
        width={540}
        height={580}
      />
      <Image
        className="hidden tablet:block desktop:hidden bg-cover mb-[63px] rounded-lg"
        src={imageBestGearTablet}
        alt="handsome guy using our gear"
      />
      <Image
        className="block tablet:hidden mb-10 rounded-lg"
        src={imageBestGearMobile}
        alt="handsome guy using our gear"
      />
    </div>
  );
}

export default About;
