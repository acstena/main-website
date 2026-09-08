import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesMatrix from "@/components/ServicesMatrix";
import VoicebotSimulator from "@/components/VoicebotSimulator";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import GoDigitalEstimator from "@/components/GoDigitalEstimator";
import SeoTransformation from "@/components/SeoTransformation";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <ServicesMatrix />
      <VoicebotSimulator />
      <PortfolioShowcase />
      <GoDigitalEstimator />
      <SeoTransformation />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
