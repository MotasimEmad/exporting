import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../redux/productsSlice';

const Products = () => {
    const { isLoading, products } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <section>
            <div class="container px-6 py-4 mx-auto">
                <div class="flex justify-between items-center text-start">
                    <div>
                        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                            Our
                            <i class="fas fa-object-ungroup"></i>
                            <div class="relative inline-block mx-2">
                                <span class="absolute -rotate-6 bg-secondary/50 px-2 py-1 inset-0 mt-4"></span>
                                <span class="relative text-secondary font-bold">Products</span>
                            </div>
                        </h1>
                    </div>

                </div>
                <div class="lg:flex lg:-mx-2">
                    <div class="mt-6 lg:mt-0 lg:px-2">
                        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {products.map(product => (
                                <div key={product.id} class="group relative w-full">
                                    <img class="object-cover w-96 rounded-md h-72 xl:h-80" src={product.image} />
                                    <h4 class="mt-2 text-lg font-medium text-primary_dark">{product.name}</h4>
                                    <div
                                        class="absolute bottom-0 left-0 h-0 flex flex-col justify-center items-center bg-secondary opacity-0 group-hover:h-full xl:group-hover:h-full group-hover:opacity-100 duration-500 group-hover:w-full group-hover:mx-auto rounded-md">
                                        <p class="text-lg md:text-md text-white text-start px-2">{product.description}</p>

                                        <Link to={`/product/${product.id}`} className="bg-primary hover:bg-primary/80 py-3 px-3 rounded-full text-white">Learn more</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
