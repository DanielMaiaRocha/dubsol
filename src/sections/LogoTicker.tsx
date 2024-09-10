"use client";
import Crunchy from "@/assets/crunchyroll.png";
import Deluxe from "@/assets/deluxe.png";
import Disney from "@/assets/disney.jpg";
import HBO from "@/assets/hbo.png";
import Netflix from "@/assets/netflix.png";
import Onegai from "@/assets/onegai.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-20 lg:gap-24 flex-none">
          <Image src={Crunchy} alt="Acme Logo" className="logo-ticker-image" />
          <Image
            src={Deluxe}
            alt="Quantum Logo"
            className="logo-ticker-image"
          />
          <Image src={Disney} alt="Echo Logo" className="logo-ticker-image" />
          <Image src={HBO} alt="Celestial Logo" className="logo-ticker-image" />
          <Image src={Netflix} alt="Pulse Logo" className="logo-ticker-image" />
          <Image src={Onegai} alt="Apex Logo" className="logo-ticker-image" />
          </div>        
        </div>
      </div>
    </div>
  );
};
