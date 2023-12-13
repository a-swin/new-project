import React from 'react'
import "./Cermic.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

export const Cermice = () => {
  return (
    <div>
        <h4 className='text-center'>BEST CAR DETAILING, CERAMIC COATING AND PAINT PROTECTION FILM (PPF) AVAILABLE IN KOCHI</h4>
        <h1 className='text-center'>How <span style={{color: '#FF1493'}}>Ceramic Pro Kochi </span> Works <span style={{position:"relative",left:"500px"}}>< FontAwesomeIcon icon={faArrowRight} /></span></h1>
   <div className='ceramic container'>
   
   
    <div className='cer'>
    <div className='image-overlay'>
<h2>1</h2>
<p style={{position:"relative",right:"160px"}}>Details Wash</p>
    </div>
    </div>
    <div className='cer1'>
      
    <div className='image-overlay'>
    <h2>2</h2>
<p style={{position:"relative",right:"160px"}}>Paint  </p>
</div>
</div>
<div className='cer2'>
<div className='image-overlay'>
<h2>3</h2>
<p style={{position:"relative",right:"160px"}}>Ceramic</p>
</div>
</div>

   </div>
   <h6 className='text-center'>HELPS YOU TO FIND PERFECT CAR</h6>
   <h1 className='text-center'>Customer <strong style={{color: '#FF1493'}}>Reviews</strong></h1>
    </div>
  )
}
