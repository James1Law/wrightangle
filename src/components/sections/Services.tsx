"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Background } from "@/components/ui/background";
import Image from "next/image";

const services = [
  {
    title: "Fitted furniture",
    description: "We take great pride in the projects we undertake. With interior carpentry there is a higher requirement for attention to detail and precision. Our fitted furniture solutions are custom-designed to maximise your space while maintaining aesthetic appeal.",
    link: "/services/fitted-furniture",
    image: "/images/fitted-furniture.webp"
  },
  {
    title: "Refurbishment",
    description: "If you need to update your property, need a new kitchen, bathroom or house decorated, we offer the complete refurbishment service. We handle everything from initial design to final implementation, ensuring a seamless renovation process.",
    link: "/services/refurbishment",
    image: "/images/refurbishment.webp"
  },
  {
    title: "Maintenance",
    description: "We are at hand to react quickly to necessary repairs to properties. We can liaise and coordinate with other trades to ensure your maintenance needs are met efficiently and effectively.",
    link: "/services/maintenance",
    image: "/images/maintenance.webp"
  },
  {
    title: "Interior Carpentry",
    description: "From custom bookcases and shelving to doors and trim work, our interior carpentry services combine functionality with beautiful craftsmanship. We specialise in creating bespoke interior solutions that perfectly match your space and style.",
    link: "/services/interior-carpentry",
    image: "/images/interior-carpentry.webp"
  },
  {
    title: "Exterior Carpentry",
    description: "Our exterior carpentry services include decking, fencing, and outdoor structures. We use materials and techniques specifically chosen to withstand the elements while maintaining their aesthetic appeal.",
    link: "/services/exterior-carpentry",
    image: "/images/exterior-carpentry.webp"
  }
];

export function Services() {
  return (
    <div className="relative overflow-hidden bg-white">
      <Background />
      
      <div className="relative">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From bespoke fitted furniture to complete property refurbishments, we offer a comprehensive range of carpentry and building services.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group flex flex-col rounded-2xl border bg-white/50 overflow-hidden transition-all hover:shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="flex-1 text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <Button variant="outline" className="w-full gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mx-auto max-w-3xl mt-16">
            <div className="rounded-2xl bg-gray-50/50 p-8 backdrop-blur text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Complete Building Package
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We work with a qualified team of trades including electricians and plumbers to provide the complete building package for your project. All our work is completed to the highest standards, with attention to detail and customer satisfaction as our priorities.
              </p>
              <Button variant="outline" className="w-full gap-2" asChild>
                <a href="/contact" className="flex items-center gap-2">
                  Get Free Estimate
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 