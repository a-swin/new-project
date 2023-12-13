import React from 'react'
import pic1 from "../Image/pic-1.jpg"
import pic2 from "../Image/pic-2.jpeg"
import pic3 from "../Image/pic-3.jpg"
import pic4 from "../Image/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar } from '@fortawesome/free-solid-svg-icons'


import "./Footer.css"

export const Footer = () => {
  return (
    
    <div className='boxss container' maxWidthstyle="lg md  xs">
      
            <div className='image-overlay'>
            
    <div className='container'>
        <div className='container_left'>
<div className='card' style={{display:"flex"}}>
<img src={pic1}></img>
<div className='card_content'>

<p>Akshil Kumar <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> </p>
</div>

</div>
<div className='card'>
<img src={pic2}></img>
<div className='card_content'>
    <p>Joel George <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> </p>
</div>
</div>
<div className='card'>
<img src={pic3}></img>
<div className='card_content'>
    <p>Koshy Panicker <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> </p>
</div>
</div>

        </div>



    </div>
    <div className='container_right'>
    <div className='Box'>
    <img className='logo' style={{height:"30px",left:"25px"}} src={pic4}></img>
    <img src={pic2}></img> 
    <p className='text-center'>Joel George
  
    <div className='reviews'>
    <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} />
    </div>
    <p>Best to place to make your bike and car look like brand new. Super detailing and polishing.
        Ceramic pro is super compared with other center. Service is good. Annual service also super.
        Spacious showroom. Recommanded for any car and bike. Best service.
    </p>
    </p>
  
    

    </div>

</div>

            </div>
       

           
        </div>
  )
}
