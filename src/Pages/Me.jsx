import { BiDownArrowCircle } from 'react-icons/bi'
import React from 'react'
import { useNavigate } from 'react-router-dom'
 
export default function Me() {
  const navigate = useNavigate();
  return (
    <>
      <div className="me middle"> 
        <p><myname>My Name is</myname> MBARUSHIMANA <br /> <nen>Fabrice</nen> </p>
        <h2>I’ am Student in  Software Developement...</h2>
        <BiDownArrowCircle className="down_me" onClick={()=>navigate('skills')} className='next down'/>
       </div>
    </>
  )
}
