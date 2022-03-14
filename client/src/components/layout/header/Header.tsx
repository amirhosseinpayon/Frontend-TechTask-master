import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { HeaderStyled } from "./header.styled.js";

import logo from "../../../assets/images/logo.svg";
import TextInput from "../../../components/ui/text-input/TextInput";

const Header = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearchValue = searchParams.get("q");
  const [searchText, setSearchText] = useState(initialSearchValue);

  const onSubmitSearchFormHandler = (e: any): void => {
    e.preventDefault();
    const q = searchText;
    setSearchParams(q ? { q } : {});
  };

  return (
    <HeaderStyled>
      <div>
        <img src={logo} alt="home 24" />\
        <form onSubmit={onSubmitSearchFormHandler}>
          <TextInput
            placeholder={"Search"}
            onChange={({ target }) => setSearchText(target.value)}
            defaultValue={initialSearchValue || ""}
          />
        </form>
      </div>
    </HeaderStyled>
  );
};

export default Header;
