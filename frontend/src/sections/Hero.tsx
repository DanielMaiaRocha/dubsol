"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import logoMain from "@/assets/logoMain.png";
import Cam from "@/assets/cam.png";
import Claquete from "@/assets/claquete.png";
import { motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const Hero = () => {
  const HeroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: HeroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id="Hero"
      ref={HeroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 lg:pt-1 lg:pb-0 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#17a2b8,#EAEEFE_70%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Ominipresent Dubbing</div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mt-6">
              Dub
              <span className="bg-gradient-to-r from-[#aed036] from-35% via-[#de9c1a] via-59% to-[#c63838] to-100% text-transparent bg-clip-text  inline-block">
                sol
              </span>
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              We proudly introduce our innovative approach to dubbing, enabling
              you to achieve studio-quality results from anywhere. With
              cutting-edge technology and user-friendly tools, you can work and
              produce seamlessly across the globe, all at no cost.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Link href={"#"} className="btn btn-primary">Start for free</Link>
              <button className="btn btn-text gap-1 mb-4">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
