import { Mulish } from "next/font/google";

export const mulish = Mulish({
  weight: ["400", "500", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans", // For tailwindCSS variable
});
