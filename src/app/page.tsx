import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import ServicesMatrix from "@/components/services/ServicesMatrix";
import VoicebotSimulator from "@/components/simulator/VoicebotSimulator";
import PortfolioShowcase from "@/components/portfolio/PortfolioShowcase";
import GoDigitalEstimator from "@/components/estimator/GoDigitalEstimator";
import SeoTransformation from "@/components/seo/SeoTransformation";
import Testimonials from "@/components/testimonials/Testimonials";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

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
