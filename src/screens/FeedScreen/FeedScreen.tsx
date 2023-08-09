import { useNavigate } from "react-router-dom";
import { Button, Typography } from "../../components/common";
import { useEffect } from "react";

const FeedScreen = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  useEffect(() => {
    if (
      !localStorage.getItem("accessToken") ||
      !localStorage.getItem("refreshToken")
    ) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Button type="primary" onClick={handleLogOut}>
      <Typography type="buttonTextPrimary">Log Out</Typography>
    </Button>
  );
};

export default FeedScreen;
