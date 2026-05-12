import React from "react";
import FeaturedBlogs from "../components/homePage/FeaturedBlogs";
import HeroSection from "../components/homePage/HeroSection";
import TopCategories from "../components/homePage/TopCategories";
import ContactSection from "../components/homePage/ContactSection"; // <-- Add Import
import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <SEO title="Sisizathu Hub Solutions" />
    <HeroSection />
    <div className="container">
      <FeaturedBlogs />
      <TopCategories />
      <ContactSection /> {/* <-- Insert Form Here */}
    </div>
  </>
);

export default IndexPage;