
import React from 'react';
import {Route, Routes} from "react-router-dom"
import { About} from './About/About';
import { Home } from './Home/Home';





const Reactrouter = () => {
return (
    
<Routes>

<Route exact path="/" element={<Home />} />
<Route exact path="/About" element={<About />} />

</Routes>

)
}

export default Reactrouter;