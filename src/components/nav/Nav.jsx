import React,{useState} from 'react'
import './Nav.css'
import {AiOutlineHome,AiOutlineUser,AiFillBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRoundedDetail} from 'react-icons/bi'
export default function Nav() {
  const [ActiveNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home"  onClick={ () => setActiveNav('#')}className={ActiveNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={ () => setActiveNav('#about')} className ={ActiveNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={ () => setActiveNav('#experience')} className ={ActiveNav === '#experience' ? 'active' : ''}><AiFillBook/></a>
      <a href="#services" onClick={ () => setActiveNav('#services')} className ={ActiveNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={ () => setActiveNav('#contact')} className ={ActiveNav === '#contact' ? 'active' : ''}><BiMessageRoundedDetail/></a>
      
    </nav>
  )
}
