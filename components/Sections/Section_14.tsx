import Image from "next/image";

const Section_14 = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-16 py-16">
      <div className="flex w-full items-center justify-between gap-4">
        <Image
          src="/logo.svg"
          alt="convo logo"
          width={130}
          height={32}
          quality={100}
        />

        <div className="flex gap-4">
          <p className="text-base font-normal text-[#B9B6BF]">HOME</p>
          <p className="text-base font-normal text-[#B9B6BF]">OUR VISION</p>
          <p className="text-base font-normal text-[#B9B6BF]">OUR PARTNERS</p>
          <p className="text-base font-normal text-[#B9B6BF]">FEATURES</p>
          <p className="text-base font-normal text-[#B9B6BF]">OUR STORY</p>
        </div>
        <div className="flex items-center space-x-4">
          <Image src="/x-icon.svg" alt="x" width={24} height={24} />
          <Image
            src="/telegram-icon.svg"
            alt="telegram"
            width={24}
            height={24}
          />
          <Image src="/discord-icon.svg" alt="discord" width={24} height={24} />
          <Image
            src="/linkedin-icon.svg"
            alt="linkedin"
            width={24}
            height={24}
          />
          <Image
            src="/instagram-icon.svg"
            alt="instagram"
            width={24}
            height={24}
          />
          <Image src="/youtubu-icon.svg" alt="youtubu" width={24} height={24} />
          <Image src="/show-icon.svg" alt="show" width={24} height={24} />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <p className="text-xs font-normal text-[#F0F2EF] opacity-[0.6]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC
        </p>
        <p className="text-xs font-normal text-[#F0F2EF] opacity-[0.6]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </div>
    </div>
  );
};

export default Section_14;
