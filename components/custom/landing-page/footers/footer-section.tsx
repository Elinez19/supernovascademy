"use client";

import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export function Footer() {
  return (
    <>
      <footer
        className="bg-background section-padding-y relative"
        role="contentinfo"
        aria-label="Site footer"
      >
        <div className="container-padding-x container mx-auto flex flex-col gap-12 lg:gap-16">
          {/* Main Content - Four Columns */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Branding & Social Links */}
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                aria-label="Go to homepage"
                className="flex items-center gap-2 mb-2"
              >
                <Image
                  src="/supernovas-logo.png"
                  alt="Supernovas Academy Logo"
                  width={180}
                  height={180}
                  className="h-8 w-auto -mr-4"
                  priority
                />
                <span className="text-xl font-bold">upernovas Academy</span>
              </Link>
              <p className="text-muted-foreground text-sm">
                Preparing students to ace competitive exams with comprehensive
                study materials and AI-powered learning tools.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FaFacebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FaTwitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FaInstagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FaLinkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FaGithub className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-semibold">Services</h3>
              <nav className="flex flex-col gap-3" aria-label="Services links">
                <Link
                  href="/practice"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Practice Tests
                </Link>
                <Link
                  href="/resources"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Study Materials
                </Link>
                <Link
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  AI-Powered Learning
                </Link>
                <Link
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Performance Analytics
                </Link>
                <Link
                  href="#pricing"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Premium Plans
                </Link>
              </nav>
            </div>

            {/* Column 3: Company */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-semibold">Company</h3>
              <nav className="flex flex-col gap-3" aria-label="Company links">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Portfolio
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Press
                </Link>
              </nav>
            </div>

            {/* Column 4: Contact Us */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-semibold">Contact Us</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                  <Link
                    href="mailto:hello@supernovasacademy.com"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    hello@supernovasacademy.com
                  </Link>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                  <Link
                    href="tel:+2348123456789"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    +234 (0) 812 345 6789
                  </Link>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Plot 1234, Central Business District, Abuja, FCT, Nigeria
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section Divider */}
          <Separator role="presentation" />

          {/* Bottom Section */}
          <div className="flex w-full flex-col-reverse items-center gap-6 text-sm lg:flex-row lg:justify-between">
            {/* Copyright Text */}
            <p className="text-muted-foreground text-center lg:text-left">
              © 2025 Supernovas Academy. All rights reserved.
            </p>

            {/* Legal Navigation */}
            <nav
              className="flex flex-col items-center gap-4 text-sm md:flex-row md:gap-6"
              aria-label="Legal links"
            >
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Sitemap
              </Link>
            </nav>
          </div>
        </div>
      </footer>

      {/* Floating Email Button */}
      <Link
        href="mailto:hello@supernovasacademy.com"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:bg-blue-700 hover:scale-110"
        aria-label="Contact us via email"
      >
        <Mail className="h-6 w-6" />
      </Link>
    </>
  );
}
