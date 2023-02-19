import React from "react";
import ClassicHeader from "../../Components/Header/ClassicHeader";
import ProductDetails from "./partials/ProductDetails";
import { getApiData } from "../../Services/apiMethods";
import { useQuery } from "react-query";
import ProductPortfolio from "./partials/ProductPortfolio";
import KnowMore from "./partials/KnowMore";

const Products = (props) => {
  const getProductData = () => {
    return getApiData(props.url);
  };

  const { isLoading, isError, error, data } = useQuery(
    ["product-showcase", props.url],
    getProductData
  );

  if (isLoading) {
    return "Loading... PLease wait a moment.";
  }

  if (isError) {
    return error.message;
  }

  const product = data;

  return (
    <>
      <ClassicHeader
        bgImage="../images/global/classic1.png"
        productLogo={product.productLogo}
        blendColor={product.blendColor}
        blendMode="mix-blend-multiply"
      />
      <ProductDetails
        productTitle={product.productTitle}
        productDescription={product.productDescription}
        productPoster={product.productPoster}
        videoUrl={product.videoUrl}
      />
      <ProductPortfolio productsPortfolio={product.productPortfolio} />
      <KnowMore product={product} />
    </>
  );
};

export default Products;
