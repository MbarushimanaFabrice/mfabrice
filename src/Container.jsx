import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
 import {FaCertificate, FaHeadSideMask, FaHome, FaInfo, FaPersonBooth, FaPhone, FaProjectDiagram} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
export default function Container() {
	return (
		<>
			<div className="container">
				<div className="sidebar">
					{/* cover profiles */}
					<div className="image_cover">
						<img src="../certificates/new.png" alt="my profiles" />
					</div>
					{/* navigations */}
					<div className="navbar">
						<nav>
							<NavLink to="">Me</NavLink><br /><br />
							<NavLink to='skills'>MY SKILLS</NavLink><br /><br />
							<NavLink to='certificate'>MY Certificate</NavLink><br /><br />
							<NavLink to='project'>MY Project</NavLink><br /><br />
							<NavLink to='about'>About</NavLink>
						</nav>
					</div>

				</div>
			</div>

			{/* responsive navbar */}
			<div className="navparent"></div>
 			<div className="respNav">	
				<navs >
					<NavLink to=""><FaHome /></NavLink><br /><br />
					<NavLink to='skills'><FaHeadSideMask /></NavLink><br /><br />
					<NavLink to='certificate'><FaCertificate /></NavLink><br /><br />
					<NavLink to='project'><FaProjectDiagram /></NavLink><br /><br />
					<NavLink className="mynav" to='about'><FaInfo /></NavLink>
				</navs>

			</div>
		</>
	)
}
