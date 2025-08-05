import { Fragment } from 'react';
import { BsGithub, BsFacebook } from 'react-icons/bs';

import Navigation from './Navigation';
import Button from './Button';

const HeroSection = () => {
  return (
    <section id="home">
      <header className="relative px-4 pb-16 bg-rose-50">
        <Navigation />
        <div className="container mx-auto md:py-10 lg:px-10 xl:px-24">
          <div className="flex flex-col-reverse items-center justify-between space-y-reverse space-y-10 md:flex-row md:space-x-4 md:space-y-0 lg:ml-8 xl:space-x-14 xl:ml-20">
            <div className="w-11/12 text-center bg-rose-200 shadow-[inset_0_0_50px_50px_#fff1f2]">
              <h1 className="mb-3 text-3xl text-gray-800 font-bold uppercase sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
                Hi, I'm Amelia Staszczyk
              </h1>
              <p className="mb-8 max-w-xl flex text-lg text-center mx-auto text-gray-800 sm:text-xl md:text-lg lg:text-xl lg:mb-10">
                A beginner software engineer focused mainly on backend development and desktop aplications
              </p>
              <div>
                <Button link="#projects" text="Projects" />
              </div>
            </div>

            <div className="w-3/4 border-1 border-rose-200 rounded-lg shadow-[inset_0_0_50px_50px_#fdf2e9] sm:w-3/5 sm:ml-6 md:w-1/2">
              <div className="bg-rose-200 rounded-lg">
                <img src="./me.png" alt="Mfon" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="hidden absolute top-1/2 flex-col space-y-4 -translate-y-1/2 px-2 py-4 bg-white rounded-full shadow-2xl sm:flex md:hidden lg:flex">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/amelia.staszczyk/"
          className="p-3 inline-block rounded outline-rose-700 hover:bg-rose-100"
        >
          <BsFacebook size={28} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/amystas"
          className="p-3 inline-block rounded outline-rose-700 hover:bg-rose-100"
        >
          <BsGithub size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
