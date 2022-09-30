const Logo = function () {
  return (
    <div className='block-inline basis-1/8 text-5xl text-white m-5'>
      <div className='inline float-left'>
        <div className='border-transparent border-t-red-300 border-t-[21px] border-l-0 border-r-[21px] border-b-0 w-0 h-0'/>
        <div className='border-transparent border-b-orange-300 border-b-[21px] border-l-0 border-r-[21px] border-t-0 w-0 h-0' />
      </div>
        <span>ran</span>
        <div className='inline float-right'>
          <div className=' border-transparent border-t-purple-300 border-t-[21px] border-r-0 border-l-[21px] border-b-0 w-0 h-0' />
          <div className=' border-transparent border-b-blue-300 border-b-[21px] border-r-0 border-l-[21px] border-t-0 w-0 h-0'/>
      </div>
    </div>
  );
};

export default Logo;
