import React from 'react';
import { BrowserRouter, Route, Routes , Redirect} from "react-router-dom";


import ReactRouter from './ReactRouter';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import User from './User';
import Search from './Search';


// import "./index.css"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ReactRouter />} />
                {/* default <Route path="/user/20/arham" element={<User />} /> */}
                <Route path="/user/:id/:name" element={<User />} />
                <Route path="/about" element={<About />} />
                <Route path="/search" element={<Search />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
                
                
            </Routes>
        </BrowserRouter>
    )
}

export default App;