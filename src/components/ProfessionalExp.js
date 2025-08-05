import { BsFillCheckCircleFill } from 'react-icons/bs';

const ProfessionalExp = () => {
  return (
    <section id="experience" className="pt-16 pb-16 bg-rose-50">
      <div className="px-2 mb-12 text-center lg:mb-16">
        <h2>Professional Experience</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find some professional work I engaged myself in order to
          build my skills and increase my experience level.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 gap-6 px-4 md:grid-cols-2">
        <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg xs:p-6 xs:rounded-3xl">
          <div className="flex flex-col mb-4 font-semibold">
            <div className="flex flex-col justify-between xs:flex-row">
              <span className="text-xl">Sagra Technology Sp. Z.o.o.</span>
              <span className="font-normal">July 2024</span>
            </div>
            <span className="text-lg">Intern</span>
            <span>Szczecin, West Pomerania, Poland</span>
          </div>
          <ul className="flex flex-col space-y-2 mb-4">
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="pink" size="15" />
              </div>
              <span>
                  I was designing a system providing desk reservation in offices named HaveASeat.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="pink" size="15" />
              </div>
              <span>
                Worked mainly on the backend side.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="pink" size="15" />
              </div>
              <span>
                Look up the project <a href='https://github.com/HaveASeat-Sagra'>here</a>
              </span>
            </li>
          </ul>
          <div className="grow shrink" />
          <div className="grid grid-cols-2 gap-1 text-[14.5px] font-semibold xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:flex">
            <span className="flex items-center justify-center px-3 py-0.5 text-rose-500 bg-rose-100 rounded-full">
              Angular
            </span>
            <span className="flex items-center justify-center px-3 py-0.5 text-rose-500 bg-rose-100 rounded-full">
              Typescript
            </span>
            <span className="flex items-center justify-center px-3 py-0.5 text-rose-500 bg-rose-100 rounded-full">
              Asp .NET EF CORE
            </span>
            <span className="flex items-center justify-center px-3 py-0.5 text-rose-500 bg-rose-100 rounded-full">
              C#
            </span>
          </div>
        </div>

        <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg xs:p-6 xs:rounded-3xl">
          <div className="flex flex-col mb-4 font-semibold">
            <div className="flex flex-col justify-between xs:flex-row">
              <span className="text-xl">West Pomeranian University of Technology</span>
              <span className="font-normal">June 2023</span>
            </div>
            <span className="text-lg">Intern</span>
            <span>Szczecin, West Pomerania, Poland</span>
          </div>
          <ul className="flex flex-col space-y-2 mb-4">
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="pink" size="15" />
              </div>
              <span>
                I was analyzing web sites WCAG 
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="pink" size="15" />
              </div>
              <span>
                I was learning colorimetry
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="pink" size="15" />
              </div>
              <span>
                I applied UI/UX enhancements for the astronomical website.
              </span>
            </li>
          </ul>
          <div className="grow shrink" />
          <div className="grid grid-cols-2 gap-1 text-[14.5px] font-semibold xs:flex">
            <span className="flex items-center justify-center px-3 py-0.5 text-rose-500 bg-rose-100 rounded-full">
              CorelDRAW
            </span>
            <span className="flex items-center justify-center px-3 py-0.5 text-rose-500 bg-rose-100 rounded-full">
              i1Profiler
            </span>
            <span className="flex items-center justify-center px-3 py-0.5 text-rose-500 bg-rose-100 rounded-full">
              WCAG Checkers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExp;
