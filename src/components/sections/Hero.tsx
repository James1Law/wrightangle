"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, Shield, ArrowRight, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const specialties = [
  "Bespoke Kitchens",
  "Custom Furniture",
  "Premium Decking",
  "Home Conversions",
  "Full Refurbishments",
  "Property Enhancement",
];

export function Hero() {
  return (
    <div className="relative bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Text Content */}
            <div className="text-left space-y-8">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Crafting Excellence in <span className="text-primary">Carpentry & Building</span>
              </h1>
              <p className="text-xl leading-8 text-gray-600">
                Since 2009, Wright Angle Carpentry has delivered exceptional craftsmanship across Dorset and Hampshire. 
                From bespoke storage solutions to complete home transformations, we bring expertise, dedication, and attention to detail to every project.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button 
                  size="lg" 
                  className="gap-2"
                  asChild
                >
                  <Link href="/contact">
                    <Phone className="h-4 w-4 shrink-0" />
                    Get Free Estimate
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2" 
                  asChild
                >
                  <Link href="/work">
                    View Previous Work
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                </Button>
              </div>

              {/* Features Grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Area Coverage */}
                <div className="rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Area Coverage</h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    Serving Wareham, Poole, Bournemouth, Christchurch, and surrounding areas in Dorset and Hampshire. Travel costs included for transparency and convenience.
                  </p>
                </div>

                {/* Insurance */}
                <div className="rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Fully Insured</h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    City & Guilds qualified craftsmen with comprehensive insurance coverage, ensuring your project is in safe, skilled hands.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section - Desktop */}
            <div className="hidden lg:block relative">
              <div className="sticky top-8">
                <div className="relative h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/james1.JPG"
                    alt="James Wright, founder of Wright Angle Carpentry"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Specialties */}
          <div className="mt-12">
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900">Expertise & Services</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="mt-12 lg:hidden">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/james1.JPG"
                alt="James Wright, founder of Wright Angle Carpentry"
                fill
                className="object-cover object-center"
                priority
              />
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