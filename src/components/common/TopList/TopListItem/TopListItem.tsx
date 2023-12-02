import React from "react";
import styles from "./TopListItem.module.scss";
import { Typography } from "../..";

interface TopListItemProps {
  rank: number;
  artist: string;
  trackTitle?: string;
}

const TopListItem = ({ rank, artist, trackTitle }: TopListItemProps) => {
  return (
    <div className={styles.topListItemContainer}>
      <div className={styles.rankContainer}>
        <Typography type="whiteText">#{rank}</Typography>
      </div>
      <div className={styles.artistTrackContainer}>
        <div className={styles.artistContainer}>
          <Typography type="whiteText">{artist}</Typography>
        </div>
        {trackTitle ? (
          <div className={styles.trackTitleContainer}>
            <Typography type="whiteText">{trackTitle}</Typography>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TopListItem;
