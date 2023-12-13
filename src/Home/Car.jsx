import React from 'react'
import carss from "../Image/cars.jpg"
import bike from "../Image/bike.jpg"
import car5 from "../Image/car5.jpg"
import "./Car.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

export const Car = () => {
  return (
    <div maxWidthstyle="lg md  xs" className='text-center'><strong>BEST CAR DETAILING, CERAMIC COATING AND PAINT PROTECTION FILM (PPF) AVAILABLE IN KOCHI</strong>
     <h2>Latest <span style={{color: '#FF1493'}}>Gallery</span></h2>
   <span className='text-bold'>You dont't have to buy a new car, just make it shine!  <span style={{position:"relative",left:"600px",fontSize:"40px"}}>< FontAwesomeIcon icon={faArrowRight} /></span> </span>
  <div className='flex-cont'>
<div className='flex-bo1'>

</div>
<div className='flex-bo2'>

</div>
<div className='flex-bo3'>

</div>


  </div>
  </div>
  

    )
}
