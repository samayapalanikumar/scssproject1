import React from 'react';
import Card from './components/card/card';
import {dummydata} from './data/dummy';
import './components/card/styles.scss';

function App() {
  return (
    <div className='section'>
        {
            dummydata.map((list,id)=>{
                console.log(list)
                return(
                    <Card data ={list}/>
                )
            })
        }
        
        
    </div>
  )
}

export default App