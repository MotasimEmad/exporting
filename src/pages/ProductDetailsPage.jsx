import { useDispatch, useSelector } from "react-redux";
import { getProductById } from '../redux/productDetailsSlice';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { isLoading, product, error } = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <body class="font-inter mt-20">
      {isLoading ? 'loading ...' :
        <section>
          <section class="relative pt-20 pb-24 bg-primary">
            <div class="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-4">
              <h1 class="text-white font-manrope font-semibold text-4xl min-[500px]:text-5xl leading-tight mb-8">
                {product.name}
              </h1>
            </div>
          </section>

          <section class="mt-8 flex flex-col text-start text-gray-600">
            <div class="flex justify-center mt-10">
              <img class="object-cover w-full h-96 rounded-xl lg:w-4/5" src={product.image} />
            </div>

            <p className="mx-8 my-4 font-lg">
              {product.description}
            </p>
          </section>
        </section>}
    </body>

  );
};

export default ProductDetailsPage;
