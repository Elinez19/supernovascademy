"use client";

import Image from "next/image";
import { Tagline } from "@/components/custom/landing-page/tagline";

const logosData = [
  {
    id: 1,
    src: "/lbs-logo.png",
    alt: "LBS Logo",
  },
  {
    id: 2,
    src: "/norwagian-logo.png",
    alt: "Norwegian Logo",
  },
  {
    id: 3,
    src: "/springhall-logo.png",
    alt: "Springhall Logo",
  },
  {
    id: 4,
    src: "/crescent-logo.png",
    alt: "Crescent Logo",
  },
  {
    id: 5,
    src: "/greenoak-logo.png",
    alt: "Greenoak Logo",
  },
  {
    id: 6,
    src: "/apostolic-logo.png",
    alt: "Apostolic Logo",
  },
];

export function LogoSection() {
  return (
    <section className="bg-secondary border-b pb-16 lg:pb-24">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            <Tagline variant="ghost">Trusted by</Tagline>
          </div>

          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]">
            <div className="animate-infinite-scroll flex w-max items-center">
              {[...logosData, ...logosData].map((logoItem, index) => {
                const uniqueKey = `logo-wrapper-${logoItem.id}-${index}`;
                return (
                  <div
                    key={uniqueKey}
                    className="w-32 shrink-0 flex items-center justify-center px-4"
                  >
                    <Image
                      src={logoItem.src}
                      alt={logoItem.alt}
                      width={120}
                      height={50}
                      className="h-auto w-24 object-contain opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50%));
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
