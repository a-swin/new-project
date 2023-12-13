import React from 'react'
import "./Foot.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume,faLocationDot,faSquareEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faYoutube,faInstagram,faTwitter,faFacebook} from '@fortawesome/free-brands-svg-icons'
import lo from "../Image/l.png"

export const Foot = () => {
  return (
  
    
    <div maxWidthstyle="lg md  xs" style={{marginTop:"20px", backgroundColor:"#0C2340",color:"white"}}>
    <div class="row">
      <div class="col-sm" style={{marginTop:"20px"}}>
      <img src={lo}></img >
        <h4 style={{marginTop:"20px"}}>Contect Info</h4>
       
        <ul style={{listStyle:"none"}}>
            <li> <FontAwesomeIcon icon={faLocationDot} />Metro Piller No:204, Kalamassery,kochi,kerala-683106</li>
            <li> <FontAwesomeIcon icon={faSquareEnvelope} />ceramicprokochi@gmail.com</li>
            <li> <FontAwesomeIcon icon={faPhoneVolume}  />+91 95443331551</li>
           
        </ul>
      </div>
      <div class="col-sm">
      <div class="row">
  <div class="col-6 col-sm-4"><h4 style={{marginTop:"130px"}}>Customs Links</h4>
  <ul style={{listStyle:"none"}}>
        <li>Home</li>
        <li>Package</li>
        <li>Image</li>
       </ul></div>
  <div class="col-6 col-sm-4"><ul style={{marginTop:"170px",listStyle:"none"}}>
    <li>Vedio</li>
    <li>Contact</li></ul></div>
       
       
       </div>
      </div>
      <div class="col-sm">
      <div class="row">
      <h4 style={{marginTop:"20px"}} >Social Media Platforms</h4>
  
</div>
<ul style={{listStyle:"none",display:"flex",margin:"25px"}}>
      <li > <FontAwesomeIcon icon={faYoutube} /></li>
       <li ><FontAwesomeIcon icon={faInstagram} /></li>
       <li ><FontAwesomeIcon icon={faTwitter} /></li>
       <li ><FontAwesomeIcon icon={faFacebook} /></li>
       </ul>
      </div>
      
    </div>
    <hr/>
    <p className='text-center'>Copyrights(c) 2023 Ceramic Pro Kochi - Best Car Detailing, Ceramic coating and PPF in Kochi</p>
   <div>
    
   </div>
  </div>
  )
}
