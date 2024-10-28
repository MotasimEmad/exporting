import { useDispatch, useSelector } from "react-redux";
import { getProductById } from '../redux/productDetailsSlice';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import NotFound from "../components/NotFound";

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
    return <div className="font-inter mt-20 text-center">Loading...</div>;
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
            src='https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
