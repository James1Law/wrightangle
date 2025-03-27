import { About } from "@/components/sections/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Wright Angle Carpentry",
  description: "Learn about Wright Angle Carpentry, a family business established in 2009, offering expert carpentry and building services in Eastbourne and surrounding areas.",
};

export default function AboutPage() {
  return (
    <main>
      <About />
    </main>
  );
} 