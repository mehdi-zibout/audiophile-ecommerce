import Image from "next/image";
import { Manrope } from "@next/font/google";
import styles from "./page.module.css";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={
        "bg-slate-800 text-white text-3xl font-bold w-screen h-screen " +
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
    </main>
  );
}
