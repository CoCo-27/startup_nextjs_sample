import FAQComponent from "../FAQComponent";

const Section_12 = () => {
  return (
    <div className="relative w-full py-[200px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center">
        <p className="turning-dev-style text-[45px] font-bold text-white">
          Frequently Asked Questions
        </p>
        <p className="mt-5 text-center text-2xl font-medium text-[#999]">
          Our FAQ section offers quick answers to common questions, helping you
          easily navigate our platform and services.
        </p>
      </div>
      <FAQComponent />
      <div className="absolute left-[-500px] top-[-500px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1150"
          height="1761"
          viewBox="0 0 1150 1761"
          fill="none"
        >
          <g opacity="0.4" filter="url(#filter0_f_683_7867)">
            <circle cx="269.5" cy="880.5" r="296.5" fill="#00FEEA" />
          </g>
          <defs>
            <filter
              id="filter0_f_683_7867"
              x="-611"
              y="0"
              width="1761"
              height="1761"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="292"
                result="effect1_foregroundBlur_683_7867"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Section_12;
