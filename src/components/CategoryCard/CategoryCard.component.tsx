import React from "react";
import { ICategory } from "./CategoryCard.type";
const CategoryCard: React.FC<ICategory> = ({ title }) => {
  return <div>{title}</div>;
};

export default CategoryCard;
