"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Fitted Furniture",
    description: "Our bespoke fitted furniture solutions exemplify precision craftsmanship and meticulous attention to detail. We create custom-designed pieces that maximise your space whilst seamlessly integrating with your home&apos;s aesthetic, delivering both functionality and elegance.",
    image: "/images/fitted-furniture.webp"
  },
  {
    title: "Refurbishment",
    description: "Transform your property with our comprehensive refurbishment service. From kitchen and bathroom renovations to complete house transformations, we manage every aspect from initial design through to flawless implementation, ensuring a seamless and stress-free experience.",
    image: "/images/refurbishment.webp"
  },
  {
    title: "Maintenance",
    description: "Our responsive maintenance service ensures your property is kept in pristine condition. Working alongside trusted trade partners, we provide swift, efficient solutions to all your property maintenance needs, delivering lasting quality with every repair.",
    image: "/images/maintenance.webp"
  },
  {
    title: "Interior Carpentry",
    description: "Elevate your living space with our exceptional interior carpentry services. From elegant bookcases and shelving to doors and architectural trim work, we craft bespoke solutions that harmoniously blend functionality with sophisticated design, perfectly complementing your home&apos;s character.",
    image: "/images/custom-bookcase.webp"
  },
  {
    title: "Exterior Carpentry",
    description: "Enhance your outdoor living space with our expertly crafted exterior carpentry. Specialising in durable decking, fencing, and outdoor structures, we utilise premium materials and time-tested techniques to create beautiful, weather-resistant installations that stand the test of time.",
    image: "/images/exterior-carpentry.webp"
  }
];

export function Services() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="relative">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Discover our comprehensive range of bespoke carpentry and building services, where craftsmanship meets innovation to transform your vision into reality.
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
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mx-auto max-w-3xl mt-16">
            <div className="rounded-2xl bg-gray-50/50 p-6 sm:p-8 backdrop-blur text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Complete Building Package
              </h2>
              <p className="text-lg leading-8 text-gray-600 mb-6">
                Experience a truly integrated approach to your project with our complete building package. We collaborate with a carefully selected network of qualified specialists, including electricians and plumbers, ensuring exceptional quality across every aspect of your project. Our unwavering commitment to craftsmanship and attention to detail guarantees results that exceed expectations.
              </p>
              <Button size="lg" className="gap-2 w-full sm:w-auto" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Estimate
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Woodgrain Footer */}
          <div className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="h-16 bg-[url('/images/woodgrain-pattern.png')] bg-repeat-x opacity-10" />
          </div>
        </div>
      </div>
    </div>
  );
} 