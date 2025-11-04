"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { MENU_ITEMS } from "@/lib/constants";

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <Button variant="ghost" className="w-full md:w-auto">
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-background sticky top-0 isolate z-50 border-b py-2 md:py-3">
      <div className="relative container m-auto flex flex-col justify-between gap-2 px-6 md:flex-row md:items-center md:gap-4">
        {/* Logo and Menu Button */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/supernovas-logo.png"
              alt="Supernovas Academy Logo"
              width={180}
              height={180}
              className="h-10 w-auto md:h-12 -mr-4"
              priority
            />
            <span className="text-2xl font-bold hidden md:inline-block whitespace-nowrap">
              upernovas Academy
            </span>
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-center gap-3 md:flex">
          <NavMenuItems />
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-2">
          <Link href="/signin">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <NavMenuItems />
            <div className="flex flex-col gap-2">
              <Link href="/signin">
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
