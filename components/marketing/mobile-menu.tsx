"use client";

import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/utils";

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <div
      className={cn(
        "lg:hidden transition-[max-height,opacity] duration-300 ease-in-out px-4 pb-4",
        isOpen ? "max-h-[80dvh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}
    >
      <nav className="flex flex-col gap-3 rounded-2xl border border-foreground/10 bg-background/70 p-4 backdrop-blur-lg">
        {NAV_LINKS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-foreground/80 hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
