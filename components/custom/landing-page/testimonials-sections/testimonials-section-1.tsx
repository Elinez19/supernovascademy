"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tagline } from "@/components/custom/landing-page/tagline";
import { TESTIMONIALS_DATA } from "@/lib/constants";

const testimonialsData = TESTIMONIALS_DATA;

export default function TestimonialsSection1() {
  return (
    <section
      className="dark:bg-background container-padding-x section-padding-y border-b bg-blue-950"
      aria-labelledby="testimonials-title"
    >
      <div className="container mx-auto flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
          <Tagline variant="white">Testimonials</Tagline>
          <h2 id="testimonials-title" className="heading-lg text-white">
            What our students say
          </h2>
          <p className="text-white/80 text-base">
            Hear from students who achieved their exam goals with our platform
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="w-full max-w-4xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonialsData.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 md:basis-1/2"
                >
                  <div className="flex h-full flex-col items-center gap-8 rounded-xl bg-white/10 p-8 backdrop-blur-sm">
                    {/* Testimonial Quote */}
                    <blockquote className="text-center text-lg font-medium text-white md:text-xl">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>

                    {/* Author Information */}
                    <div className="flex flex-col items-center gap-4">
                      {/* Author Avatar */}
                      <Avatar className="h-12 w-12 rounded-xl ring-2 ring-white md:h-14 md:w-14">
                        <AvatarImage
                          src={testimonial.avatarSrc}
                          alt={testimonial.authorName}
                        />
                      </Avatar>

                      {/* Author Details */}
                      <div className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
                        <span className="text-base font-medium text-white">
                          {testimonial.authorName}
                        </span>
                        <span className="hidden text-white opacity-50 md:inline-block">
                          •
                        </span>
                        <span className="text-base text-white/80">
                          {testimonial.authorRole}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 text-blue-950 hover:bg-blue-950/20" />
            <CarouselNext className="right-4 text-blue-950 hover:bg-blue-950/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
