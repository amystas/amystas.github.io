import { useEffect, useState } from 'react';
import { MdMail } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import NavigationList from './NavigationList';

const Navigation = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const stickyNavHandler = () => {
      if (
        (window.innerWidth <= 768 && window.scrollY >= 800) ||
        (window.innerWidth >= 768 && window.scrollY >= 610)
      ) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    };

    window.addEventListener('scroll', stickyNavHandler);
    return () => window.removeEventListener('scroll', stickyNavHandler);
  }, []);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <nav className="relative z-20 pt-3 mb-10">
      <div
        className={`flex items-center justify-between py-1 pl-6 pr-4 w-11/12 bg-white rounded-full mx-auto shadow-xl transition-all duration-300 ${
          stickyNav ? 'fixed left-1/2 -translate-x-1/2 top-4' : ''
        }`}
      >
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center justify-center mx-auto space-x-12 font-semibold text-lg text-gray-800">
          {['home', 'about', 'professional', 'education','projects'].map((item) => (
            <NavigationList key={item} link={`#${item}`} text={item.charAt(0).toUpperCase() + item.slice(1)} />
          ))}

          <a
            href="mailto:godimfon@gmail.com"
            className="relative flex items-center space-x-1 px-5 py-2 text-white bg-gradient-to-r from-rose-400 to-rose-600 rounded-full outline-none transition-transform duration-300 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-rose-500 after:to-rose-700 after:rounded-full after:-z-10 after:transition-transform after:duration-500 hover:from-rose-500 hover:to-rose-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-125 hover:after:opacity-0 focus:-translate-y-[1px]"
          >
            <li>Contact</li>
            <MdMail color="white" />
          </a>
        </ul>

        {/* Hamburger */}
        <div onClick={openModal} className="pr-4 cursor-pointer md:hidden">
          <RxHamburgerMenu size={24} />
        </div>
      </div>

      {/* Mobile Modal Overlay */}
      {showModal && (
        <div
          onClick={openModal}
          className="fixed top-0 left-0 z-10 h-screen w-full bg-black/10 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Mobile Navigation */}
      <div
        className={`fixed top-[86px] right-4 z-20 w-11/12 mx-auto px-4 transition-all duration-300 md:hidden ${
          showModal ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 pt-12 pb-10 bg-white rounded-[35px] shadow-md transition-all duration-300">
          <ul className="flex flex-col space-y-8 text-lg font-medium">
            {['home', 'about', 'professional', 'education', 'projects'].map((item) => (
              <NavigationList
                key={item}
                link={`#${item}`}
                text={item.charAt(0).toUpperCase() + item.slice(1)}
                openModal={openModal}
              />
            ))}
          </ul>
          <a
            href="mailto:a.staszczyk@icloud.com"
            className="relative flex items-center space-x-1 px-5 py-2 text-white bg-gradient-to-r from-rose-400 to-rose-600 rounded-full outline-none transition-transform duration-300 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-rose-500 after:to-rose-700 after:rounded-full after:-z-10 after:transition-transform after:duration-500 hover:from-rose-500 hover:to-rose-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-125 hover:after:opacity-0 focus:-translate-y-[1px]"
          >
            <span>Contact</span>
            <MdMail color="white" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
