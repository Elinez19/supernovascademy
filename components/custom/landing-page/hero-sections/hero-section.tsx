"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tagline } from "@/components/custom/landing-page/tagline";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="bg-secondary section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Tagline */}
            <Tagline>Supernovas Academy</Tagline>
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl">
              Best platform to prepare and pass competitive exams
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              Master competitive exams with our comprehensive study platform,
              featuring practice tests, detailed solutions, and personalized
              learning paths to maximize your success.
            </p>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Comprehensive practice tests with detailed solutions
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Personalized learning paths for optimal results
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Thousands of students successfully passed their exams
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Start free practice</Button>
            <Button variant="ghost">
              Explore questions
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/hero-img.png"
              alt="Hero visual"
              fill
              priority
              className="h-full w-full rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
