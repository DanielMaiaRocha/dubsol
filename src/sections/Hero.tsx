"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import logoMain from "@/assets/logoMain.png";
import Cam from "@/assets/cam.png";
import Claquete from "@/assets/claquete.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 lg:pt-1 lg:pb-0 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#17a2b8,#EAEEFE_70%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">
              Ominipresent Dubbing
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mt-6">
              Dub
              <span className="bg-gradient-to-r from-[#aed036] from-35% via-[#de9c1a] via-59% to-[#c63838] to-100% text-transparent bg-clip-text  inline-block">
                sol
              </span>
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 indent-8">
              We proudly introduce our innovative approach to dubbing, enabling
              you to achieve studio-quality results from anywhere. With
              cutting-edge technology and user-friendly tools, you can work and
              produce seamlessly across the globe, all at no cost.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Start for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image src={logoMain} alt="logoMain" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-32 lg:left-12 " />
            <Image src={Cam} alt="camera" width={180} height={180} className="hidden md:block -top-8 lg:left-10 md:absolute rotate-[30deg]" />
            <Image src={Claquete} alt="claquete" width={180} height={180} className="hidden lg:block absolute top-[518px] left-[580px] rotate-[-40deg] " />
          </div>
        </div>
      </div>
    </section>
  );
};
