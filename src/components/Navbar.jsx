import { useEffect, useRef } from "react";

const Navbar = ({ menuOpen }) => {
  const activeLink = useRef();

  useEffect(() => {
    window.addEventListener("scroll", activeOnScroll);
    return () => window.removeEventListener("scroll", activeOnScroll);
  }, []);

  const currentActiveLink = (el) => {
    activeLink.current?.classList.remove("active");
    el.classList.add("active");
    activeLink.current = el;
  };

  const getActiveDataLink = () => {
    const sections = document.querySelectorAll("section");
    let activeDataLink = "";

    sections.forEach((section) => {
      if (scrollY >= section.offsetTop - window.innerHeight / 2) {
        activeDataLink = section.getAttribute("data-link");
      }
    });

    return document.querySelector(`a.nav-link[href="${activeDataLink}"]`);
  };

  const activeOnScroll = () => {
    const navLink = getActiveDataLink();
    currentActiveLink(navLink);
  };

  const clickHandler = (event) => {
    currentActiveLink(event.target);
    menuOpen && document.getElementById("menuBtn").click();
  };

  const navItems = [
    {
      text: "Home",
      link: "#home",
      className: "nav-link active",
      ref: activeLink,
    },
    {
      text: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      text: "Services",
      link: "#services",
      className: "nav-link",
    },
    {
      text: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      text: "Contact",
      link: "#contact",
      className: "nav-link",
    },
  ];

  return (
    <nav className={"navbar " + (menuOpen ? "active" : "")}>
      {navItems.map(({ text, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={clickHandler}
        >
          {text}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
