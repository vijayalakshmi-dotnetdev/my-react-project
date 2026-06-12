import React,{BrowserRouter, Routes, Route} from 'react-router';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
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
            <Route path='contact' element={<Contact />} />
           </Routes>
           </BrowserRouter>
        </div>
    );
}