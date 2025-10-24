"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Tagline } from "@/components/custom/landing-page/tagline";

export function FaqSection() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline>FAQ</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-foreground">
              Find answers to our frequently asked questions
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              We&apos;ve compiled the most important information to help you get
              the most out of your experience. Can&apos;t find what you&apos;re
              looking for?{" "}
              <Link href="#" className="text-primary underline">
                Contact us.
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                General
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="General FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How do I get started with exam preparation?
                  </AccordionTrigger>
                  <AccordionContent>
                    Getting started is simple! Create your free account, select
                    your exam type, and you'll have immediate access to our
                    comprehensive study materials and practice tests. Our
                    platform will create a personalized study plan based on your
                    exam date and current knowledge level.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    What types of exams do you support?
                  </AccordionTrigger>
                  <AccordionContent>
                    We support a wide range of competitive exams including
                    engineering entrance exams, government job tests, banking
                    exams, MBA entrance tests, and many more. Our platform
                    covers subjects like mathematics, physics, chemistry,
                    reasoning, English, and general knowledge. Check our exam
                    catalog for the complete list of supported exams.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How accurate are the practice tests?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our practice tests are created by subject matter experts and
                    are regularly updated to match the latest exam patterns and
                    difficulty levels. They include detailed explanations for
                    each answer, helping you understand concepts thoroughly. Our
                    tests have helped thousands of students achieve success in
                    their actual exams.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Can I track my progress and performance?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! Our platform provides detailed analytics on your
                    performance, including subject-wise scores, time management,
                    and improvement trends. You can track your progress over
                    time, identify weak areas, and focus your study efforts
                    accordingly. Premium users get access to advanced analytics
                    and personalized study recommendations.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Billing FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Billing
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="Billing FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="billing-1">
                  <AccordionTrigger className="text-left">
                    What's included in the free plan?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our free plan includes access to 5 practice tests per month,
                    basic study materials, and 30-day progress tracking. You can
                    explore our platform and get a feel for our study approach.
                    Upgrade to Premium anytime for unlimited access to all
                    features, advanced analytics, and personalized study plans.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="billing-2">
                  <AccordionTrigger className="text-left">
                    Can I upgrade or downgrade my plan anytime?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, you can upgrade or downgrade your plan at any time.
                    Upgrades take effect immediately, while downgrades take
                    effect at the end of your current billing period. We'll
                    prorate any charges accordingly. No long-term contracts or
                    cancellation fees - you have complete flexibility with your
                    subscription.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="billing-3">
                  <AccordionTrigger className="text-left">
                    Do you offer discounts for annual subscriptions?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer a 20% discount when you choose annual billing
                    for our Premium plan. This saves you significantly compared
                    to monthly billing and provides better value for serious
                    exam preparation. Annual plans are billed upfront and
                    automatically renew unless cancelled.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="billing-4">
                  <AccordionTrigger className="text-left">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, Mastercard, American
                    Express, Discover), PayPal, and UPI payments for Indian
                    users. All payments are processed securely through Stripe.
                    We also support bank transfers for annual subscriptions and
                    corporate invoicing for educational institutions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
