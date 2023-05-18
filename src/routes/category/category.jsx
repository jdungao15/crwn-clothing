import {CategoryContainer, CategoryTitle} from "./category.styles";
import {useParams} from "react-router-dom";
import {useContext, useState, useEffect, Fragment} from "react";
import {CategoriesContext} from "../../contexts/categories";
import ProductCard from "../../components/product-card/product-card";

const Category = () => {
   const {category} = useParams();
   const {categoriesMap} = useContext(CategoriesContext);
   const [products, setProducts] = useState(categoriesMap[category]);

   useEffect(() => {
      setProducts(categoriesMap[category]);
   }, [categoriesMap, category]);

   return (
      <Fragment>
         <CategoryTitle >{category.toUpperCase()}</CategoryTitle>
         <CategoryContainer>
            {products &&
               products.map((product) => <ProductCard key={product.id}
                                                      product={product}/>)
            }
         </CategoryContainer>
      </Fragment>
   );
};

export default Category;