import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import headerImg from './assets/Group10.png'
function App() {

  return (
    <>
      <div id='home'/>
      <NavBar/>
      <img className="header" src={headerImg} />
      <Header/>
      <About/>
      <Projects/>
      <Contact />
    </>
  )
}

export default App
