import Image from "next/image";
import ImgDesktop from "@/assets/home/desktop/image-earphones-yx1.jpg";
import ImgMobile from "@/assets/home/mobile/image-earphones-yx1.jpg";
import ImgTablet from "@/assets/home/tablet/image-earphones-yx1.jpg";

function Showcase3({ className }: { className?: string }) {
  return (
    <div className={"tablet:flex " + className}>
      <div
        className={`rounded-lg overflow-hidden bg-no-repeat bg-cover bg-[url(/assets/home/mobile/image-earphones-yx1.jpg)] tablet:bg-[url(/assets/home/tablet/image-earphones-yx1.jpg)] desktop:bg-[url(/assets/home/desktop/image-earphones-yx1.jpg)] tablet:w-[50%] h-[200px] tablet:h-[320px]`}
      ></div>
      <div className="bg-[#F1F1F1] rounded-lg px-6 py-10 tablet:px-10 desktop:px-[95px] mt-6 tablet:mt-0 tablet:ml-3 tablet:w-[50%] tablet:flex tablet:flex-col tablet:justify-center">
        <h2 className="text-[1.75rem] tracking-[2px] mb-8 ">YX1 EARPHONES</h2>
        <button className="btn btn-secondary font-bold w-fit">
          see product
        </button>
      </div>
    </div>
  );
}

export default Showcase3;
