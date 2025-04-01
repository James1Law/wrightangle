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
    description: `This exquisite bespoke kitchen project exemplifies our dedication to exceptional craftsmanship and meticulous attention to detail. Working in close partnership with our clients, we designed and fitted a fully bespoke kitchen that harmoniously balances practicality with contemporary aesthetics.

    The project showcases handcrafted cabinetry, premium quartz worktops, and integrated appliances, creating an elegant and refined cooking space. Each element was thoughtfully considered, from the ergonomic layout to the tailored storage solutions, ensuring the kitchen is not only aesthetically pleasing but functions brilliantly for day-to-day family life.`,
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
      {
        src: "/images/previous-work-kitchen5.jpg",
        alt: "Full view of the completed bespoke kitchen installation",
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