import { Component } from "react";
import http from "../http-common";
import { ROUTES } from "../constants";
import { handleAlert } from "../api";

class LoginService extends Component<any> {
  constructor() {
    super({});
  }

  async login(email: string, password: string) {
    try {
      const result = await handleAlert(() =>
        http.post(ROUTES.LOGIN, { email, password })
      );
      return result;
    } catch (error: any) {
      console.log({ error: error.message });
    }
  }
}

export default LoginService;
