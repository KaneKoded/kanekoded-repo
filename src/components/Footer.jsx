import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24 py-8 bg-zinc-950 min-h-32">
      <div className="container flex flex-col items-center">
        <div
          className="inline-flex gap-3 text-2xl px-4 py-2 rounded-full ring-inset ring-1 ring-zinc-50/[0.02] 
     transition-[transform,background-color] bg-zinc-50/5"
        >
          <a href="#" className="socials">
            <FaFacebook />
          </a>
          <a href="#" className="socials">
            <FaTwitter />
          </a>
          <a href="#" className="socials">
            <FaInstagram />
          </a>
          <a href="#" className="socials">
            <FaBehance />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
