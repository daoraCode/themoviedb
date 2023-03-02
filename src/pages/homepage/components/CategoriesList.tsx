// import React from 'react'
import { Category } from "./Category"
import { CategoryType } from "../../../domain/category/CategoryType"

type CategoriesListProps = {
  categories: CategoryType[];
}

export const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <div>
      {categories.map((item) => (
        <div key={item.id}>
          <Category category={item} />
        </div>
      ))}
    </div>
  )
}
