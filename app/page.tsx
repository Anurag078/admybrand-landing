import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/app/contact/page";
import PricingCalculator from "@/components/PricingCalculator";

export default function Home() {
  return (
    <>
      {/* Hero Section – Gradient */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <Hero />
      </section>

      {/* Features Section – Light Gray */}
      <section className="bg-gray-50 text-gray-900">
        <Features />
      </section>

      {/* Pricing Section – White */}
      <section className="bg-white text-gray-900">
        <Pricing />
      </section>

      {/* Testimonials Section – Light Blue */}
      <section className="bg-blue-50 text-gray-900">
        <Testimonials />
      </section>

      {/* Call-to-Action Section – Subtle Blue */}
      <section className="bg-blue-100 text-gray-900">
        <CTA />
      </section>

      {/* FAQ Section – Gradient */}
      <section className="bg-gradient-to-b from-blue-50 to-white text-gray-900">
        <FAQ />
      </section>

      <PricingCalculator />

      {/* Contact Section – Light Gradient */}
      <section className="bg-gradient-to-b from-white to-blue-100 text-gray-900">
        <Contact />

        


      </section>
    </>
  );
}
