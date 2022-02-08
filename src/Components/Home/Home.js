import React, { Component } from 'react'


import './home.css'


import { Homeabout, Imgtop } from './Homeabout'
import { MV } from './MV'
import { Homelearning, Scroll } from './Homelearning'
import { Homelayoutfour } from './Homelayoutfour'
import { Homelayoutfive } from './Homelayoutfive'




export class Home extends Component {
    render() {
        return (
            <>
 

      
    <body class="u-body">

    
<section class="u-clearfix u-section-2" id="sec-a2cb">
  <div class="u-clearfix u-sheet u-sheet-1">
    <div class="u-palette-2-base u-shape u-shape-rectangle u-shape-1"></div>
    <div class="u-black u-shape u-shape-rectangle u-shape-2"></div>
    <img class="u-image u-image-1" src="//images01.nicepage.com/c461c07a441a5d220e8feb1a/3c093c367c15599cbae29955/rrr-min.jpg" data-image-width="871" data-image-height="1080"/>
    <div class="u-black u-container-style u-group u-group-1">
      <div class="u-container-layout u-valign-top u-container-layout-1">
        <h1 class="u-custom-font u-font-oswald u-text u-text-body-alt-color u-text-default u-text-1">Add Value to Life</h1>
        <p class="u-text u-text-grey-15 u-text-2">We at Amsum envision a merit-driven talent ecosystem enabled by efficient job skills matching and reliable
and intelligent assessments. Powered by machine learning, AI, psychometric and statistics, these state-of-theart assessment tools are used by companies across a wide variety of industries to help recruit the right people, develop requisite skills benchmarks, and to assess workforce health<br/>
         <br/>
        </p>
        <a href="/Course" class="u-active-white u-border-2 u-border-active-white u-border-hover-white u-border-white u-btn u-button-style u-hover-white u-none u-text-active-black u-text-body-alt-color u-text-hover-black u-btn-2">learn more</a>
      </div>
    </div>
  </div>
</section>



</body>

      <Homelearning />
<Homeabout />
<Homelayoutfour />
<Homelayoutfive />
<MV />

                </> ) } }