"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/custom/landing-page/tagline";

export function StatsSection() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Metrics</Tagline>
            <h2 className="heading-lg text-foreground">
              Proven results speak for themselves
            </h2>
            <p className="text-muted-foreground">
              Join thousands of successful students who achieved their exam
              goals with our comprehensive study platform and expert guidance.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Students helped</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  50K+
                </span>

                <p className="text-muted-foreground text-base">
                  Students successfully prepared for their competitive exams
                  using our comprehensive study platform and expert guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Success rate</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  95%
                </span>
                <p className="text-muted-foreground text-base">
                  Students who complete our comprehensive study program
                  successfully pass their competitive exams on the first
                  attempt.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Student rating</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  4.9/5
                </span>
                <p className="text-muted-foreground text-base">
                  Average rating from students who used our platform for their
                  exam preparation and achieved success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
