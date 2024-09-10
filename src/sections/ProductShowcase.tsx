import Dubsol from "@/assets/dubsol.png"
import Rec from "@/assets/rec.png"
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[640px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Join us now!</div>
          </div>
            <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-r from-[#aed036] from-35% via-[#de9c1a] via-59% to-[#c63838] to-100% text-transparent bg-clip-text mt-5">
              The best dubbing system on market
            </h2>
            <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5 indent-8">
              The best dubbing tool worldwide, allowing you to achieve
              studio-quality dubbing without losing any detail! Perfect for
              professionals and content creators who seek excellence in every
              project, without the need for complex equipment.
            </p>
        </div>
        <div className="relative">
            <Image src={Dubsol} alt="Dub-old-img" className="mt-10 border rounded-md" />
            <Image src={Rec} alt="rec" width={80} height={80} className="absolute -right-8 -top-8 rotate-[30deg]" />
          </div>
      </div>
    </section>
  );
};
