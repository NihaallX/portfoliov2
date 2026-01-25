import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl border-[0.75px]",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] hover:z-[100]",
      className,
    )}
  >
    <GlowingEffect
      spread={40}
      glow={true}
      disabled={false}
      proximity={64}
      inactiveZone={0.01}
      borderWidth={2}
    />
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 p-6 transition-all duration-300">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
        <Icon className="h-12 w-12 origin-left transform-gpu text-white mb-3" />
        <h3 className="text-2xl font-bold text-white mb-2">
          {name}
        </h3>
        <p className="text-sm text-white/95 leading-relaxed">{description}</p>
      </div>
    </div>

    <div
      className={cn(
        "pointer-events-auto absolute bottom-0 flex w-full flex-row items-center p-6 z-20",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="bg-white/90 hover:bg-white text-black font-semibold backdrop-blur-sm shadow-lg pointer-events-none">
        <span className="pointer-events-none">
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </span>
      </Button>
    </div>
    <a href={href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-50 block cursor-pointer" aria-label={`View ${name}`} />
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
