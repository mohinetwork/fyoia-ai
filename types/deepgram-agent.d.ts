import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "deepgram-agent": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        config?: string;
        url?: string;
        width?: string | number;
        height?: string | number;
        "auth-scheme"?: string;
        "idle-timeout-ms"?: string | number;
        "output-sample-rate"?: string | number;
      };
    }
  }
}

export {};
