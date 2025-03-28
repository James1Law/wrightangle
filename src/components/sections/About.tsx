"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Background } from "@/components/ui/background";

export function About() {
  return (
    <div className="relative overflow-hidden bg-white">
      <Background />
      
      <div className="relative">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="mx-auto max-w-3xl">
            <div className="space-y-12">
              {/* About Section */}
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  About Wright Angle Carpentry
                </h1>
                <p className="text-lg leading-8 text-gray-600">
                  Wright Angle is a family business set up in 2009. Based in Eastbourne, it is run by James Wright, 
                  a City & Guilds qualified carpenter with 14 years experience. His work includes hand-built kitchens 
                  to renovations projects abroad.
                </p>
              </div>

              {/* Working With You Section */}
              <div className="rounded-2xl bg-gray-50/50 p-8 backdrop-blur">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                  Working With You
                </h2>
                <p className="text-lg leading-8 text-gray-600">
                  WE enjoy working WITH the client in listening to their requirements and take enormous pride in our 
                  commissions regardless of the project size, whether small (hanging of doors, repairing floorboards) 
                  or the large (extensions). We are aware that everyone has a budget, especially in this climate, and 
                  take care to source the best prices without jeopardising the quality and standards of the projects.
                </p>
                <div className="mt-8">
                  <Button variant="outline" size="lg" className="gap-2">
                    View Our Previous Work
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Values Grid */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="rounded-lg border bg-white/50 p-6 backdrop-blur">
                  <h3 className="text-xl font-semibold mb-4">Quality First</h3>
                  <p className="text-gray-600">
                    We take enormous pride in our commissions regardless of the project size. Every project receives 
                    the same level of attention and craftsmanship.
                  </p>
                </div>
                <div className="rounded-lg border bg-white/50 p-6 backdrop-blur">
                  <h3 className="text-xl font-semibold mb-4">Budget Conscious</h3>
                  <p className="text-gray-600">
                    We understand the importance of budget constraints and work to source the best prices while 
                    maintaining high quality standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 