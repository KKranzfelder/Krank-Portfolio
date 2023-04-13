import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

const Resume = function ({ closeResume }) {

 return (
  <div className={'h-screen w-screen bg-black bg-opacity-70 z-20'}>
    <div className={'h-5 w-5 text-white'}>
      <span onClick={closeResume}>x</span>
    </div>
  </div>
 );
};

export default Resume;