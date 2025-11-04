"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tagline } from "@/components/custom/landing-page/tagline";

export function FaqSection() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto">
          {/* FAQ Badge */}
          <Tagline className="bg-primary/10 text-primary border-none rounded-md px-3 py-1.5">
            FAQ
          </Tagline>

          {/* Main Title */}
          <h1 id="faq-heading" className="heading-lg text-foreground text-center">
            Frequently Asked Questions
          </h1>

          {/* Section Description */}
          <p className="text-muted-foreground text-center text-base">
            Get answers to common questions about our exam practice platform.
          </p>

          {/* FAQ Accordion */}
          <div className="w-full mt-4">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              aria-label="FAQ items"
              className="w-full"
            >
              {/* FAQ Item 1 */}
              <AccordionItem value="item-1" className="bg-card border rounded-lg px-6 mb-4">
                <AccordionTrigger className="text-left font-semibold text-base py-6 hover:no-underline">
                  How do I get started with exam preparation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Getting started is simple! Create your free account, select
                  your exam type, and you&apos;ll have immediate access to our
                  comprehensive study materials and practice tests. Our
                  platform will create a personalized study plan based on your
                  exam date and current knowledge level.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 2 */}
              <AccordionItem value="item-2" className="bg-card border rounded-lg px-6 mb-4">
                <AccordionTrigger className="text-left font-semibold text-base py-6 hover:no-underline">
                  What types of exams do you support?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  We support a wide range of competitive exams including
                  engineering entrance exams, government job tests, banking
                  exams, MBA entrance tests, and many more. Our platform
                  covers subjects like mathematics, physics, chemistry,
                  reasoning, English, and general knowledge. Check our exam
                  catalog for the complete list of supported exams.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 3 */}
              <AccordionItem value="item-3" className="bg-card border rounded-lg px-6 mb-4">
                <AccordionTrigger className="text-left font-semibold text-base py-6 hover:no-underline">
                  How accurate are the practice tests?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Our practice tests are created by subject matter experts and
                  are regularly updated to match the latest exam patterns and
                  difficulty levels. They include detailed explanations for
                  each answer, helping you understand concepts thoroughly. Our
                  tests have helped thousands of students achieve success in
                  their actual exams.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 4 */}
              <AccordionItem value="item-4" className="bg-card border rounded-lg px-6 mb-4">
                <AccordionTrigger className="text-left font-semibold text-base py-6 hover:no-underline">
                  Can I track my progress and performance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Absolutely! Our platform provides detailed analytics on your
                  performance, including subject-wise scores, time management,
                  and improvement trends. You can track your progress over
                  time, identify weak areas, and focus your study efforts
                  accordingly. Premium users get access to advanced analytics
                  and personalized study recommendations.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 5 */}
              <AccordionItem value="item-5" className="bg-card border rounded-lg px-6 mb-4">
                <AccordionTrigger className="text-left font-semibold text-base py-6 hover:no-underline">
                  What&apos;s included in the free plan?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Our free plan includes access to 5 practice tests per month,
                  basic study materials, and 30-day progress tracking. You can
                  explore our platform and get a feel for our study approach.
                  Upgrade to Premium anytime for unlimited access to all
                  features, advanced analytics, and personalized study plans.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 6 */}
              <AccordionItem value="item-6" className="bg-card border rounded-lg px-6 mb-4">
                <AccordionTrigger className="text-left font-semibold text-base py-6 hover:no-underline">
                  Can I access study materials offline?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Yes! Premium users can download study materials and practice
                  tests for offline access. This allows you to study anywhere,
                  anytime, even without an internet connection. Simply download
                  the content you need and access it through our mobile app or
                  downloaded files.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <p className="text-muted-foreground text-center">
              Still have questions? Feel free to reach out to us directly.
            </p>
            <Button size="lg" className="rounded-md">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
