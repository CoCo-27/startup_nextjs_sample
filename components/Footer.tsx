import Link from "next/link";

export default function Footer() {
  return (
    <div className="foot-style w-full p-6 md:py-8">
      <div className="mx-auto flex w-full max-w-[1400px] justify-between gap-4">
        <span className="block text-lg font-normal text-muted-foreground">
          <a
            target="_blank"
            href="https://tryconvo.vercel.app/"
            className="hover:underline"
          >
            © QuDefi
          </a>
          {new Date().getFullYear()}. All Rights Reserved.
        </span>
        <div className="flex gap-10">
          <p className="text-lg font-normal text-[#86828D]">Privacy Policy</p>
          <p className="text-lg font-normal text-[#86828D]">
            Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
}
