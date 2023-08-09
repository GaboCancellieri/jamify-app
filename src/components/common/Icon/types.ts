import {
  ICON_DESIGN_VARIANTS,
  ICON_SIZE_VARIANTS,
} from "../../../constants/icon";

export interface IconProps {
  iconId: string;
  iconDesign: keyof typeof ICON_DESIGN_VARIANTS;
  className?: string;
  size?: keyof typeof ICON_SIZE_VARIANTS;
  color?: string;
}
