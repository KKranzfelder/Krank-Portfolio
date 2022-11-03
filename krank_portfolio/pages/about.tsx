import Layout from "../components/layout";
import Header from '../components/header';
import type {NextPage} from 'next';
import developer from "../public/developerPhoto.png";
import Image from "next/image";

const AboutMe = function () {
  return (
    <div className="h-screen w-screen flex flex-col pt-5 dark:bg-slate-900 justify-start my-8">
      <div className="h-min w-4/5 bg-blue-300 bg-opacity-80 dark:bg-slate-800 rounded-lg p-3 min-w-min mx-auto">
        <div id="selfPortrait" className="w-52 h-52
         rounded-full overflow-hidden relative bottom-5 right-5 float-left">
          <Image src={developer} alt="Black and white image of young adult woman with dark brown eyes and wavy dirty blonde hair, smiling."/>
        </div>
        <p className='first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left dark:text-slate-400'>
          Born and raised on the east coast of Florida, Kayla grew up around water and rockets. Encouraged by her family, she loved reading, writing, and creating art. Inspired by interactive storytelling she pursued an education in Game Design at the University of Central Florida where she also discovered her interest in coding. After working professionally as caricature artist and illustrator for over four years she now looks to combine her knowledge of art and design with the technical capabilities of software engineering.
        </p>
      </div>
      <div className="h-fit w-2/5 min-w-min mx-auto my-10 bg-orange-300 rounded-md opacity-80">
        <h3 className="first-letter:text-7xl font-bold text-2xl">Considering hiring me?</h3>
        <div className="float-right">
        <p className="first-letter:text-7xltext-white font-bold text-xl inline-block">Check out my </p>
      <span className="font-extrabold text-white text-7xl cursor-pointer"> resume.</span>
      </div>
      </div>
    </div>
  )
};

AboutMe.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Header />
      {page}
    </Layout>
  );
};

export default AboutMe;