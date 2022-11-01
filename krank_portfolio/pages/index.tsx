import type { NextPage } from 'next'
import Layout from '../components/layout';
import Header from '../components/header';
import ProjectCard from '../components/projectCard';

const Home: NextPage = function () {
  return (
    <div className='w-screen h-screen dark:bg-slate-900 -z-10 relative scroll-smooth md:scroll-auto'>
      <div className='w-4/5 h-72 m-auto rounded shadow-sm bg-red-300 p-10 self-center bg-opacity-80 z-10  dark:bg-slate-800 dark:bg-opacity-80 '>
        <h2 className='text-5xl text-white dark:text-slate-300 m-5'>Welcome!</h2>
        <p className='first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left dark:text-slate-400'>
          My name is Kayla Kranzfelder although online I will occasionally go by the moniker Krank. I am an artist and full-stack software engineer currently based out of Florida.
        </p>
        <div className='h-11 bottom-11'>
          <div className="bg-[url('../public/selfPortrait.jpg')] bg-no-repeat bg-cover sticky bottom-72 w-full h-72 overflow-hidden -z-[1] m-auto"/>
          </div>
        </div>
      <div className='first-letter:text-white first-letter:font-bold dark:text-slate-400 first-letter:text-5xl tracking-wide uppercase dark:bg-slate-800 w-4/5 mx-auto mt-24 z-10 text-bold bg-orange-300'>
          <span>Check out some of my</span>
          <span className='text-7xl text-white'> projects</span>
      </div>
      <div className='flex flex-row w-4/5 m-auto justify-center'>
        <ProjectCard cardNum={0}/>
        <ProjectCard cardNum={1}/>
        <ProjectCard cardNum={2}/>
      </div>

      <div className="relative bottom-0 w-4/5 h-1/6 overflow-hidden m-auto">
        <div classname="absolute w-full rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="fill-orange-300 animate-waveSlowest">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"/>
          </svg>
        </div>
        <div classname="absolute w-full rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="fill-red-300 animate-waveSlow">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"/>
          </svg>
        </div>

        <div className="absolute w-full rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="fill-purple-300 animate-wave">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"/>
          </svg>
        </div>

        <div className="absolute w-full">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="fill-blue-300 animate-waveFast">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"/>
        </svg>
        </div>
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Header/>
      {page}
    </Layout>
  );
};

export default Home;
