import React from "react";
import styles from "./AboutSection.module.scss";
import { Button, Typography } from "../../../common";
import Logo from "../../../../assets/images/favicon.ico";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  const handleJoinClick = () => {
    navigate("/login");
  };
  return (
    <div className={styles.aboutSectionContainer}>
      <div className={styles.aboutTitleSectionContainer}>
        <img src={Logo} alt="sonarly logo" />
        <Typography type="aboutTitle">Musical Social Network</Typography>
        <img src={Logo} alt="sonarly logo" />
      </div>
      <div className={styles.aboutTextSectionContainer}>
        <Typography type="whiteText">
          <p>
            Sonarly is not just another music app; it’s a dynamic symphony of
            creation, connection, and discovery. Our primary goal? To make music
            more accessible, interactive, and social.
          </p>
          <p>
            Sonarly is designed as an all-in-one platform for musicians and
            music enthusiasts alike. Whether you’re an emerging artist looking
            to share your sound with the world, or a music lover seeking fresh
            rhythms and beats, Sonarly is the space for you.
          </p>
          <p>
            Our app brings music creators and listeners closer than ever before.
            You can collaborate with musicians from around the globe, joining
            forces to make beautiful harmonies together.
          </p>
          <p>
            But that’s not all. Sonarly encourages the sharing of music in a way
            that's simple, seamless, and rewarding. You can upload your tracks,
            share them with a global audience, and even receive real-time
            feedback from other users. This immersive social experience elevates
            music sharing to an entirely new level.
          </p>
          <p>
            We also understand the thrill of discovering new music. That's why
            Sonarly's smart algorithms curate music recommendations tailored to
            your tastes. It's like having a personal DJ who knows exactly what
            you want to hear next!
          </p>
          <p>
            At Sonarly, we cherish creativity and honor the craft of every
            musician. That's why we've implemented robust measures to protect
            your intellectual property. Your creativity is your own, and we
            strive to keep it that way.
          </p>
          <p>
            <Button type="text" onClick={handleJoinClick}>
              <span className={styles.joinText}>Join us at Sonarly</span>
            </Button>{" "}
            - be a part of a vibrant community of music lovers and creators.
            Share your sound, find your beat, and let the music move you.
          </p>
        </Typography>
      </div>
    </div>
  );
};
export default AboutSection;
