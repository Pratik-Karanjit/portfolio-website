import React from 'react';

function DownloadButton() {
  const handleDownload = () => {
    // Replace 'your_cv_filename.pdf' with the actual filename of your CV
    const cvUrl = process.env.PUBLIC_URL + '/Resume.pdf';
    
    // Trigger the download by creating an anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = cvUrl;
    downloadLink.download = '/Resume.pdf';
    downloadLink.click();
  };

  return (

    <button style={{ background: "yellow", borderRadius: '7px', padding: '5px 10px', fontWeight: 'bold' }} onClick={handleDownload}>Download CV</button>
  );
}

export default DownloadButton;
