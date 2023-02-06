import Image from "next/image";
import { Manrope } from "@next/font/google";
import styles from "./page.module.css";
import NumbersCounter from "@/components/NumbersCounter";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatButton from "@/components/CatButton";
import catImage from "@/assets/shared/desktop/image-category-thumbnail-headphones.png";
import Hero from "@/components/Hero";
import Showcase1 from "@/components/Showcase1";
import Showcase2 from "@/components/Showcase2";
import Showcase3 from "@/components/Showcase3";
import ProductCatView from "@/components/ProductCatView";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={"bg-white  font-bold w-screen h-screen " + manrope.className}
      >
        <div className=" bg-[#191919] tablet:px-10 desktop:px-[165px] px-0 ">
          <Navbar />
          <Hero />
        </div>
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
        </div>
        <Footer />
      </main>
    </>
  );
}
