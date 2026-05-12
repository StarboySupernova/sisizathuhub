import React from "react";
import FeaturedBlogs from "../components/homePage/FeaturedBlogs";
import HeroSection from "../components/homePage/HeroSection";
import TopCategories from "../components/homePage/TopCategories";
import ContactSection from "../components/homePage/ContactSection";
import TechSphere from "../components/homePage/TechSphere";
import SectionDivider from "../components/SectionDivider"; // <-- Divider
import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <SEO title="Sisizathu Hub Solutions" />
    
    <HeroSection />
    
    <SectionDivider />

    {/* New Sphere Section */}
    <div className="container">
      <TechSphere />
    </div>

    <SectionDivider />
    
    <div className="container">
      <FeaturedBlogs />
    </div>
    
    <SectionDivider />
    
    <div className="container">
      <TopCategories />
    </div>
    
    <SectionDivider />

    <div className="container">
      <ContactSection />
    </div>
    
    <SectionDivider />
  </>
);

export default IndexPage;