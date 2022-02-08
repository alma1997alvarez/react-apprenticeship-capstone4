import React from "react";
import mockCategories from "../../assets/mocks/product-categories.json";
import CategoryCard from "../CategoryCard/CategoryCard.component";

const ProductCategories: React.FC = () => {
  return (
    <>
      {mockCategories.results.map((item) => {
        return <CategoryCard title={item.data.name} key={item.data.name} />;
      })}
    </>
  );
};

export default ProductCategories;
