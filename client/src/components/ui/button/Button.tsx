import React from "react";

import { ButtonStyled } from "./button.styled";

interface IProps {
  title: string;
}

const Button: React.FC<IProps> = ({ title }): JSX.Element => (
  <ButtonStyled>{title}</ButtonStyled>
);

export default Button;
