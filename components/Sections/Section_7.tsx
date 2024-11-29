"use client";

import Image from "next/image";
import { useState } from "react";

const Section_7 = () => {
  const [btnFlag, setBtnFlag] = useState<Number>(0);

  return (
    <div className="relative mt-[52px] flex flex-col items-center justify-center gap-14 text-center">
      <div className="z-10 mx-auto flex w-full max-w-[1500px] flex-col gap-[60px]">
        <div className="flex w-full justify-between">
          <div className="flex flex-col text-start">
            <p className="turning-dev-style text-[45px] font-bold text-white">
              Connecting Retail
            </p>
            <p className="text-[45px] font-bold text-white">
              And Institutional Investors
            </p>
          </div>
          <p className="text-end text-2xl font-normal leading-10 text-[#86828D]">
            QuEx's structured products, will be listed on Bloomberg Marketplace,{" "}
            <br />
            attracting institutional capital to the exchange. Meanwhile, $QUDEFI
            holders <br />
            vote on token listings, ensuring diversity and relevance.
          </p>
        </div>
        <div className="grid w-full grid-cols-3 gap-[30px]">
          <div className="col-span-1 flex h-[340px] flex-col gap-5 rounded-2xl border border-solid border-[rgba(255,255,255,0.05)] bg-[#151418] p-6 text-start backdrop-blur-[6px]">
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#149C42]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M11.2502 20.2125L6.91268 15.875C6.67896 15.6413 6.36196 15.51 6.03143 15.51C5.7009 15.51 5.3839 15.6413 5.15018 15.875C4.91646 16.1088 4.78516 16.4258 4.78516 16.7563C4.78516 16.9199 4.81739 17.082 4.88002 17.2332C4.94265 17.3844 5.03445 17.5218 5.15018 17.6375L10.3752 22.8625C10.8627 23.35 11.6502 23.35 12.1377 22.8625L25.3627 9.63754C25.5964 9.40381 25.7277 9.08682 25.7277 8.75629C25.7277 8.42575 25.5964 8.10876 25.3627 7.87504C25.129 7.64131 24.812 7.51001 24.4814 7.51001C24.1509 7.51001 23.8339 7.64131 23.6002 7.87504L11.2502 20.2125Z"
                  fill="#FDFCFF"
                />
              </svg>
            </div>
            <p className="text-2xl font-normal text-[#FDFCFF]">
              STRUCTURED PRODUCTS <br />
              ON BLOOMBERG
            </p>
            <p className="font-normal text-[#FDFCFF] opacity-[0.7]">
              Institutional investors drive liquidity to the exchange through
              professional-grade offerings.
            </p>
          </div>
          <div className="col-span-1 flex h-[340px] flex-col gap-5 rounded-2xl border border-solid border-[rgba(255,255,255,0.05)] bg-[#151418] p-6 text-start backdrop-blur-[6px]">
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#C59917]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M9.63257 20.2403L9.70328 20.311L9.77401 20.2403L13.6478 16.3665L14.7181 17.4368L9.7033 22.4516L6.91342 19.6617L7.98451 18.5914L9.63257 20.2403ZM24.3127 25.9305H20.9752V24.4118H24.3127H24.4127V24.3118V13.9993V13.8993H24.3127H20.9752V7.12427V7.12414C20.974 6.18633 20.6009 5.28727 19.9378 4.62413C19.2983 3.98458 18.4392 3.61483 17.5377 3.5883V2.06912C18.842 2.09641 20.0869 2.62643 21.0112 3.55072C21.9591 4.49863 22.4924 5.78383 22.4939 7.12438V12.2805V12.3805H22.5939H24.3127C24.742 12.3805 25.1537 12.5511 25.4573 12.8546C25.7609 13.1582 25.9314 13.57 25.9314 13.9993V24.3118C25.9314 24.7411 25.7609 25.1528 25.4573 25.4564C25.1537 25.76 24.742 25.9305 24.3127 25.9305Z"
                  fill="#FDFCFF"
                  stroke="white"
                  strokeWidth="0.2"
                />
                <path
                  d="M15.6188 12.2805V12.3805H15.7188H17.4375C17.8668 12.3805 18.2786 12.5511 18.5821 12.8546C18.8857 13.1582 19.0563 13.57 19.0563 13.9993V24.3118C19.0563 24.7411 18.8857 25.1528 18.5821 25.4564C18.2786 25.76 17.8668 25.9305 17.4375 25.9305H3.6875C3.25818 25.9305 2.84645 25.76 2.54287 25.4564C2.2393 25.1528 2.06875 24.7411 2.06875 24.3118V13.9993C2.06875 13.57 2.2393 13.1582 2.54287 12.8546C2.84645 12.5511 3.25818 12.3805 3.6875 12.3805H5.40625H5.50625V12.2805V7.12427C5.50625 5.78327 6.03896 4.49719 6.98719 3.54896C7.93542 2.60073 9.2215 2.06802 10.5625 2.06802C11.9035 2.06802 13.1896 2.60073 14.1378 3.54896C15.086 4.49719 15.6188 5.78327 15.6188 7.12427V12.2805ZM14 12.3805H14.1V12.2805V7.12427C14.1 6.18606 13.7273 5.28629 13.0639 4.62288C12.4005 3.95947 11.5007 3.58677 10.5625 3.58677C9.6243 3.58677 8.72452 3.95947 8.06111 4.62288C7.3977 5.28629 7.025 6.18606 7.025 7.12427V12.2805V12.3805H7.125H14ZM17.4375 24.4118H17.5375V24.3118V13.9993V13.8993H17.4375H3.6875H3.5875V13.9993V24.3118V24.4118H3.6875H17.4375Z"
                  fill="#FDFCFF"
                  stroke="white"
                  strokeWidth="0.2"
                />
              </svg>
            </div>
            <p className="text-2xl font-normal text-[#FDFCFF]">
              COMMUNITY-DRIVEN <br />
              LISTINGS
            </p>
            <p className="font-normal text-[#FDFCFF] opacity-[0.7]">
              Memecoins and utility tokens handpicked by $QUDEFI holders attract
              a diverse user base.
            </p>
          </div>
          <div className="col-span-1 flex h-[340px] flex-col gap-5 rounded-2xl border border-solid border-[rgba(255,255,255,0.05)] bg-[#151418] p-6 text-start backdrop-blur-[6px]">
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#149C42]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M11.2502 20.2125L6.91268 15.875C6.67896 15.6413 6.36196 15.51 6.03143 15.51C5.7009 15.51 5.3839 15.6413 5.15018 15.875C4.91646 16.1088 4.78516 16.4258 4.78516 16.7563C4.78516 16.9199 4.81739 17.082 4.88002 17.2332C4.94265 17.3844 5.03445 17.5218 5.15018 17.6375L10.3752 22.8625C10.8627 23.35 11.6502 23.35 12.1377 22.8625L25.3627 9.63754C25.5964 9.40381 25.7277 9.08682 25.7277 8.75629C25.7277 8.42575 25.5964 8.10876 25.3627 7.87504C25.129 7.64131 24.812 7.51001 24.4814 7.51001C24.1509 7.51001 23.8339 7.64131 23.6002 7.87504L11.2502 20.2125Z"
                  fill="#FDFCFF"
                />
              </svg>
            </div>
            <p className="text-2xl font-normal text-[#FDFCFF]">
              SOPHSTICATED <br />
              OTC MARKETPLACE
            </p>
            <p className="font-normal text-[#FDFCFF] opacity-[0.7]">
              A safe space for large trades that protects token charts and
              maximizes gains.
            </p>
          </div>
          <div className="col-span-1 flex h-[340px] flex-col justify-between gap-2 rounded-2xl border border-solid border-[rgba(255,255,255,0.05)] bg-[#151418] p-6 text-start backdrop-blur-[6px]">
            <div className="flex w-full justify-between gap-4">
              <div className="flex gap-2">
                <Image src="/VIP-icon.svg" alt="vip" width={24} height={24} />
                <p className="text-2xl font-normal text-[#EFEFF8]">VIP Lv. 0</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-normal text-[#01BC8D]">
                  View more
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M5.13574 11.6955L11.5262 5.30505"
                    stroke="#01BC8D"
                    strokeWidth="1.09551"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.13574 5.30505H11.5262V11.6955"
                    stroke="#01BC8D"
                    strokeWidth="1.09551"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex w-full justify-between gap-2">
              <div className="flex w-1/2 flex-col gap-3 rounded-[10px] border border-solid border-[rgba(255,255,255,0.07)] p-4">
                <p className="text-sm font-normal text-[#EFEFF8] opacity-[0.7]">
                  Spot fee rate
                </p>
                <div className="flex w-full items-center justify-between">
                  <p className="text-lg font-medium text-[#EFEFF8]">0.20 %</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="17"
                    viewBox="0 0 2 17"
                    fill="none"
                  >
                    <path
                      opacity="0.12"
                      d="M0.806152 0.623535L0.806152 15.9606"
                      stroke="#EFEFF8"
                      strokeWidth="1.09551"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="text-lg font-medium text-[#EFEFF8]">0.22 %</p>
                </div>
              </div>
              <div className="flex w-1/2 flex-col gap-3 rounded-[10px] border border-solid border-[rgba(255,255,255,0.07)] p-4">
                <p className="text-sm font-normal text-[#EFEFF8] opacity-[0.7]">
                  Futures free arte
                </p>
                <div className="flex w-full items-center justify-between">
                  <p className="text-lg font-medium text-[#EFEFF8]">0.02 %</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="17"
                    viewBox="0 0 2 17"
                    fill="none"
                  >
                    <path
                      opacity="0.12"
                      d="M0.806152 0.623535L0.806152 15.9606"
                      stroke="#EFEFF8"
                      strokeWidth="1.09551"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="text-lg font-medium text-[#EFEFF8]">0.06 %</p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-4">
              <div className="flex w-full items-center gap-5">
                <p className="text-base font-normal text-[#EFEFF8]">
                  KCS holdings
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              <div className="flex w-full items-center gap-4">
                <div className="h-2.5 w-full rounded-full bg-[#191a1a]">
                  <div
                    className="h-2.5 rounded-full bg-[#01BC8D]"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div className="flex w-full justify-between gap-2">
                <p className="text-sm font-normal text-[#EFEFF8] opacity-[0.6]">
                  Lv. 0
                </p>
                <p className="text-sm font-normal text-[#EFEFF8] opacity-[0.6]">
                  Increase your KCS holdings by 1,000 <br />
                  KCS to upgrade to the next level.
                </p>
                <p className="text-sm font-normal text-[#EFEFF8] opacity-[0.6]">
                  Lv. 0
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex h-[340px] flex-col justify-between gap-2 rounded-2xl border border-solid border-[rgba(255,255,255,0.05)] bg-[#151418] p-6 text-start backdrop-blur-[6px]">
            <p className="text-2xl font-normal text-[#EFEFF8]">
              Deposit or buy crypto through <br />
              these methods.
            </p>
            <div className="flex w-full flex-col gap-4">
              <div className="flex w-full items-center justify-between gap-3 rounded-[13px] border border-solid border-[rgba(255,255,255,0.07)] p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#01BC8D]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="20"
                      viewBox="0 0 23 20"
                      fill="none"
                    >
                      <path
                        d="M14.381 0.181274C11.5845 0.181274 9.303 2.46281 9.303 5.25933C9.303 8.05584 11.5845 10.3374 14.381 10.3374C17.1776 10.3374 19.4591 8.05584 19.4591 5.25933C19.4591 2.46281 17.1776 0.181274 14.381 0.181274ZM14.381 1.53542C16.4457 1.53542 18.1049 3.19465 18.1049 5.25933C18.1049 7.324 16.4457 8.98323 14.381 8.98323C12.3164 8.98323 10.6571 7.324 10.6571 5.25933C10.6571 3.19465 12.3164 1.53542 14.381 1.53542ZM14.307 2.20192C14.1898 2.21609 14.0784 2.26065 13.9838 2.33117C13.8891 2.40168 13.8145 2.49571 13.7674 2.60393C13.5193 2.64813 13.2813 2.72303 13.0586 2.85783C12.6571 3.10091 12.3498 3.60679 12.3498 4.12734C12.3498 4.52434 12.5094 4.8833 12.7201 5.13237C12.9308 5.38145 13.1825 5.53952 13.4078 5.65076C13.8583 5.87323 14.2858 5.92582 14.2858 5.92582C14.2858 5.92582 14.5354 5.97267 14.7619 6.08451C14.8751 6.14043 14.962 6.21322 15.0052 6.26436C15.0485 6.31549 15.0581 6.32206 15.0581 6.39131C15.0581 6.49463 15.0758 6.44797 14.9946 6.4971C14.9135 6.54623 14.6907 6.61347 14.381 6.61347C13.7722 6.61347 13.376 6.37015 13.376 6.37015C13.2217 6.27756 13.0369 6.25006 12.8623 6.29371C12.6877 6.33736 12.5376 6.44857 12.445 6.60289C12.3524 6.75721 12.325 6.94199 12.3686 7.11658C12.4122 7.29118 12.5235 7.44128 12.6778 7.53387C12.6778 7.53387 13.109 7.79822 13.7674 7.91472C13.8219 8.03149 13.9086 8.13028 14.0173 8.19949C14.126 8.26871 14.2522 8.30548 14.381 8.30548C14.5099 8.30548 14.6361 8.26871 14.7448 8.19949C14.8535 8.13028 14.9401 8.03149 14.9946 7.91472C15.2427 7.87052 15.4808 7.79562 15.7035 7.66082C16.105 7.41774 16.4123 6.91186 16.4123 6.39131C16.4123 5.99431 16.2526 5.63535 16.042 5.38628C15.8313 5.1372 15.5796 4.97913 15.3543 4.86789C14.9038 4.64542 14.4763 4.59283 14.4763 4.59283C14.4763 4.59283 14.2267 4.54598 14.0002 4.43414C13.8869 4.37822 13.8001 4.30543 13.7569 4.25429C13.7136 4.20316 13.704 4.19659 13.704 4.12734C13.704 4.02402 13.6863 4.07068 13.7674 4.02155C13.8486 3.97242 14.0714 3.90518 14.381 3.90518C14.9898 3.90518 15.3861 4.1485 15.3861 4.1485C15.5404 4.24109 15.7252 4.26859 15.8998 4.22494C16.0744 4.18129 16.2245 4.07008 16.3171 3.91576C16.4096 3.76144 16.4371 3.57666 16.3935 3.40207C16.3498 3.22747 16.2386 3.07737 16.0843 2.98478C16.0843 2.98478 15.6531 2.72043 14.9946 2.60393C14.9411 2.48341 14.8534 2.38117 14.7426 2.30975C14.6317 2.23834 14.5024 2.20086 14.3705 2.20192C14.3493 2.20092 14.3281 2.20092 14.307 2.20192ZM4.15089 8.30616C3.15108 8.33472 2.04132 8.53813 0.903057 9.03613C0.782541 9.08971 0.680297 9.17732 0.608881 9.28821C0.537464 9.39909 0.499985 9.52841 0.501044 9.6603V15.0769C0.499776 15.1666 0.516351 15.2557 0.549808 15.3389C0.583265 15.4222 0.632936 15.498 0.695934 15.5619C0.758931 15.6258 0.834 15.6765 0.916777 15.7111C0.999554 15.7458 1.08839 15.7636 1.17812 15.7636C1.26785 15.7636 1.35668 15.7458 1.43946 15.7111C1.52223 15.6765 1.5973 15.6258 1.6603 15.5619C1.7233 15.498 1.77297 15.4222 1.80643 15.3389C1.83988 15.2557 1.85646 15.1666 1.85519 15.0769V10.1575C2.8114 9.80444 3.73572 9.64483 4.55291 9.6603C6.17381 9.69099 7.63123 10.3124 9.20778 10.9827C10.7843 11.653 12.4793 12.3686 14.508 12.3686C14.7893 12.3686 15.1004 12.7159 15.1004 13.0457C15.1004 13.3754 14.7893 13.7227 14.508 13.7227H9.98007C9.89035 13.7215 9.80127 13.738 9.71802 13.7715C9.63476 13.805 9.55898 13.8546 9.49508 13.9176C9.43119 13.9806 9.38045 14.0557 9.34582 14.1385C9.31119 14.2213 9.29336 14.3101 9.29336 14.3998C9.29336 14.4895 9.31119 14.5784 9.34582 14.6612C9.38045 14.7439 9.43119 14.819 9.49508 14.882C9.55898 14.945 9.63476 14.9947 9.71802 15.0281C9.80127 15.0616 9.89035 15.0782 9.98007 15.0769H14.508C15.6333 15.0769 16.4546 14.1092 16.4546 13.0457C16.4546 12.8608 16.3957 12.6912 16.3488 12.5167L20.1679 11.7021C20.5321 11.7202 20.8132 11.9988 20.8132 12.3686C20.8132 12.5531 20.7281 12.702 20.6122 12.8235L12.1488 17.764C10.9854 17.7289 9.87643 17.2747 8.61535 16.6532C7.30438 16.0071 5.85036 15.2132 4.05568 14.7595C3.88172 14.7146 3.69705 14.7407 3.5423 14.8319C3.38755 14.9232 3.27539 15.0722 3.2305 15.2462C3.1856 15.4201 3.21165 15.6048 3.30292 15.7595C3.39418 15.9143 3.54318 16.0264 3.71714 16.0713C5.31454 16.4752 6.66718 17.2069 8.01233 17.8698C9.35748 18.5328 10.7171 19.1393 12.2864 19.1393C12.4056 19.138 12.5224 19.1051 12.6249 19.0441L21.4163 13.9343C21.4622 13.9077 21.5048 13.8757 21.5432 13.8391C21.9302 13.47 22.1674 12.9427 22.1674 12.3686C22.1674 11.2548 21.25 10.3374 20.1362 10.3374C20.0901 10.3362 20.044 10.3398 19.9986 10.348L15.4707 11.3212C15.1871 11.1471 14.8734 11.0144 14.508 11.0144C12.7982 11.0144 11.3055 10.4013 9.73675 9.73436C8.16799 9.06739 6.52243 8.34304 4.57406 8.30616C4.43604 8.30354 4.29372 8.30208 4.15089 8.30616Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[20px] font-normal text-[#EFEFF8]">
                      Buy Crypto
                    </p>
                    <p className="text-sm font-normal text-[#7E8DA6]">
                      Local currency, payment methods accepted.
                    </p>
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-solid border-[#162D35]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <path
                      d="M8.49002 16.2962L9.32642 14.8475M13.843 7.0246L8.35877 8.49409M13.843 7.0246L15.3124 12.5088M13.843 7.0246L10.3301 13.1091"
                      stroke="#01BC8D"
                      strokeWidth="1.08333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex w-full items-center justify-between gap-3 rounded-[13px] border border-solid border-[rgba(255,255,255,0.07)] p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#EAB720]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                    >
                      <g id="Group 291995">
                        <path
                          id="Vector"
                          d="M5.48309 10.2617C2.59241 10.2617 0.413086 11.6031 0.413086 13.3817V19.6217C0.413086 21.4004 2.59241 22.7417 5.48309 22.7417C8.37377 22.7417 10.5531 21.4004 10.5531 19.6217V13.3817C10.5531 11.6031 8.37377 10.2617 5.48309 10.2617ZM8.99309 19.6217C8.99309 20.2577 7.62575 21.1817 5.48309 21.1817C3.34043 21.1817 1.97309 20.2577 1.97309 19.6217V18.7895C2.87087 19.3092 4.09313 19.6217 5.48309 19.6217C6.87305 19.6217 8.09531 19.3092 8.99309 18.7895V19.6217ZM8.99309 16.5017C8.99309 17.1377 7.62575 18.0617 5.48309 18.0617C3.34043 18.0617 1.97309 17.1377 1.97309 16.5017V15.6695C2.87087 16.1892 4.09313 16.5017 5.48309 16.5017C6.87305 16.5017 8.09531 16.1892 8.99309 15.6695V16.5017ZM5.48309 14.9417C3.34043 14.9417 1.97309 14.0177 1.97309 13.3817C1.97309 12.7458 3.34043 11.8217 5.48309 11.8217C7.62575 11.8217 8.99309 12.7458 8.99309 13.3817C8.99309 14.0177 7.62575 14.9417 5.48309 14.9417Z"
                          fill="white"
                        />
                        <path
                          id="Vector_2"
                          d="M17.1833 10.2617C14.2926 10.2617 12.1133 11.6031 12.1133 13.3817V19.6217C12.1133 21.4004 14.2926 22.7417 17.1833 22.7417C20.074 22.7417 22.2533 21.4004 22.2533 19.6217V13.3817C22.2533 11.6031 20.074 10.2617 17.1833 10.2617ZM20.6933 19.6217C20.6933 20.2577 19.3259 21.1817 17.1833 21.1817C15.0406 21.1817 13.6733 20.2577 13.6733 19.6217V18.7895C14.5711 19.3092 15.7933 19.6217 17.1833 19.6217C18.5732 19.6217 19.7955 19.3092 20.6933 18.7895V19.6217ZM20.6933 16.5017C20.6933 17.1377 19.3259 18.0617 17.1833 18.0617C15.0406 18.0617 13.6733 17.1377 13.6733 16.5017V15.6695C14.5711 16.1892 15.7933 16.5017 17.1833 16.5017C18.5732 16.5017 19.7955 16.1892 20.6933 15.6695V16.5017ZM17.1833 14.9417C15.0406 14.9417 13.6733 14.0177 13.6733 13.3817C13.6733 12.7458 15.0406 11.8217 17.1833 11.8217C19.3259 11.8217 20.6933 12.7458 20.6933 13.3817C20.6933 14.0177 19.3259 14.9417 17.1833 14.9417Z"
                          fill="white"
                        />
                        <path
                          id="Vector_3"
                          d="M15.0046 6.13283L11.8853 9.25231C11.5715 9.56691 11.0754 9.54767 10.7811 9.25231L7.66165 6.13283C7.35693 5.82811 7.35693 5.33463 7.66165 5.02991C7.96637 4.72519 8.45984 4.72519 8.76456 5.02991L10.5531 6.81845V1.68137C10.5531 1.25055 10.902 0.901367 11.3331 0.901367C11.7642 0.901367 12.1131 1.25055 12.1131 1.68137V6.81845L13.9016 5.02991C14.2064 4.72519 14.6998 4.72519 15.0046 5.02991C15.3093 5.33463 15.3093 5.82811 15.0046 6.13283Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[20px] font-normal text-[#EFEFF8]">
                      Deposit
                    </p>
                    <p className="text-sm font-normal text-[#7E8DA6]">
                      Deposit crypto or fiat.
                    </p>
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-solid border-[#162D35]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <path
                      d="M8.49002 16.2962L9.32642 14.8475M13.843 7.0246L8.35877 8.49409M13.843 7.0246L15.3124 12.5088M13.843 7.0246L10.3301 13.1091"
                      stroke="#01BC8D"
                      strokeWidth="1.08333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex h-[340px] flex-col justify-between gap-2 rounded-2xl border border-solid border-[rgba(255,255,255,0.05)] bg-[#151418] p-6 text-start backdrop-blur-[6px]">
            <div className="flex w-full justify-between gap-2">
              <div
                className={`${
                  btnFlag === 0 ? "bg-[rgba(255,255,255,0.05)]" : ""
                } cursor-pointer rounded-[34px] border border-solid border-[rgba(255,255,255,0.05)] px-8 py-3 text-base font-normal text-[#EFEFF8]`}
                onClick={() => setBtnFlag(0)}
              >
                Buy crypto
              </div>
              <div
                className={`${
                  btnFlag === 1 ? "bg-[rgba(255,255,255,0.05)]" : ""
                } cursor-pointer rounded-[34px] border border-solid border-[rgba(255,255,255,0.05)] px-8 py-3 text-base font-normal text-[#EFEFF8]`}
                onClick={() => setBtnFlag(1)}
              >
                Deposit
              </div>
              <div
                className={`${
                  btnFlag === 2 ? "bg-[rgba(255,255,255,0.05)]" : ""
                } cursor-pointer rounded-[34px] border border-solid border-[rgba(255,255,255,0.05)] px-8 py-3 text-base font-normal text-[#EFEFF8]`}
                onClick={() => setBtnFlag(2)}
              >
                Withdraw
              </div>
            </div>
            <div className="section-7-div-style relative flex w-full justify-between p-4 text-start">
              <div className="flex flex-col justify-between">
                <p className="text-base font-normal text-[#EFEFF8]">
                  Total asset
                </p>
                <div className="flex flex-col">
                  <p className="text-2xl font-medium text-white">
                    0.17554271 BTC
                  </p>
                  <p className="text-base font-normal text-[#EFEFF8]">
                    $3,375.67 USD
                  </p>
                </div>
              </div>
              <Image
                src="/bitcoin.png"
                alt="bitcoin"
                width={115}
                height={161}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/section-7-gradient.svg"
        alt="gradient"
        width={600}
        height={900}
        className="absolute right-[-80px] top-[180px]"
      />
    </div>
  );
};

export default Section_7;
