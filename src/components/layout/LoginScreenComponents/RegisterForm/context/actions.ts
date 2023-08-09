export const SET_REGISTER_EMAIL = "SET_REGISTER_EMAIL";
export const SET_REGISTER_USERNAME = "SET_REGISTER_USERNAME";
export const SET_REGISTER_PASSWORD = "SET_REGISTER_PASSWORD";
export const SET_REGISTER_REPEATED_PASSWORD = "SET_REGISTER_REPEATED_PASSWORD";
export const SET_REGISTER_DOB = "SET_REGISTER_DOB";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const RESET_REGISTER_FORM = "RESET_REGISTER_FORM";

export const setRegisterEmail = (email: string) => ({
  action: SET_REGISTER_EMAIL,
  payload: { email },
});

export const setRegisterUsername = (username: string) => ({
  action: SET_REGISTER_USERNAME,
  payload: { username },
});

export const setRegisterPassword = (password: string) => ({
  action: SET_REGISTER_PASSWORD,
  payload: { password },
});

export const setRegisterRepeatedPassword = (repeatedPassword: string) => ({
  action: SET_REGISTER_REPEATED_PASSWORD,
  payload: { repeatedPassword },
});

export const setRegisterDOB = (dob: Date) => ({
  action: SET_REGISTER_DOB,
  payload: { dob },
});

export const submitForm = () => ({
  action: SUBMIT_FORM,
});

export const resetRegisterForm = () => ({
  action: RESET_REGISTER_FORM,
});
