import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import animationData from "@/assets/lottie-json2";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const colors = [
  "bg-[#ff5b92] text-[#e1214c] border-[1px] border-[#e8254d]",
  "bg-[#e0e825] text-[#4bc03b] border-[1px] border-[#009058]",
  "bg-[#00d6ad] text-[#0097d5] border-[1px] border-[#2b71bd]",
  "bg-[#ffe5ff] text-[#dfa6ce] border-[1px] border-[#ed0cc6]",
]

export const getColor = (color) => {
  if (color>=0 && color<colors.length) {
    return colors[color]
  }
  return colors[0]
};

export const animationDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData:animationData,
}