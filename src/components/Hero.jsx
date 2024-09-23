import { FaReact } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" data-link="#home" className="section h-[100vh]">
      <div className="h-full bg-zinc-900/75 rounded-lg">
        <div className="h-full relative">
          <div className="w-full h-full flex items-center backdrop-brightness-50 overflow-hidden">
            <FaReact
              className="absolute top-[-20vh] right-[-7vw] lg:top-[-25vh] z-10 
            text-slate-800/45 font-semibold text-[54rem]"
            />
          </div>

          <div className="absolute top-0 h-full w-full z-20 pt-10 md:pt-0 md:pb-10 px-3 sm:px-10 lg:px-24 flex flex-col gap-y-14 items-start justify-center md:justify-end">
            <div className="mt-0 md:mt-4 font-medium leading-tight">
              <h1 className="mb-2 text-2xl sm:text-3xl text-orange-500">
                Using React
              </h1>
              <h1 className="text-gray-100 text-4xl md:text-5xl">
                Activate Navigation
              </h1>
              <h1 className="text-gray-100 text-4xl md:text-5xl">
                Item on Scroll
              </h1>
            </div>
            <div>
              <h3 className="text-orange-400 text-base md:text-xl font-medium tracking-wide">
                A Simple Demo
              </h3>
              <p className="antialiased my-1 sm:max-w-[580px] pb-10 md:pb-0 text-base md:text-xl font-normal text-gray-100 tracking-wider leading-7">
                Set the current navigation item to active when scrolling to the
                corresponding section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
