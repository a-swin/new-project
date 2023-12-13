import React from 'react'
import "./Novbar.css"
import { Link, NavLink } from 'react-router-dom';
import img1 from "../Image/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume} from '@fortawesome/free-solid-svg-icons'


export const Novbar = () => {
  return (
   <nav maxWidth="lg md xs ">
    <ul>
 
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>Packages</NavLink></li>
        <li><NavLink>Ceramic pro videos</NavLink></li>
        <li><NavLink>Contacts</NavLink></li>
        <li className='call'  >Call Us Today <li ><FontAwesomeIcon icon={faPhoneVolume}  />+91 95443331551</li>
             </li> 
        <NavLink >
        
          < img className='logo' src={img1}></img></NavLink>
    </ul>
   </nav>
  )
}
