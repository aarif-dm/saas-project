import Link from 'next/link';
import { ProductTypeList } from 'types';

const ProductItem = ({ discount, images, id, name}: ProductTypeList) => {

  return (
    <div className="product-item">
      <div className="product__image">

        <Link href={`/product/${id}`}>
          <a>
            <img src={images ? images[0] : ''} alt="product" />
            {discount && 
              <span className="product__discount">{discount}%</span>
            }
          </a>
        </Link>
      </div>
      
      <div className="product__description">
        <h3>{name}</h3>
      </div>
    </div>
  )
};


export default ProductItem