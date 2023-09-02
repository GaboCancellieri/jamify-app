import React from "react";
import styles from "./FeaturesSection.module.scss";
import FeatureItem from "./FeatureItem";
import { FEATURE_ITEMS } from "./FeaturesSection.constants";

const FeaturesSection = () => {
  return (
    <div className={styles.featureSectionContainer}>
      {FEATURE_ITEMS.map((item, index) => {
        return (
          <FeatureItem
            title={item.title}
            image={item.image}
            altText={`imagen${index}`}
            index={index}
          />
        );
      })}
    </div>
  );
};
// D.R.Y. => DON'T REPEAT YOURSELF
export default FeaturesSection;
