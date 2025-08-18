import React from 'react'
import Github from '/public/static/github.png'
import Image from 'next/image'
import LinkedIn from '/public/static/linkedin.png'
import Tilt from 'react-parallax-tilt';


type Props = {
    title: string,
    subhead: string[],
}

const CallingCard = ({title,subhead}: Props) => {
  return (
    <Tilt 
        glareMaxOpacity={.3}
        glareReverse
        glareEnable={true} 
        tiltMaxAngleX={2} 
        tiltMaxAngleY={2}
        glarePosition="all"
        glareColor="#ebb4554d"
        className="landing-container"
        >
          <div className="landing">
            <div>
              <div className="title">
                <p id='pre-text'>HI IM,</p>
                <h1>{title}</h1>
                <div className="bio-subtext">
                  <h2>{subhead[0]}</h2>
                  <div style={{display:'flex',flexDirection:'row',gap:'3px'}}>
                    <h2 style={{marginLeft:'30px'}}>{subhead[1]} </h2>
                    <svg width="25" height="32" viewBox="0 0 41 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.5 0C9.19693 0 0.0002087 8.9725 0.0002087 19.9875C-0.074103 36.1 19.721 49.46 20.5 50C20.5 50 41.0741 36.1 40.9998 20C40.9998 8.9725 31.8031 0 20.5 0ZM20.5 30C14.8369 30 10.2501 25.525 10.2501 20C10.2501 14.475 14.8369 10 20.5 10C26.1631 10 30.7499 14.475 30.7499 20C30.7499 25.525 26.1631 30 20.5 30Z" fill="white"/>
                    </svg>
                  </div>
                </div>

                <div className="socials">
                  <a href="https://www.github.com/firozt" target="_BLANK">
                    <ul>
                      <Image height={40} alt='github' width={40} src={Github} />
                      <p>/firozt</p>
                    </ul>
                  </a>
                  <a href="https://www.linkedin.com/in/ramizabdulla/" target="_BLANK">
                    <ul>
                      <Image height={40} alt='linked in' width={40} src={LinkedIn} />
                      <p>/ramizabdulla</p>
                    </ul>
                  </a>
                </div>

              </div>
              <div className="sidetext" style={{height:'100%'}}>
                <div>
                  <h1 id="card-sub">
                    Building <span style={{color:'#ff4545'}}>reliable</span> software solutions with modern tech.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
  )
}

export default CallingCard