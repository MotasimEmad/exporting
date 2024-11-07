import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productsSlice";
import Loading from "../components/Loading";

const Products = () => {
    const { isLoading, products } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const truncateDescription = (description, maxLength = 100) => {
        if (!description) return '';
        return description.length > maxLength
            ? description.substring(0, maxLength) + "..."
            : description;
    };

    if (isLoading) {
        return <div className="container px-6 py-4 mx-auto"><Loading /> </div>;
    }

    if (!products) {
        return <div className="container px-6 py-4 mx-auto">Loading products...</div>;
    }

    if (!products.data || products.data.length === 0) {
        return <div className="container px-6 py-4 mx-auto">No products available</div>;
    }

    return (
        <section className="relative">
            {/* Background layers for parallax effect */}
            <div
                className="absolute inset-0 -z-20 h-full w-full"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1730725469217-0832a94d7c2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundPosition: `center ${scrollY * 0.2}px`,
                    backgroundSize: "cover",
                    opacity: 0.7,
                }}
            ></div>
            <div
                className="absolute inset-0 -z-10 h-full w-full"
                style={{
                    backgroundImage: "url('/path/to/your/second-layer-image.jpg')",
                    backgroundPosition: `center ${scrollY * 0.1}px`,
                    backgroundSize: "cover",
                    opacity: 0.5,
                }}
            ></div>

            {/* Main content */}
            <div className="relative container px-6 py-4 mx-auto">
                {products.data.map((category, index) => (
                    <div key={index} className="mb-12">
                        <h2 className="text-start text-2xl font-bold text-primary">
                            {category.category_name}
                        </h2>

                        <div className="flex mx-auto mt-2">
                            <span className="inline-block w-40 h-1 bg-secondary rounded-full"></span>
                            <span className="inline-block w-3 h-1 mx-1 bg-secondary rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-secondary rounded-full"></span>
                        </div>

                        <div className="lg:flex lg:-mx-2 mt-6">
                            <div className="w-full">
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {category.products.map((product) => (
                                        <div
                                            key={product.id}
                                            className="rounded-md group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
                                        >
                                            <div className="h-96 w-72">
                                                <img
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                                    src={product.image}
                                                    alt={product.name}
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                                <h1 className="font-dmserif text-3xl font-bold text-white">
                                                    {product.name}
                                                </h1>
                                                <p className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    {truncateDescription(product.description)}
                                                </p>
                                                <Link
                                                    to={`/product/${product.id}`}
                                                    className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                                                >
                                                    See More
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
