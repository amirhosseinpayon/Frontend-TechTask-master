import React, { ReactNode } from "react";

import { LayoutStyled } from "./layout.styled";

import Header from "./header/Header";
import Footer from "./footer/Footer";

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }): JSX.Element => (
  <>
    <Header />
    <LayoutStyled className="layout">
      <main>{children}</main>
    </LayoutStyled>
    <Footer />
  </>
);

export default Layout;
