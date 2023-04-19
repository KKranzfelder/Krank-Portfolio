
const Resume = function ({ closeResume }) {

 return (
  <div className={'absolute h-screen w-screen bg-black bg-opacity-70 z-20'}>
    <div className={'text-white my-1 w-full'}>
      <button onClick={closeResume} className='box-content cursor-pointer bg-red-300 rounded-sm p-0.5 w-6 float-right'>x</button>
    </div>
      <iframe src='/KaylaKranzfelderResume.pdf' className='w-full min-h-full'/>
    </div>
 );
};

export default Resume;