import React from 'react'
import './index.css'
import Image from 'next/image'
import Me from '/public/static/me.jpg'

const Whoami = () => {
  return (
    <div id='whoami' className='about-me'>
        <h1 className='subhead'>who-am-i</h1>
        <div className='inner'>
            <p>Im a software developer with a passion for creating both web and mobile applications. I adopt the the ideology  of continuous learning throughout the creation of software, I also  believe that there is always something to learn no matter how  experienced. 
                <br/>
                <br/>
                <br/>
                I have graduated from Queen Mary University of London with a  first class honours for a  bachelors of science for Computer Science.
            </p>
            <div id='vline'></div>
            <Image width={0} height={300} src={Me} alt={'photo of me'} />
        </div>
    </div>
  )
}

export default Whoami