import React from "react";

import { TextInputStyled } from "./text-input.styled.js";

interface IProps {
  placeholder: string;
  onChange: (e: any) => void;
  defaultValue: string;
}

const TextInput: React.FC<IProps> = ({
  placeholder,
  onChange,
  defaultValue,
}): JSX.Element => (
  <TextInputStyled
    placeholder={placeholder}
    onChange={onChange}
    defaultValue={defaultValue}
  />
);

export default TextInput;
