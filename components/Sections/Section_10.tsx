import Image from "next/image";
import StoryComponent from "../StoryComponent";

const Section_10 = () => {
  return (
    <div className="relative w-full py-[200px]">
      <div className="z-20 mx-auto flex w-full max-w-[1420px] flex-col">
        <div className="flex w-full flex-col items-center justify-center">
          <p className="turning-dev-style text-[26px] font-bold text-white">
            JOIN THE MOVEMENT
          </p>
          <p className="text-center text-[52px] font-bold text-[#F0F2EF]">
            Where Blockchain Meets Community-Driven Finance
          </p>
          <p className="mt-10 text-center text-2xl font-medium text-[#999]">
            The QuDefi ecosystem is not just an evolution of crypto—it's a
            revolution. By combining cutting-edge technology, regulatory
            compliance, and decentralized governance, we're setting a new
            standard for what's possible in financial innovation.
          </p>
        </div>
        <p className="turning-dev-style mb-[50px] mt-[100px] text-center text-[45px] font-bold text-white">
          Our Story
        </p>

        <StoryComponent />
      </div>
      <div className="absolute left-[-100px] top-[350px]">
        <Image src="/section-10.svg" alt="gradient" width={810} height={900} />
      </div>
    </div>
  );
};

export default Section_10;
