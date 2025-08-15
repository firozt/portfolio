'use client'
import CommandPromptText from "./Components/CommandPromptText/CommandPromptText";
import Navbar from "./Components/Navbar/Navbar"
import Image from 'next/image';
import ProjectBox from "./Components/ProjectBox/ProjectBox";

// png imports from public
import BandSocImg from '/public/static/bandsoc.png'
import LeetTab from '/public/static/leettab.png'
import DiscordBot from '/public/static/discordbot.png'
import SignLink from '/public/static/signlink.png'
import MachineLearning from '/public/static/ml.png'
import TheSceneImg from '/public/static/thescene.png'
import Contact from "./Components/Contacts/Contact";
import CompilerImg from '/public/static/lab-snapshot.png'
import profileImage from '/public/static/photo-me.png'
import { useState, useEffect } from "react";

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

  content='Crafted a user-friendly online booking system and interface for the Warwick 
  Band Society, increasing the termly profits by 80% whilst greatly reducing the time it 
  takes to book. The system handles both booking and payments, automatically forwarding all
  payments to the society, to achieve this I used Stripe, a payment processing solution.
  Incorperated industry wide best practices for securely holding users private information such
  as salting, hashing and encryption. Furthermore I used JSON Web Tokens (JWT) to maintain stateful
  sessions. All components of this project is hosted on corresponding Amazon Web Service (AWS) services, 
  noted in the tags below. Finally Docker was used to containerize each component to work within
  AWS easily. Note that this project as of August 2024 has been deprecated, a simulation of the project is still running '
  tags={['Stripe','Python','Typescript','React','Fastapi', 'Json Web Tokens (JWT)','Redis Cache', 'Postgresql', 'AWS EC2', 'AWS RDBMS', 'AWS ElastiCache','Docker', 'RestAPI']}
  link='https://bandsoc.ramizabdulla.me'
  imgname={BandSocImg}
    details={{
      schemaDiagram: PATH_TO_SVGS + 'bandsoc.schema.svg',
      detailText:'For this project we decided to keep the architecture simple as it will only be service a small group of people, the band society. The frontend comrpises of a single page application (SPA) using ReactJS with Vite. The backend comprises of four main services: The API we run using Python\'s FastAPI library (REST API), The database holding all the bookings and user information, Amazon\'s Simple Email Service for email verifcation, Redis Cache for user caching and instant revoking of JWT tokens and finally the Stripe Payment API to handle user transactions Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quisquam labore quis asperiores quaerat quia, numquam earum assumenda et praesentium culpa eaque aliquid minus voluptate id sequi veritatis facilis esse For this project we decided to keep the architecture simple as it will only be service a small group of people, the band society. The frontend comrpises of a single page application (SPA) using ReactJS with Vite. The backend comprises of four main services: The API we run using Python\'s FastAPI library (REST API), The database holding all the bookings and user information, Amazon\'s Simple Email Service for email verifcation, Redis Cache for user caching and instant revoking of JWT tokens and finally the Stripe Payment API to handle user transactions Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quisquam labore quis asperiores quaerat quia, numquam earum assumenda et praesentium culpa eaque aliquid minus voluptate id sequi veritatis facilis esse For this project we decided to keep the architecture simple as it will only be service a small group of people, the band society. The frontend comrpises of a single page application (SPA) using ReactJS with Vite. The backend comprises of four main services: The API we run using Python\'s FastAPI library (REST API), The database holding all the bookings and user information, Amazon\'s Simple Email Service for email verifcation, Redis Cache for user caching and instant revoking of JWT tokens and finally the Stripe Payment API to handle user transactions Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quisquam labore quis asperiores quaerat quia, numquam earum assumenda et praesentium culpa eaque aliquid minus voluptate id sequi veritatis facilis esse !r this project we decided to keep the architecture simple as it will only be service a small group of people, the band society. The frontend comrpises of a single page application (SPA) using ReactJS with Vite. The backend comprises of four main services: The API we run using Python\'s FastAPI library (REST API), The database holding all the bookings and user information, Amazon\'s Simple Email Service for email verifcation, Redis Cache for user caching and instant revoking of JWT tokens and finally the Stripe Payment API to handle user transactions Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quisquam labore quis asperiores quaerat quia, numquam earum assumenda et praesentium culpa eaque aliquid minus voluptate id sequi veritatis facilis esse For this project we decided to keep the architecture simple as it will only be service a small group of people, the band society. The frontend comrpises of a single page application (SPA) using ReactJS with Vite. The backend comprises of four main services: The API we run using Python\'s FastAPI library (REST API), The database holding all the bookings and user information, Amazon\'s Simple Email Service for email verifcation, Redis Cache for user caching and instant revoking of JWT tokens and finally the Stripe Payment API to handle user transactions',
      sysDiagram: PATH_TO_SVGS + 'bandsoc.sysdiagram.svg',
    }}
  />,
  <ProjectBox
  title='LeetTab'
  content='Designed and implemented a browser start page extension for Firefox and Chrome using React
  enhancing user productivity. Integrated a reverse proxy using Nginx to allow API request to be made
  from the clients browser to Leetcodes GraphQL API. Currently leettab serves more that a hundred daily 
  active users.'
  tags={['Browser Extension','Typescript','Nginx','graphQL','React']}
  link='https://leettab.boraakyuz.me/'
  imgname={LeetTab}
  />,
  <ProjectBox
title='SignLink'
  content='Created an android application that allows users to learn American Sign Language (asl) through
  quizes and exams. Incorporated an algorithm that maximises user retention from the quizs, this was created
  through continuous testing from a group of particpants. This algorithm uses a double queue system to determine
  which quiz popup should be displayed to the user next. Furthermore this project uses Java Spring Boot on the backend
  to host the endpoint that are frequently made. This was chosen due to the robustness of Java and its very easy to use
  unit testing libraries. Finally Googles login API was also used in project to allow users to more easily create
  an account via the login with google button. This project also incorporates a dictionary of sign to word translation
  pairings, of which has more than five hundred words. This was achieved by web scraping datasets of these pairings online'
  tags={['Android Development','Java','Spring Boot','Postgresql','Typescript','Web Scraping','Python']}
  imgname={SignLink}
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
  title='Custom Compiler'
  content='Designed and implemented a compiler using the ANTLR 4 Java framework. This project implements
  the skills ive learnt throughout the entirity of my degree, from Algorithms to Automata and Formal Languages.
  This project also let me delve, more thoroughly into low level programming. The compiler takes as input valid COOL
  syntax code and outputs a mips file that can be ran on any cpu that can understand and compute mips code. COOL is a 
  language developed by the University of Standford, whose main purpose is to develop compilers for as it is a basic
  OOP language without many of the bells and whistles in modern OOP languages such as Java'
  tags={['Automata and Formal Lanugages','Context Free Grammars','Java','ANTLR 4','Low Level Programing (ASM)','MIPS','Syntax detection','Data structures']}
  imgname={CompilerImg}
  github='https://github.com/firozt/Object-Oriented-Language-Compiler'
  />,
  <ProjectBox
  title='Machine Vision Classifier'
  content='Designed and trained a model from scratch using Pythons Pytorch Framework. The model is a softmax
  classifier model that takes in an image as input and outputs to ten distinct classes. The model uses a CNN
  architecture with 6 CNN layers, 3 layer multiperceptron classifier, with multiple pooling layers throughout. The model ended with 89% accuracy after 90 epochs.'
  tags={['Convolutional Neural Networks','Machine Learning','Training Models','CIFAR-10 Dataset','Pytorch']}
  imgname={MachineLearning}
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
      <Navbar/>
      <div className="bio-container">
        <div className="image-container">
          <div className="me-image" style={{marginTop:'-650px',minWidth:'520px',maxWidth:'520px',paddingBottom:'20px',scale:0.8, zIndex:0}}>
            <Image 
            style={{position:'relative', top:'680px',left:'135px'}}
            src={profileImage}
            alt="Picture of me"
            width={350}
            />
            <div>
              <svg width="357" height="659" viewBox="0 0 357 659" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M101.754 191.395L24 168.074L24 157.059L109.312 184.539V191.453L101.754 191.395ZM24 210.262L101.754 186.941L109.312 186.824V193.797L24 221.277V210.262ZM55.582 210.262H46.3242V169.129H55.582V210.262ZM63.9023 258.836L63.9023 241.492L72.9844 241.375V257.488C72.9844 259.91 73.5312 262.059 74.625 263.934C75.7187 265.809 77.2812 267.273 79.3125 268.328C81.3828 269.422 83.8437 269.969 86.6953 269.969C89.8203 269.969 92.3594 269.5 94.3125 268.562C96.3047 267.664 97.75 266.277 98.6484 264.402C99.5859 262.566 100.055 260.223 100.055 257.371V243.777H24L24 232.996H109.312L109.312 257.371C109.312 261.043 108.863 264.324 107.965 267.215C107.105 270.105 105.738 272.547 103.863 274.539C102.027 276.57 99.6836 278.113 96.832 279.168C93.9805 280.223 90.5625 280.75 86.5781 280.75C83.0625 280.75 79.8789 279.949 77.0273 278.348C74.2148 276.785 71.9102 274.598 70.1133 271.785C68.3164 268.973 67.1641 265.73 66.6562 262.059L63.9023 258.836ZM24 258.426L24 237.039L33.1992 243.309V258.426C33.1992 261.238 33.8242 263.621 35.0742 265.574C36.3242 267.527 38.082 269.012 40.3477 270.027C42.6523 271.082 45.3672 271.609 48.4922 271.609C51.6562 271.609 54.3906 271.18 56.6953 270.32C59 269.461 60.7773 268.094 62.0273 266.219C63.2773 264.344 63.9023 261.883 63.9023 258.836V244.949L72.9844 245.066V263.816L69.7031 266.219C69.3516 269.734 68.1797 272.684 66.1875 275.066C64.2344 277.488 61.7344 279.305 58.6875 280.516C55.6406 281.766 52.2812 282.391 48.6094 282.391C43.2969 282.391 38.8047 281.395 35.1328 279.402C31.5 277.449 28.7266 274.676 26.8125 271.082C24.9375 267.488 24 263.27 24 258.426ZM24 317.84V303.309L33.1992 303.426V317.84C33.1992 322.957 34.1758 327.117 36.1289 330.32C38.1211 333.523 41.0508 335.887 44.918 337.41C48.8242 338.934 53.6484 339.695 59.3906 339.695H73.9805C78.5117 339.695 82.418 339.266 85.6992 338.406C88.9805 337.547 91.6758 336.258 93.7852 334.539C95.8945 332.82 97.457 330.652 98.4727 328.035C99.5273 325.418 100.055 322.352 100.055 318.836V303.016H109.312V318.836C109.312 323.641 108.551 327.977 107.027 331.844C105.543 335.711 103.297 339.031 100.289 341.805C97.3203 344.578 93.6289 346.688 89.2148 348.133C84.8008 349.617 79.6836 350.359 73.8633 350.359H59.3906C53.5703 350.359 48.4531 349.617 44.0391 348.133C39.625 346.688 35.9336 344.559 32.9648 341.746C29.9961 338.934 27.75 335.516 26.2266 331.492C24.7422 327.508 24 322.957 24 317.84ZM109.312 309.285H24V298.504H109.312V309.285ZM109.312 407.195V417.977H49.2539C42.8477 417.977 37.7109 416.746 33.8437 414.285C29.9766 411.824 27.1641 408.582 25.4062 404.559C23.6875 400.574 22.8281 396.277 22.8281 391.668C22.8281 386.746 23.6875 382.312 25.4062 378.367C27.1641 374.422 29.9766 371.277 33.8437 368.934C37.7109 366.629 42.8477 365.477 49.2539 365.477H109.312V376.199H49.2539C44.8008 376.199 41.3242 376.824 38.8242 378.074C36.3242 379.363 34.5664 381.16 33.5508 383.465C32.5352 385.809 32.0273 388.543 32.0273 391.668C32.0273 394.832 32.5352 397.566 33.5508 399.871C34.5664 402.215 36.3242 404.012 38.8242 405.262C41.3242 406.551 44.8008 407.195 49.2539 407.195H109.312ZM33.1992 478.68H24L24 443.289H33.1992L33.1992 478.68ZM109.312 445.223H24V434.441H109.312V445.223ZM33.1992 535.75H24V500.359H33.1992V535.75ZM109.312 502.293H24V491.512H109.312V502.293ZM101.754 577.41L24 554.09L24 543.074L109.312 570.555V577.469L101.754 577.41ZM24 596.277L101.754 572.957L109.312 572.84V579.812L24 607.293V596.277ZM55.582 596.277H46.3242V555.145H55.582V596.277Z" fill="#2E2E2E"/>
                <path d="M12.2812 127L12.2812 609.754H6.42187L6.42188 127H12.2812Z" fill="#2E2E2E"/>
                <path d="M16.2578 26.6875H40.1055C45.6523 26.6875 50.3008 27.6641 54.0508 29.6172C57.8398 31.5703 60.6914 34.4609 62.6055 38.2891C64.5586 42.0781 65.5352 46.7461 65.5352 52.293C65.5352 56.1992 64.8906 59.7734 63.6016 63.0156C62.3125 66.2188 60.4375 68.9531 57.9766 71.2188C55.5156 73.4453 52.5273 75.1055 49.0117 76.1992L46.082 77.4297H24.8125L24.6953 68.2305H39.9883C43.2695 68.2305 46.0039 67.5273 48.1914 66.1211C50.3789 64.6758 52.0195 62.7422 53.1133 60.3203C54.207 57.8984 54.7539 55.2227 54.7539 52.293C54.7539 49.0117 54.2656 46.1406 53.2891 43.6797C52.3125 41.2188 50.75 39.3242 48.6016 37.9961C46.4922 36.6289 43.6602 35.9453 40.1055 35.9453H27.0391V112H16.2578V26.6875ZM57.2148 112L40.2227 73.3281L51.4141 73.2695L68.7578 111.297V112H57.2148ZM107.605 34.2461L84.2852 112H73.2695L100.75 26.6875H107.664L107.605 34.2461ZM126.473 112L103.152 34.2461L103.035 26.6875H110.008L137.488 112H126.473ZM126.473 80.418V89.6758H85.3398V80.418H126.473ZM152.605 26.6875H163.035L185.359 96.2383L207.625 26.6875H218.055L189.402 112H181.199L152.605 26.6875ZM149.207 26.6875H158.348L159.93 78.7188V112H149.207V26.6875ZM212.254 26.6875H221.395V112H210.672V78.7188L212.254 26.6875ZM251.16 26.6875V112H240.379V26.6875H251.16ZM318.426 102.801V112H270.203V102.801H318.426ZM316.902 34.8906L272.723 112H266.102V103.562L310.223 26.6875H316.902V34.8906ZM312.332 26.6875V35.9453H266.453V26.6875H312.332Z" fill="#2E2E2E"/>
                <path d="M7 123.719H323.465V129.578H7V123.719Z" fill="#2E2E2E"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="animated">
          <CommandPromptText subtext title={'who-am-i'} height={height} width={width} contentPadding={contentPadding} text={text} />
        </div>
      </div>
      <div id="projects" className="projects-container">
        <div style={{width:'100vw',maxWidth:'372px',margin:'auto',marginBottom:'1.5rem',marginTop:'1rem'}}>
        </div>
      {/* <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:15}} className="projects-container"> */}
      <div className="projects-list">
        {
          windowWidth > 1250 ?
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
    </div>
  );
}
