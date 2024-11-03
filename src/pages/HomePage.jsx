import Hero from '../components/Hero';
import ContactUs from '../components/ContactUs';
import WhyUs from '../components/ChooseUs';
import ScrollTimeline from '../components/ScrollTimeline';

const HomePage = () => {
  return (
    <section>
      <Hero />
      <ScrollTimeline />
      <WhyUs />
      <ContactUs />
    </section>
  );
};

export default HomePage;
