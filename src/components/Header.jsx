import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a
            href="/"
            className="font-Oswald font-bold text-white text-2xl leading-[1.20rem]"
            alt="KaneKoded"
          >
            <span className="block">
              Ka<span className="text-orange-600">n</span>e
              <span className="material-symbols-rounded text-orange-600 leading-3">
                undo
              </span>
            </span>
            <span className="block">
              Ko<span className="text-orange-600">d</span>ed
            </span>
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar menuOpen={menuOpen} />
        </div>

        <a
          href="#login"
          className="btn primary-btn max-md:hidden md:justify-self-end"
        >
          Login
        </a>
      </div>
    </header>
  );
};

export default Header;
