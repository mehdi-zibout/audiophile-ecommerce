import { SvgCart, SvgHamburger, SvgLogo } from "@/assets/Icons";
import Link from "next/link";

export const navItems = [
  { id: 1, title: "home", link: "#" },
  { id: 2, title: "headphones", link: "#" },
  { id: 3, title: "speakers", link: "#" },
  { id: 4, title: "earphones", link: "#" },
];
function Navbar() {
  return (
    <header className="flex justify-between bg-[#191919] desktop:px-[165px] px-6 tablet:px-10 items-center py-8  desktop:pb-[36px] border-b border-white border-opacity-[10.4%] desktop:border-opacity-20 ">
      <nav className="tablet:hidden">
        <button aria-label="hamburger menu">
          <SvgHamburger />
        </button>
      </nav>
      <nav className="flex ">
        <button
          aria-label="hamburger menu"
          className="hidden tablet:inline-block desktop:hidden pr-10"
        >
          <SvgHamburger />
        </button>
        <Link href={"/"}>
          <SvgLogo aria-label="audiophile logo" />
        </Link>
      </nav>
      <ul className="hidden desktop:flex justify-center items-center uppercase text-subtitle tracking-[2px] text-white">
        {navItems.map((navItem) => (
          <li
            key={navItem.id}
            className="mx-[18px] first-of-type:ml-0 last-of-type:mr-0"
          >
            <nav className="hover:text-[#D87D4A] transition duration-300">
              <Link href={navItem.link}>{navItem.title}</Link>
            </nav>
          </li>
        ))}
      </ul>
      <nav>
        <button aria-label="cart">
          <SvgCart className="fill-white hover:fill-[#D87D4A] transition duration-300" />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
