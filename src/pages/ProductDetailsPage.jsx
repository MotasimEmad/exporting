import { useDispatch, useSelector } from "react-redux";
import { getProductById } from '../redux/productDetailsSlice';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import NotFound from "../components/NotFound";
import Loading from "../components/Loading";
import ContactUs from '../components/ContactUs';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { isLoading, product, error } = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  // Effect for fetching product data - runs only when id changes
  useEffect(() => {
    dispatch(getProductById(id));
    window.scrollTo(0, 0);

    return () => {
      window.scrollTo(0, 0);
    };
  }, [dispatch, id]); // Removed product?.images from dependencies

  // Separate effect for handling autoplay - runs when product changes
  useEffect(() => {
    if (product?.images?.length > 0) {
      startAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
  }, [product]); // This effect handles starting/stopping autoplay when product data changes

  const startAutoPlay = () => {
    if (!product?.images?.length) return;

    stopAutoPlay(); // Clear any existing interval first
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextImage = () => {
    if (!product?.images?.length) return;

    stopAutoPlay();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
    startAutoPlay();
  };

  const prevImage = () => {
    if (!product?.images?.length) return;

    stopAutoPlay();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
    startAutoPlay();
  };

  const handleDotClick = (index) => {
    if (!product?.images?.length) return;

    stopAutoPlay();
    setCurrentImageIndex(index);
    startAutoPlay();
  };

  if (isLoading) {
    return (
      <div className="mt-20 flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (!product || Object.keys(product).length === 0) {
    return <NotFound />;
  }

  const hasMultipleImages = product.images?.length > 1;

  return (
    <section className="bg-white mt-20">
      <div className="container px-6 py-10 mx-auto text-start">
        <Link
          to="/products/"
          className="flex justify-center text-white bg-primary hover:bg-primary/90 w-14 py-4 px-2 rounded-lg"
        >
          <svg
            className="mx-1 w-6 h-6"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </Link>
        <div className="mt-8 lg:-mx-6 flex flex-col lg:items-center">
          <h1 className="relative text-4xl md:text-5xl text-primary font-bold">
            {product.name}
          </h1>

          <p className="md:mx-32 mt-6 text-sm text-gray-500 md:text-lg">
            {product.description}
          </p>

          <div className="relative mt-6 w-full lg:mx-6 lg:w-1/2">
            {product.images?.length > 0 && (
              <>
                <img
                  className="w-full rounded-md"
                  src={product.images[currentImageIndex]}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                />

                {hasMultipleImages && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/50 text-white p-2 rounded-full hover:bg-primary/70"
                      aria-label="Previous image"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/50 text-white p-2 rounded-full hover:bg-primary/70"
                      aria-label="Next image"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </>
            )}
          </div>

          {/* Add dots for image navigation */}
          {hasMultipleImages && (
            <div className="mt-4 p-4 rounded-md">
              <div className="flex gap-2 justify-center">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentImageIndex === index
                        ? 'bg-primary'
                        : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <ContactUs />
    </section>
  );
};

export default ProductDetailsPage;