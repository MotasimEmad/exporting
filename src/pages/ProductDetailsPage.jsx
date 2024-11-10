import { useDispatch, useSelector } from "react-redux";
import { getProductById } from '../redux/productDetailsSlice';
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import NotFound from "../components/NotFound";
import Loading from "../components/Loading";
import ContactUs from '../components/ContactUs';


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
        <Link to={`/products/`} className="flex justify-center text-white bg-primary hover:bg-primary/90 w-14 py-4 px-2 rounded-lg">
          <svg className="mx-1 w-6 h-6" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"></path>
          </svg>
        </Link>
        <div className="mt-8 lg:-mx-6 flex flex-col lg:items-center">
          <h1 className="relative text-4xl md:text-5xl text-primary font-bold">{product.name}</h1>

          <p className="md:mx-32 mt-6 text-sm text-gray-500 md:text-lg">
            {product.description}
          </p>

          <img
            className="mt-6 w-full lg:mx-6 lg:w-1/2 rounded-md h-72 lg:h-96"
            src={product.image}
            alt="product image"
          />
        </div>
      </div>

      <ContactUs />
    </section>
  );
};

export default ProductDetailsPage;
