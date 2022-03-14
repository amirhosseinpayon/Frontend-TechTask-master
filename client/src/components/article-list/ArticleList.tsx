import React from "react";
import { Category } from "../../utils/types";

import ArticleCard from "../article-card/ArticleCard";

import { ArticleListStyled, ArticlesStyled } from "./article-list.styled.js";

interface IProps {
  loading: boolean;
  categories?: Category[];
}

const ArticleList: React.FC<IProps> = ({
  loading,
  categories,
}): JSX.Element => {
  const articles = categories?.map((category) => {
    return category.categoryArticles.articles.map((article, index) => {
      return <ArticleCard article={article} key={index} />;
    });
  });

  return (
    <ArticleListStyled>
      {!loading && categories ? (
        <>
          <h1>
            {categories[0].name}
            <small> ({categories[0].articleCount})</small>
          </h1>
          <ArticlesStyled>{articles}</ArticlesStyled>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </ArticleListStyled>
  );
};

export default ArticleList;
