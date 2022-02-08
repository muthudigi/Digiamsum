
import React, { Component } from 'react'

import './Course.css'



import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../Footer/Footer';
import { Home } from '../Home/Home';
import { Coursenames } from './Coursenames';
import { Allcourse } from './Allcourse';

export class Course extends Component {

    render() {
        return (
            <>
        



     

  
<div class="container">
                 <div class="boxx">
                     <div class="content">
                         <h1>What is Data Science?</h1>
                         <p>
                         Data Science basically is an amalgamation of mathematics, programming, statistics and design
which are applied in order to successfully manage digital data collection.<br/>
The main 3 components involved in data science are organising, packaging and delivering data.
Overall, it is a multidisciplinary blend of data inference, algorithm development and technology in
order to solve analytically complex problems.
                         </p>
                     </div>
                 </div>
                 <div class="boxx">
                    <div class="content">
                        <h1>What is the Demand for a Career in Data Science?</h1>
                        <p>
                        Data is everywhere. From the votes we give in political elections to the pictures we upload on
Instagram, everything is data. Reports estimate that by the year 2020, as much as 1.7 MB of digital
data will be created each second for every single person on the planet.
                        </p>
                    </div>
                 </div>




                 <div class="boxx">
                    <div class="content">
                        <h1>Learn Without Limits</h1>
                        <p>
                        Open your door to more with  Professional Certificates.
                        </p>
                    </div>
                 </div>

                 
                 <div class="boxx">
                    <div class="content">
                        <h1></h1>
                        <p>
                        With so much data and information available, organizations are focusing more and more on using
the insights from this data to evaluate progress, build solutions and make decisions.
And it is not just a global phenomenon. Even India is witnessing a surge of opportunities in Data
Science and Data Analytics. A recent report by Edvancer and Analytics India magazine revealed
that India has the most number of Data Analytics jobs after the US, with over 78,000 positions
currently available.

                        </p>
                    </div>
                 </div>


                 
                 <div class="boxx">
                    <div class="content">
                        <h1></h1>
                        <p>
                        It is not surprising then that Data Science is being called the ‘hottest job of the 21st century’. It is
making its presence felt everywhere, and according to McKinsey & Company, Big data will
become a key basis of competition, underpinning new waves of productivity growth, innovation,
and consumer surplus.
                        </p>
                    </div>
                 </div>



            </div>

            
<div>
    <Coursenames />
</div>
<div>
    <Allcourse />
</div>

       
                  </> ) } }