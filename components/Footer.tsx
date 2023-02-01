import {
  SvgIconFacebook,
  SvgIconInstagram,
  SvgIconTwitter,
  SvgLogo,
} from "@/assets/Icons";
import Link from "next/link";
import { navItems } from "./Navbar";

const socialMedia = [
  {
    id: 1,
    Icon: SvgIconFacebook,
    link: "https://facebook.com",
    label: "facebook",
  },
  {
    id: 2,
    Icon: SvgIconTwitter,
    link: "https://twitter.com",
    label: "twitter",
  },
  {
    id: 3,
    Icon: SvgIconInstagram,
    link: "https://instagram.com",
    label: "instagram",
  },
];
function Footer() {
  return (
    <footer className="text-center tablet:pb-[46px] tablet:text-left bg-[#101010] w-screen desktop:px-[165px] tablet:px-10 px-6 pb-[38px] flex justify-center items-center tablet:items-start flex-col">
      <div className="desktop:flex desktop:justify-between desktop:items-start desktop:w-full desktop:mb-[36px]">
        <div className="pt-12 border-t-4 border-[#D87D4A] w-fit">
          <SvgLogo className="" />
        </div>
        <ul className="tablet:flex tablet:my-8 desktop:pt-[52px] desktop:my-0 ">
          {navItems.map((navItem) => (
            <li
              key={navItem.id}
              className="uppercase transition duration-300 tablet:mr-[34px] last-of-type:mr-0 tablet:my-0 tablet:first-of-type:my-0 tablet:last-of-type:my-0 my-4 first-of-type:mt-12 last-of-type:mb-12 text-subtitle tracking-[2px] text-white hover:text-[#D87D4A]"
            >
              <Link href={navItem.link}>{navItem.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-body text-white text-opacity-50 desktop:w-[48.5%]">
        Audiophile is an all in one stop to fulfill your audio needs. We’re a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="tablet:flex  tablet:justify-between w-full tablet:mt-20 desktop:mt-14 ">
        <p className="text-body text-white text-opacity-50 font-bold my-12 tablet:my-0">
          Copyright 2023. All Rights Reserved
        </p>
        <ul className=" flex justify-center items-center desktop:-translate-y-[88px]">
          {socialMedia.map((sm) => {
            const { Icon, link } = sm;
            return (
              <li className="mx-2" key={sm.id}>
                <Link target={"_blank"} href={link}>
                  <Icon className="fill-white hover:fill-[#D87D4A] transition duration-300" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
