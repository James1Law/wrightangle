"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Hammer, Scale, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <div className="relative bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Text Content */}
            <div className="space-y-12">
              {/* About Section */}
              <div className="space-y-6">
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Crafting Your <span className="text-primary">Vision</span> Into Reality
                </h1>
                <p className="text-xl leading-8 text-gray-600">
                  Established in 2009, Wright Angle Carpentry is a family-run business founded by James Wright, a City & Guilds qualified craftsman with over two decades of experience. Based in the heart of Wareham, Dorset, we&apos;ve built our reputation on exceptional workmanship, from bespoke hand-crafted kitchens to comprehensive renovation projects both locally and internationally.
                </p>
              </div>

              {/* Working With You Section */}
              <div className="rounded-lg border border-gray-100 bg-gray-50 p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Working With You
                  </h2>
                </div>
                <p className="text-lg leading-8 text-gray-600">
                  We take great pleasure in collaborating with our clients, carefully listening to their vision and requirements. Whether it&apos;s smaller projects like hanging doors and repairing floorboards, or larger undertakings such as extensions, every commission receives our utmost attention. Understanding that budgets are important, particularly in today&apos;s economic climate, we work diligently to source the best materials at competitive prices whilst never compromising on quality or craftsmanship.
                </p>
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="gap-2"
                    asChild
                  >
                    <Link href="/work">
                      View Our Previous Work
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Image Section - Desktop */}
            <div className="hidden lg:block relative">
              <div className="sticky top-8">
                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/theteam.jpg"
                    alt="The Wright Angle Carpentry team"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Hammer className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Quality First</h3>
              </div>
              <p className="text-gray-600">
                We take enormous pride in our commissions regardless of the project size. Every project receives 
                the same level of attention and craftsmanship.
              </p>
            </div>
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Budget Conscious</h3>
              </div>
              <p className="text-gray-600">
                We understand the importance of budget constraints and work to source the best prices while 
                maintaining high quality standards.
              </p>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="mt-12 lg:hidden">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/theteam.jpg"
                alt="The Wright Angle Carpentry team"
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