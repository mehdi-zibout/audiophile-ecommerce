"use client";
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
import Card from "@/components/Card";
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";

export default function Home() {
  const [cad, setCad] = useState(false);
  return (
    <>
      <main className={"bg-[#FAFAFA] min-h-screen px-6 py-4 "}>
        <button className="btn btn-ghost capitalize p-0 mb-6">go back</button>
        <div className="">
          <Card className="p-6 text-black">
            <h1 className="uppercase text-[1.75rem] font-bold tracking-[1px] mb-8">
              checkout
            </h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <h2 className="text-subtitle uppercase text-[#D87D4A] mb-4">
                Billing details
              </h2>
              <label className="input-label block">
                Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Alexei Ward"
                  className="input block mt-2"
                />
              </label>
              <label className="input-label mt-6 capitalize block">
                email
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="alexei@mail.com"
                  className="input block mt-2"
                />
              </label>
              <label className="input-label mt-6 capitalize block">
                Phone Number
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+1 202-555-0136"
                  className="input block mt-2"
                />
              </label>
              <h2 className="text-subtitle uppercase text-[#D87D4A] mb-4 mt-8">
                shipping info
              </h2>
              <label className="input-label block">
                Your Address
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="1137 Williams Avenue"
                  className="input block mt-2"
                />
              </label>
              <label className="input-label mt-6 capitalize block">
                ZIP Code
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  placeholder="10001"
                  className="input block mt-2"
                />
              </label>
              <label className="input-label mt-6 capitalize block">
                City
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="New York"
                  className="input block mt-2"
                />
              </label>
              <label className="input-label mt-6 capitalize block">
                Country
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="United States"
                  className="input block mt-2"
                />
              </label>
              <h2 className="text-subtitle uppercase text-[#D87D4A] mb-4 mt-8">
                payment details
              </h2>
              <label className="input-label block">
                Payment Method
                <CheckboxInput
                  onClick={() => setCad(true)}
                  className="mt-[17px]"
                  isOn={cad}
                >
                  e-Money
                </CheckboxInput>
                <CheckboxInput
                  onClick={() => setCad(false)}
                  className="mt-4"
                  isOn={!cad}
                >
                  Cash on Delivery
                </CheckboxInput>
              </label>
            </form>
          </Card>
        </div>
      </main>
    </>
  );
}

function CheckboxInput({ isOn, className, children, ...props }: CheckboxProps) {
  return (
    <button
      {...props}
      className={`input flex ${
        isOn
          ? "border-[#D87D4A]"
          : "border-[#CFCFCF] focus-within:border-[#CFCFCF] "
      } ${className}`}
    >
      <div
        className={`capitalize mr-4 rounded-full h-[20px] w-[20px]  border-[1px] border-[#CFCFCF] flex justify-center items-center`}
      >
        {isOn && (
          <div className="w-[10px] h-[10px] rounded-full bg-[#D87D4A]"></div>
        )}
      </div>
      {children}
    </button>
  );
}

type CheckboxProps = { isOn: boolean } & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
