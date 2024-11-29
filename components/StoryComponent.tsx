"use client";
import { useRef, useState } from "react";
import Image from "next/image";

const StoryFaq = (props: any) => {
  const answerElRef = useRef<HTMLDivElement | null>(null); // Specify the type of the ref
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    if (answerElRef.current) {
      // Check if answerElRef.current is defined
      const answerElH = (answerElRef.current.childNodes[0] as HTMLElement)
        .offsetHeight; // Cast to HTMLElement
      setState(!state);
      setAnswerH(`${answerElH + 340}px`);
    }
  };

  return (
    <div
      className={`${
        state
          ? "rounded-[23px] bg-[rgba(10,10,10,0.7)] p-10"
          : "items-center px-10 pt-5"
      } mb-5 flex cursor-pointer justify-between border-t border-[#1A1A1A]`}
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4
        className={`${
          state
            ? "pb-5 text-[66px] text-white"
            : "items-center text-[40px] text-[#CCC]"
        } flex cursor-pointer justify-between font-normal`}
      >
        {faqsList.q}
      </h4>

      <div
        ref={answerElRef}
        className="pl-[100px] pr-[50px] duration-300"
        hidden={!state}
        style={state ? { height: answerH } : { height: "0px" }}
      >
        {faqsList.a.map((item: any, index: any) => {
          return (
            <div key={index} className="flex">
              <div className="flex w-full gap-4 pt-4">
                <div className="min-h-5 min-w-5 mt-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      d="M11 1C11 0.447715 10.5523 1.30289e-08 10 4.34497e-07L1 2.23763e-07C0.447715 2.23763e-07 -1.0013e-07 0.447715 -1.0013e-07 1C-1.0013e-07 1.55229 0.447715 2 1 2L9 2L9 10C9 10.5523 9.44771 11 10 11C10.5523 11 11 10.5523 11 10L11 1ZM2.70711 9.70711L10.7071 1.70711L9.29289 0.292894L1.29289 8.29289L2.70711 9.70711Z"
                      fill="#04AA9D"
                    />
                  </svg>
                </div>
                <p className="text-2xl font-normal text-[#86828D]">{item}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="min-w-4 min-h-4">
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="3"
            viewBox="0 0 21 3"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 1.5C0 0.671977 0.586961 0 1.31174 0H19.6883C20.413 0 21 0.671977 21 1.5C21 2.32802 20.413 3 19.6883 3H1.31174C0.586961 3 0 2.32802 0 1.5Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M10.5 0C9.87306 0 9.36487 0.508228 9.36487 1.13514V9.3649H1.13514C0.508228 9.3649 0 9.8731 0 10.5C0 11.127 0.508228 11.6352 1.13514 11.6352H9.36487V19.8649C9.36487 20.4918 9.87306 21 10.5 21C11.1269 21 11.6351 20.4918 11.6351 19.8649V11.6352H19.8649C20.4918 11.6352 21 11.127 21 10.5C21 9.8731 20.4918 9.3649 19.8649 9.3649H11.6351V1.13514C11.6351 0.508228 11.1269 0 10.5 0Z"
              fill="#86828D"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default () => {
  const faqsList = [
    {
      q: "2023",
      a: [
        "We lead the way in simplifying crypto trading with an intuitive platform that ensures security and efficiency.",
        "With top-tier encryption and fully regulated processes, we prioritize safeguarding your investments while maintaining transparency.",
        "Our platform is built for both beginners and experienced traders, making digital assets easy to navigate.",
        "We offer a wide range of digital assets, empowering users to diversify and explore new investment avenues.",
      ],
    },
    {
      q: "2022",
      a: [
        "We lead the way in simplifying crypto trading with an intuitive platform that ensures security and efficiency.",
        "With top-tier encryption and fully regulated processes, we prioritize safeguarding your investments while maintaining transparency.",
        "Our platform is built for both beginners and experienced traders, making digital assets easy to navigate.",
        "We offer a wide range of digital assets, empowering users to diversify and explore new investment avenues.",
      ],
    },
    {
      q: "2021",
      a: [
        "We lead the way in simplifying crypto trading with an intuitive platform that ensures security and efficiency.",
        "With top-tier encryption and fully regulated processes, we prioritize safeguarding your investments while maintaining transparency.",
        "Our platform is built for both beginners and experienced traders, making digital assets easy to navigate.",
        "We offer a wide range of digital assets, empowering users to diversify and explore new investment avenues.",
      ],
    },
    {
      q: "2020",
      a: [
        "We lead the way in simplifying crypto trading with an intuitive platform that ensures security and efficiency.",
        "With top-tier encryption and fully regulated processes, we prioritize safeguarding your investments while maintaining transparency.",
        "Our platform is built for both beginners and experienced traders, making digital assets easy to navigate.",
        "We offer a wide range of digital assets, empowering users to diversify and explore new investment avenues.",
      ],
    },
    {
      q: "2019",
      a: [
        "We lead the way in simplifying crypto trading with an intuitive platform that ensures security and efficiency.",
        "With top-tier encryption and fully regulated processes, we prioritize safeguarding your investments while maintaining transparency.",
        "Our platform is built for both beginners and experienced traders, making digital assets easy to navigate.",
        "We offer a wide range of digital assets, empowering users to diversify and explore new investment avenues.",
      ],
    },
    {
      q: "2018",
      a: [
        "We lead the way in simplifying crypto trading with an intuitive platform that ensures security and efficiency.",
        "With top-tier encryption and fully regulated processes, we prioritize safeguarding your investments while maintaining transparency.",
        "Our platform is built for both beginners and experienced traders, making digital assets easy to navigate.",
        "We offer a wide range of digital assets, empowering users to diversify and explore new investment avenues.",
      ],
    },
  ];

  return (
    <section className="mt-12 px-4 leading-relaxed md:px-8">
      <div className="mx-auto mt-14 max-w-[1200px]">
        {faqsList.map((item, idx) => (
          <StoryFaq key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};
