"use client"
import FilmTape from "@/assets/filmTape.png";
import FilmeStg from "@/assets/filmeStorage.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const CallToAction = () => {
  const ActionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ActionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section id="Quote" ref={ActionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-title-word-config relative">
          <h2 className="section-title">Get your quotation!</h2>
          <p className="section-desc mt-5 tracking-tight text-center ">
            Request your quote today and take the first step toward a
            transformative journey that will not only elevate your project to
            new heights but also set new standards for success and innovation.
          </p>
          <motion.img
            src={FilmTape.src}
            alt="tape"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY: translateY
            }}
          />
          <motion.img
            src={FilmeStg.src}
            alt="Stg"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY: translateY
            }}
          />
        </div>
        <div className="flex justify-center mt-10">
          <button className="btn btn-primary">Get your quote.</button>
        </div>
      </div>
    </section>
  );
};
