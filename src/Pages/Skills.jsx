import React from 'react'
import {   FaCss3, FaFigma, FaPhp, FaPython, FaReact, FaVideo } from 'react-icons/fa'
import {  CgWebsite } from 'react-icons/cg'
import { } from 'react-icons/cg'
import { BsBootstrap, BsCircle, BsFiletypeSql, BsHddNetwork, BsLaptop} from 'react-icons/bs'
import {  IoLogoHtml5, IoLogoJavascript, IoMdPhotos } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { BiDownArrowCircle } from 'react-icons/bi'

export default function Skills() {
  const navigate =useNavigate();
  return (
    <>
      <div className="newmyskill">

     
            <div className="middle">

      <div className="skills">
          <h2><skill>MY SKILLS</skill></h2>
      </div>
      <div className="myskills">
        <h2><skill>WEB DEVELOPMENT</skill></h2>
        <ol>
           <li><IoLogoHtml5 className='icons'/> HTML</li>
          <li><FaCss3  className='icons'/> CSS</li>
          <li><BsBootstrap  className='icons'/> BOOSTRAP</li>
          <li><BsCircle  className='icons'/> TAILWIND CSS</li>
          <li><IoLogoJavascript  className='icons'/>JAVASCRIPT</li>
          <li><BsCircle  className='icons'/> JQUERY</li>
          <li><FaReact  className='icons'/> REACT JS</li>
            <li className='icons'>Node JS</li>
           <li className='icons'>Express JS</li>
            <li className='icons'>MongoDB</li>

          
          
          <li><FaPhp  className='icons'/> PHP</li>
          <li><BsCircle  className='icons'/> MYSQL</li>
          <li><BsFiletypeSql  className='icons'/> SQL</li>
        </ol>
      </div>
      <div className="myskills">
        <h2><skill>PROGRAMMING</skill></h2>
        <ol>
           <li><BsCircle className='icons'/> C</li>
          <li><BsCircle  className='icons'/> C++</li>
          <li><FaPython  className='icons'/> PYTHON</li>
         </ol>
        <h2><skill>DESIGN</skill></h2>
        <ol>
          <li><FaFigma className='icons' />FIGMA</li>
          <li><CgWebsite className='icons' />ADOBE XD</li>
          <li><IoMdPhotos className='icons'/> PHOTOSHOP</li>
          <li><FaVideo  className='icons'/>PRIMEAR PRO</li>
        </ol>
      </div>
      <div className="myskills newskill">
        <h2><skill>ATHER</skill></h2>
        <ol>
           <li><BsLaptop className='icons new_icon'/>PC HEARDWARE MENTAINANCE</li>
           <li><BsLaptop className='icons new_icon'/>PC SOFTWARE MENTAINANCEL</li>
           <li><BsHddNetwork className='icons new_icon'/>NETWARKING (LAN INSTALLATION)</li>
          
        </ol>
      </div>
        </div>
      </div>
      <BiDownArrowCircle onClick={()=>navigate('certificate')} className='next downskill'/>

    </>

  )
}
