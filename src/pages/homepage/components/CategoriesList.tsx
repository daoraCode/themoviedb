import React from 'react'
import { Category } from "./Category";
import { CategoryType } from "../../../domain/category/CategoryType";

type CategoriesListProps = {
  categories: CategoryType[];
  handleGenreClick : (genre_id : string) => void;
};

export const CategoriesList = ({ categories, handleGenreClick }: CategoriesListProps) => {
  return (
    <div>
      {categories.map((item) => (
        <div key={item.id}>
          <Category category={item} handleGenreClick={handleGenreClick} />
        </div>
      ))}
    </div>
  );
};
