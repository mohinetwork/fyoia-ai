"use client";

import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default Providers;
