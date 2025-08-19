'use client'
import React from 'react'

interface Props {
	showLogo?: boolean
}

const Navbar = ({showLogo=false}: Props) => {
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
		{
			showLogo && <h1 id='logo'>RA</h1>
		}
		<section>
			<a href='#card'>
				<p>card</p>
			</a>
			<a href='#whoami'>
				<p>whoami</p>
			</a>
			<a href='#projects'>
				<p>projects</p>
			</a>
			<a href='#skills'>
				<p>skills</p>
			</a>
			<a href='#contact'>
				<p>contact</p>
			</a>
		</section>
		<a  className='download-button' href='' onClick={() => handleDownload()}>
			<h1  style={{textDecoration:'underline', fontSize:'16px'}}>download cv</h1>
		</a>
	</div>
  )
}

export default Navbar