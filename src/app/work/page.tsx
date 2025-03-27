import { PreviousWork } from "@/components/sections/PreviousWork";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Previous Work | Wright Angle Carpentry",
  description: "View our portfolio of completed carpentry and building projects. From bespoke kitchens to complete property renovations, discover the quality of our craftsmanship.",
};

export default function WorkPage() {
  return (
    <main>
      <PreviousWork />
    </main>
  );
} 