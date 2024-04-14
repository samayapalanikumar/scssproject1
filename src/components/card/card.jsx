import React from 'react';
import Image1 from '../asset/img/image1.jpg';
import Image2 from '../asset/img/image2.jpg';
import Image3 from '../asset/img/image3.jpg';


 function card(props) {
  return (<>
    <div className='section__head' >
    <div className='section__head__container'>
    <img className='section__head__container__image'  src={Image1} alt="" />
    <h2 className='section__head__container__heading'>{props.data.Name}</h2>
    <p className='section__head__container__sub'>{props.data.Role}</p>
    </div>
      <div className='section__head__banner'>
      <div className='section__head__banner__child'>
      <p className='section__head__banner__child__para'>Web developer with a strong background in developing award-winning applications for a diverse clientele.
         1+ years of industry experience includes programming, debugging, and wireframes.
      </p>
      </div>  
      <div className='section__head__banner__footer'>
      <button className='section__head__banner__footer__btn'>{props.data.User}</button>
    </div>
    </div>
    </div>
  </> )
}

export default card