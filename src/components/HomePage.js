import { Fragment } from 'react';

import HeroSection from './HeroSection';
import About from './About';
import ProfessionalExp from './ProfessionalExp';
import Projects from './Projects';
import Footer from './Footer';
import Education from './Education';

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <ProfessionalExp />
      <Education />
      <Projects />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
