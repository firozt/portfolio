import ProjectBox from './ProjectBox'

type Props = {}

const Projects = ({}: Props) => {
  return (
    <div className='projects' id='projects'>
      <h2>My Projects</h2>
      <ProjectBox 
      title='title' 
      content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eum autem distinctio possimus alias beatae! Quo ab unde minima aperiam! Delectus placeat explicabo facilis velit consequuntur maiores eum inventore distinctio!' 
      tags={['one','two']}
      link='https://malgow.net'
      />
      <ProjectBox 
      title='title2' 
      content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eum autem distinctio possimus alias beatae! Quo ab unde minima aperiam! Delectus placeat explicabo facilis velit consequuntur maiores eum inventore distinctio!' 
      tags={['three']}
      link='https://malgow.net'
      imgname='github'
      />
      <ProjectBox 
      title='title2' 
      content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eum autem distinctio possimus alias beatae! Quo ab unde minima aperiam! Delectus placeat explicabo facilis velit consequuntur maiores eum inventore distinctio!' 
      tags={['three']}
      link='https://malgow.net'
      />
    </div>
  )
}

export default Projects