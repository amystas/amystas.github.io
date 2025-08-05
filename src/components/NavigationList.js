const NavigationList = ({ link, text, openModal }) => {
  return (
    <a
      onClick={openModal}
      href={link}
      className="transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-rose-400 to-rose-700 outline-rose-700"
    >
      <li>{text}</li>
    </a>
  );
};

export default NavigationList;
