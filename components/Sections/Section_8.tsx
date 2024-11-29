"use client";

import Image from "next/image";

const Section_8 = () => {
  return (
    <div className="relative mt-[140px] flex flex-col items-center justify-center text-center">
      <div className="flex w-full flex-col">
        <p className="turning-dev-style text-[26px] font-bold text-white">
          BUILT ON PROVEN TECHNOLOGY
        </p>
        <p className="text-[52px] font-bold text-[#F0F2EF]">
          A Legacy Of Financial Excellence
        </p>
      </div>
      <div className="mx-auto mt-[30px] flex w-full max-w-[1200px] flex-col gap-10">
        <p className="text-2xl font-medium text-[#999]">
          QuEx will be built on battle-tested technology developed by QuSoft
          LLC, trusted by banks, hedge funds, and family offices for over a
          decade. This proven infrastructure ensures reliability, scalability,
          and security, providing a platform designed to evolve with you.
        </p>
        <p className="text-2xl font-medium text-[#999]">
          These cutting-edge tools, once reserved for the elite will soon be now
          at your fingertips. This legacy of reliability will serve the broader
          QuDefi ecosystem, delivering tools once reserved for institutions to
          the global crypto community. We grow together.
        </p>
      </div>

      <div className="mt-[150px]">
        <Image src="/computer.png" alt="computer" width={1264} height={764} />
      </div>

      <Image
        src="/section-8-gradient.svg"
        alt="gradient"
        width={600}
        height={900}
        className="absolute bottom-[-200px] left-20 z-10"
      />
    </div>
  );
};

export default Section_8;
