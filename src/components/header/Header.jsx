import React from 'react'
import './header.css'
import ButtonsHeader from './ButtonsHeader'
import FotoVictor from '../../assets/programer.png'
import HeaderSocial from './headerSocial'
export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello I'm </h2>
        <h1>Victor Emanuel</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <ButtonsHeader />
        <HeaderSocial />
        <div className="myPicture">
          <img src={FotoVictor} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
