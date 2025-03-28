import Image, { StaticImageData } from 'next/image';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

type ExtraDetails = {
	title: string
	subtext: string
	image: string
  } 

type ProjectDetail = {
  sysDiagram?: string
  detailText: string
  schemaDiagram?: string
}


type Props = {
  title: string
  content: string
  tags: string[]
  link?: string
  imgname?: StaticImageData
  github?: string
  details?: ProjectDetail
  backgroundColor?: string
  extraDetail?: ExtraDetails[]
}



const ProjectBox = ({title, content, tags, link, imgname, github, details, backgroundColor, extraDetail}: Props) => {
  return (
    <div className='project-box'>

      <div className='project-title'>
        <h1>{title}</h1>
        {
          github ? <a id='github-link' href={github} target='_blank'><svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.8777 0.182617C17.3944 0.182617 14.9354 0.683887 12.6411 1.65781C10.3468 2.63172 8.26216 4.05922 6.50619 5.85879C2.95985 9.49318 0.967529 14.4225 0.967529 19.5623C0.967529 28.1281 6.39475 35.3955 13.9021 37.9729C14.8476 38.128 15.1502 37.5272 15.1502 37.004V33.7288C9.91204 34.8916 8.79634 31.1319 8.79634 31.1319C7.92647 28.8839 6.69731 28.2831 6.69731 28.2831C4.97649 27.0816 6.82968 27.1203 6.82968 27.1203C8.7207 27.256 9.72294 29.1164 9.72294 29.1164C11.3681 32.0622 14.1479 31.1901 15.2258 30.725C15.396 29.4653 15.8877 28.6126 16.4171 28.1281C12.2191 27.6436 7.81301 25.9769 7.81301 18.5933C7.81301 16.4422 8.5316 14.7174 9.76076 13.3414C9.57166 12.8569 8.9098 10.8414 9.94986 8.22517C9.94986 8.22517 11.5383 7.70192 15.1502 10.2019C16.6441 9.77555 18.2703 9.56237 19.8777 9.56237C21.4851 9.56237 23.1113 9.77555 24.6052 10.2019C28.2171 7.70192 29.8055 8.22517 29.8055 8.22517C30.8456 10.8414 30.1838 12.8569 29.9946 13.3414C31.2238 14.7174 31.9424 16.4422 31.9424 18.5933C31.9424 25.9963 27.5174 27.6242 23.3004 28.1087C23.9812 28.7095 24.6052 29.8916 24.6052 31.6939V37.004C24.6052 37.5272 24.9078 38.1474 25.8722 37.9729C33.3796 35.3761 38.7879 28.1281 38.7879 19.5623C38.7879 17.0173 38.2988 14.4972 37.3484 12.146C36.3981 9.79475 35.0052 7.65835 33.2492 5.85879C31.4932 4.05922 29.4086 2.63172 27.1143 1.65781C24.82 0.683887 22.361 0.182617 19.8777 0.182617Z" fill="#2A2A2A"/>
          </svg>
          </a> : null

        }
        {
          link ? <a style={{textDecoration:'None', color:'black'}} href={link} target='_blank'><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.64 7.025H12.018V5.025H19.018V12.025H17.018V8.475L12.104 13.389L10.69 11.975L15.64 7.025Z" fill="#111111"/>
<path d="M10.982 6.975H4.98199V18.975H16.982V12.975H14.982V16.975H6.98199V8.975H10.982V6.975Z" fill="#111111"/>
</svg>
</a> : null
        }
      </div>
      <div className='project-content'>
        <p>
          {content}
        </p>
        {imgname ? <Image width={250} height={0} style={{height:'auto'}} alt='project image' src={imgname}/> : null}
      </div>
      <div className='tag-container'>
        {
          tags.map(item => <div key={item} className='tag'><p className="tag-text">{item}</p></div>)
        }
      </div>
      {
        details ? 
        <div style={{marginBottom:'-18px',marginTop:'1rem'}}>
          <ProjectDetails details={details} backgroundColor={backgroundColor} extraDetail={extraDetail}/> 
        </div>
        : null 
      }
    </div>
  )
}

export default ProjectBox