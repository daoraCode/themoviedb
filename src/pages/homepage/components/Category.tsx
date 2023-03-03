import React from "react";
import { CategoryType } from "../../../domain/category/CategoryType";

type CategoryProps = {
  category: CategoryType;
  handleGenreClick : (genre_id : string) => void;
};

export const Category = ({ category, handleGenreClick }: CategoryProps,) => {
  return <button onClick={() => handleGenreClick(String(category.id))}>{category.name}</button>;
};
