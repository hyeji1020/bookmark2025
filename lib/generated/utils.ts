import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// css는 먼저 css로 번들링 되기 때문에 동적으로 넣은 값은 읽지 못함. 그래서 해당 팡리 생성
export const dynaminCss = [
  "translate-x-[-20px]",
  "translate-x-[-40px]",
  "translate-x-[-60px]",
  "translate-x-[-80px]",
  "translate-x-[-100px]",
];
