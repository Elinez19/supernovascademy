"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Tagline } from "@/components/custom/landing-page/tagline";

const examData = [
  {
    id: 1,
    name: "JAMB Exams",
    logo: "/jamb-logo.png", // You'll need to add this logo
    description: "Joint Admissions and Matriculation Board",
  },
  {
    id: 2,
    name: "Waec Exams",
    logo: "/waec-logo.png", // You'll need to add this logo
    description: "West African Examinations Council",
  },
  {
    id: 3,
    name: "IGCSE Exams",
    logo: "/igcse-logo.png", // You'll need to add this logo
    description: "International General Certificate of Secondary Education",
  },
  {
    id: 4,
    name: "TOEFL Exams",
    logo: "/toefl-logo.png", // You'll need to add this logo
    description: "Test of English as a Foreign Language",
  },
  {
    id: 5,
    name: "NECO Exams",
    logo: "/neco-logo.png", // You'll need to add this logo
    description: "National Examinations Council",
  },
  {
    id: 6,
    name: "IELTS Exams",
    logo: "/ielts-logo.png", // You'll need to add this logo
    description: "International English Language Testing System",
  },
  {
    id: 7,
    name: "OLYMPIAD Exams",
    logo: "/olympiad-logo.png", // You'll need to add this logo
    description: "Academic Olympiad Competitions",
  },
  {
    id: 8,
    name: "SAT Exams",
    logo: "/sat-logo.png", // You'll need to add this logo
    description: "Scholastic Assessment Test",
  },
  {
    id: 9,
    name: "BECE Exams",
    logo: "/bece-logo.png", // You'll need to add this logo
    description: "Basic Education Certificate Examination",
  },
];

export function ExamCardsSection() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Main Heading */}
          <h2 className="heading-lg">One platform for all Exams</h2>
          {/* Subtitle */}
          <p className="text-muted-foreground text-lg">
            Browse through our top exams questions
          </p>
        </div>

        {/* Exam Cards Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {examData.map((exam) => (
            <Card
              key={exam.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="flex items-center gap-4 p-6">
                {/* Exam Logo */}
                <div className="shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-muted/50">
                    <Image
                      src={exam.logo}
                      alt={`${exam.name} logo`}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain"
                      onError={(e) => {
                        // Fallback to a placeholder if logo doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder-logo.svg";
                      }}
                    />
                  </div>
                </div>

                {/* Exam Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-foreground text-lg font-semibold group-hover:text-primary transition-colors">
                    {exam.name}
                  </h3>
                  <p className="text-muted-foreground text-sm truncate">
                    {exam.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
