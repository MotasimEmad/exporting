import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ContactUs from '../components/ContactUs';
import WhyUs from '../components/ChooseUs';
import Footer from '../components/Footer';
import ScrollTimeline from '../components/ScrollTimeline';
import Products from '../components/Products';

const HomePage = () => {
  return (
    <section>
      <Hero />
      <ScrollTimeline />
      <WhyUs />
      <Products />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default HomePage;
