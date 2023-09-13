import React from 'react'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { BiDownArrowCircle } from 'react-icons/bi'
import { FaArrowCircleRight,FaLongArrowAltRight } from 'react-icons/fa'

import { Routes,Route } from 'react-router-dom'
 import { useNavigate } from 'react-router-dom'
export default function Certificate() {
  const navigtion = useNavigate()
  const navigates = useNavigate()
 
  return (
    <>
      
       

      <div className="middle certificates">

     
      <div className="header">
        <h2><skill>MY CERTIFICATE</skill></h2>

      </div>
      <div className="certficate">

	       <div className="mycert">
           <p><AiFillSafetyCertificate />  <a href="https://www.freecodecamp.org/certification/MbarushimanaFabrice/javascript-algorithms-and-data-structures">Javascript Certificate</a></p>
        </div>

	      
        <div className="mycert">
          <img src="https://www.sololearn.com/Certificate/CT-DPEINNUF/jpg" alt="" />
          <p><AiFillSafetyCertificate />HTML Certificate</p>
        </div>

        <div className="mycert">
          <img src="https://www.sololearn.com/Certificate/CT-B1F0C46U/jpg" alt="" />
          <p><AiFillSafetyCertificate />CSS Certificate</p>
        </div>

        <div className="mycert">
          <img src="https://www.sololearn.com/Certificate/CT-BKL6HF2O/jpg" alt="" />
          <p><AiFillSafetyCertificate />HTML MARKETER Certificate</p>
        </div>

        <div className="mycert">
          <img src="https://www.sololearn.com/Certificate/CT-PBA6EBA5/jpg" alt="" />
          <p><AiFillSafetyCertificate />WEB DEVELOPMENT FOUNDAMENTAL Certificate</p>
          </div>
          

        <div className="mycert">
        <img src="https://www.sololearn.com/Certificate/CT-AZJ620AU/jpg" alt="" />
		<p><AiFillSafetyCertificate />PHP Certificate</p>
          </div>
          

        <div className="mycert">
        <img src="https://www.sololearn.com/Certificate/CT-DX68EORH/jpg" alt="" />
		<p><AiFillSafetyCertificate />C Certificate</p>
          </div>
          

        <div className="mycert">
        <img src="https://www.sololearn.com/Certificate/CT-OSDVPWVD/png" alt="" />
	     	<p><AiFillSafetyCertificate />SQL Certificate</p>
          </div>

          {/* <FaArrowCircleRight onClick={()=>navigtion('addcertificate')} className='next discertf'/> */}
          {/* <button onClick={() => navigtion('addcertificate')} className='moreert'>More Certificates</button> */}
          <BiDownArrowCircle onClick={()=>navigates('project')} className='next downskill'/>

          
 
         </div>
      </div>
      
    </>
  )
}
