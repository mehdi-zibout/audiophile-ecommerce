import Image from "next/image";

type ProductCatViewProps = {
  isReverse?: boolean;
};
function ProductCatView({ isReverse }: ProductCatViewProps) {
  return (
    <div
      className={`desktop:flex ${
        isReverse ? "flex-row-reverse" : ""
      } desktop:justify-center desktop:items-center`}
    >
      <div className="overflow-hidden desktop:w-[540px] desktop:h-[560px] py-2  bg-[#F1F1F1] rounded-lg flex justify-center items-center">
        <Image
          className="tablet:hidden"
          width={300}
          height={243}
          src={
            "/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
          }
          alt="XX99 Mark II Headphones"
        />
        <Image
          className="hidden tablet:block desktop:hidden"
          width={600}
          height={243}
          src={
            "/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
          }
          alt="XX99 Mark II Headphones"
        />
        <Image
          className="hidden  desktop:block "
          width={500}
          height={500}
          src={
            "/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
          }
          alt="XX99 Mark II Headphones"
        />
      </div>
      <div
        className={`${
          isReverse ? "desktop:mr-[125px]" : "desktop:ml-[125px]"
        } desktop:w-[445px]  desktop:px-0 desktop:mt-0 mt-8 text-center desktop:text-left tablet:px-14 tablet:mt-14 `}
      >
        <p className="uppercase text-overline text-[#D87D4A] ">NEW PRODUCT</p>
        <h2 className="uppercase text-[1.75rem] tracking-[1px] tablet:text-h2  text-black my-6 tablet:mt-4 tablet:mb-8">
          XX99 Mark II <br /> Headphones
        </h2>
        <p className="text-body text-black text-opacity-50">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <button className="btn btn-primary mt-6">see product</button>
      </div>
    </div>
  );
}

export default ProductCatView;
