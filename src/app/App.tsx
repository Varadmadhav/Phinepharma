import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ManufacturingExcellence } from "./components/ManufacturingExcellence";
import { ManufacturingProcess } from "./components/ManufacturingProcess";
import { ProductCategories } from "./components/ProductCategories";
import { Services } from "./components/Services";
import { QualityAssurance } from "./components/QualityAssurance";
import { GlobalPresence } from "./components/GlobalPresence";
import { Insights } from "./components/Insights";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { ClosingVideo } from "./components/ClosingVideo";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <WhyChooseUs />
      <ManufacturingExcellence />
      <ManufacturingProcess />
      <ProductCategories />
      <Services />
      <QualityAssurance />
      <GlobalPresence />
      <Insights />
      <Contact />
      <ClosingVideo />
    </div>
  );
}