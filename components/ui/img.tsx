/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type Props = {
    src: string;
    alt?: string;
    className?: string;
} & ComponentProps<"img">;

export default function Img({src, alt, className, ...props}: Props) {
  return (
    <>
      <img src={src} alt={alt || src} className={cn(className)}{...props} />
    </>
  );
};
