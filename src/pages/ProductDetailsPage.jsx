import { useDispatch, useSelector } from "react-redux";
import { getProductById } from '../redux/productDetailsSlice';
import { useParams } from "react-router-dom";
import { useEffect, CSSProperties, useState } from "react";
import NotFound from "../components/NotFound";
import Loading from "../components/Loading";



const ProductDetailsPage = () => {
  const { id } = useParams();
  const { isLoading, product, error } = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch product data
    dispatch(getProductById(id));

    // Scroll to top when component mounts
    const scrollToTop = () => window.scrollTo(0, 0);
    scrollToTop();

    // Clean up function to reset scroll position when navigating away
    return () => {
      window.scrollTo(0, 0);
    };
  }, [dispatch, id]);

  // Handle loading state
  if (isLoading) {
    return <div className="mt-20 flex justify-center items-center">
     <Loading />
    </div>
  }

  // Handle empty product object
  if (!product || Object.keys(product).length === 0) {
    return <NotFound />;
  }

  // Render product details if available
  return (
    <section className="bg-white mt-20">
      <div className="container px-6 py-10 mx-auto text-start">
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          {/* Replace with dynamic image URL */}
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src={product.image}
            alt="product image"
          />
          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 text-start">
            <p className="text-2xl text-primary capitalize">{product.name}</p>
            <p className="mt-3 text-sm text-gray-500 md:text-sm">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
