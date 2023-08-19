export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

export const updateToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};
