import { Contact } from "@/components/sections/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Wright Angle Carpentry",
  description: "Get in touch with Wright Angle Carpentry for all your carpentry and building needs. We offer free estimates and cover Sussex, Kent and London.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
} 