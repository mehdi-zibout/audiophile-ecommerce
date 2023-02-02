import heroImgDesktop from "@/assets/home/desktop/image-hero.jpg";
import heroImgMobile from "@/assets/home/mobile/image-header.jpg";
import heroImgTablet from "@/assets/home/tablet/image-header.jpg";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative   overflow-hidden  ">
      <div className="relative tablet:-mx-10 desktop:w-[398px] desktop:mx-0 desktop:px-0  w-screen z-10 text-center desktop:text-left tablet:pt-[126px] tablet:pb-[167px] pt-[108px] pb-[112px] px-6 tablet:px-[194px]">
        <p className="uppercase text-overline text-white text-opacity-[49.64%]">
          NEW PRODUCT
        </p>
        <h1 className="tablet:text-h1 tablet:my-6 mt-4 mb-6 text-white uppercase text-[2.25rem] leading-[40px] tracking-[1.29px]">
          XX99 Mark II Headphones
        </h1>
        <p className="text-body text-white text-opacity-75 mb-[28px] tablet:mb-10">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="btn btn-primary">see product</button>
      </div>
      <Image
        className="absolute -top-[87px] mx-auto -right-0 -left-[2px] opacity-[50.21%] tablet:hidden"
        src={heroImgMobile}
        alt="XX99 Mark II HeadphoneS"
        fill={false}
        width={375}
      />
      <Image
        className="absolute -top-20 mx-auto left-0 right-0  opacity-[50.21%]  tablet:block hidden desktop:hidden"
        src={heroImgTablet}
        alt="XX99 Mark II HeadphoneS"
        fill={false}
        width={768}
      />
      <Image
        className=" absolute top-0 mb-auto    hidden desktop:block"
        src={heroImgDesktop}
        alt="XX99 Mark II HeadphoneS"
      />
    </div>
  );
}

export default Hero;
