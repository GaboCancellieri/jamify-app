import React from "react";
import FeaturesSection from "../../components/layout/HomeScreenComponents/FeaturesSection";
import AboutSection from "../../components/layout/HomeScreenComponents/AboutSection";
import Footer from "../../components/layout/HomeScreenComponents/Footer";
import IntroSection from "../../components/layout/HomeScreenComponents/IntroSection";

const HomeScreen = () => {
  return (
    <>
      <IntroSection />
      <FeaturesSection />
      <AboutSection />
      <Footer />
    </>
  );
};

export default HomeScreen;
