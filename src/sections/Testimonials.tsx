"use client";
import prod1 from "@/assets/csi.jpg";
import prod2 from "@/assets/dms.jpg";
import prod3 from "@/assets/elon.jpg";
import prod4 from "@/assets/ht2.jpg";
import prod5 from "@/assets/ht3.jpg";
import prod6 from "@/assets/io.jpg";
import prod7 from "@/assets/ragnar.jpg";
import prod8 from "@/assets/pussycat.jpg";
import prod9 from "@/assets/valhalla.jpg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const projectsData = [
  {
    title: "CSI",
    image: prod1.src,
    name: "CSI: Crime Scene Investigation",
  },
  {
    title: "Demon Slayer",
    image: prod2.src,
    name: "Kimetsu no Yaba: Mugen Train Arc",
  },
  {
    title: "Sex Education",
    image: prod3.src,
    name: "Sex Education",
  },
  {
    title: "Hotel Transylvania 2",
    image: prod4.src,
    name: "Hotel Transylvania 2: The only thing than being a monster is babysitting one",
  },
  {
    title: "Hotel Transylvania 3",
    image: prod5.src,
    name: "Hotel Transylvania 3: A monster vacation",
  },
  {
    title: "IO",
    image: prod6.src,
    name: "IO Netflix",
  },
  {
    title: "Vikings",
    image: prod7.src,
    name: "Vinkings: A New Kingdom",
  },
  {
    title: "Vikings: Valhalla",
    image: prod9.src,
    name: "Vikings Valhalla: Fight to the End",
  },
  {
    title: "Puss-in-boots",
    image: prod8.src,
    name: "Puss-in-boots",
  },
];

const firstColumn = projectsData.slice(0, 3);
const secondColumn = projectsData.slice(3, 6);
const thirdColumn = projectsData.slice(6, 9);

const ProjectsColumn = (props: {
  className?: string;
  projectsData: typeof projectsData;
  duration?: number
}) => (
  <div className={props.className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration: props.duration || 10 ,
        repeat: Infinity,
        ease: "linear",
        repeatType :"loop"
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.projectsData.map(({ title, image, name }, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col max-w-xs w-64 "
            >
              <div className="relative flex-3/4">
                <Image
                  src={image}
                  width={3000}
                  height={3000}
                  alt="img"
                  objectFit="cover"
                  quality={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white flex-1 flex items-center justify-center p-5">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section id="Customers" className="bg-white">
      <div className="container">
        <div className="section-title">
          <div className="flex justify-center">
            <div className="tag text-black text-sm font-normal">
              A bit about us.
            </div>
          </div>
        </div>
        <h2 className="section-title mt-5">Some of our projects</h2>
        <p className="section-desc mt-5">
          Some projects we made along our 12 years in the dubbing industry.
        </p>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <ProjectsColumn projectsData={firstColumn} duration={15} />
          <ProjectsColumn
            projectsData={secondColumn}
            className="hidden md:block"
            duration={19}
            
          />
          <ProjectsColumn
            projectsData={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
