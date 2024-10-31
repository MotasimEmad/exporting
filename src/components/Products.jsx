import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productsSlice";

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

    const truncateDescription = (description, maxLength = 100) => {
        return description.length > maxLength
            ? description.substring(0, maxLength) + "..."
            : description;
    };

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
                            {products.map((product) => (
                                <div class="rounded-md group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                    <div class="h-96 w-72">
                                        <img
                                            class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                            src={product.image}
                                            alt="product image"
                                        />
                                    </div>
                                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                        <h1 class="font-dmserif text-3xl font-bold text-white">
                                            {product.name}
                                        </h1>
                                        <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            {truncateDescription(product.description)}
                                        </p>
                                        <Link to={`/product`} class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                            See More
                                        </Link>
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
