"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const projectCategories = [
  {
    title: "Bespoke Kitchens",
    description: "Custom-designed and hand-built kitchens tailored to each client&apos;s specific needs and space. Our kitchen projects combine functionality with beautiful craftsmanship.",
    projectCount: 15,
    rating: 5,
  },
  {
    title: "Fitted Wardrobes",
    description: "Space-saving storage solutions and fitted wardrobes that maximise your space while maintaining aesthetic appeal. Each piece is carefully designed to fit perfectly.",
    projectCount: 23,
    rating: 5,
  },
  {
    title: "Home Libraries",
    description: "Custom bookcases and library installations that transform spaces into beautiful, functional reading rooms. Perfect for book lovers and collectors.",
    projectCount: 8,
    rating: 5,
  },
  {
    title: "Property Renovations",
    description: "Complete property renovations and refurbishments, from single rooms to entire houses. We handle everything from design to final implementation.",
    projectCount: 12,
    rating: 5,
  },
  {
    title: "Outdoor Spaces",
    description: "Decking, garden structures, and outdoor living spaces that extend your home into the garden. Built to last with materials chosen for durability.",
    projectCount: 18,
    rating: 5,
  },
];

const testimonials = [
  {
    quote: "Exceptional attention to detail and craftsmanship. The fitted wardrobes transformed our bedroom.",
    author: "Sarah, Eastbourne",
  },
  {
    quote: "Professional, reliable, and the quality of work is outstanding. Highly recommend for any carpentry needs.",
    author: "Mike, Brighton",
  },
  {
    quote: "The kitchen renovation exceeded our expectations. Great communication throughout the project.",
    author: "Emma, London",
  },
];

export function PreviousWork() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      
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
                  className="flex flex-col rounded-2xl border bg-white/50 p-8 backdrop-blur transition-all hover:shadow-lg"
                >
                  {/* Placeholder for future image */}
                  <div className="aspect-[4/3] w-full rounded-xl bg-gray-100 mb-6">
                    <div className="flex h-full items-center justify-center text-gray-400">
                      Image placeholder
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{category.rating}.0</span>
                    </div>
                  </div>
                  
                  <p className="flex-1 text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {category.projectCount} projects completed
                    </span>
                    <Button variant="outline" size="sm" className="gap-2">
                      View Projects
                      <ArrowRight className="h-4 w-4" />
                    </Button>
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
                  className="rounded-xl border bg-white/50 p-6 backdrop-blur"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
                  <p className="text-sm font-medium text-gray-900">
                    {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mx-auto max-w-3xl mt-16">
            <div className="rounded-2xl bg-gray-50/50 p-8 backdrop-blur text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Let&apos;s discuss your ideas and create something amazing together. Contact us for a free consultation and estimate.
              </p>
              <Button size="lg" className="gap-2">
                Get Free Estimate
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 