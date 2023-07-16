import { Component } from "react";
import http from "../http-common";
import { ROUTES } from "../constants";

class LoginService extends Component<any> {
  constructor() {
    super({});
  }

  async login(email: string, password: string) {
    try {
      const response = await http.post(ROUTES.LOGIN, { email, password });
      console.log({ response });
    } catch (error: any) {
      console.log({ error: error.message });
    }
  }
}

export default LoginService;
