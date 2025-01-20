import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function title(str: string) {
  return str[0].toUpperCase() + str.slice(1)
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
