"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, Shield, ArrowRight } from "lucide-react";

const specialties = [
  "Kitchens",
  "Fitted Furniture",
  "Decking",
  "Conversions",
  "Property refurbishments and improvements",
];

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="relative">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Expert Carpentry & Building Services
                </h1>
                <p className="text-xl text-gray-600">
                  An established, experienced company offering a wide range of building services at a personal level.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">
                  From storage solutions to refurbishments and extensions, we take pride in each job we do, completing our work to a high standard and caring about the quality of our work as much as our clients do: Customer satisfaction is our priority.
                </p>
                <p className="text-gray-600">
                  We undertake all domestic building work including all internal and external carpentry, kitchens and bathrooms, decoration, renovation and restoration.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Get Free Estimate
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  View Our Work
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Area Coverage */}
              <div className="rounded-lg border bg-white/50 p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Area Coverage</h3>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  We cover Sussex, Kent and London. All travel costs included with no hidden extras.
                </p>
              </div>

              {/* Insurance */}
              <div className="rounded-lg border bg-white/50 p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold">Fully Insured</h3>
                </div>
                <p className="mt-4 text-sm text-gray-600">
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

          {/* Additional Info */}
          <div className="mt-16 rounded-lg border bg-white/50 p-8 backdrop-blur">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold">Complete Building Package</h3>
                <p className="mt-4 text-gray-600">
                  We work with a small team of qualified trades including electricians and plumbers to provide the complete building package for your project.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Our Commitment</h3>
                <p className="mt-4 text-gray-600">
                  Wright Angle looks forward to discussing your future projects and offering our expert advice to help turn concepts into reality - whether it's bespoke shelving, a new kitchen, or a conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 