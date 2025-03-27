import { Services } from "@/components/sections/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Wright Angle Carpentry",
  description: "Explore our comprehensive range of carpentry and building services including fitted furniture, refurbishments, maintenance, and both interior and exterior carpentry.",
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
    </main>
  );
} 