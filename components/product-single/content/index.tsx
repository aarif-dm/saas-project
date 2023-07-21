import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { some } from "lodash";
import { addProduct } from "store/reducers/cart";
import { toggleFavProduct } from "store/reducers/user";
import { ProductType, ProductStoreType } from "types";
import { RootState } from "store";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type ProductContent = {
  product: ProductType;
};

const Content = ({ product }: ProductContent) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);

  const { favProducts } = useSelector((state: RootState) => state.user);
  const isFavourite = some(
    favProducts,
    (productId) => productId === product.id
  );

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id: product.id,
      })
    );
  };

  const addToCart = () => {
    const productToSave: ProductStoreType = {
      id: product.id,
      name: product.name,
      thumb: product.images ? product.images[0] : "",
      price: product.currentPrice,
      count: count,
    };

    const productStore = {
      count,
      product: productToSave,
    };

    dispatch(addProduct(productStore));
  };

  return (
    <>
      <section className="product-content">
        <div className="product-content__intro">
          <h5 className="product__id">
            Product ID:<br></br>
            {product.id}
          </h5>
          <h2 className="product__name">{product.name}</h2>
          <div className="product__prices">
            <Box>
              <Card variant="outlined">
                <React.Fragment>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 18 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Yearly Subscription
                    </Typography>

                    <Typography sx={{ fontSize: 30 }}>
                      ${product.currentPrice}
                    </Typography>
                  </CardContent>
                </React.Fragment>
              </Card>
            </Box>
          </div>
        </div>

        <div className="product-content__filters">
          <div className="product-filter-item">
            <h5>Period:</h5>
            <div className="quantity-buttons">
              <div className="quantity-button">
                <button
                  type="button"
                  onClick={() => setCount(count - 1)}
                  className="quantity-button__btn"
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  type="button"
                  onClick={() => setCount(count + 1)}
                  className="quantity-button__btn"
                >
                  +
                </button>
              </div>

              <button
                type="submit"
                onClick={() => addToCart()}
                className="btn btn--rounded btn--yellow"
              >
                Add to cart
              </button>
              <button
                type="button"
                onClick={toggleFav}
                className={`btn-heart ${
                  isFavourite ? "btn-heart--active" : ""
                }`}
              >
                <i className="icon-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
