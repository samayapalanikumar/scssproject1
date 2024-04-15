import React from 'react';

 function card({data}) {
  return (<>
    <div className='section__head' >
    <div className='section__head__container'>
    <img className='section__head__container__image'  src={data.Urlimage} alt="" />
    <h2 className='section__head__container__heading'>{data.Name}</h2>
    <p className='section__head__container__sub'>{data.Role}</p>
    </div>
      <div className='section__head__banner'>
      <div className='section__head__banner__child'>
      <p className='section__head__banner__child__para'>{data.Describe}</p>
      </div>  
      <div className='section__head__banner__footer'>
      <button className='section__head__banner__footer__btn'>{data.User}</button>
    </div>
    </div>
    </div>
  </> )
}

export default card