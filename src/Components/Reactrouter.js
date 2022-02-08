
import React from 'react';
import {Route, Router, Routes} from "react-router-dom"
import { About} from './About/About';
import { Home } from './Home/Home';
import { Course, Sidenav } from './Course/Course';
import { Contact } from './Contact/Contact';





const Reactrouter = () => {
return (
    
<Routes>

<Route exact path="/" element={<Home />} />
<Route exact path="/Contact" element={<Contact />} />
<Route exact path="/About" element={<About />} />
<Route exact path="/course" element={<Course />} />

</Routes>

)
}

export default Reactrouter;