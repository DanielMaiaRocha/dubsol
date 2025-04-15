"use client";
import Dubsol from "@/assets/Dubsol2.png";
import Rec from "@/assets/rec.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  return (
    <section
      id="About"
      ref={sectionRef}
      className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-title-word-config">
          <div className="flex justify-center">
            <div className="tag">Join us now!</div>
          </div>
          <h2 className="section-title mt-5">
            The best dubbing system on market
          </h2>
          <p className="section-desc mt-5 ">
            The best dubbing tool worldwide, allowing you to achieve
            studio-quality dubbing without losing any detail! Perfect for
            professionals and content creators who seek excellence in every
            project, without the need for complex equipment.
          </p>
        </div>
        <div className="relative">
          <Image
            src={Dubsol}
            alt="Dub-old-img"
            className="mt-10 border rounded-md"
          />
          <motion.img
            src={Rec.src}
            alt="rec"
            width={80}
            height={80}
            className="absolute -right-8 -top-8 rotate-[30deg]"
            style={{
              translateY: translateY,
              rotate: "30deg"
            }}
          />
        </div>
      </div>
    </section>
  );
};
