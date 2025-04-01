import { Metadata } from "next";
import { ProjectPost } from "@/components/sections/ProjectPost";

export const metadata: Metadata = {
  title: "Bespoke Kitchen Installation - May 2024",
  description: "Explore our latest bespoke kitchen project featuring handcrafted cabinetry, premium materials, and modern design elements.",
};

export default function KitchenProjectPage() {
  const projectData = {
    title: "Modern Bespoke Kitchen Installation",
    date: "May 2024",
    location: "Wareham, Dorset",
    duration: "4 weeks",
    description: `This stunning bespoke kitchen project showcases our commitment to exceptional craftsmanship and attention to detail. Working closely with our clients, we designed and installed a fully customized kitchen that perfectly balances functionality with contemporary aesthetics.

    The project features handcrafted cabinetry, premium quartz worktops, and integrated appliances, creating a seamless and sophisticated cooking space. Every element was carefully considered, from the ergonomic layout to the custom storage solutions, ensuring the kitchen not only looks beautiful but works efficiently for everyday use.`,
    images: [
      {
        src: "/images/previous-work-kitchen1.jpg",
        alt: "Modern bespoke kitchen with island and custom cabinetry",
      },
      {
        src: "/images/previous-work-kitchen2.jpg",
        alt: "Detailed view of custom kitchen cabinets and storage solutions",
      },
      {
        src: "/images/previous-work-kitchen3.jpg",
        alt: "Kitchen island with premium quartz worktop",
      },
      {
        src: "/images/previous-work-kitchen4.jpg",
        alt: "Integrated appliances and storage solutions",
      },
    ],
    features: [
      "Handcrafted solid wood cabinetry",
      "Premium quartz worktops",
      "Custom storage solutions",
      "Integrated appliances",
      "LED lighting system",
      "Soft-close drawers and doors",
      "Ergonomic layout design",
      "Water-resistant finishes",
    ],
  };

  return <ProjectPost {...projectData} />;
} 