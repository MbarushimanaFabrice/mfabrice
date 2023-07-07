import React from 'react'
import { BiDownArrowCircle } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
export default function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <div className="middle mdproj">

      <div className="header">
        <h2><skill>MY PROJECTS</skill></h2>

         <div className="proj">
          <img src="../../projects/chair_shop.jpg" alt="Chairs Shop website" />
          <p>Chairs Shop <br /> <pj>View on <FaGithub/></pj> </p>
        </div>

        <div className="proj">
          <img src="../../projects/estg.jpg" alt="School website" />
          <p>School website <br /> <pj>View on <FaGithub/></pj> </p>
        </div>

        <div className="proj">
          <img src="../../projects/havana.jpg" alt="Hotel managment system website"/>
          <p>Hotel managment system website<br /> <pj>View on <FaGithub/></pj> </p>
        </div>

        <div className="proj">
          <img src="../../projects/attendance.jpg" alt="Student Attendance website"/>
          <p>Student Attendance web application<br /> <pj>View on <FaGithub/></pj> </p>
        </div>

        <div className="proj">
        <img src="../../../projects/transport.jpg" alt="Rwanda Transport website" />
						<p>Rwanda Transport website <br /> <pj>View on <FaGithub /></pj> </p>
        </div>

        <div className="proj">
        <img src="../../../projects/Rwanda-driving-license.jpg" alt="Rwanda-driving-license" />
						<p>Rwanda driving license website <br /> <pj>View on <FaGithub /></pj> </p>
        </div>

        <div className="proj">
        <img src="../../../projects/Farmers employees management system.jpg" alt="Rwanda-driving-license" />
						<p>Farmers employees management system<br /> <pj>View on <FaGithub /></pj> </p>
          </div>
          
          <BiDownArrowCircle onClick={()=>navigate('about')} className='next downskill'/>
         </div>
        </div>
    </>
  )
}
