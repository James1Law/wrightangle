"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "07753958395",
    description: "Reach us directly for personalised consultations and detailed estimates",
    href: "tel:07753958395",
  },
  {
    icon: Mail,
    title: "Email",
    value: "james@wrightanglecarpentry.co.uk",
    description: "Share your project vision and requirements for a comprehensive response",
    href: "mailto:james@wrightanglecarpentry.co.uk",
  },
  {
    icon: MapPin,
    title: "Service Areas",
    value: "Wareham, Poole, Bournemouth, Christchurch",
    description: "Serving Dorset and Hampshire with inclusive travel costs - no hidden extras",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    description: "Swift, professional responses to all enquiries ensuring your project moves forward promptly",
  },
];

const services = [
  "Kitchens",
  "Fitted Furniture",
  "Decking",
  "Conversions",
  "Property refurbishments and improvements",
];

export function Contact() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="relative">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Begin your journey with Wright Angle Carpentry. Whether you&apos;re planning a renovation, need bespoke furniture, or seeking expert craftsmanship, we&apos;re here to bring your vision to life.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  className="rounded-2xl border bg-white/50 p-6 sm:p-8 backdrop-blur transition-all hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="rounded-full bg-gray-100 p-2 sm:p-3 shrink-0">
                      <method.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-semibold text-gray-900 text-sm sm:text-base">{method.title}</h2>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-base sm:text-lg font-medium text-blue-600 hover:text-blue-500 break-all"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-base sm:text-lg font-medium text-gray-900">{method.value}</p>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-sm sm:text-base text-gray-600">{method.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Overview */}
          <div className="mx-auto max-w-3xl mt-12 sm:mt-16">
            <div className="rounded-2xl bg-gray-50/50 p-6 sm:p-8 backdrop-blur">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                Our Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2 text-gray-600 text-sm sm:text-base"
                  >
                    <ArrowRight className="h-4 w-4 text-gray-400 shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mx-auto max-w-3xl mt-12 sm:mt-16 text-center">
            <div className="rounded-2xl border bg-white/50 p-6 sm:p-8 backdrop-blur">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Professional Excellence Assured
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                As an established family business since 2009, Wright Angle Carpentry combines traditional craftsmanship with modern expertise. Fully qualified and comprehensively insured, we deliver exceptional quality across every project we undertake.
              </p>
              <Button size="lg" className="gap-2 w-full sm:w-auto" asChild>
                <Link href="/work">
                  Explore Our Portfolio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 