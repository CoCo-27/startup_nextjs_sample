import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "../ui/button";

const Section_1 = () => {
  return (
    <MaxWidthWrapper className="relative mt-10 flex max-w-[1400px] flex-col items-center justify-center text-center sm:mt-12">
      <div className="flex w-full gap-4">
        <div className="z-10 flex flex-col justify-center text-start">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            CRYPTO MEETS TRADITIONAL FINANCE
          </h1>
          <h1 className="text-3xl font-bold text-[#00A295] md:text-4xl">
            Governed by the community
          </h1>

          <p className="mt-5 text-[22px] font-medium text-[#C4C5CB]">
            The QuDefi ecosystem bridges the power of blockchain with proven
            Web2 technology to create a revolutionary hybrid financial
            experience. Through QuEx, the regulated centralized exchange, and
            the QuDefi token, we unite trust, innovation, and community-driven
            governance.
          </p>

          <Button className="mt-5 max-w-[200px] rounded-xl bg-white px-8 py-5 text-xl font-normal text-black">
            Get Started
            <ArrowUpRight className="ml-2" width={24} height={24} />
          </Button>
        </div>
        <Image src="/hero-1.svg" alt="hero" width={620} height={620} />
      </div>

      <div className="z-10 mt-20 grid w-full grid-cols-3 gap-8 text-start">
        <div className="hero-div-1-style col-span-1">
          <div className="flex flex-col gap-2 p-8">
            <p className="text-2xl font-bold text-white">
              Regulated <br />
              by Switzerland
            </p>
            <p className="text-sm font-normal text-white">
              Operates under one of the world's strictest regulatory frameworks,
              ensuring trust, transparency, and accountability.
            </p>
          </div>
        </div>

        <div className="hero-div-2-style col-span-1">
          <div className="flex flex-col gap-2 p-8">
            <p className="text-2xl font-bold text-white">
              Traditional Finance <br />
              Meets Crypto
            </p>
            <p className="text-sm font-normal text-white">
              For the first time, buy precious metals and stocks with your
              crypto, and trade foreign currencies all in one place.
            </p>
          </div>
        </div>

        <div className="hero-div-3-style col-span-1">
          <div className="flex flex-col gap-2 p-8">
            <p className="text-2xl font-bold text-white">
              Community <br />
              Governed
            </p>
            <p className="text-sm font-normal text-white">
              $QUDEFI token holders influence key decisions, from treasury
              allocation to token listings.
            </p>
          </div>
        </div>
      </div>

      <Image
        src="/hero-2.png"
        alt="hero-2"
        className="absolute bottom-20 min-w-[1900px]"
        width={1900}
        height={565}
      />
    </MaxWidthWrapper>
  );
};

export default Section_1;
