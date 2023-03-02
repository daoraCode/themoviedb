import React from 'react'
import { CategoryType } from "../../../domain/category/CategoryType"

type CategoryProps = {
    category: CategoryType;
}

export const Category = ({ category } : CategoryProps) => {
  return (
    <button>{category.name}</button>
  )
}
