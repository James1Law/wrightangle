"use client";

import { CalendarDays, Clock, MapPin, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImageViewer } from "@/components/ui/ImageViewer";

interface ProjectPostProps {
  title: string;
  date: string;
  location: string;
  duration: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  features: string[];
}

export function ProjectPost({
  title,
  date,
  location,
  duration,
  description,
  images,
  features,
}: ProjectPostProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back Button */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-12"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Previous Work</span>
      </Link>

      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          {title}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="aspect-[16/9] relative rounded-2xl overflow-hidden mb-12 shadow-2xl">
        <button
          onClick={() => setSelectedImage(images[0])}
          className="w-full h-full group"
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </button>
      </div>

      {/* Project Description */}
      <div className="prose prose-lg mx-auto mb-12">
        <p className="lead">{description}</p>
      </div>

      {/* Features Grid */}
      <div className="mx-auto max-w-3xl mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Project Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 p-4 rounded-lg border bg-white/50 backdrop-blur"
            >
              <svg
                className="h-5 w-5 text-primary shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {images.slice(1).map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </button>
        ))}
      </div>

      {/* Image Viewer */}
      {selectedImage && (
        <ImageViewer
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </article>
  );
} 