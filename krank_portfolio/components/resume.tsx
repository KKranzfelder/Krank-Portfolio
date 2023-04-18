import { Document, Page } from 'react-pdf';
import { useState } from 'react';

const Resume = function ({ closeResume }) {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
  }

 return (
  <div className={'absolute h-screen w-screen bg-black bg-opacity-70 z-20'}>
    <div className={'h-5 w-5 text-white'}>
      <span onClick={closeResume} className='cursor-pointer'>x</span>
      <Document file="../assets/KaylaKranzfelderResume_11-22.pdf"
      >
          <Page pageNumber={pageNumber} />
        </Document>
    </div>
  </div>
 );
};

export default Resume;