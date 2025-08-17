import Email from '/public/static/email.png'
import LinkedIn from '/public/static/linkedin.png'
import Github from '/public/static/github.png'
import Image from 'next/image'


const Contact = () => {
  return (
    <>
    <div style={{width:'100%'}}>
      <h1 className='subhead' id='contact-title'>contacts</h1>
    </div>
    <div className='contact'>
      <div className='socials'>
        <a href='mailto:firozt03@gmail.com'>
          <div className='social-item'>
            <p>firozt03@gmail.com</p>
            <Image height={30} alt='email' width={30} src={Email} />
          </div>
        </a>
        <a href='https://www.linkedin.com/in/ramizabdulla/' target='_blank'>
          <div  className='social-item' >
            <p>/ramizabdulla</p>
            <Image height={30} alt='linked in' width={30} src={LinkedIn} />

          </div>
        </a>
        <a href='https://github.com/firozt' target='_blank'>
          <div  className='social-item' >
            <p>/firozt</p>
            <Image height={30} alt='github' width={30} src={Github} />
          </div>
        </a>
        </div>
    </div>
    </>
  )
}

export default Contact