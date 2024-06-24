type Props = {
  title: string
  content: string
  tags: string[]
  link?: string
  imgname?: string
}

const ProjectBox = ({title, content, tags, link, imgname}: Props) => {
  return (
    <div className='project-box'>

      <div className='project-title'>
        <h1>{title}</h1>
        {
          link != '' ? <a href={link} target='_blank'>visit</a> : null
        }
      </div>

      <div className='project-content'>
        <p>
          {content}
        </p>
        {imgname ? <img src={`../../public/${imgname}.png`}/> : null}
      </div>
      <div className='tag-container'>
        {
          tags.map(item => <div className='tag'>{item}</div>)
        }
      </div>
    </div>
  )
}

export default ProjectBox