import Email from '../../public/email.png'
import LinkedIn from '../../public/linkedin.png'
import Github from '../../public/github.png'


type Props = {}

const Contact = ({}: Props) => {
  return (
    <>
      <h1 className='contact-title' id='contact'>
        Contact Me
      </h1>
    <div className='contact'>
      <div className='socials'>
        <a target=''>
          <div className='social-item'>
            <p>firozt03@gmail.com</p>
            <img src={Email} />
          </div>
        </a>
        <a href='https://www.linkedin.com/in/ramizabdulla/' target='_blank'>
          <div  className='social-item' >
            <p>/ramizabdulla</p>
            <img src={LinkedIn} />
          </div>
        </a>
        <a href='https://github.com/firozt' target='_blank'>
          <div  className='social-item' >
            <p>/firozt</p>
            <img src={Github} />
          </div>
        </a>
        </div>
    </div>
    </>
  )
}

export default Contact