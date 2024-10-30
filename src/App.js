import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContactUsPage from './pages/ContactUsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <div className="App font-ubuntu">
      <Router>
        <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
        </main>

        
      <Footer />
        </div>
      </Router>
    </div>

  );
}

export default App;
