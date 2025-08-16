'use client'
import CommandPromptText from "./Components/CommandPromptText/CommandPromptText";
import Navbar from "./Components/Navbar/Navbar"
import ProjectBox from "./Components/ProjectBox/ProjectBox";
import Github from '/public/static/github.png'
import Image from 'next/image'
import LinkedIn from '/public/static/linkedin.png'
// import AlgoPen from '/public/static/algopen.png'
// png imports from public
import BandSocImg from '/public/static/bandsoc.png'
import LeetTab from '/public/static/leettab.png'
import DiscordBot from '/public/static/discordbot.png'
// import SignLink from '/public/static/signlink.png'
// import MachineLearning from '/public/static/ml.png'
import TheSceneImg from '/public/static/thescene.png'
import Contact from "./Components/Contacts/Contact";
// import CompilerImg from '/public/static/lab-snapshot.png'
import { useState, useEffect } from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

// Constants
const height = 400
const width = 800
const contentPadding = 8
const text = ['~/portfolio> whoami','ramiz abdulla',' ~/portfolio>cat bio.txt','Im a software developer with a passion for creating both web and mobile applications. I adopt the the ideology  of continuous learning throughout the creation of software, I also  believe that there is always something to learn no matter how  experienced. I have graduated from Queen Mary University of London with a  first class honours for a  bachelors of science for Computer Science.','~portfolio> cd projects','~portfolio/projects> open .']
const PATH_TO_SVGS = '/static/'


const Projects = [
  <ProjectBox 
  title='thescene' 

  content='A one stop shop for all information related to users in the creative fields such as musicians 
  and film makers. This platform enables users to create a personalised e-business card that
  contains all the information fans will want access to. The platform also hosts the business card
  online under a subdomain allowing the user to have an online pressence more unique than just an instagram
  or x.com page.
  '
  tags={['Stripe','Python','Typescript','NextJS','React','Fastapi', 'Postgresql', 'AWS EC2', 'AWS RDBMS', 'AWS ElastiCache','Docker', 'RestAPI', 'Json Web Tokens']}
  link='https://thescene.io/vanquan'
  imgname={TheSceneImg}
  details={{
    detailText: 'Below depicts the system architecture and database schema for this project. For this project I used NextJS with Typescript on the frontend, Python with FastAPI on the serverside to handle all incomming API requests from the frontend and furthermore Postgresql for the database. To assist with this stack I incorporated AWS sevices such as S3 Bucket to hold all images the user would edit and upload to the system, and redis to handle caching of user information and JWT tokens. ',
    sysDiagram: PATH_TO_SVGS + 'thescene.sysdiagram.svg',
    schemaDiagram: PATH_TO_SVGS + 'thescene.schema.svg'
  }}
  />,
  <ProjectBox 
  title='Band Society Booking System' 

  content='Worked a client, Warwick Band Society Executives, to automate their room booking system. Previously users would
  contact the bookings manager executive through social media to book out the practice room at a given slot. Payment would happen
  after on a honor based system with no validity checks. Our task was to both automate this booking system and t he payment system.
  The end prodcut software saw increases to termly profits by 80% after the end of the first year of use.'
  tags={['Stripe','Python','Typescript','React','Fastapi', 'Json Web Tokens (JWT)','Redis Cache', 'Postgresql', 'AWS EC2', 'AWS RDBMS', 'AWS ElastiCache','Docker', 'RestAPI']}
  link='https://bandsoc.ramizabdulla.me'
  imgname={BandSocImg}
    details={{
      schemaDiagram: PATH_TO_SVGS + 'bandsoc.schema.svg',
      detailText:'For this project we decided to keep the architecture simple as it will only be service a small group of people, the band society. The frontend comrpises of a single page application (SPA) using ReactJS with Vite. The backend comprises of four main services: The API we run using Python\'s FastAPI library (REST API), The database holding all the bookings and user information, Amazon\'s Simple Email Service for email verifcation, Redis Cache for user caching and instant revoking of JWT tokens and finally the Stripe Payment API to handle user transactions',
      sysDiagram: PATH_TO_SVGS + 'bandsoc.sysdiagram.svg',
    }}
  />,
  <ProjectBox
  title='LeetTab'
  content='A start page extension that is aimed towards students and new graduates. This tool 
  track upcoming and previous interviews. This tool also is able to track LeetCode statistics, a must use
  platform for interview prep, for both the user and any other LeetCode user given their username. The platform
  has many testimonials of its benefits from our users, even helping some get into their dream careers.'
  tags={['Browser Extension','Typescript','Nginx','graphQL','React']}
  link='https://leettab.boraakyuz.me/'
  imgname={LeetTab}
  />,
  <ProjectBox
title='SignLink'
content="A mobile application for both Android and IOS that aims to provides users to learn American Sign Language (ASL)
as easily as possible through quizes and exams. SignLink also enables users to track progression by recording all their scores from all exams
for each take and then visualises this data in a user-friendly manor to boost user retention and boost user scores."
  // content='Created an android application that allows users to learn American Sign Language (asl) through
  // quizes and exams. Incorporated an algorithm that maximises user retention from the quizs, this was created
  // through continuous testing from a group of particpants. This algorithm uses a double queue system to determine
  // which quiz popup should be displayed to the user next. Furthermore this project uses Java Spring Boot on the backend
  // to host the endpoint that are frequently made. This was chosen due to the robustness of Java and its very easy to use
  // unit testing libraries. Finally Googles login API was also used in project to allow users to more easily create
  // an account via the login with google button. This project also incorporates a dictionary of sign to word translation
  // pairings, of which has more than five hundred words. This was achieved by web scraping datasets of these pairings online'
  tags={['Android Development','Java','Spring Boot','Postgresql','Typescript','Web Scraping','Python','React Native','Selenium','Pandas','Jupyter Notebook']}
  // imgname={SignLink}
  github='https://github.com/firozt/signlink'
  details={{
    detailText:'For this project I decided to incorporate google login auth for easy user logins. This google API uses the OUATH2 standard for API security, which is an industry standard for these types of services. For the server architecture I opted to use a microservice structure incorporating the Model View Controller (MVC) design pattern, greatly encouraged by the Java Spring Boot documentation. One service handles all of the API request from the client, of which is then broken down to even more microservices, one for user auth, courses information request and user course relations. Another server service is the python scraping server. This server is used periodically to scrape information from the web and store in my SQL database, which other services will use. I decided to use a cloud storage software to store images, as there are over hundreds images in this project. To use these images I saved the URI to display them in my Postgres database. Lastly I chose to use ReactNative as it will allow me the freedom in the future to enable IOS support, unlike single platform frameworks such as swift or kotlin. ',
    sysDiagram: PATH_TO_SVGS + 'signlink.sysdiagram.svg',
    schemaDiagram: PATH_TO_SVGS + 'signlink.schema.svg'
  }}
  extraDetail={[
    {
      title:'Screen Flow Diagram',
      subtext:'Below shows all the screens the user interacts with and how a user would enter that screen. This image was from the desgin phase of the project. The control flow was inspired from similar applications such as Memrise and Duolingo',
      image: PATH_TO_SVGS + 'signlink.controlflow.svg'
    }
  ]}
  />,
  <ProjectBox 
  title={"AlgoPen"} 
  content="An online tool aimed towards computer science and mathematics undergrad students, that alows users to visualise various
  algorithms and datastructures, from simple linked lists to more niche Final State Automatatons and everywhere in between. The tool
  also shows important information on each one including complexity in Big Oh notation." 
  link="https://algopen.ramizabdulla.me/"
  github="https://github.com/firozt/algopen"
  tags={['React', 'Typescript', '2D Geometry', 'Javascript Canvas API','Tailwind']}/>,
  <ProjectBox
  title='Custom Compiler'
  content='Designed and implemented a compiler using the ANTLR 4 Java framework. This project implements
  the skills ive learnt throughout the entirity of my degree, from Algorithms to Automata and Formal Languages.
  This project also let me delve, more thoroughly into low level programming. The compiler takes as input valid COOL
  syntax code and outputs a mips file that can be ran on any cpu that can understand and compute mips code. COOL is a 
  language developed by the University of Standford, whose main purpose is to develop compilers for as it is a basic
  OOP language without many of the bells and whistles in modern OOP languages such as Java'
  tags={['Automata and Formal Lanugages','Context Free Grammars','Java','ANTLR 4','Low Level Programing (ASM)','MIPS','Syntax detection','Data structures','Finite State Automata']}
  // imgname={CompilerImg}
  github='https://github.com/firozt/Object-Oriented-Language-Compiler'
  />,
  <ProjectBox
  title='Machine Vision Classifier'
  content='Designed and trained a model from scratch using Pythons Pytorch Framework. The model is a softmax
  classifier model that takes in an image as input and outputs to ten distinct classes. The model uses a CNN
  architecture with 6 CNN layers, 3 layer multiperceptron classifier, with multiple pooling layers throughout. The model ended with 89% accuracy after 90 epochs.'
  tags={['Convolutional Neural Networks','Machine Learning','Training Models','CIFAR-10 Dataset','Pytorch','NumPy','Pandas','Jupyter Notebook']}
  // imgname={MachineLearning}
  github='https://github.com/firozt/CIFAR-10-CNN-Model'
  details={{
    detailText: 'The architecture first defines a block, shown below, using 7 convolutions, and a series of linear and multi layer perceptrons. The output of a block is the matrix multiplication of the these two values, which a softmax activation function is then used. To prevent model overfitting, i added a residual connection by adding the original input \'x\' to the output of each block, inspired by the research from the ResNet model. The architecture repeats this 7 times whilst also applying various pooling methods to reduce dimensionality, which also helps with training time. ADAM optimizer was used to train this model. The hyperparameters used for training are the following: Learning Rate = 0.002 (ADAM OPTIMZER), \nLoss function = CrossEntropyLoss, \nWeight Decay = 1e-5.',
    sysDiagram: PATH_TO_SVGS + 'ml.diagram.svg'
  }}
  backgroundColor="white"
  extraDetail={[
    {
      title:'Training Accuracy Logs',
      subtext:'Below shows the graphs for both training loss, test data accuracy and train data accuarcy over 70 epochs.',
      image: PATH_TO_SVGS + 'ml.graphs.png'
    }
  ]}
  />,
  <ProjectBox 
  title='Discord Bot'
  content='Developed a Discord bot using Discords python software development kit. Furthermore utilised
  Riot Games API (game company) for quering user statstics. Implemented a server caching mechanism to 
  cache repeated API queries, this was an important part of the project as the API used was very limiting
  in the number of API request allowed to make per minute. The caching algorithm would cache the most frequented
  made request whilst also taking into consideration the likelihood of making the same request again.'
  tags={['Python','Caching','Discord API','Riot Games API','Botting']}
  imgname={DiscordBot}
  github='https://github.com/firozt/DiscordBot/'
  />
]


export default function Home() {
  const [windowWidth, setWindowWidth] = useState<number>(-1);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    setWindowWidth(window.innerWidth);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <div id="card"></div>
      <Navbar/>
      <div/>
      <motion.div
        initial={{ x: -(typeof window !== "undefined" ? window.innerWidth : 0), y: 0 }}
        transition={{duration:.72,ease:'backOut'}}
        animate={{x:0,y:0}}
      >
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
                <h1>Ramiz Abdulla</h1>
                <div className="bio-subtext">
                  <h2>SOFTWARE DEVELOPER</h2>
                  <div style={{display:'flex',flexDirection:'row',gap:'3px'}}>
                    <h2 style={{marginLeft:'30px'}}>BASED IN LONDON, UK </h2>
                    <svg width="25" height="32" viewBox="0 0 41 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.5 0C9.19693 0 0.0002087 8.9725 0.0002087 19.9875C-0.074103 36.1 19.721 49.46 20.5 50C20.5 50 41.0741 36.1 40.9998 20C40.9998 8.9725 31.8031 0 20.5 0ZM20.5 30C14.8369 30 10.2501 25.525 10.2501 20C10.2501 14.475 14.8369 10 20.5 10C26.1631 10 30.7499 14.475 30.7499 20C30.7499 25.525 26.1631 30 20.5 30Z" fill="white"/>
                    </svg>
                  </div>
                </div>

                <div className="socials">
                  <ul>
                    <Image height={40} alt='github' width={40} src={Github} />
                    <p>/firozt</p>
                  </ul>
                  <ul>
                    <Image height={40} alt='linked in' width={40} src={LinkedIn} />
                    <p>/ramizabdulla</p>
                  </ul>
                </div>

              </div>
              <div className="sidetext" style={{height:'100%'}}>
                <div>
                  <h1 id="card-sub">
                    Building <span style={{color:'#ff4545', textDecoration:'underline'}}>reliable</span> software solutions with modern tech.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      </motion.div>

      <div style={{margin:'auto',width:'fit-content', display:'none'}}>
        <CommandPromptText title={'who-am-i'} height={height} width={width} contentPadding={contentPadding} text={text} />
      </div>
      <div id="projects" className="projects-container">
        <div className="project-section-title">
          <h1>
            Projects.
          </h1>
        </div>
      {/* <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:15}} className="projects-container"> */}
      <div className="projects-list">
        {
          windowWidth > 1300 ?
            <>
              <div className="list1">
                {
                  Projects.filter((_,idx) => idx%2===0).map(item => item)
                }
              </div>
              <div className="list2">
                {
                  Projects.filter((_,idx) => idx%2===1).map(item => item)
                }
              </div>
            </>
          : 
            windowWidth > 0 ?
            <div className="list1">
              {
                Projects.map(item => item)
              }
              </div>
          : null
        } 
        </div>
      </div>
      <div className="contact-section" id="contact">
        <Contact />
      </div>
      <footer>
        <hr style={{width:'90%',margin:'auto'}}/>
        <Navbar/>
        <div id="legals">
        </div>
          <p style={{textAlign:'center',marginTop:'5px',marginBottom:'2rem'}}>Designed and Developed by <span style={{color:'#DE5454'}}>Ramiz Abdulla</span></p>
      </footer>
    </div>
  );
}
