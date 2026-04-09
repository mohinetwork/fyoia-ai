import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';
import React from 'react';

//====================================== Border beam
export const EyeCatchingButton_v1 = ({ ...props }: ButtonProps) => {
  return (
    <div className="relative w-full group rounded-[18px] overflow-hidden p-[2px] shadow border border-white/[0.08] dark:border-zinc-800 bg-transparent">
      <span className="pointer-events-none absolute inset-[-1000%] z-0 animate-[spin_5s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:opacity-100" />
      <Button
        {...props}
        className={cn(
          'h-11 w-full rounded-[16px] font-semibold text-white/95 bg-[#101624]/95 dark:bg-zinc-900/95 backdrop-blur-xl border-0 shadow-[0_18px_45px_rgba(15,23,42,0.9)] hover:bg-[#111827]/95 transition-all flex items-center justify-center gap-2.5 px-4',
          props.className,
        )}
      />
    </div>
  );
};

//====================================== Shiny background
export const EyeCatchingButton_v2 = ({ ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      className={cn(
        'animate-bg-shine border-[1px] rounded-lg shadow bg-[length:200%_100%] tracking-wide duration-[2200ms]',
        'dark:bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)] dark:text-zinc-200 dark:border-zinc-800',
        'bg-[linear-gradient(110deg,#FFF,45%,#E4E4E7,55%,#FFF)] text-zinc-800 border-zinc-300',
        props.className,
      )}
    />
  );
};
