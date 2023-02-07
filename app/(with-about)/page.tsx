import Image from "next/image";
import { Manrope } from "@next/font/google";
import styles from "./page.module.css";
import NumbersCounter from "@/components/NumbersCounter";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatButton from "@/components/CatButton";
import headphonesCatImage from "@/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersCatImage from "@/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesCatImage from "@/assets/shared/desktop/image-category-thumbnail-earphones.png";
import Hero from "@/components/Hero";
import Showcase1 from "@/components/Showcase1";
import Showcase2 from "@/components/Showcase2";
import Showcase3 from "@/components/Showcase3";
import ProductCatView from "@/components/ProductCatView";

export default function Home() {
  return (
    <>
      <main className={"bg-white  font-bold min-h-screen "}>
        <div className=" bg-[#191919] tablet:px-10 desktop:px-[165px] px-0 ">
          <Hero />
        </div>
        <div className="px-6 tablet:px-10 desktop:px-[165px] mb-24">
          <div className="desktop:mt-[201px] tablet:mt-[147px] mt-[97px] grid grid-rows-3 gap-y-[70px] tablet:grid-rows-1 tablet:gap-y-0 tablet:grid-cols-3 tablet:gap-x-[10px] desktop:gap-x-[30px] ">
            <CatButton
              title={"headphones"}
              link={"/headphones"}
              image={headphonesCatImage}
              imageClass={
                "desktop:-top-20 -top-14 desktop:w-[220px]  w-[150px] "
              }
            />
            <CatButton
              title={"speakers"}
              link={"/speakers"}
              image={speakersCatImage}
              imageClass={
                "desktop:-top-20 -top-14 desktop:w-[220px]  w-[150px] "
              }
            />
            <CatButton
              title={"earphones"}
              link={"/earphones"}
              image={earphonesCatImage}
              imageClass={
                "desktop:-top-20 -top-14 desktop:w-[220px]  w-[150px] "
              }
            />
          </div>
          <div className="mt-[120px] tablet:mt-[96px] desktop:mt-[168px]">
            <Showcase1 />
            <Showcase2 className="desktop:mt-12 tablet:mt-8 mt-6" />
            <Showcase3 className="desktop:mt-12 tablet:mt-8 mt-6" />
          </div>
        </div>
        {/* 
       
        <div className="my-4 px-6 tablet:px-10 desktop:px-[165px]">
          <Showcase1 />
        </div>
        <div className="my-4 px-6 tablet:px-10 desktop:px-[165px]">
          <Showcase2 />
        </div>
        <div className="my-4 px-6 tablet:px-10 desktop:px-[165px]">
          <Showcase3 />
        </div>
        <div className="my-4 px-6 tablet:px-10 desktop:px-[165px]">
          <ProductCatView />
        </div>
        <div className="p-4">
          <button className="btn btn-primary">see product</button>
        </div>
        <div className="p-4">
          <button className="btn btn-secondary">see product</button>
        </div>
        <div className="p-4">
          <button className="btn btn-ghost">shop</button>
        </div>
        <div className="p-4">
          <input
            type="text"
            placeholder="insert your name"
            className="input "
          />
        </div>
        <div className="p-4">
          <NumbersCounter />
        </div>
        <div className="p-4">
          <CatButton
            title={"headphones"}
            link={"#"}
            image={catImage}
            imageClass={"desktop:-top-20 -top-14 desktop:w-[220px]  w-[150px] "}
          />
        </div>
        <div className="py-4 px-6 tablet:px-10 desktop:px-40">
          <About />
        </div> */}
      </main>
    </>
  );
}
