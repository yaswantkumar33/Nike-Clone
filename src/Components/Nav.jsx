import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
const Nav = () => {
  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container animate-fade-down animate-once animate-duration-[1000ms] animate-ease-linear">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item, index) => {
              return (
                <li key={item.label}>
                  <button class="btn group flex items-center bg-transparent p-2 px-6 text-xl  tracking-widest">
                    <span class="relative pr-4 pb-1  after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-coral-red after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                      <a
                        href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-gray"
                      >
                        {item.label}
                      </a>
                    </span>
                    {/* <svg
          viewBox="0 0 46 16"
          height="10"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
          id="arrow-horizontal"
          class="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-white"
        >
          <path
            transform="translate(30)"
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            data-name="Path 10"
            id="Path_10"
          ></path>
        </svg> */}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamber" width={25} height={25} />
          </div>
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <a href="">Signup</a>
            <span>/</span>
            <a href="">Explore Now </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
