import Head from 'next/head';
import Header from '../components/Coaches/Header';
import Info from '../components/Coaches/Info';
import Testimonials from '../components/Coaches/Testimonials';
// import FeaturedProjects from '../components/Projects/FeaturedProjects';

const Coaches = () => (
  <>
    <Head>
      <title>Coaches | Open Summer of Code</title>
      <script async src="https://platform.twitter.com/widgets.js" />
    </Head>
    <Header />
    <Info />
    <Testimonials />
    {/* <FeaturedProjects divider="bg-lighter-gray" /> */}
  </>
);

export default Coaches;
