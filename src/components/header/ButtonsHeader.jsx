import React from 'react'
import './header.css'
import CvPDF from '../../assets/CV.pdf'
export default function ButtonsHeader() {
   return (
      <div className='buttons__header'>
         <a href={CvPDF} dowload target='_blanck' className='btn'>Dowload CV</a>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
   )
}
