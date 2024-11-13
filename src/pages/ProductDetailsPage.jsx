import { useDispatch, useSelector } from "react-redux";
import { getProductById } from '../redux/productDetailsSlice';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import Loading from "../components/Loading";
import ContactUs from '../components/ContactUs';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { isLoading, product, error } = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    let autoplayTimer;
    
    if (product?.images?.length > 1) {
      autoplayTimer = setInterval(() => {
        if (!isAnimating) {
          setIsAnimating(true);
          setCurrentImageIndex((prevIndex) => 
            prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
          );
          setTimeout(() => setIsAnimating(false), 500);
        }
      }, 2000);
    }

    return () => {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
      }
    };
  }, [product?.images?.length, isAnimating]);

  useEffect(() => {
    dispatch(getProductById(id));
    const scrollToTop = () => window.scrollTo(0, 0);
    scrollToTop();
    return () => {
      window.scrollTo(0, 0);
    };
  }, [dispatch, id]);

  const nextImage = () => {
    if (product?.images && !isAnimating) {
      setIsAnimating(true);
      setCurrentImageIndex((prevIndex) => 
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevImage = () => {
    if (product?.images && !isAnimating) {
      setIsAnimating(true);
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
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

  return (
    <section className="bg-white mt-20">
      {/* Full-width Image Slider */}
      <div className="relative w-full h-[70vh] md:h-screen bg-gray-900">
        {/* Back Navigation Link */}
        <Link 
          to="/products/" 
          className="absolute top-4 left-4 z-10 flex justify-center text-white bg-black/50 hover:bg-black/70 w-14 py-4 px-2 rounded-lg transition-colors"
        >
          <svg 
            className="mx-1 w-6 h-6" 
            fill="none" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </Link>

        {product.images && product.images.length > 0 && (
          <>
            <div className="absolute inset-0 w-full h-full">
              <img
                className="w-full h-full object-cover transition-opacity duration-500"
                src={product.images[currentImageIndex]}
                alt={`Product image ${currentImageIndex + 1}`}
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
            </div>
            
            {product.images.length > 1 && (
              <>
                {/* Navigation Buttons */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 md:px-8">
                  <button
                    onClick={prevImage}
                    className="bg-black/50 text-white p-3 md:p-4 rounded-full hover:bg-black/70 transition-all duration-300 transform hover:scale-110 focus:outline-none group"
                    aria-label="Previous image"
                    disabled={isAnimating}
                  >
                    <svg 
                      className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" 
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
                    className="bg-black/50 text-white p-3 md:p-4 rounded-full hover:bg-black/70 transition-all duration-300 transform hover:scale-110 focus:outline-none group"
                    aria-label="Next image"
                    disabled={isAnimating}
                  >
                    <svg 
                      className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" 
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
                </div>

                {/* Thumbnails */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 px-4 py-2 bg-black/40 rounded-full backdrop-blur-sm">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      disabled={isAnimating}
                      className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                        currentImageIndex === index 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

       {/* Product Header */}
       <div className="container px-6 mx-auto">
        <div className="mt-8 mb-12 flex flex-col md:flex-row md:items-start md:gap-8">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-5xl text-primary font-bold">
              {product.name}
            </h1>
          </div>
          <div className="md:w-2/3">
            <p className="text-sm text-gray-500 md:text-lg text-start">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      <ContactUs />
    </section>
  );
};

export default ProductDetailsPage;