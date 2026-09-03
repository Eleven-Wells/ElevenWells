import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import WhatWeDo from "../Components/WhatWeDo";
import WorkArchive from "../Components/WorkArchive";
import EcosystemSection from "../Components/EcosystemSection";
import Seo from "../Components/Seo";
import { usePortfolio } from "../context/PortfolioContext";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "../config/seo";

const Home = () => {
  const { organization } = usePortfolio();
  const siteName = organization.name?.trim();

  return (
    <>
      <Seo
        title={siteName ? `${siteName} | Product Studio & Creative Collective` : DEFAULT_TITLE}
        description={DEFAULT_DESCRIPTION}
        organization={organization}
      />
      <main>
        <Hero />
        <WhatWeDo />
        <WorkArchive />
        <EcosystemSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
