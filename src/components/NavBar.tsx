import { useState } from "react";
import Cart from "./Cart";

function App() {
  const [display, setDisplay] = useState(false);
  const toggleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <>
      <nav className="w-full text-[#080708] bg-[#b4b4ba] sticky top-0 z-10 ">
        <div className="flex flex-wrap items-center justify-between p-4">
          <a href="#" className="flex items-center">
            <span className="self-center text-2xl whitespace-nowrap ml-3 font-LilitaOne">
              Waffle Shop
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden focus:outline-none  focus:bg-[#b4b4ba5c] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded mb-1 bg-[#b4b4ba5c] md:bg-transparent md:p-0 hover:text-white active:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  className="block py-2 pl-3 pr-4 rounded mb-1 bg-[#b4b4ba5c] md:bg-transparent md:p-0 hover:text-white active:text-white"
                  aria-current="page"
                >
                  Shop
                </a>
              </li>
              <li>
                {/* <button
                  type="button"
                  className="block py-2 pl-3 pr-4 rounded mb-1 bg-[#b4b4ba5c] md:bg-transparent md:p-0 hover:text-white"
                  aria-current="page"
                  data-te-toggle="cart"
                  data-te-target="#cart"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cart
                </button> */}

                <button
                  // data-collapse-toggle="cart"
                  type="button"
                  className="block py-2 pl-3 pr-4 rounded mb-1 bg-[#b4b4ba5c] md:bg-transparent md:p-0 hover:text-white active:text-white"
                  // aria-controls="cart"
                  // aria-expanded="false"
                  // className=' hover:bg-gray-100 focus:ring-2 focus:ring-gray-200'
                  onClick={() => setDisplay(!display)}
                >
                  <span className="sr-only">Open cart</span>
                  {/* <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg> */}{" "}
                  Cart
                </button>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 pl-3 pr-4 rounded bg-[#b4b4ba5c] md:bg-transparent md:p-0 hover:text-white active:text-white"
                  aria-current="page"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Cart display={display} toggleDisplay={toggleDisplay} />
    </>
  );
}

export default App;
