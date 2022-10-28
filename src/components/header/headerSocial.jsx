import React from 'react'
import './header.css'
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
export default function headerSocial() {
   return (

      <div className='header__socials'>
         <a href="https://www.linkedin.com/in/victor-emanuel-004636228/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
         <a href="https://github.com/victoremanuel12" target="_blank" rel="noreferrer"><BsGithub /></a>
         <a href="https://github.com/victoremanuel12" target="_blank" rel="noreferrer"><BsWhatsapp /></a>

      </div>
   )
}
