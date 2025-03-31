"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Previous Work", href: "/work" },
  { name: "Contact Us", href: "/contact" },
];

const contactInfo = [
  {
    icon: Phone,
    value: "07753958395",
    href: "tel:07753958395",
  },
  {
    icon: Mail,
    value: "james@wrightanglecarpentry.co.uk",
    href: "mailto:james@wrightanglecarpentry.co.uk",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F5F5]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F5F5F5]/90">
      {/* Top bar with contact info */}
      <div className="hidden border-b border-gray-200 bg-[#F5F5F5] md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end space-x-6 py-2">
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
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-20 w-20 sm:h-24 sm:w-24">
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <SheetTitle className="px-6 pt-6 pb-2 text-lg font-semibold text-gray-900 border-b">
                Menu
              </SheetTitle>
              <nav className="flex flex-col">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-6 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 border-t px-6 py-4 bg-gray-50">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Contact Us</h3>
                  <div className="space-y-2">
                    {contactInfo.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-3 text-sm text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                          <item.icon className="h-4 w-4 text-gray-600" />
                        </div>
                        <span className="break-all pt-1.5">{item.value}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 