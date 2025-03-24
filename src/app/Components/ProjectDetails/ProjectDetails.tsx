'use client'
import React, { useState } from 'react'
import '../../globals.css'

type ProjectDetail = {
  sysDiagram?: string
  detailText: string
  schemaDiagram?: string
}

type Props = {
	details: ProjectDetail
}

const ProjectDetails = ({details}: Props) => {
	const [showDetail, setShowDetail] = useState<boolean>(false);

	const buttonClick = () => {
		setShowDetail(!showDetail)
	}

	
  return (
		<div style={{}}> 
			<div onClick={buttonClick} style={{background:'black',width:'100%',height:'50px',cursor:'pointer',display:'flex',alignItems:'center',alignContent:'center',justifyContent:'center'}} className='detail-button'>
			<p style={{fontFamily:'helvetica',color:'white'}}>{showDetail ? 'Hide Details' : 'Show Details'}</p>
		</div>
		{
			showDetail ?
			<div style={{padding:'8px'}}>
			<p style={{color:'#5F5F5F',fontFamily:'helvetica'}}>
				{details?.detailText}
			</p>
			<div className='detail-container' style={{display:'flex',gap:'5px',marginBottom:'.5rem'}}>
				{
					details?.sysDiagram ? 
					<div style={{flex:'1'}}>
						<h1 style={{fontSize:'20px',textAlign:'center',margin:'1rem'}}>System Architecture</h1>
						<img style={{width:'100%'}} alt='sys diagram image' src={details.sysDiagram}/>
					</div> :
					null
				}
				{
					details?.schemaDiagram ? 
					<div style={{flex:'1'}}>
						<h1 style={{fontSize:'20px',textAlign:'center',margin:'1rem'}} >Relational Database Schema</h1>
						<img style={{width:'100%'}} alt='sys diagram image' src={details.schemaDiagram}/>
					</div> :
					null
				}
			</div>

		</div> : null
		}
		</div>
  )
}

export default ProjectDetails