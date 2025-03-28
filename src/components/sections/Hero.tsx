"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, Shield, ArrowRight } from "lucide-react";
import { Background } from "@/components/ui/background";
import Image from "next/image";
import Link from "next/link";

const specialties = [
  "Kitchens",
  "Fitted Furniture",
  "Decking",
  "Conversions",
  "Property refurbishments and improvements",
];

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white min-h-[80vh]">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero2.webp"
          alt="Wright Angle Carpentry craftsmanship showcase"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      </div>
      
      <div className="relative">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            {/* Main Content */}
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Expert Carpentry & Building Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                An established, experienced company offering a wide range of building services at a personal level.
                From storage solutions to refurbishments and extensions, we take pride in each job we do.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100" 
                  asChild
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0" />
                    Get Free Estimate
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10" 
                  asChild
                >
                  <Link href="/work" className="flex items-center gap-2">
                    View Previous Work
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {/* Area Coverage */}
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-white/10 p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white">Area Coverage</h3>
                </div>
                <p className="mt-4 text-sm text-gray-200">
                  We cover Sussex, Kent and London. All travel costs included with no hidden extras.
                </p>
              </div>

              {/* Insurance */}
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-white/10 p-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white">Fully Insured</h3>
                </div>
                <p className="mt-4 text-sm text-gray-200">
                  Specialists in what we do, qualified and fully insured giving you peace of mind.
                </p>
              </div>

              {/* Specialties */}
              <div className="sm:col-span-2">
                <div className="rounded-lg border bg-white/50 p-6 backdrop-blur">
                  <h3 className="font-semibold">Our Specialties</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 