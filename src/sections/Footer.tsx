import DubsolLogo from "@/assets/logodubsol.png";
import Image from "next/image";
import SocialL from "@/assets/social-linkedin.svg";
import SocialI from "@/assets/social-insta.svg";
import SocialSite from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <section id="Footer" className="bg-gray-900 text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative">
          <Image src={DubsolLogo} alt="dubsol" height={50} />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#About" className="hover:text-white">About</a>
          <a href="#Features" className="hover:text-white">Features</a>
          <a href="#Customers" className="hover:text-white">Customers</a>
          <a href="#Quote" className="hover:text-white">Quote</a>
          <a href="#" className="hover:text-white">Help</a>
          <a href="https://alcateia.dubsol.app/login.php" target="_blank" className="hover:text-white">System</a>
        </nav>
        <div className="flex flex-row justify-center gap-6 mt-6">
          <a href="https://www.instagram.com/alcateia.audiovisual/" target="_blank" className="hover:text-white">
            <SocialI />
          </a>
          <a href="https://www.linkedin.com/company/dubsol/" target="_blank" className="hover:text-white">
            <SocialL />
          </a>
          <a href="https://alcateia.dubsol.app/login.php" target="_blank" className="hover:text-white">
            <SocialSite className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-6">&copy; 2024 Dubsol, Inc. All rights reserved</p>
      </div>
    </section>
  );
};
