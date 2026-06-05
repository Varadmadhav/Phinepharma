import { CapsuleScrollIntro } from "./components/CapsuleScrollIntro";
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
import { CustomPharmaCursor } from "./components/CustomPharmaCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <CustomPharmaCursor />
      <Navigation />
      <CapsuleScrollIntro />
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