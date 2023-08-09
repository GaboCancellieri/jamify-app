import LoginService from "./services/LoginService";

export const useLoginService = () => {
  return new LoginService();
};

export const handleAlert = async (func: Function) => {
  try {
    const { status, data } = await func();
    if (status === 200) {
      alert("Exito!");
    }
    return data;
  } catch (error: any) {
    console.log({ error });
  }
};
