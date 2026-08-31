import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import BentoServices from "@/components/BentoServices";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navigation />
      <Hero />
      <Manifesto />
      <BentoServices />
      <CaseStudies />
      <Testimonials />
      <Footer />
    </>
  );
}
