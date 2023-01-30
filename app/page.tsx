import Image from "next/image";
import { Manrope } from "@next/font/google";
import styles from "./page.module.css";
import NumbersCounter from "@/components/NumbersCounter";
import About from "@/components/About";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={
        "bg-white text-white text-3xl font-bold w-screen h-screen " +
        manrope.className
      }
    >
      Hello, World!
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
        <input type="text" placeholder="insert your name" className="input " />
      </div>
      <div className="p-4">
        <NumbersCounter />
      </div>
      <div className="py-4 px-6 tablet:px-10 desktop:px-40">
        <About />
      </div>
    </main>
  );
}
