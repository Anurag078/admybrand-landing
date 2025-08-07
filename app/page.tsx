import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/app/contact/page";
import PricingCalculator from "@/components/PricingCalculator";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      {/* Hero Section – Gradient */}
      <section id="hero" className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white scroll-mt-20">
        <Hero />
      </section>
     

      {/* Features Section – Light Gray */}
      <section id="features" className="bg-gray-50 text-gray-900 scroll-mt-20">
        <Features />
      </section>

      {/* Pricing Section – White */}
      <section id="pricing" className="bg-white text-gray-900 scroll-mt-20">
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
      <section id="faq" className="bg-gradient-to-b from-blue-50 to-white text-gray-900 scroll-mt-20">
        <FAQ />
      </section>

      {/* Pricing Calculator Section */}
      <section id="calculator" className="bg-white text-gray-900 scroll-mt-20">
        <PricingCalculator />
      </section>

      {/* Contact Section – Light Gradient */}
      <section id="contact" className="bg-gradient-to-b from-white to-blue-100 text-gray-900 scroll-mt-20">
        <Contact />
      </section>

       {/* About Section – Gradient Light Blue */}
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
    </>
  );
}
