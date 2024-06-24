import ProjectBox from './ProjectBox'
import BandSocImg from '../assets/bandsoc.png'
import LeetTab from '../assets/leettab.png'
import DiscordBot from '../assets/discordbot.png'
import SignLink from '../assets/signlink.png'
import MachineLearning from '../assets/ml.png'
type Props = {}

const Projects = ({}: Props) => {
  return (
    <div className='projects' id='projects'>
      <h2>My Projects</h2>
      <ProjectBox 
      title='Warwick Band Society Room Booking System And Interface' 

      content='Crafted a user-friendly online booking system and interface for the Warwick 
      Band Society, increasing the termly profits by 80% whilst greatly reducing the time it 
      takes to book. The system handles both booking and payments, automatically forwarding all
      payments to the society, to achieve this I used Stripe, a payment processing solution.
      Incorperated industry wide best practices for securely holding users private information such
      as salting, hashing and encryption. Furthermore I used JSON Web Tokens (JWT) to maintain stateful
      sessions. All components of this project is hosted on corresponding Amazon Web Service (AWS) services, 
      noted in the tags below. Finally Docker was used to containerize each component to work within
      AWS easily.'
      tags={['Stripe','Python','Typescript','React','Fastapi', 'Json Web Tokens (JWT)', 'Postgresql', 'AWS EC2', 'AWS RDBMS', 'AWS ElastiCache','Docker', 'RestAPI']}
      link='https://booking.warwickbandsoc.co.uk/'
      imgname={BandSocImg}
      github='https://github.com/bandsoc'

      />
      <ProjectBox
      title='Start Page Browser Extension For Interview Tracking and Leetcode Progression'
      content='Designed and implemented a browser start page extension for Firefox and Chrome using React
      enhancing user productivity. Integrated a reverse proxy using Nginx to allow API request to be made
      from the clients browser to Leetcodes GraphQL API. Currently leettab serves more that a hundred daily 
      active users.'
      tags={['Browser Extension','Typescript','Nginx','graphQL','React']}
      link='https://leettab.boraakyuz.me/'
      imgname={LeetTab}
      github='https://github.com/firozt/InterviewStartPage'
      />
      <ProjectBox 
      title='Discord Bot For Displaying Video Game Statistics'
      content='Developed a Discord bot using Discords python software development kit. Furthermore utilised
      Riot Games API (game company) for quering user statstics. Implemented a server caching mechanism to 
      cache repeated API queries, this was an important part of the project as the API used was very limiting
      in the number of API request allowed to make per minute. The caching algorithm would cache the most frequented
      made request whilst also taking into consideration the likelihood of making the same request again.'
      tags={['Python','Caching','Discord API','Riot Games API','Botting']}
      imgname={DiscordBot}
      github='https://github.com/firozt/DiscordBot/'
      />
      <ProjectBox
      title='SignLink - Sign Language Android Application'
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
      />

      <ProjectBox
      title='CIFAR-10 Dataset Convolutional Neural Network Recognition Model'
      content='Designed and trained a model from scratch using Pythons Pytorch Framework. The model is a softmax
      classifier model that takes in an image as input and outputs to ten distinct classes. The model uses a CNN
      architecture with 6 CNN layers, 3 layer multiperceptron classifier, with multiple pooling layers throughout. The model ended with 89% accuracy after 90 epochs.'
      tags={['Convolutional Neural Networks','Machine Learning','Training Models','CIFAR-10 Dataset','Pytorch']}
      imgname={MachineLearning}
      github='https://github.com/firozt/CIFAR-10-CNN-Model'
      />
    </div>
  )
}

export default Projects