
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Plans } from "@/components/Plans";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Guarantee } from "@/components/Guarantee";
import { Footer } from "@/components/Footer";
import { StickyBuy } from "@/components/StickyBuy";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Plans />
      <Testimonials />
      <FAQ />
      <Guarantee />
      <Footer />
      <StickyBuy />
    </div>
  );
};

export default Index;
