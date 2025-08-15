'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './ProjectDetails.css'
import SlideButton from '../SlideButton/SlideButton'

type ProjectDetail = {
  sysDiagram?: string
  detailText: string
  schemaDiagram?: string
}

type ExtraDetails = {
	title: string
	subtext: string
	image: string
  } 

type Props = {
	details: ProjectDetail
	backgroundColor?: string
	extraDetail?: ExtraDetails[]
}

const ProjectDetails = ({ details, backgroundColor='inherit', extraDetail }: Props) => {
	const [showDetail, setShowDetail] = useState<boolean>(false);
	const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false);

	const imgStyles: React.CSSProperties = {
		backgroundColor: backgroundColor,
		width: '95%',
		padding: '2.5%'
	}


	return (
		<div style={{width:'100%'}} className='project-detail'> 
			<SlideButton styles={{color:'black', height:'50px',width:'100%',backgroundColor:'hsl(0, 0%, 92%)'}} onClick={() => setShowDetail(!showDetail)} title={showDetail ? 'Hide Technical Details' : 'Show Technical Details'} />

			<motion.div 
				initial={{ height: 0, opacity: 0 }} 
				animate={{ height: showDetail ? 'auto' : 0, opacity: showDetail ? 1 : 0 }} 
				transition={{
					height: { duration: 0.5, ease: showDetail ? "easeInOut" : "easeOut" }, 
					opacity: { duration: 0.2, ease: "easeOut" }
				}} 
				style={{ overflow: 'hidden' }}
			>
				{showDetail && (
					<div style={{ padding: '8px' }}>
						<p style={{ color: '#5F5F5F', fontFamily: 'helvetica' }}>
							{details?.detailText}
						</p>
						<div className='detail-container' style={{ display: 'flex', gap: '5px', marginBottom: '.5rem' }}>
							{details?.sysDiagram && (
								<div style={{ flex: '1' }}>
									<h1 style={{ fontSize: '20px', textAlign: 'center', margin: '1rem' }}>System Architecture</h1>
									{
										!isImgLoaded ?
										<div style={{height:'400px'}} ></div>:
										null
									}
									<a style={{display:'block',width:'100%'}} target='_blank'  href={'https://ramizabdulla.me'+details.sysDiagram}>
										<img onLoad={() => setIsImgLoaded(true)} style={imgStyles} alt='sys diagram image' src={details.sysDiagram} />
									</a>

								</div>
							)}
							{details?.schemaDiagram && (
								<div style={{ flex: '1' }}>
									<h1 style={{ fontSize: '20px', textAlign: 'center', margin: '1rem' }}>Relational Database Schema</h1>
									{
										!isImgLoaded ?
										<div style={{height:'400px'}} ></div>:
										null
									}
									<a style={{display:'block',width:'100%'}} target='_blank'  href={'https://ramizabdulla.me'+details.schemaDiagram}>
										<img onLoad={() => setIsImgLoaded(true)} style={imgStyles} alt='sys diagram image' src={details.schemaDiagram} />
									</a>
								</div>
							)}
						</div>
					</div>
				)}
				{
					extraDetail?.map((item) => {
						return(<>
							<div style={{ padding: '8px' }}>
								<h1 style={{ fontSize: '20px', textAlign: 'center', margin: '1rem' }}>
									{item.title}
								</h1>
								<p style={{ color: '#5F5F5F', fontFamily: 'helvetica' }}>
									{item.subtext}
								</p>
								<a style={{display:'block',width:'100%'}} target='_blank'  href={'https://ramizabdulla.me'+item.image}>
									<img style={{width:'95%',padding:'2.5%'}} alt='extra image' src={item.image} />
								</a>
							</div>
						</>)
					})
				}
			</motion.div>
		</div>
	)
}

export default ProjectDetails
