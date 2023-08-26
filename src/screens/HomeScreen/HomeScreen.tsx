import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "../../components/common";
import FeaturesSection from "../../components/layout/HomeScreenComponents/FeaturesSection";

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate("/login");
  };

  return (
    <>
      {/* <Button type="primary" onClick={handleJoinNow}>
        <Typography type="buttonTextPrimary">Join Now</Typography>
      </Button> */}
      <FeaturesSection/>   
      {/* <IntroSection />
      <AboutSection />
      <Footer /> */}
    </>
  );
};

export default HomeScreen;
