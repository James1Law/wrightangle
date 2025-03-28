"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "07753958395",
    description: "Available for free estimates and consultations",
    href: "tel:07753958395",
  },
  {
    icon: Mail,
    title: "Email",
    value: "james@wrightanglecarpentry.co.uk",
    description: "Send us your project details and requirements",
    href: "mailto:james@wrightanglecarpentry.co.uk",
  },
  {
    icon: MapPin,
    title: "Service Areas",
    value: "Sussex, Kent and London",
    description: "We cover all travel costs with no hidden extras",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    description: "Quick response for all enquiries and estimates",
  },
];

const services = [
  "Bespoke Kitchens",
  "Fitted Furniture",
  "Property Renovations",
  "Interior Carpentry",
  "Exterior Work",
  "Maintenance",
];

export function Contact() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="relative">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get in touch for a free estimate or to discuss your carpentry and building needs. We&apos;re here to help turn your ideas into reality.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  className="rounded-2xl border bg-white/50 p-8 backdrop-blur transition-all hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-100 p-3">
                      <method.icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-gray-900">{method.title}</h2>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-lg font-medium text-blue-600 hover:text-blue-500"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-gray-900">{method.value}</p>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600">{method.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Overview */}
          <div className="mx-auto max-w-3xl mt-16">
            <div className="rounded-2xl bg-gray-50/50 p-8 backdrop-blur">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Our Services
              </h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mx-auto max-w-3xl mt-16 text-center">
            <div className="rounded-2xl border bg-white/50 p-8 backdrop-blur">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Professional & Fully Insured
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Wright Angle Carpentry is a family business established in 2009. We are fully qualified, 
                insured, and take pride in delivering high-quality craftsmanship for every project.
              </p>
              <Button size="lg" className="gap-2">
                View Our Previous Work
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 