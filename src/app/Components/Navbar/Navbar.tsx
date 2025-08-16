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
		<section>
			<a href='#card'>
				<p>card</p>
			</a>
			<a href='#projects'>
				<p>projects</p>
			</a>
			<a href='#contact'>
				<p>contact</p>
			</a>
		</section>
		<a  className='download-button' href='' onClick={() => handleDownload()}>
			<h1  style={{textDecoration:'underline', fontSize:'16px'}}>Download my CV Here</h1>
		</a>
	</div>
  )
}

export default Navbar