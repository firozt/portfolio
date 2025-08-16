import Email from '/public/static/email.png'
import LinkedIn from '/public/static/linkedin.png'
import Github from '/public/static/github.png'
import Image from 'next/image'


const Contact = () => {
  return (
    <>
    <div style={{width:'100%'}}>
      <h1 id='contact-title'>Contact Me.</h1>
    </div>
    <div className='contact'>
      <div className='socials'>
        <a target=''>
          <div className='social-item'>
            <p>firozt03@gmail.com</p>
            <Image height={40} alt='email' width={40} src={Email} />
          </div>
        </a>
        <a href='https://www.linkedin.com/in/ramizabdulla/' target='_blank'>
          <div  className='social-item' >
            <p>/ramizabdulla</p>
            <Image height={40} alt='linked in' width={40} src={LinkedIn} />

          </div>
        </a>
        <a href='https://github.com/firozt' target='_blank'>
          <div  className='social-item' >
            <p>/firozt</p>
            <Image height={40} alt='github' width={40} src={Github} />
            
          </div>
        </a>
        </div>
    </div>
    </>
  )
}

export default Contact