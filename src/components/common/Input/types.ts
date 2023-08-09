import { INPUT_STATE_VARIANTS, INPUT_TYPE_VARIANTS } from "./constants";

export type InputStateType = keyof typeof INPUT_STATE_VARIANTS;
export interface InputProps {
  value: string;
  onChange: (event: any) => void;
  state?: InputStateType;
  type?: keyof typeof INPUT_TYPE_VARIANTS;
  placeholder?: string;
  className?: string;
  errorMessage?: string;
  disableCopyEvent?: boolean;
  disablePasteEvent?: boolean;
}
