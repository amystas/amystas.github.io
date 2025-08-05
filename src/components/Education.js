import { BsFillCheckCircleFill } from 'react-icons/bs';

const Education = () => {
  return (
<section id="education" className="pt-16 pb-16 bg-gray-50">
  <div className="px-4 mb-12 text-center lg:mb-16">
    <h2>Education</h2>
    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-700 md:text-xl">
      Here you’ll find my educational background, including the studies and courses that helped shape my technical skills, problem-solving mindset, and passion for programming.
    </p>
  </div>

  <div className="flex flex-col gap-6 md:flex-row md:gap-8 px-4 max-w-7xl mx-auto">
    {/* School – 3 parts */}
    <div className="flex-[3] bg-white rounded-2xl shadow-md border p-6 transition-transform hover:scale-[1.01] hover:shadow-lg">
      <h3 className="text-xl font-semibold text-center mb-4">School</h3>
      <div className="flex font-medium text-gray-800 justify-around">
        <div>
          <p className="text-lg">Technikum Informatyczne SCI</p>
          <p>4th grade, programmer</p>
          <p>Szczecin</p>
        </div>
          <span className="text-sm font-normal text-gray-600">Sep 2021 - now</span>
      </div>
    </div>

    {/* Languages – 1 part */}
    <div className="flex-[1] bg-white rounded-2xl shadow-md border p-6 transition-transform hover:scale-[1.01] hover:shadow-lg">
      <h3 className="text-xl font-semibold text-center mb-6">Languages</h3>
      <div className="flex flex-col gap-4 text-center font-medium text-gray-800">
        <div>
          <p className="text-lg">English</p>
          <p className="text-sm text-gray-600">C1 Advanced</p>
        </div>
        <div>
          <p className="text-lg">Polish</p>
          <p className="text-sm text-gray-600">Native</p>
        </div>
        <div>
          <p className="text-lg">Spanish</p>
          <p className="text-sm text-gray-600">A2 Elementary</p>
        </div>
      </div>
    </div>

    {/* Certificates – 1 part */}
    <div className="flex-[1] bg-white rounded-2xl shadow-md border p-6 transition-transform hover:scale-[1.01] hover:shadow-lg">
      <h3 className="text-xl font-semibold text-center mb-4">Certificates</h3>
      <div className="flex flex-col items-center gap-4 text-center text-gray-800">
        <img src="./pcap.png" alt="PCAP Certificate" className="w-24 object-contain" />
        <span>PCAP™ – Certified Associate Python Programmer</span>
      </div>
    </div>
  </div>
</section>

  );
};

export default Education;
