import React from 'react'
import { Category } from "./Category"
import { CategoryType } from "../../../domain/category/CategoryType"
import './CategoriesList.css'

type CategoriesListProps = {
  categories: CategoryType[];
  handleGenreClick : (genre_id : string) => void;
};

export const CategoriesList = ({ categories, handleGenreClick }: CategoriesListProps) => {
  return (
    <div className="sidebar">
    <h1 className="heading-text_genres">Films par catégories</h1>
    <hr className="separation" />
      {categories.map((item) => (
        <div key={item.id}>
          <Category category={item} handleGenreClick={handleGenreClick} />
        </div>
      ))}
    </div>
  );
};
