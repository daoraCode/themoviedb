import React from 'react'
import { CategoryType } from "../../../domain/category/CategoryType"
import './Category.css';

type CategoryProps = {
  category: CategoryType;
  handleGenreClick : (genre_id : string) => void;
};

export const Category = ({ category, handleGenreClick }: CategoryProps,) => {
  return <button className="genre-btn" onClick={() => handleGenreClick(String(category.id))}>{category.name}</button>;
};
