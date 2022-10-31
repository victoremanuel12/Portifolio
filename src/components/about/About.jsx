import React from 'react'
import './about.css'
import ImageAbout from '../../assets/ilustration2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsBuilding,BsFront} from 'react-icons/bs'
import {RiFileMarkFill} from 'react-icons/ri'
export default function About() {
   return (
      <section id='about'>
         <h5>Get to know</h5>
         <h2>About Me</h2>
         <div className="container about__container">
            <div className="about__me">
               <div className="about__me-image">
                  <img src={ImageAbout} alt="About Image" />
               </div>
            </div>
            <div className="about__content">
               <div className="about__card">
                  <article className="about__card">
                     <FaAward className='about__icon'/>
                     <h5>Experience</h5>
                     <small>+4 years Police Department </small><br />
                     <small>+2 months SBS Group</small><br />
                     <small>+1 year frelancer working</small><br />
                  </article>
                  <article className="about__card">
                     <RiFileMarkFill className='about__icon'/>
                     <h5>Courses</h5>
                     <small> Systems Development(Senai Cimatec)</small><br />
                     <small>Analysis and Systems Development(UniRuy Wyden)</small><br />
                     <small>English Course(UFBA) </small>
                  </article>
                  <article className="about__card">
                     <BsFront className='about__icon'/>
                     <h5>Projects</h5>
                     <small>40+ projects</small>
                  </article>
                  <p>
                     Loremipsum dolor sit amet consectetur, adipisicing elit. Deserunt ab nostrum consequuntur distinctio 
                     iure aspernatur a vero facere corrupti, atque, reprehenderit modi ratione odio deleniti quo delectus eos voluptatum sequi!
                  </p>
                  <a href="#contact" className="btn btn-primary">Lest's Talk</a>
               </div>
            </div>
         </div>
      </section>
   )
}
