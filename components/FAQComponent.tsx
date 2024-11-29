"use client";
import { useRef, useState } from "react";

const FaqsCard = (props: any) => {
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
      setAnswerH(`${answerElH + 20}px`);
    }
  };

  return (
    <div
      className="mb-5 space-y-3 overflow-hidden border-t border-[#434343] pt-5"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4
        className={`${
          state ? "pb-5" : ""
        } flex cursor-pointer items-center justify-between text-[28px] font-bold text-[#F0F2EF]`}
      >
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle
              cx="16"
              cy="16"
              r="16"
              transform="rotate(-90 16 16)"
              fill="#A8A7A7"
            />
            <path
              d="M16.5303 12.4697C16.2374 12.1768 15.7626 12.1768 15.4697 12.4697L10.6967 17.2426C10.4038 17.5355 10.4038 18.0104 10.6967 18.3033C10.9896 18.5962 11.4645 18.5962 11.7574 18.3033L16 14.0607L20.2426 18.3033C20.5355 18.5962 21.0104 18.5962 21.3033 18.3033C21.5962 18.0104 21.5962 17.5355 21.3033 17.2426L16.5303 12.4697ZM16.75 14L16.75 13L15.25 13L15.25 14L16.75 14Z"
              fill="#073B37"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M15.4697 19.5303C15.7626 19.8232 16.2374 19.8232 16.5303 19.5303L21.3033 14.7574C21.5962 14.4645 21.5962 13.9896 21.3033 13.6967C21.0104 13.4038 20.5355 13.4038 20.2426 13.6967L16 17.9393L11.7574 13.6967C11.4645 13.4038 10.9896 13.4038 10.6967 13.6967C10.4038 13.9896 10.4038 14.4645 10.6967 14.7574L15.4697 19.5303ZM15.25 18L15.25 19L16.75 19L16.75 18L15.25 18Z"
              fill="white"
            />
            <circle
              cx="16"
              cy="16"
              r="15.25"
              transform="rotate(90 16 16)"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-2xl font-normal text-[#F0F2EF]">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const faqsList = [
    {
      q: "What are some random questions to ask?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "Do you include common questions?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I use this for 21 questions?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Are these questions for girls or for boys?",
      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
    },
    {
      q: "What do you wish you had more talent doing?",
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    },
  ];

  return (
    <section className="mx-auto mt-12 max-w-screen-xl px-4 leading-relaxed md:px-8">
      <div className="mx-auto mt-14 max-w-[1200px]">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};
