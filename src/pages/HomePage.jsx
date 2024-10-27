import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ContactUs from '../components/ContactUs';
import WhyUs from '../components/ChooseUs';
import ScrollTimeline from '../components/ScrollTimeline';
import Products from '../components/Products';

const HomePage = () => {
  return (
    <section>
      <Hero />
      <ScrollTimeline />
      <WhyUs />
      <hr class="my-12 border-gray-200"></hr>
      <Products />
      <ContactUs />
    </section>
  );
};

export default HomePage;
