'use client'
import React from 'react'


const Navbar = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  };

  return (
    <div className='navbar'>
			<div style={{marginLeft: '1.2rem'}} className='logo'>
				<svg width="40" height="40" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M56.7 0V4.05H64.8V8.1H68.85V12.15H72.9V16.2H76.95V24.3H81V56.7H76.95V64.8H72.9V68.85H68.85V72.9H64.8V76.95H56.7V81H24.3V76.95H16.2V72.9H12.15V68.85H8.1V64.8H4.05V56.7H0V24.3H4.05V16.2H8.1V12.15H12.15V8.1H16.2V4.05H24.3V0H56.7ZM28.35 20.25V60.75H36.45V44.55H40.5V52.65H44.55V60.75H52.65V48.6H48.6V40.5H52.65V24.3H48.6V20.25H28.35ZM36.45 28.35H44.55V36.45H36.45V28.35Z" fill="#F8F8F8"/>
				</svg>
			</div>
			<a className='nav-item' href='#bio'>
				<h1>ABOUT</h1>
			</a>
			<div id='line'></div>
			<a  className='nav-item' href='#projects'>
				<h1>PROJECTS</h1>
			</a>
			<div id='line'></div>
			<a  className='nav-item' href='#contact'>
				<h1>CONTACT</h1>
			</a>
			<a  className='download-button' href='' onClick={() => handleDownload()}>
				<h1  style={{textDecoration:'underline', fontSize:'16px', position:'absolute', right:'15px', top:'15px'}}>Download my CV Here</h1>
			</a>
		</div>
  )
}

export default Navbar