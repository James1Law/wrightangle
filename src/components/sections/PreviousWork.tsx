"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projectCategories = [
  {
    title: "Conversions",
    description: "Complete property transformations, from loft conversions to garage conversions, maximising your living space.",
    image: "/images/conversions.webp"
  },
  {
    title: "Fitted Wardrobes",
    description: "Custom-designed storage solutions to maximise your space while maintaining aesthetic appeal.",
    image: "/images/fitted-furniture.webp"
  },
  {
    title: "Decking",
    description: "Beautiful outdoor living spaces created with high-quality materials and expert craftsmanship.",
    image: "/images/decking.webp"
  }
];

const testimonials = [
  {
    quote: "Excellent work, very professional and friendly service. Would highly recommend.",
    author: "Sarah T."
  },
  {
    quote: "James did a fantastic job on our fitted wardrobes. The attention to detail was impressive.",
    author: "Mike R."
  },
  {
    quote: "Very reliable and professional. The quality of work was outstanding.",
    author: "David P."
  }
];

export function PreviousWork() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="relative">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Previous Work
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Browse through our portfolio of completed projects. Each project showcases our commitment to quality craftsmanship and attention to detail.
            </p>
          </div>

          {/* Project Categories */}
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projectCategories.map((category) => (
                <div
                  key={category.title}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mx-auto max-w-5xl mt-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Our Clients Say
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-2xl border bg-white/50 p-6 backdrop-blur"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <cite className="text-sm font-medium text-gray-900 not-italic">
                    - {testimonial.author}
                  </cite>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mx-auto max-w-3xl mt-16 text-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="/contact" className="flex items-center gap-2">
                Get Free Estimate
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 