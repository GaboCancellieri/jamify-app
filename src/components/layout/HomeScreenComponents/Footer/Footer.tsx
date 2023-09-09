import React from "react";
import styles from "./Footer.module.scss";
import { Button, Typography } from "../../../common";
import Logo from "../../../../assets/images/favicon.ico";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleJoinClick = () => {
    navigate("/login");
  };
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLogoContainer}>
        <img src={Logo} alt="sonarly logo" />
        <Typography type="logo">Sonarly</Typography>
      </div>
      <div className={styles.textContainer}>
        <Typography type="whiteBigText">Discover. Create. Inspire.</Typography>
      </div>
      <div className={styles.buttonContainer}>
        <Button type="joinNow" onClick={handleJoinClick}>
          <Typography type="buttonTextSecondary">JOIN NOW</Typography>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
