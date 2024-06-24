type Props = {}

const NavBar = ({}: Props) => {
  return (
    <div className='nav'>
      <ul>
        <a href="#contact">
          <li>CONTACT</li>
        </a>
      </ul>
      <ul>
        <a href="#projects">
          <li>PROJECTS</li>
        </a>
      </ul>
      <ul>
        <a href="#about">
          <li>ABOUT</li>
        </a>
      </ul>
      <ul>
        <a href="#home">
          <li>HOME</li>
        </a>
      </ul>
    </div>
  )
}


export default NavBar