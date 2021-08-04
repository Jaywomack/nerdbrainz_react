import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-custom-black-1 p-3 sticky top-0 z-50">
        <a href="#home" className="inline-flex items-center p-2 mr-4 ">
          <span className="text-2xl text-white font-bold   tracking-wide">
            {"{ Nerd Brainz }"}
          </span>
        </a>
        <button
          className=" inline-flex p-3  rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <a
              className="lg:inline-flex lg:w-auto w-full px-10 py-2 rounded text-white font-bold items-center justify-center"
              href="#home"
            >
              Home
            </a>
            <a
              className="lg:inline-flex lg:w-auto w-full px-10 py-2 rounded text-gray-400 font-bold items-center justify-center   hover:text-gray-300"
              href="#portfolio"
            >
              Portfolio
            </a>
            <a
              className="lg:inline-flex lg:w-auto w-full px-10 py-2 rounded text-gray-400 font-bold items-center justify-center   hover:text-gray-300"
              href="#technologies"
            >
              Technologies
            </a>
            <a
              className="lg:inline-flex lg:w-auto w-full px-10 py-2 rounded text-gray-400 font-bold items-center justify-center   hover:text-gray-300"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="lg:inline-flex lg:w-auto w-full px-10 py-2 rounded text-gray-400 font-bold items-center justify-center   hover:text-gray-300"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
