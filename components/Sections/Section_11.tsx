"use client";
import React, { useState } from "react"; // Import useState for state management
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section_11 = () => {
  const data = [
    {
      index: 0,
      image: "/slider-1.png",
      subTitle: (
        <p className="text-sm font-normal text-[#717171]">10 November 2024</p>
      ),
      Title: (
        <p className="slider-text-style text-[26px] font-bold">
          At Wow Submit <br /> Bangkok, Thailand
        </p>
      ),
      description: (
        <p className="text-lg font-normal text-[#ABABAB]">
          This year's WOW Summit is not just a Web3 event. It will also cover
          AI, mobility, fintech, and more, showcasing true mass adoption
          technologies and the future of digital innovation.
        </p>
      ),
    },
    {
      index: 1,
      image: "/slider-2.png",
      subTitle: (
        <p className="text-sm font-normal text-[#717171]">10 November 2024</p>
      ),
      Title: (
        <p className="slider-text-style text-[26px] font-bold">
          Case Study: TipLink Makes <br /> Payments as Easy as Sending
        </p>
      ),
      description: (
        <p className="text-lg font-normal text-[#ABABAB]">
          This year's WOW Summit is not just a Web3 event. It will also cover
          AI, mobility, fintech, and more, showcasing true mass adoption
          technologies and the future of digital innovation.
        </p>
      ),
    },
    {
      index: 2,
      image: "/slider-3.png",
      subTitle: (
        <p className="text-sm font-normal text-[#717171]">10 November 2024</p>
      ),
      Title: (
        <p className="slider-text-style text-[26px] font-bold">
          At Wow Submit <br /> Bangkok, Thailand
        </p>
      ),
      description: (
        <p className="text-lg font-normal text-[#ABABAB]">
          This year's WOW Summit is not just a Web3 event. It will also cover
          AI, mobility, fintech, and more, showcasing true mass adoption
          technologies and the future of digital innovation.
        </p>
      ),
    },
    {
      index: 3,
      image: "/slider-1.png",
      subTitle: (
        <p className="text-sm font-normal text-[#717171]">10 November 2024</p>
      ),
      Title: (
        <p className="slider-text-style text-[26px] font-bold">
          At Wow Submit <br /> Bangkok, Thailand
        </p>
      ),
      description: (
        <p className="text-lg font-normal text-[#ABABAB]">
          This year's WOW Summit is not just a Web3 event. It will also cover
          AI, mobility, fintech, and more, showcasing true mass adoption
          technologies and the future of digital innovation.
        </p>
      ),
    },
    {
      index: 4,
      image: "/slider-2.png",
      subTitle: (
        <p className="text-sm font-normal text-[#717171]">10 November 2024</p>
      ),
      Title: (
        <p className="slider-text-style text-[26px] font-bold">
          At Wow Submit <br /> Bangkok, Thailand
        </p>
      ),
      description: (
        <p className="text-lg font-normal text-[#ABABAB]">
          This year's WOW Summit is not just a Web3 event. It will also cover
          AI, mobility, fintech, and more, showcasing true mass adoption
          technologies and the future of digital innovation.
        </p>
      ),
    },
    {
      index: 5,
      image: "/slider-3.png",
      subTitle: (
        <p className="text-sm font-normal text-[#717171]">10 November 2024</p>
      ),
      Title: (
        <p className="slider-text-style text-[26px] font-bold">
          At Wow Submit <br /> Bangkok, Thailand
        </p>
      ),
      description: (
        <p className="text-lg font-normal text-[#ABABAB]">
          This year's WOW Summit is not just a Web3 event. It will also cover
          AI, mobility, fintech, and more, showcasing true mass adoption
          technologies and the future of digital innovation.
        </p>
      ),
    },
  ];

  var settings = {
    focusOnSelect: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center justify-center gap-[50px] pt-[96px]">
        <div className="flex w-full justify-between gap-4">
          <p className="turning-dev-style text-[45px] font-bold text-white">
            News And Blog Articles
          </p>
          <button className="rounded-[100px] border border-solid border-[#F0F2EF] px-[50px] py-6 text-center text-lg font-bold text-[#F0F2EF]">
            BROWER ALL
          </button>
        </div>

        <Slider {...settings} className="w-full">
          {data.map((item) => (
            <div key={item.index} className="flex flex-col gap-8 p-4">
              <div className="flex flex-col gap-4">
                <Image src={item.image} alt="image" width={454} height={300} />
                {item.subTitle}
                {item.Title}
                {item.description}
              </div>
              <div className="mt-6 flex w-full items-center gap-6">
                <p className="text-xl font-bold text-[#F0F2EF]">Read Article</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M14.9993 0.962988C14.9789 0.411082 14.5149 -0.0197562 13.963 0.000684501L4.96915 0.33379C4.41725 0.354231 3.98641 0.818211 4.00685 1.37012C4.02729 1.92202 4.49127 2.35286 5.04318 2.33242L13.0377 2.03633L13.3338 10.0308C13.3542 10.5828 13.8182 11.0136 14.3701 10.9931C14.922 10.9727 15.3529 10.5087 15.3324 9.95682L14.9993 0.962988ZM1.73279 15.6805L14.7328 1.68045L13.2672 0.319549L0.267206 14.3195L1.73279 15.6805Z"
                    fill="#F0F2EF"
                  />
                </svg>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Section_11;
