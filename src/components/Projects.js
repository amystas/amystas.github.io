import { ButtonSmall } from './Button';

const Projects = () => {
  return (
    <section id="projects" className="pt-16 pb-16 bg-rose-50">
      <div className="px-2 mb-12 text-center md:mb-16">
        <h2>Projects</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find some of the personal projects that I created from
          scratch based on my current skillset. To find out more, click on Github.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 gap-y-14 px-4 md:gap-y-20">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0 md:gap-x-14">
<div className="flex items-center justify-center bg-white/50 rounded-xl overflow-hidden aspect-video">
  <img
    src="./pastquiz.png"
    alt="PastQuiz"
    className="object-cover w-full h-full rounded-xl shadow-md"
  />
</div>

          <div className="flex flex-col">
            <h3 className="mb-2">PastQuiz</h3>
            <p className="mb-4 text-gray-800 md:text-lg text-justify">
                At Hackathon 2024, we built a historical quiz app that challenges users with questions from various eras and regions. Designed for both fun and learning, it features dynamic scoring, random question generation, and a sleek UI. The project combines engaging UX with educational value, making history interactive and accessible for all ages.
            </p>
            <div className="grid grid-cols-2 gap-1 mb-4 text-[14.5px] font-semibold xs:flex">
              <span className="flex items-center justify-center px-3 py-0.5 text-rose-500 bg-rose-100 rounded-full">
                Laravel
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-rose-500 bg-rose-100 rounded-full">
                React
              </span>
            </div>
            <div className="flex flex-col space-y-2 xs:flex-row xs:space-x-2 xs:space-y-0 mt-6">
              <ButtonSmall link="https://github.com/Hackathon-SCI-2024/LaravelProject/tree/main/ante-finem" text="Github" />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0 md:gap-x-14">
          <div className="flex flex-col">
            <h3 className="mb-2">Weather App</h3>
            <p className="mb-4 text-gray-800 md:text-lg">
              I developed a weather app that provides multi-day forecasts, including temperature, wind direction, and humidity. With a clean interface and real-time data, it helps users stay informed and plan ahead easily. The app focuses on simplicity, accuracy, and user experience, offering essential weather details in a visually intuitive format.
            </p>
            <div className="grid grid-cols-2 gap-1 mb-4 text-[14.5px] font-semibold xs:flex">
              <span className="flex items-center justify-center px-3 py-0.5 text-rose-500 bg-rose-100 rounded-full">
                Vue.js
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-rose-500 bg-rose-100 rounded-full">
                CSS
              </span>
            </div>
            <div className="flex flex-col space-y-2 xs:flex-row xs:space-x-2 xs:space-y-0 mt-6">
              <ButtonSmall
                link="https://github.com/amystas/VueWeather"
                text="Github"
              />
            </div>
          </div>
<div className="flex items-center justify-center bg-white/50 rounded-xl overflow-hidden aspect-video">
  <img
    src="./weatherApp.png"
    alt="Weather App"
    className="object-cover w-full h-full rounded-xl shadow-md"
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
