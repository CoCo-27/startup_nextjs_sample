import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";

const Navbar = () => {
  // Replace with your auth of choice, e.g. Clerk: const { userId } = auth();
  const isUserSignedIn = false;

  return (
    <nav
      className={cn(
        "sticky inset-x-0 top-0 z-30 p-4 backdrop-blur-lg transition-all",
      )}
    >
      <MaxWidthWrapper className="max-w-[1600px]">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="z-40 flex items-center justify-center gap-1"
          >
            <Image
              src="/logo.svg"
              alt="convo logo"
              width={180}
              height={50}
              quality={100}
            />
          </Link>
          <div className="flex gap-8">
            <p className="cursor-pointer text-base font-normal text-[#B9B6BF]">
              HOME
            </p>
            <p className="cursor-pointer text-base font-normal text-[#B9B6BF]">
              OUR VISION
            </p>
            <p className="cursor-pointer text-base font-normal text-[#B9B6BF]">
              OUR PARTNERS
            </p>
            <p className="cursor-pointer text-base font-normal text-[#B9B6BF]">
              FEATURES
            </p>
            <p className="cursor-pointer text-base font-normal text-[#B9B6BF]">
              OUR STORY
            </p>
          </div>
          <div className="flex items-center gap-1 sm:gap-4">
            <MobileNav />

            <div className="hidden items-center space-x-4 sm:flex">
              <Image src="/x-icon.svg" alt="x" width={24} height={24} />
              <Image
                src="/telegram-icon.svg"
                alt="telegram"
                width={24}
                height={24}
              />
              <Image
                src="/discord-icon.svg"
                alt="discord"
                width={24}
                height={24}
              />
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
              <Image
                src="/youtubu-icon.svg"
                alt="youtubu"
                width={24}
                height={24}
              />
              <Image src="/show-icon.svg" alt="show" width={24} height={24} />
            </div>

            {/* User profile mockup below, e.g using Clerk: <UserButton afterSignOutUrl="/" /> */}
            {isUserSignedIn && (
              <div className="h-10 w-10 rounded-full border-2 border-black bg-emerald-600 shadow-lg"></div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
