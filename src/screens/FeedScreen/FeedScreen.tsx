import { useNavigate } from "react-router-dom";
import { TopList } from "../../components/common";
import { useEffect } from "react";
import {
  TOP_LIST_ARTISTS,
  TOP_LIST_TRENDING_TRACKS,
} from "../../components/common/TopList/TopList.constants";
import styles from "./FeedScreen.module.scss";

const FeedScreen = () => {
  // const navigate = useNavigate();

  // const handleLogOut = () => {
  //   localStorage.removeItem("accessToken");
  //   localStorage.removeItem("refreshToken");
  // };

  // useEffect(() => {
  //   if (
  //     !localStorage.getItem("accessToken") ||
  //     !localStorage.getItem("refreshToken")
  //   ) {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  return (
    <div className={styles.topListContainer}>
      <TopList title={"Top Artist"} list={TOP_LIST_ARTISTS} />
      <TopList title={"Trending Tracks"} list={TOP_LIST_TRENDING_TRACKS} />
    </div>
  );
};

export default FeedScreen;
