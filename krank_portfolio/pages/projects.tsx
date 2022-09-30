import Layout from '../components/layout';
import Header from '../components/header';
import type {NextPage} from 'next';

const Projects: NextPage = function () {
  return (
    <div className='px-20'>
      <span>Projects will live here.</span>
    </div>
  );
};

Projects.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Header />
      {page}
    </Layout>
  );
};

export default Projects;