import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formateDate(date){
  return new Date(date).toLocaleDateString('en-us', {month: 'long', day:'numeric', year:'numeric'})
}