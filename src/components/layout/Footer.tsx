import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold text-gray-900">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="tel:07753958395"
                  className="flex items-center text-sm text-gray-600 hover:text-gray-900"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  07753958395
                </a>
              </li>
              <li>
                <a
                  href="mailto:james@wrightanglecarpentry.co.uk"
                  className="flex items-center text-sm text-gray-600 hover:text-gray-900"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  james@wrightanglecarpentry.co.uk
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/p/Wright-Angle-Carpentry-100068082019115/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-600 hover:text-gray-900"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Follow us on Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-gray-900">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-sm text-gray-600 hover:text-gray-900">
                  Previous Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-base font-semibold text-gray-900">Service Areas</h3>
            <div className="mt-4 flex items-start">
              <MapPin className="h-5 w-5 text-gray-600 mr-2 mt-0.5 shrink-0" />
              <p className="text-sm text-gray-600">
                Serving Wareham, Poole, Bournemouth, Christchurch, and surrounding areas in Dorset and Hampshire
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-base font-semibold text-gray-900">Business Hours</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">
                <span className="font-medium">Mon-Fri:</span> 8:00 AM - 6:00 PM
              </li>
              <li className="text-sm text-gray-600">
                <span className="font-medium">Saturday:</span> By appointment
              </li>
              <li className="text-sm text-gray-600">
                <span className="font-medium">Sunday:</span> Closed
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Wright Angle Carpentry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 