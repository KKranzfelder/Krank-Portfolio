import type { NextPage } from 'next'
import Layout from '../components/layout';
import Header from '../components/header';
import ProjectCard from '../components/projectCard';

const Home: NextPage = function () {
  return (
    <div className='w-screen h-screen dark:bg-slate-900 backdrop-blur-sm -z-10 absolute dark:backdrop-blur-sm'>
      <div className='w-4/5 h-72 m-auto rounded shadow-sm bg-red-300 p-10 self-center bg-opacity-80 z-10  dark:bg-slate-800 dark:bg-opacity-80 '>
        <h2 className='text-5xl text-white dark:text-slate-300 m-5'>Welcome!</h2>
        <p className='first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left dark:text-slate-400'>
          My name is Kayla Kranzfelder although online I will occasionally go by the moniker Krank. I am an artist and full-stack software engineer currently based out of Florida.
        </p>
        <div className='h-11 bottom-11'>
          <div className="bg-[url('../public/selfPortrait.jpg')] bg-no-repeat bg-cover sticky bottom-72 w-full h-72 overflow-hidden -z-[1] m-auto"/>
          </div>
        </div>
      <div className='first-letter:text-white first-letter:font-bold text-slate-400 first-letter:text-5xl tracking-wide uppercase bg-slate-800 w-4/5 mx-auto mt-24 z-10 text-bold'>
          <span>Check out some of my</span>
          <span className='text-7xl text-white'> projects</span>
      </div>
      <div className='flex flex-row w-4/5 m-auto justify-center'>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
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
