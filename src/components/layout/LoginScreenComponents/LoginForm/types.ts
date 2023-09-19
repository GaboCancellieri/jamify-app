import { IUser } from "../../../../context/UserContext/types";

export interface LoginFormProps {
  onRegister: () => void;
  currentUser: IUser;
}
