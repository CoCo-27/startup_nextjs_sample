import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { SideNav } from "@/components/SideNav";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4 text-white sm:hidden">
        <Menu />
      </SheetTrigger>

      <SheetContent side="right" className="w-32 bg-secondary p-0 pt-5">
        <SheetClose />
        <SideNav />
      </SheetContent>
    </Sheet>
  );
};
