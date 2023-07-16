import LoginService from "./services/LoginService";

export const useLoginService = () => {
  return new LoginService();
};
