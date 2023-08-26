import React from "react";
import styles from "./FeaturesSection.module.scss";
import Image1 from "../../../../assets/images/Image1.jpg";
import Image2 from "../../../../assets/images/Image2.jpg";
import Image3 from "../../../../assets/images/Image3.jpg";
import Image4 from "../../../../assets/images/Image4.jpg";
import Image5 from "../../../../assets/images/Image5.jpg";

const FeaturesSection = () => {
  return (
    <div className={styles.featuresSectionContainer}>
      <div className={styles.itemContainer}>
        <img
          width="100%"
          style={{ objectFit: "cover" }}
          src={Image1}
          alt="Imagen1"
        ></img>
      </div>
      <div className={styles.itemContainer}>
        <img
          width="100%"
          style={{ objectFit: "cover" }}
          src={Image2}
          alt="Imagen2"
        ></img>
      </div>
      <div className={styles.itemContainer}>
        <img
          width="100%"
          style={{ objectFit: "cover" }}
          src={Image3}
          alt="Imagen3"
        ></img>
      </div>
      <div className={styles.itemContainer}>
        <img
          width="100%"
          style={{ objectFit: "cover" }}
          src={Image4}
          alt="Imagen4"
        ></img>
      </div>
      <div className={styles.itemContainer}>
        <img
          width="100%"
          style={{ objectFit: "cover" }}
          src={Image5}
          alt="Imagen5"
        ></img>
      </div>
    </div>
  );
};

export default FeaturesSection;
