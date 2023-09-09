import React from "react";
import styles from "./IntroSection.module.scss";
import { Button, Typography } from "../../../common";
import Logo from "../../../../assets/images/favicon.ico";
import imagenIntro from "../../../../assets/images/imagenIntro.jpg";
import { useNavigate } from "react-router-dom";

const IntroSection = () => {
  const navigate = useNavigate();

  const handleLogoRedirect = () => {
    navigate("/");
  };

  function onJoin(): void {
    navigate("/login");
  }

  return (
    <div className={styles.introSectionContainer}>
      <div className={styles.introContainer}>
        <Typography type="logo" onClick={handleLogoRedirect}>
          <img src={Logo} alt="sonarly logo" />
          Sonarly
        </Typography>
        <div className={styles.joinContainer}>
          <div className={styles.wordsContainer}>
            <Typography type="titleWhite">Discover. Create. Inspire</Typography>
          </div>
          <div className={styles.loginButtonContainer}>
            <Button type="primary" isFullSize onClick={onJoin}>
              <Typography type="buttonTextPrimary">JOIN NOW</Typography>
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.imageIntroContainer}>
        <img
          className={styles.imageIntro}
          src={imagenIntro}
          alt="sonarly logo"
        />
      </div>
    </div>
  );
};

export default IntroSection;
