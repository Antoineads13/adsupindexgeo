import { Header } from "@/components/Header";
import { HeroTech } from "@/components/HeroTech";
import { CategoryTabs } from "@/components/CategoryTabs";
import { TopBrandsWithChart } from "@/components/TopBrandsWithChart";
import { BrandTable } from "@/components/BrandTable";
import { ResponsePositionTable } from "@/components/ResponsePositionTable";
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
      <HeroTech />
      <CategoryTabs />
      <TopBrandsWithChart />
      <BrandTable />
      <ResponsePositionTable />
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
