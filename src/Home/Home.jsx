import Button from '@mui/material/Button';
import React from 'react'
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'

export const Home = () => {
  return (
    <div className='boxs'>
        
            <div className='image-overlay'>
<h2>Are You
    <p>Looking 
    For</p><p style={{color: '#FF1493'}}>Package? </p>
   <span style={{position:"relative",left:"1400px"}}><FontAwesomeIcon icon={faWhatsapp} /></span> 
    <Button variant="outlined" size="small">
          See More
        </Button>
        </h2>
    

            </div>
       
        </div>
        
   
  )
}
