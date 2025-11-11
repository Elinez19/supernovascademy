"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Bell, Menu, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavbarProps {
  activeRoute?: string;
}

const Navbar = ({ activeRoute }: NavbarProps) => {
  const pathname = usePathname();
  const currentRoute = activeRoute || pathname;

  const navItems = [
    { label: "Home", href: "/dashboard" },
    { label: "Test Analysis", href: "/test-analysis" },
    { label: "Topic Analysis", href: "/topic-analysis" },
    { label: "Buy Units", href: "/buy-units" },
    { label: "Refer a friend", href: "/refer" },
  ];

  return (
    <nav className="bg-background sticky top-0 isolate z-50 border-b">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/supernovas-logo.png"
            alt="educare Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
          <span className="text-xl font-semibold">educare™</span>
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              currentRoute === item.href ||
              currentRoute?.startsWith(item.href + "/");
            return (
              <Link key={item.label} href={item.href}>
                <Button
                  variant="ghost"
                  className={
                    isActive
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }
                >
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.label} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
