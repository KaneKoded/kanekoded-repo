import { FaReact } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" data-link="#home" className="section h-[52ch]">
      <div className="container mt-6 h-full bg-zinc-900/75 rounded-lg overflow-hidden">
        <div className="w-full h-full relative">
          {/**background */}
          <div className="relative w-full h-full flex items-center backdrop-brightness-50">
            <FaReact className="absolute top-[-40vh] right-[-8vw] z-10 text-slate-800/45 font-semibold text-[50rem]" />
          </div>
          {/**foreground */}
          <div className="absolute top-0 h-full z-20 mt-6 md:mt-10 flex flex-col items-start xl:mt-14">
            <h1 className="sm:ml-4 text-gray-100 font-medium leading-tight">
              <span className="block pb-1 text-2xl font-medium text-orange-600 tracking-wide">
                Using React
              </span>
              <span className="block text-3xl sm:text-4xl">
                Activate Navigation
              </span>
              <span className="block text-3xl sm:text-4xl">Item on Scroll</span>
            </h1>

            <h3 className="sm:ml-4 block pt-8 text-orange-600 text-sm font-medium tracking-wide">
              A Simple Demonstration
            </h3>

            <p className="sm:ml-4 my-1 max-w-[400px] text-xs font-[100] text-gray-100 tracking-wider leading-5">
              How to activate the current navigation item in a menu when
              scrolling to its corresponding section.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
