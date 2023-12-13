import React from 'react'
import car from "../Image/car.png"
import car3 from "../Image/car3.png"
import check from "../Image/check.png"
import manag from "../Image/manag.png"

export const Icon = () => {
  return (
  
        <div class="row" maxWidthstyle="lg md  xs">
  <div class="col  " style={{marginLeft:"20px",cursor:"pointer"}}><img src={car}></img><h5 >WE OFFER HIGH QUALITY 
    DETAILING SERVICES IN KOCHI</h5></div>
  <div class="col"><img style={{cursor:"pointer"}} src={car3}></img><h5 >MOST SATISFIED CUSTOMER
  BASE SINCE-2015</h5></div>
  <div class="col"><img style={{cursor:"pointer"}} src={manag}></img><h5 >PROFESSIONAL APPLICATION METHODS & SYSTEM</h5></div>
  <div class="col"><img  style={{cursor:"pointer"}} src={check}></img><h5 >BEST AFTER SALES SERVICE WARRANTY & SUPPORT</h5></div>
</div>
    
  )
}
