import { BuilderHero } from "@/components/builder/BuilderHero";
import { SpiritSection } from "@/components/builder/SpiritSection";
import { ProtocolSection } from "@/components/builder/ProtocolSection";
import { ThreePowersSection } from "@/components/builder/ThreePowersSection";
import { IncentiveSection } from "@/components/builder/IncentiveSection";
import { ContentRulesSection } from "@/components/builder/ContentRulesSection";
import { ImpeachmentSection } from "@/components/builder/ImpeachmentSection";
import { RoadmapSection } from "@/components/builder/RoadmapSection";
import { ApplicationStandardsSection } from "@/components/builder/ApplicationStandardsSection";
import { ContributionChannelsSection } from "@/components/builder/ContributionChannelsSection";
import { CertificateSection } from "@/components/builder/CertificateSection";
import { JoinFormSection } from "@/components/builder/JoinFormSection";
import { BuilderNav } from "@/components/builder/BuilderNav";
import { SharedContributorsSection } from "@/components/builder/SharedContributorsSection";
import { WhatIsThisSection } from "@/components/builder/WhatIsThisSection";
import { DecisionAidSection } from "@/components/builder/DecisionAidSection";

const BuilderPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      <BuilderNav />
      <BuilderHero />
      <div className="max-w-4xl mx-auto px-6 pb-32 space-y-24">
        <WhatIsThisSection />
        <SharedContributorsSection />
        <SpiritSection />
        <ProtocolSection />
        <ThreePowersSection />
        <IncentiveSection />
        <ContentRulesSection />
        <ImpeachmentSection />
        <ApplicationStandardsSection />
        <ContributionChannelsSection />
        <DecisionAidSection />
        <CertificateSection />
        <RoadmapSection />
        <JoinFormSection />
      </div>
    </div>
  );
};

export default BuilderPortal;
