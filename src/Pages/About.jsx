import React from 'react'
import { FaCloudDownloadAlt,FaQuoteLeft,FaQuoteRight } from 'react-icons/fa'
export default function About() {
  return (
    <>
      <div className="middle">
        
        <div className="header">
        <h2><skill>ABOUT ME</skill></h2>
        <p><FaQuoteLeft className='sizing' /> I'am student at  ecole secondarie technique de gisenyi<br />I'am in L4 Software development <FaQuoteRight className='sizing' /></p>
      </div>
      <div className="about">
        <div className="ditailes shadowing">
          
        <img className='borders ' src="../../../../certificates/image.jpg" alt="my image" />
      </div>
      <div className="ditailes putdown">
        <h1>Hello👋, I'am <editname> Mbarushimana Fabrice</editname> </h1>
            <p>i'am interested in technology and also i try to wark hard inorder  to take
              <br />all opporunity i gain in my learning jurney, also focus on self  study<br />
              and i try to solve same society problems by use technology</p>
         
          <p><info>Name</info><datas> :Mbarushimana Fabrice</datas></p>
            <p><info>Address</info><datas> :Rubavu-Gisenyi</datas></p>
           <p><info>Phone Number</info><datas> :+250790270019</datas></p>
           <p><info>Email</info><datas> :fabricembarush5@gmail.com</datas></p>
         <button><FaCloudDownloadAlt />Download Cv</button>
        </div>
      </div>
      </div>
      
      
    </>
  )
}

