import './CommandPromptStyles.css'


type Props = {
	title: string
	height: number,
	width: number,
	contentPadding: number,
	text: string[]
	subtext?: boolean
}

const CommandPromptText = ({title,height,width,contentPadding,text, subtext=false}: Props) => {
  return (
		<div className='cmd-wrapper' style={{maxWidth:width,width:'100vw'}}>
			<div className='cmd-top'>
				<div className='left-group'>
					<div className='logo'>
						<svg width="25" height="25" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M30.6352 0.546387H1.27717C0.57114 0.546387 0.000732422 1.11679 0.000732422 1.82282V31.1809C0.000732422 31.8869 0.57114 32.4573 1.27717 32.4573H30.6352C31.3412 32.4573 31.9117 31.8869 31.9117 31.1809V1.82282C31.9117 1.11679 31.3412 0.546387 30.6352 0.546387ZM16.0001 16.7452L8.34145 23.1672C8.13403 23.3427 7.81891 23.1952 7.81891 22.9239V20.4229C7.81891 20.3312 7.86278 20.2394 7.93458 20.1796L12.3144 16.5018L7.93458 12.8241C7.89792 12.7952 7.86842 12.7581 7.84836 12.716C7.8283 12.6738 7.81822 12.6275 7.81891 12.5808V10.0798C7.81891 9.80853 8.13403 9.66094 8.34145 9.83645L16.0001 16.2545C16.1556 16.3822 16.1556 16.6175 16.0001 16.7452ZM24.0935 22.9239C24.0935 23.0994 23.9579 23.243 23.7943 23.243H16.4149C16.2514 23.243 16.1157 23.0994 16.1157 22.9239V21.0093C16.1157 20.8338 16.2514 20.6902 16.4149 20.6902H23.7943C23.9579 20.6902 24.0935 20.8338 24.0935 21.0093V22.9239Z" fill="#C0C0C0"/>
						</svg>
					</div>
					<h1>{title}</h1>
				</div>
				<div className='box-group' style={{marginRight:contentPadding/2,marginTop:contentPadding/2}}>
					<div className='box' ></div>
					<div className='box'>
						<a style={{height:'100%',width:'100%'}} href='https://github.com/firozt' target='_blank'>
							<svg width="26" height="26" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M19.8777 0.182617C17.3944 0.182617 14.9354 0.683887 12.6411 1.65781C10.3468 2.63172 8.26216 4.05922 6.50619 5.85879C2.95985 9.49318 0.967529 14.4225 0.967529 19.5623C0.967529 28.1281 6.39475 35.3955 13.9021 37.9729C14.8476 38.128 15.1502 37.5272 15.1502 37.004V33.7288C9.91204 34.8916 8.79634 31.1319 8.79634 31.1319C7.92647 28.8839 6.69731 28.2831 6.69731 28.2831C4.97649 27.0816 6.82968 27.1203 6.82968 27.1203C8.7207 27.256 9.72294 29.1164 9.72294 29.1164C11.3681 32.0622 14.1479 31.1901 15.2258 30.725C15.396 29.4653 15.8877 28.6126 16.4171 28.1281C12.2191 27.6436 7.81301 25.9769 7.81301 18.5933C7.81301 16.4422 8.5316 14.7174 9.76076 13.3414C9.57166 12.8569 8.9098 10.8414 9.94986 8.22517C9.94986 8.22517 11.5383 7.70192 15.1502 10.2019C16.6441 9.77555 18.2703 9.56237 19.8777 9.56237C21.4851 9.56237 23.1113 9.77555 24.6052 10.2019C28.2171 7.70192 29.8055 8.22517 29.8055 8.22517C30.8456 10.8414 30.1838 12.8569 29.9946 13.3414C31.2238 14.7174 31.9424 16.4422 31.9424 18.5933C31.9424 25.9963 27.5174 27.6242 23.3004 28.1087C23.9812 28.7095 24.6052 29.8916 24.6052 31.6939V37.004C24.6052 37.5272 24.9078 38.1474 25.8722 37.9729C33.3796 35.3761 38.7879 28.1281 38.7879 19.5623C38.7879 17.0173 38.2988 14.4972 37.3484 12.146C36.3981 9.79475 35.0052 7.65835 33.2492 5.85879C31.4932 4.05922 29.4086 2.63172 27.1143 1.65781C24.82 0.683887 22.361 0.182617 19.8777 0.182617Z" fill="#2A2A2A"/>
							</svg>
						</a>
					</div>
					<div className='box close'>
						<p style={{color:'#333030',fontFamily:'Arial',fontSize:'35px',position:'relative',bottom:'3px'}} >x</p>
					</div>
				</div>
			</div>
			<div className='cmd-content-wrapper' style={{width:width,minHeight:height}}>
				<div className='cmd-content' style={{minHeight:height-contentPadding,width:width-contentPadding}}>
						{
							text.map((item, idx) => {
								return <p style={{maxWidth:width,width:'100vw',height:'fit-content'}} key={idx}>{item}</p>
							})
						}
				</div>
			</div>
			
			{
				subtext &&
				<div className="bio-subtext" >
						<h2>SOFTWARE DEVELOPER</h2>
						<div style={{display:'flex',flexDirection:'row',gap:'3px'}}>
							<h2 style={{marginLeft:'30px'}}>BASED IN LONDON, UK </h2>
							<svg width="25" height="32" viewBox="0 0 41 50" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M20.5 0C9.19693 0 0.0002087 8.9725 0.0002087 19.9875C-0.074103 36.1 19.721 49.46 20.5 50C20.5 50 41.0741 36.1 40.9998 20C40.9998 8.9725 31.8031 0 20.5 0ZM20.5 30C14.8369 30 10.2501 25.525 10.2501 20C10.2501 14.475 14.8369 10 20.5 10C26.1631 10 30.7499 14.475 30.7499 20C30.7499 25.525 26.1631 30 20.5 30Z" fill="#3A3838"/>
							</svg>
						</div>
					</div>
			}
		</div>

		
  )
}

export default CommandPromptText