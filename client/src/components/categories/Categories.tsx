import React from "react";
import { Link } from "react-router-dom";

import { CategoriesStyled, ListItemStyled } from "./categories.styled";

import { Category } from "../../utils/types";
import routeUrls from "../../routes/route-urls";

interface IProps {
  loading: boolean;
  categories?: Category[];
}

const Categories: React.FC<IProps> = ({ loading, categories }) => (
  <CategoriesStyled>
    <h1>Kategorien</h1>

    {!loading && categories ? (
      <ul>
        {categories[0]?.childrenCategories.map(({ id, name }, index) => {
          return (
            <ListItemStyled key={index}>
              <Link to={routeUrls.category(id)}>{name}</Link>
            </ListItemStyled>
          );
        })}
      </ul>
    ) : (
      <div>Loading...</div>
    )}
  </CategoriesStyled>
);

export default Categories;
