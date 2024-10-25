import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import NavBar from './components/NavBar';
import ContactUsPage from './pages/ContactUsPage';


function App() {
  return (
    <div className="App font-ubuntu">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
