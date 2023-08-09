import React from "react";
import { IconProps } from "./types";
import {
  ICON_DESIGN_VARIANTS,
  ICON_SIZE_NORMAL,
  ICON_SIZE_VARIANTS,
} from "../../../constants/icon";
import { COLOR_WHITE } from "../../../constants/colors";

const Icon = ({
  iconDesign,
  iconId,
  className = "",
  size = ICON_SIZE_NORMAL,
  color = COLOR_WHITE,
}: IconProps) => {
  const design: any = ICON_DESIGN_VARIANTS[iconDesign];
  const Icon = design[iconId];
  return (
    <div className={className}>
      <Icon style={{ color }} size={ICON_SIZE_VARIANTS[size]}></Icon>
    </div>
  );
};

export default Icon;
