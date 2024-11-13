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

  useEffect(() => {
    dispatch(getProductById(id));
    const scrollToTop = () => window.scrollTo(0, 0);
    scrollToTop();
    return () => {
      window.scrollTo(0, 0);
    };
  }, [dispatch, id]);

  const nextImage = () => {
    if (product?.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (product?.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
      );
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
            {product.images && product.images.length > 0 && (
              <>
                <img
                  className="w-full rounded-md h-72 lg:h-96 object-cover"
                  src={product.images[currentImageIndex]}
                  alt={`Product image ${currentImageIndex + 1}`}
                />
                
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
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
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
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

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {product.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full ${
                            currentImageIndex === index 
                              ? 'bg-white' 
                              : 'bg-white/50'
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
        </div>
      </div>

      <ContactUs />
    </section>
  );
};

export default ProductDetailsPage;