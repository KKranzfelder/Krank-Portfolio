import type { NextPage } from 'next'
import Layout from '../components/layout';
import Header from '../components/header';
import ProjectCard from '../components/projectCard';
import AnimationBlock from '../components/animationBlock';

const Home: NextPage = function () {
  return (
    <div className='w-100 h-100 dark:bg-slate-900 -z-10 relative scroll-smooth md:scroll-auto my-8 '>
      <div className='w-4/5 m-auto bg-[url("../public/selfPortrait.jpg")] bg-fixed bg-center-top bg-no-repeat bg-auto'>
      <div className='w-full h-72 m-auto rounded shadow-sm bg-red-300 p-10 self-center bg-opacity-80 dark:bg-slate-800 dark:bg-opacity-80 backdrop-blur-md'>
        <h2 className='text-5xl text-white dark:text-slate-300 m-5'>Welcome!</h2>
        <p className='first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left dark:text-slate-400'>
          My name is Kayla Kranzfelder although online I will occasionally go by the moniker Krank. I am an artist and full-stack software engineer currently based out of Florida.
        </p>
        </div>
      <div className='first-letter:text-white first-letter:font-bold dark:text-slate-400 first-letter:text-5xl tracking-wide uppercase dark:bg-slate-800 w-4/5 mx-auto mt-24 z-10 text-bold bg-orange-300'>
          <span>Check out some of my</span>
          <span className='text-7xl text-white'> projects</span>
      </div>
      <div className='flex flex-row w-4/5 m-auto justify-center backdrop-blur-md'>
        {
          Array.from(Array(4)).map((item, index) =>
            (<ProjectCard key={`card${index}`} cardNum={index}/>))
        }
        {/* <ProjectCard cardNum={0}/>
        <ProjectCard cardNum={1}/>
        <ProjectCard cardNum={2}/>
        <ProjectCard cardNum={3}/> */}
      </div>
      <div className='backdrop-blur-md bg-white/25'>
        <AnimationBlock/>
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
