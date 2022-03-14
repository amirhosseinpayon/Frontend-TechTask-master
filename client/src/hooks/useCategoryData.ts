import { useState, useEffect } from 'react';

import { useQuery } from "@apollo/client";
import { Category } from "../utils/types";
import { LOAD_CATEGORIES } from "../graphql/queries/category";

export const useCategoryData = (categoryId: string | undefined) => {
  const [categories, setCategories] = useState<Category[]>();
  const { loading, data } = useQuery(LOAD_CATEGORIES, {
  variables: {
    ids: [categoryId],
  }
});

  useEffect(() => {
    setCategories(data?.categories);
}, [data]);

  return {
    loading,
    categories
  }
}