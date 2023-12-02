import React from "react";
import styles from "./TopList.module.scss";
import Typography from "../Typography";
import TopListItem from "./TopListItem";
import { ITopList } from "../../../types/ITopList";

interface TopListProps {
  title: string;
  list: ITopList[];
}

const TopList = ({ title, list }: TopListProps) => {
  return (
    <div className={styles.topListContainer}>
      <Typography type="whiteText">{title}</Typography>
      {list.map((item, index) => {
        return (
          <TopListItem
            artist={item.name}
            rank={index + 1}
            trackTitle={item.trackTitle}
          />
        );
      })}
    </div>
  );
};

export default TopList;
