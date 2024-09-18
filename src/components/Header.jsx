import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="max-w-screen-2xl w-full mx-auto px-3 sm:px-4 md:px-6 flex justify-between items-center md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1 className="font-Oswald font-medium text-zinc-100 text-2xl leading-4">
          <a href="/" alt="KaneKoded">
            <span className="block">
              Kane
              <span className="material-symbols-rounded text-orange-500 leading-4">
                undo
              </span>
            </span>
            <span className="block">Koded</span>
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
