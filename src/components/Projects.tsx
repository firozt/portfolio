import ProjectBox from './ProjectBox'
import BandSocImg from '../../public/bandsoc.png'
import LeetTab from '../../public/leettab.png'
type Props = {}

const Projects = ({}: Props) => {
  return (
    <div className='projects' id='projects'>
      <h2>My Projects</h2>
      {/* <ProjectBox 
      title='title' 
      content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eum autem distinctio possimus alias beatae! Quo ab unde minima aperiam! Delectus placeat explicabo facilis velit consequuntur maiores eum inventore distinctio!' 
      tags={['one','two']}
      link='https://malgow.net'
      imgname=''
      />       */}
      <ProjectBox 
      title='Warwick Band Society Room Booking System' 
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
      />
    </div>
  )
}

export default Projects