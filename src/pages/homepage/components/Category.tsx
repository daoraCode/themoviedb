import React from 'react'
import { CategoryType } from "../../../domain/category/CategoryType"

import './Category.css';


type CategoryProps = {
    category: CategoryType;
}

export const Category = ({ category } : CategoryProps) => {
  return (
    <button className="genre-btn">{category.name}</button>
  )
}
