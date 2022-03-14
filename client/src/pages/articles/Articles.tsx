import React from "react";
import { useParams } from "react-router-dom";

import { ArticlesStyled } from "./articles.styled";

import Categories from "../../components/categories/Categories";
import ArticleList from "../../components/article-list/ArticleList";
import { useCategoryData } from "../../hooks/useCategoryData";

const Articles: React.FC = (): JSX.Element => {
  const { categoryId } = useParams();
  const { loading, categories } = useCategoryData(categoryId || "156126");

  return (
    <ArticlesStyled>
      <Categories loading={loading} categories={categories} />
      <ArticleList loading={loading} categories={categories} />
    </ArticlesStyled>
  );
};

export default Articles;
