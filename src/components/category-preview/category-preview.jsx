import './category-preview.scss'
import ProductCard from "../product-card/product-card";

const CategoryPreview = ({title, product}) => {
   return(
      <div className="category-preview-container">
         <h2>
            <span className='title'>{title.toUpperCase()}</span>
         </h2>
         <div className="preview">
            {
               product
                  .filter((_, idx) => idx < 4)
                  .map((product) =>
                     <ProductCard key={product.id} product={product}/>
                  )
            }
         </div>
      </div>
   )
}

export default CategoryPreview;