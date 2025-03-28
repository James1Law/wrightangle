"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Previous Work", href: "/work" },
  { name: "Contact Us", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden border-b py-2 md:flex md:items-center md:justify-end md:space-x-6">
          <a
            href="tel:07753958395"
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <Phone className="h-4 w-4" />
            <span>07753958395</span>
          </a>
          <a
            href="mailto:james@wrightanglecarpentry.co.uk"
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <Mail className="h-4 w-4" />
            <span>james@wrightanglecarpentry.co.uk</span>
          </a>
        </div>

        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-40 w-40">
                <Image
                  src="/wrightlogo.png"
                  alt="Wright Angle Carpentry"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-gray-900">Wright Angle</h1>
                <p className="text-sm text-gray-600">Carpentry, Renovation & Maintenance</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 px-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-600 hover:text-gray-900 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-6 space-y-4 border-t pt-6">
                  <a
                    href="tel:07753958395"
                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 py-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>07753958395</span>
                  </a>
                  <a
                    href="mailto:james@wrightanglecarpentry.co.uk"
                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 py-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span>james@wrightanglecarpentry.co.uk</span>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 