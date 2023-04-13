import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

const Resume = function (resumeToggle) {

  function exit(e) {
    e.preventDefault();
    resumeToggle();
  }

 return (
  <div className={'h-full w-full bg-black bg-opacity 5 z-20'}>
    <div className={'h-5 w-5 text-white'}>
      <span onClick={exit}>x</span>
    </div>
  </div>
 );
};

export default Resume;