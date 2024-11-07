import Products from '../components/Products';


const ProductsPage = () => {
  return (
    <section>

      <section className="px-6 py-4 md:mt-20" style={{ paddingTop: '6rem' }}>
        <div className="lg:flex lg:-mx-2">
          <div className="mt-6 lg:mt-0 lg:px-24">
          <Products />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductsPage;
