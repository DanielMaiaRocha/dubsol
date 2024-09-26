import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm md:backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Optimize your production wherever you at with studio quality{" "}
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-5 w-5 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <a href="#Hero">
              <Image src={Logo} alt="Saas Logo" height={60} width={60} />
            </a>
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#About">About</a>
              <a href="#Features">Features</a>
              <a href="#Customers">Customers</a>
              <a href="#Quote">Quotation</a>
              <a href="#Footer">Help</a>
              <Link
                href={"#"}
                className="bg-[#17a2b8] text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight"
              >
                Get for free
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
