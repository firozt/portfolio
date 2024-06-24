import GitHub from '../assets/github.png'

type Props = {
  title: string
  content: string
  tags: string[]
  link?: string
  imgname?: string
  github?: string
}

const ProjectBox = ({title, content, tags, link, imgname, github}: Props) => {
  return (
    <div className='project-box'>

      <div className='project-title'>
        <h1>{title}</h1>
        {
          github ? <a id='github-link' href={github} target='_blank'><img style={{width:30}} src={GitHub}/></a> : null

        }
        {
          link ? <a href={link} target='_blank'>Visit</a> : null
        }
      </div>
      <div className='project-content'>
        <p>
          {content}
        </p>
        {imgname ? <img src={imgname}/> : null}
      </div>
      <div className='tag-container'>
        {
          tags.map(item => <div key={item} className='tag'><p className="tag-text">{item}</p></div>)
        }
      </div>
    </div>
  )
}

export default ProjectBox