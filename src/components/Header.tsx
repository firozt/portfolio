type Props = {}

const Header = ({}:Props) => {
  const handleDownload = () => {

    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  };

  return (
    <div className='header-content'>
      <h1>
        Ramiz Abdulla
      </h1>
      <p>
        Full Stack Developer
      </p>
      <p>
        Based in London
      </p>
      <button onClick={() => handleDownload()}>Download My CV</button>
    </div>
  )
}

export default Header