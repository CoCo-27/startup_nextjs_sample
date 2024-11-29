import Image from "next/image";

const Section_2 = () => {
  return (
    <div className="relative mt-10 flex flex-col items-center justify-center gap-14 text-center sm:mt-20">
      <div className="mx-auto flex w-full max-w-[1400px] gap-6 ">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
          >
            <path d="M55.0068 0H0V54.9779H55.0068V0Z" fill="#D92E27" />
            <path
              d="M44.7345 22.3096H10.3589V32.6686H44.7345V22.3096Z"
              fill="white"
            />
            <path
              d="M32.6392 10.3013H22.396V44.6769H32.6392V10.3013Z"
              fill="white"
            />
          </svg>
        </button>
        <p className="text-start text-2xl font-normal text-[#DADADA]">
          QuEx A.G. is a member of Supervisory Organisation for Financial
          Intermediaries & Trustees ("SO-FIT"), recognized by the Swiss
          Financial Market Supervisory Authority (“FINMA”).
        </p>
      </div>
      <p className="mx-auto max-w-[1400px] text-[40px] font-bold text-white ">
        <span className="turning-dev-style">
          A Regulated Centralized Exchange
        </span>{" "}
        With a Decentralised Core
      </p>
      <div className="mx-auto flex w-full max-w-[1400px] justify-between gap-32 text-start ">
        <p className="min-w-[192px] text-2xl font-normal text-white">
          Built on <br />
          Proven Technology, <br />
          Governed by You
        </p>
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-medium text-white">
            QuEx will operate under Switzerland's robust regulatory framework,
            offering unmatched security and transparency. Meanwhile, the QuDefi
            token empowers the community to shape the exchange’s future through
            decentralized governance. Together, they redefine crypto trading.
          </p>
          <p className="text-[32px] font-medium text-white">Learn More</p>
        </div>
      </div>

      <Image
        src="/section-2-1.png"
        alt="section-2-1"
        // className="absolute bottom-[-800px] min-w-[1900px]"
        className="mt-[-150px] min-w-[2100px] rotate-[7.673deg]"
        width={1900}
        height={565}
      />
    </div>
  );
};

export default Section_2;
