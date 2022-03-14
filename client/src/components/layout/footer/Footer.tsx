import React from "react";
import { FooterStyled } from "./footer.styled.js";

const Footer = (): JSX.Element => (
  <FooterStyled className="footer">
    Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
    Versandkosten.
  </FooterStyled>
);

export default Footer;
