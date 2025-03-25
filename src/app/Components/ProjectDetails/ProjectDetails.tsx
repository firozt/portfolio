'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import '../../globals.css'

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

	const imgStyles: React.CSSProperties = {
		backgroundColor: backgroundColor,
		width: '95%',
		padding: '2.5%'
	}

	const buttonClick = () => {
		setShowDetail(!showDetail);
	}

	return (
		<div> 
			<div 
				onClick={buttonClick} 
				style={{
					background: 'black', 
					width: '100%', 
					height: '50px', 
					cursor: 'pointer', 
					display: 'flex', 
					alignItems: 'center', 
					justifyContent: 'center'
				}} 
				className='detail-button'
			>
				<p style={{ fontFamily: 'helvetica', color: 'white' }}>
					{showDetail ? 'Hide Details' : 'Show Details'}
				</p>
			</div>

			<motion.div 
				initial={{ height: 0, opacity: 0 }} 
				animate={{ height: showDetail ? 'auto' : 0, opacity: showDetail ? 1 : 0 }} 
				transition={{
					height: { duration: 0.5, ease: showDetail ? "easeInOut" : "easeOut" }, 
					opacity: { duration: 0.3, ease: "easeOut" }
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
									<img style={imgStyles} alt='sys diagram image' src={details.sysDiagram} />
								</div>
							)}
							{details?.schemaDiagram && (
								<div style={{ flex: '1' }}>
									<h1 style={{ fontSize: '20px', textAlign: 'center', margin: '1rem' }}>Relational Database Schema</h1>
									<img style={imgStyles} alt='schema diagram image' src={details.schemaDiagram} />
								</div>
							)}
						</div>
					</div>
				)}
				{
					extraDetail?.map((item,idx) => {
						return(<>
							<div style={{ padding: '8px' }}>
								<h1 style={{ fontSize: '20px', textAlign: 'center', margin: '1rem' }}>
									{item.title}
								</h1>
								<p style={{ color: '#5F5F5F', fontFamily: 'helvetica' }}>
									{item.subtext}
								</p>
								<img style={{width:'95%',padding:'2.5%'}} alt='extra image' src={item.image} />
							</div>
						</>)
					})
				}
			</motion.div>
		</div>
	)
}

export default ProjectDetails
