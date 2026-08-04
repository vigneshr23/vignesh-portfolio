import { Metadata } from "next";
import HomePage from "./components/HomePage";

export const metadata: Metadata = {
  title: "Vignesh R — Senior Software Engineer",
  description:
    "Senior Software Engineer with 9 years building web products — automotive OEM platforms, enterprise systems, and startup products.",
  openGraph: {
    title: "Vignesh R — Senior Software Engineer",
    description:
      "Senior Software Engineer with 9 years building web products.",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
