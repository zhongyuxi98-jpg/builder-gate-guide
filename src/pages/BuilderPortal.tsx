import { BuilderHero } from "@/components/builder/BuilderHero";
import { SpiritSection } from "@/components/builder/SpiritSection";
import { ProtocolSection } from "@/components/builder/ProtocolSection";
import { ThreePowersSection } from "@/components/builder/ThreePowersSection";
import { IncentiveSection } from "@/components/builder/IncentiveSection";
import { ContentRulesSection } from "@/components/builder/ContentRulesSection";
import { ImpeachmentSection } from "@/components/builder/ImpeachmentSection";
import { RoadmapSection } from "@/components/builder/RoadmapSection";
import { BuilderNav } from "@/components/builder/BuilderNav";

const BuilderPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      <BuilderNav />
      <BuilderHero />
      <div className="max-w-4xl mx-auto px-6 pb-32 space-y-24">
        <SpiritSection />
        <ProtocolSection />
        <ThreePowersSection />
        <IncentiveSection />
        <ContentRulesSection />
        <ImpeachmentSection />
        <RoadmapSection />
      </div>
    </div>
  );
};

export default BuilderPortal;
