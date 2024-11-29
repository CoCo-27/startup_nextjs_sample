import Image from "next/image";

const Section_5 = () => {
  return (
    <div className="relative mt-10 flex flex-col items-center justify-center gap-32 text-center sm:mt-36">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col px-40">
        <p className="turning-dev-style text-center text-[26px] font-bold">
          EMPOWERED BY THE COMMUNITY
        </p>
        <p className="text-center text-[52px] font-bold text-[#F0F2EF]">
          Decentralized Governance At Its Core
        </p>
        <p className="mt-6 text-2xl font-medium text-[#999]">
          With $QUDEFI, governance is in your hands. Token holders shape the
          exchange’s future by voting on token listings, treasury allocations,
          and more. Every $QUDEFI token acts as a vote, ensuring decisions align
          with the interests of the community that drives QuEx forward.
        </p>
      </div>
      <p className="section-5-text-style text-[66px] font-bold">
        INFOGRAPHIC <br />
        ON TREASURY <br />
        VOTE
      </p>
      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col rounded-[24px] bg-[rgba(18,19,23,0.6)]">
        <div className="flex w-full justify-between gap-36 px-20 pt-20">
          <div className="flex flex-col">
            <p className="section-5-text-style text-[66px] font-bold text-[#D9D9D9]">
              QUDEFI
            </p>
            <p className="text-[66px] font-bold text-[#D9D9D9]">TOKEN</p>
          </div>
          <p className="text-start text-[24px] font-medium text-[#999]">
            QUDEFI Token (QUDEFI) is a value-added services and privileges
            scheme based on the CoinEx business ecosystem
          </p>
          <div className="h-[42px] w-[42px] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M33.5 2C33.5 1.17157 32.8284 0.500001 32 0.5L18.5 0.500002C17.6716 0.5 17 1.17157 17 2C17 2.82843 17.6716 3.5 18.5 3.5L30.5 3.5L30.5 15.5C30.5 16.3284 31.1716 17 32 17C32.8284 17 33.5 16.3284 33.5 15.5L33.5 2ZM3.06066 33.0607L33.0607 3.06066L30.9393 0.93934L0.93934 30.9393L3.06066 33.0607Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="flex w-full gap-32 px-20 pt-20">
          <div className="flex flex-col text-start">
            <p className="text-[48px] font-normal leading-10 text-[rgba(255,255,255,0.95)]">
              0.091897
            </p>
            <p className="text-xl font-medium leading-8 text-[rgba(255,255,255,0.5)]">
              Latest Price(USD)
            </p>
          </div>
          <div className="flex flex-col text-start">
            <p className="text-[48px] font-normal leading-10 text-[rgba(255,255,255,0.95)]">
              10.00B
            </p>
            <p className="text-xl font-medium leading-8 text-[rgba(255,255,255,0.5)]">
              Total Issued(CET)
            </p>
          </div>
          <div className="flex flex-col text-start">
            <p className="text-[48px] font-normal leading-10 text-[rgba(255,255,255,0.95)]">
              2.75B
            </p>
            <p className="text-xl font-medium leading-8 text-[rgba(255,255,255,0.5)]">
              Circulating Supply(CET)
            </p>
          </div>
          <div className="flex flex-col text-start">
            <p className="text-[48px] font-normal leading-10 text-[rgba(255,255,255,0.95)]">
              71.97%
            </p>
            <p className="text-xl font-medium leading-8 text-[rgba(255,255,255,0.5)]">
              Burnt Ratio
            </p>
          </div>
        </div>
        <Image src="/graph.png" alt="graph" width={1700} height={330} />
      </div>
      <Image
        src="/section-5.png"
        alt="gradient"
        width={850}
        height={500}
        className="absolute left-0 top-[-250px]"
      />
    </div>
  );
};

export default Section_5;
