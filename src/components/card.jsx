import React from 'react'
import Image1 from "../img/1.jpg"
import Image2 from "../img/2.jpg"
import Image3 from "../img/3.jpg"

function card() {
  return (<>
    <div className='section'>
    <div className='section__head' >
    <div className='container'>
    <img className='container__image' src={Image1} alt="" />
    <h2 className='container__image__heading'>Mahesh Kumar</h2>
    <p className='container__image__heading__sub'>Jr.Software Developer</p>
    </div>
      <div className='banner'>
      <div className='banner__child'>
      <p>Web developer with a strong background in developing award-winning applications for a diverse clientele.
         1+ years of industry experience includes programming, debugging, and wireframes.
      </p>
      </div>
      
    <div className='footer'>
      <button>Add User 1</button>
    </div>
    </div>
    </div>
     <div className='section__head'>
  <div className='container' >
    <img className='container__image' src={Image2} alt="" />
    <h2 className='container__image__heading'>Dhinesh kumar</h2>
    <p className='container__image__heading__sub'>Software Developer</p>
    </div>
      <div className='banner'>
      <div className='banner__child'>
      <p>Web developer with a strong background in developing award-winning applications for a diverse clientele.
         3+ years of industry experience includes programming, debugging, and wireframes.
      </p>
      </div>
    <div className='footer'>
      <button>Add User 2</button>
    </div>
    </div>
   </div>
   <div className='section__head'>
  <div className='container' >
    <img className='container__image' src={Image3} alt="" />
    <h2 className='container__image__heading'>Ajith Kumar</h2>
    <p className='container__image__heading__sub'>Sr.Software Developer</p>
    </div>
      <div className='banner'>
      <div className='banner__child'>
      <p>Web developer with a strong background in developing award-winning applications for a diverse clientele.
         5+ years of industry experience includes programming, debugging, and wireframes.
      </p>
      </div>
    <div className='footer'>
      <button>Add User 3</button>
    </div>
    </div>
   </div>
   </div>
  </> )
}

export default card