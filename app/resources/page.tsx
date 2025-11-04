import { Navbar } from "@/components/custom/landing-page/navbar/navbar";
import { Footer } from "@/components/custom/landing-page/footers/footer-section";
import { Tagline } from "@/components/custom/landing-page/tagline";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { RESOURCES, RESOURCES_METADATA } from "@/lib/constants";

export const metadata = RESOURCES_METADATA;

export default function Page() {
  const resources = RESOURCES;

  return (
    <main>
      <Navbar />

      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex max-w-3xl flex-col items-center text-center gap-4">
          <Tagline>Resources</Tagline>
          <h1 className="heading-lg">Everything you need to prepare smarter</h1>
          <p className="text-muted-foreground">
            Explore handpicked materials designed to streamline your preparation
            and boost your performance.
          </p>
        </div>
      </section>

      <section className="bg-background section-padding-y">
        <div className="container-padding-x container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:max-w-5xl">
          {resources.map((resource) => (
            <Link key={resource.title} href={resource.href} className="group">
              <Card className="bg-muted/60 rounded-xl border-none shadow-none transition-colors group-hover:bg-muted">
                <CardContent className="flex flex-col gap-2 p-6 text-left">
                  <h3 className="text-foreground text-lg font-semibold">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {resource.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
