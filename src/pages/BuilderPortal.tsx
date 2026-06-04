import { BuilderHero } from "@/components/builder/BuilderHero";
import { SpiritSection } from "@/components/builder/SpiritSection";
import { ProtocolSection } from "@/components/builder/ProtocolSection";
import { ThreePowersSection } from "@/components/builder/ThreePowersSection";
import { IncentiveSection } from "@/components/builder/IncentiveSection";
import { ContentRulesSection } from "@/components/builder/ContentRulesSection";
import { ImpeachmentSection } from "@/components/builder/ImpeachmentSection";
import { RoadmapSection } from "@/components/builder/RoadmapSection";
import { ContributionChannelsSection } from "@/components/builder/ContributionChannelsSection";
import { CertificateSection } from "@/components/builder/CertificateSection";
import { JoinFormSection } from "@/components/builder/JoinFormSection";
import { BuilderNav } from "@/components/builder/BuilderNav";
import { SharedContributorsSection } from "@/components/builder/SharedContributorsSection";
import { WhatIsThisSection } from "@/components/builder/WhatIsThisSection";
import { DecisionAidSection } from "@/components/builder/DecisionAidSection";
import { WhoUsesThisSection } from "@/components/builder/WhoUsesThisSection";
import { BuilderRolesSection } from "@/components/builder/BuilderRolesSection";
import { IdentityFluiditySection } from "@/components/builder/IdentityFluiditySection";

const BuilderPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      <BuilderNav />
      <BuilderHero />
      <div className="max-w-4xl mx-auto px-6 pb-32 space-y-24">
        <WhatIsThisSection />
        <SharedContributorsSection />
        <SpiritSection />
        <WhoUsesThisSection />
        <ProtocolSection />
        <ThreePowersSection />
        <IncentiveSection />
        <ImpeachmentSection />
        <ContentRulesSection />
        <RoadmapSection />
        <BuilderRolesSection />
        <IdentityFluiditySection />
        <ContributionChannelsSection />
        <CertificateSection />
        <DecisionAidSection />
        <JoinFormSection />
      </div>
    </div>
  );
};

export default BuilderPortal;
