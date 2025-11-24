import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryTabs } from "@/components/CategoryTabs";
import { TopBrands } from "@/components/TopBrands";
import { TrendChart } from "@/components/TrendChart";
import { BrandTable } from "@/components/BrandTable";
import { KeywordTable } from "@/components/KeywordTable";
import { FeatureCards } from "@/components/FeatureCards";
import { Industries } from "@/components/Industries";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CategoryTabs />
      <TopBrands />
      <TrendChart />
      <BrandTable />
      <KeywordTable />
      <FeatureCards />
      <Industries />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
