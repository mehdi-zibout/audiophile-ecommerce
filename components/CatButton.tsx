import { SvgIconRightArrow } from "@/assets/Icons";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
function CatButton({ image, imageClass, link, title }: CatButtonProps) {
  return (
    <div className="bg-[#F1F1F1] relative rounded-lg py-[30px] h-[165px] px-14 w-full tablet:w-fit desktop:w-[350px] desktop:h-[204px] flex flex-col justify-end items-center">
      <Image
        className={`absolute inset-0 mx-auto ${imageClass} `}
        src={image}
        alt="headphones"
      />
      <p className="uppercase desktop:text-h6 text-[0.9375rem] tracking-[1.07px] leading-[20.49] font-bold">
        {title}
      </p>
      <Link
        href={link}
        className="btn btn-ghost pb-0 px-0 flex justify-center items-center w-full"
      >
        shop
        <div className="inline-block ml-[13.32px] overflow-hidden  w-[8px]">
          <SvgIconRightArrow className="translate-x-px" />
        </div>
      </Link>
    </div>
  );
}

type CatButtonProps = {
  title: string;
  link: string;
  image: StaticImageData;
  imageClass: string;
};
export default CatButton;
