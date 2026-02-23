import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./landingPage/Navbar.js"
import Footer from "./landingPage/Footer.js"
import HomePage from './landingPage/home/HomePage';
import AboutPage from './landingPage/about/AboutPage';
import SupportPage from './landingPage/support/SupportPage';
import ProductPage from './landingPage/products/ProductPage';
import PricingPage from './landingPage/pricing/PricingPage';
import Signup from './landingPage/signup/Signup';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NotFound from './landingPage/NotFound.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/support' element={<SupportPage/>}/>
          <Route path='/product' element={<ProductPage/>}/>
          <Route path='/pricing' element={<PricingPage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
  </BrowserRouter>
);
