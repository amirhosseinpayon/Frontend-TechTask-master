import React from "react";

import { ArticleCardStyled } from "./article-card.styled";

import { currency } from "../../utils/currency";
import { Article } from "../../utils/types";

import Button from "../ui/button/Button";

interface IProps {
  article: Article;
}

const ArticleCard: React.FC<IProps> = ({
  article: { images, name, prices },
}): JSX.Element => (
  <ArticleCardStyled>
    <img src={images[0].path} alt={images[0].path} />
    <h3>{name}</h3>
    <span>{currency({ value: prices.regular.value })}</span>
    <Button title="Add to cart" />
  </ArticleCardStyled>
);

export default ArticleCard;
