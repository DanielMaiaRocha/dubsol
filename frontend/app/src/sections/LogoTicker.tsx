"use client";
import Crunchy from "@/assets/crunchyroll.png";
import Deluxe from "@/assets/deluxe.png";
import Disney from "@/assets/disney.jpg";
import HBO from "@/assets/hbo.png";
import Netflix from "@/assets/netflix.png";
import Onegai from "@/assets/onegai.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-16 lg:gap-24 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear",
              repeatType:"loop"
            }}
          >
            <Image
              src={Crunchy}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={Deluxe}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image src={Disney} alt="Echo Logo" className="logo-ticker-image" />
            <Image
              src={HBO}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={Netflix}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image src={Onegai} alt="Apex Logo" className="logo-ticker-image" />

            <Image
              src={Crunchy}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={Deluxe}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image src={Disney} alt="Echo Logo" className="logo-ticker-image" />
            <Image
              src={HBO}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={Netflix}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image src={Onegai} alt="Apex Logo" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
