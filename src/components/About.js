import Skills from './Skills';
import Button from './Button';

const About = () => {
  return (
    <section id="about" className="pt-16 pb-16 lg:pt-20">
      <div className="px-2 mb-12 text-center lg:mb-16">
        <h2>About Me</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find more information about me, what I do, and my
          current skills in terms of programming and technology.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col space-y-12 px-4 sm:px-10 lg:flex-row lg:space-y-0 lg:space-x-16">
        <div className="w-full">
          <h3 className="mb-6">Get to know me!</h3>
          <div className="flex flex-col items-center space-y-4 mb-8 text-lg text-gray-800 lg:mb-10">
            <p className='text-justify'>
              I'm a programmer who loves working with C++ and backend stuff. I enjoy building systems that run smoothly behind the scenes—things like APIs, databases, and performance-focused code. I like solving tricky problems and making sure everything works fast and reliably. I’m always up for learning new tools or digging into a new project. When I’m not coding, you’ll probably find me reading, experimenting with tech ideas, or just figuring out how to make things better and smarter.

            </p>
          </div>
        </div>

        <div className="w-full">
          <h3 className="mb-6">My Skills</h3>
              <div className="grid grid-cols-2 gap-2.5 mb-2.5">
            <Skills text="C++ Qt Framework" />
            <Skills text="Asp .NET EF Core" />
          </div>
          <div className="grid grid-cols-2 gap-2.5 xs:grid-cols-3 sm:grid-cols-4">
            <Skills text="HTML" />
            <Skills text="CSS" />
            <Skills text="Bootstrap" />
            <Skills text="JavaScript" />

            <Skills text="PHP" />
            <Skills text="React" />
            <Skills text="SQL" />
            <Skills text="Git" />
            <Skills text="Laravel" />
            <Skills text="Python" />
            <Skills text="Maizzle" />
            <Skills text="Angular" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
