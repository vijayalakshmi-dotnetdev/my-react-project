import React,{BrowserRouter, Routes, Route} from 'react-router';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Products from '../pages/Products/Products';
import ViewProducts from '../pages/Products/view-products/ViewProducts';
import Contact from '../pages/Contact/Contact';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Header from '../core/reusable-components/header';

export default function RoutingOutlet() {
    return (
        <div>
           <BrowserRouter>
           <Header />
           <Routes>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='products' element={<Products />} />
            <Route path='contact' element={<Contact />} />
            <Route path = 'viewproducts' element={<ViewProducts />} />
            <Route path='viewproducts/:id' element={<ViewProducts />} />
            <Route path='viewproducts/:id/:name' element={<ViewProducts />} />
            <Route path='*' element={<PageNotFound />} />   
           </Routes>
           </BrowserRouter>
        </div>
    );
}