import { SvgIconRightArrow } from "@/assets/Icons";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
function CatButton({ image, imageClass, link, title }: CatButtonProps) {
  return (
    <Link
      aria-label={`shop some ${title}`}
      href={link}
      className="bg-[#F1F1F1] group relative rounded-lg desktop:pb-[30px] pb-[22px]  h-[165px] px-14 w-full  desktop:h-[204px] flex flex-col justify-end items-center"
    >
      <Image
        className={`absolute inset-0 mx-auto ${imageClass} `}
        src={image}
        alt="headphones"
      />
      <p className="uppercase desktop:text-h6 text-[0.9375rem] tracking-[1.07px] leading-[20.49px] font-bold">
        {title}
      </p>
      <div className="btn btn-ghost  mt-[17px] desktop:mt-[15px] group-hover:text-[#D87D4A] py-0 px-0 flex justify-center items-center w-full">
        shop
        <div className="inline-block ml-[13.32px] overflow-hidden  w-[8px]">
          <SvgIconRightArrow className="translate-x-px" />
        </div>
      </div>
    </Link>
  );
}

type CatButtonProps = {
  title: string;
  link: string;
  image: StaticImageData;
  imageClass: string;
};
export default CatButton;
