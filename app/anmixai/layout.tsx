import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import FlareCursor from "@/components/flare-cursor";

export const metadata: Metadata = {
  title: "Fyoia AI - Neural OS",
  description: "All-in-one AI platform for chat, image generation, video creation, and voice agents.",
};

export default function FyoiaAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <FlareCursor />
      {children}
    </ThemeProvider>
  );
}
