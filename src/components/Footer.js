import { BsLinkedin, BsTwitter, BsGithub, BsFacebook } from 'react-icons/bs';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="container mx-auto max-w-7xl pt-12 pb-8 px-4 text-gray-800 lg:pt-16 md:px-10 lg-pt-20">
      <div className="flex flex-col-reverse items-start justify-between space-y-reverse space-y-12 mb-10 sm:flex-row sm:space-y-0">
        <div>
          <h4 className="mb-4 text-2xl font-bold uppercase">Amelia Staszczyk</h4>
          <p className="max-w-lg">
            Software Developer
          </p>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <h4 className="mb-4 text-2xl font-bold uppercase">Social</h4>
          <div className="flex space-x-4">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/amelia.staszczyk/"
              className="inline-block transition-all hover:scale-110"
            >
              <BsFacebook size={24} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/amystas"
              className="inline-block transition-all hover:scale-110"
            >
              <BsGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      <hr />
    </footer>
  );
};

export default Footer;
