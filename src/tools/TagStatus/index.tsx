import React from "react";
import { Tag, TagStatusProps } from "./styles";

/**
 * Componente de Tag, para exibição de labels na tela.
 *
 * @returns JSX Component
 */
const TagStatus: React.FC<TagStatusProps> = ({
  status,
  width,
  paddingY,
  paddingX,
  fontSize,
  color,
  background,
  customPadding = false,
  styleFont,
}) => {
  return (
    <Tag
      status={status}
      width={width}
      fontSize={fontSize}
      paddingY={paddingY}
      paddingX={paddingX}
      customPadding={customPadding}
      styleFont={styleFont}
      color={color}
      background={background}
    >
      {status}
    </Tag>
  );
};

export default TagStatus;
