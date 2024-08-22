import { Logo, LogoutBtn, NavItemsType,InstallBtn } from "./index.js";
import { HomeIcon, MySavesIcon, MyPostsIcon, AddPostIcon, LightIcon, DarkIcon, ProfileIcon, LoginIcon, SignupIcon} from "./icons.js";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
const windowDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
function Header() {
  const [theme, setTheme] = useState<boolean | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [open, setOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const authStatus = useSelector(
    (state: { auth: { status: boolean } }) => state.auth.status
  );
  const navigate = useNavigate();
  const html: any = document.querySelector("html");

  const navItems: NavItemsType[] = [
    {
      name: "Home",
      slug: "/",
      active: true,
      icon:HomeIcon,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
      icon:LoginIcon,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
      icon:SignupIcon,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
      icon:MyPostsIcon,
    },
    {
      name: "Saved Posts",
      slug: "/my-saved",
      active: authStatus,
      icon:MySavesIcon,
    },
    {
      name: "Create Post",
      slug: "/add-post",
      active: authStatus,
      icon:AddPostIcon,
    }
  ];
  if (windowDarkTheme && theme === null) {
    setTheme(false);
  }
  if(!windowDarkTheme && theme === null){
    setTheme(true)
  }
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerHeight = headerRef.current?.offsetHeight || 0;

      setIsScrolled(currentScrollY <= headerHeight);
      setIsHidden(currentScrollY > prevScrollY && currentScrollY > headerHeight);

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    transform: `translateY(${isHidden ? '-100%' : '0'})`,
    transition: 'transform 0.3s ease-in-out',
  };
  useEffect(() => {
    html.classList.remove("light", "dark");
    theme ? html.classList.add("light") : html.classList.add("dark");
  }, [theme]);

  open
    ? html?.classList.add("overflow-hidden")
    : html?.classList.remove("overflow-hidden");

  return (
    <>
      <header
      ref={headerRef}
      style={headerStyle}
        className={`sticky top-0 z-50 ${
          isScrolled ? "h-20" : "h-24"
        } transition-all duration-300 w-full px-4 shadow-md backdrop-blur-[.625rem] bg-gray-50/50 dark:bg-gray-800/50`}
      >
        <nav className="w-full h-full flex justify-between content-between">
          <div className="min-w-1/5 flex justify-start items-center duration-300">
            <Link to="/" onClick={() => setOpen(false)}>
            <Logo width="header" />
            </Link>
          </div>
          <ul className="hidden md:flex justify-end items-center gap-2 w-auto ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <NavLink
                    to={item.slug}
                    className={({ isActive }) =>
                      `mx-4 py-2 ${
                        isActive
                          ? "border-b-2 cursor-default text-black"
                          : "text-black hover:opacity-70"
                      } dark:text-white border-black dark:border-white dark:ring-gray-300 font-medium `
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}
            <li>
              <button
                className="relative group rounded-full hover:bg-white/10 p-2"
                onClick={() => setTheme(!theme)}
              >
                {theme ? (
                  <LightIcon  className="w-8 h-8 text-black hover:text-black" />
                ) : (
                  <DarkIcon className="w-8 h-8 dark:text-gray-100 dark:group-hover:text-gray-300" />
                )}
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate(authStatus?"/profile":"/login")}
                className="group relative rounded-full p-2 hover:bg-white/10"
              >
                <ProfileIcon className="dark:text-white w-8 h-8 text-black" />
              </button>
            </li>
          </ul>
          <div className="flex md:hidden justify-end items-center ">
            <button
              className={`text-gray-500 w-10 h-10 relative focus:outline-none hover:bg-white  hover:dark:bg-gray-800 rounded-lg ${
                open ? "bg-white dark:bg-gray-800" : ""
              }`}
              onClick={() => setOpen(!open)}
            >
              <div className="block w-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2 *:delay-100 duration-1000">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-gray-800 dark:bg-white transform transition duration-1000 ease-in-out rounded-full ${
                    open ? "-rotate-45" : "-translate-y-1.5"
                  }`}
                >
                  {" "}
                </span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-gray-800 dark:bg-white transform transition duration-500 ease-in-out rounded-full ${
                    open ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-gray-800 dark:bg-white transform  transition duration-1000 delay-200 ease-in-out rounded-full ${
                    open ? "rotate-45 " : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </nav>
      </header>
      <div
        onClick={() => setOpen(!open)}
        className={`w-full md:hidden fixed z-50 right-0 h-screen overflow-x-hidden transition-all duration-300 ease-in   ${
          isScrolled ? "top-20" : "top-24"
        } ${open ? "translate-x-0" : "translate-x-1/2 scale-x-0 "}`}
      >
        <nav className={`w-2/3 sm:w-1/2 h-full pr-4 z-60 bg-gray-50/50 dark:bg-gray-800/50 text-xl font-semibold shadow-md backdrop-blur-[.625rem] ml-auto`} onClick={(e)=>{e.preventDefault(),e.stopPropagation()}}>
          <ul className="flex flex-col justify-start items-start dark:*:text-white *:ms-2 *:py-4 mr-auto w-full *:truncate *:border-b-2 *:border-indigo-400 *:dark:border-gray-500/50 *:box-border hover:*:bg-indigo-200 hover:*:dark:bg-gray-700/80">
            {navItems.map((item) =>
              item.active ? (
                <NavLink
                  onClick={() => setOpen(!open)}
                  to={item.slug}
                  key={item.name}
                  className={({ isActive }) =>
                    `w-full p-2 text-end duration-300 ring-0 ring-black border-0 border-black dark:ring-gray-300 font-semibold text-black hover:bg-gray-400 hover:dark:bg-gray-700/80 ${
                      isActive
                        ? "bg-indigo-200 dark:bg-gray-700/80"
                        : "opacity-70"
                    }`
                  }
                >
                  {item.name} 
                  {item.icon && <item.icon className='w-8 h-8 ml-2 inline dark:fill-white'/>}
                </NavLink>
              ) : null
            )}
            <button
              onClick={() => {
                setOpen(!open), setTheme(!theme);
              }}
              className={`w-full p-2 text-end duration-300 ring-0 ring-black border-0 border-black dark:ring-gray-300 font-semibold text-black opacity-70`}
            >
              {theme ? "Dark" : "Light"} Theme 
              {theme? <LightIcon className="inline ml-2 w-8 h-8 text-black hover:text-black" /> :<DarkIcon className="inline ml-2 w-8 h-8 dark:text-gray-100 dark:group-hover:text-gray-300" />}
            </button>
            <NavLink
              to={authStatus?"/profile":"/login"}
              onClick={() => setOpen(!open)}
              className={({ isActive }) =>
                `w-full p-2 text-end duration-300 ring-0 ring-black border-0 border-black dark:ring-gray-300 font-semibold text-black hover:bg-gray-400 hover:dark:bg-gray-700/80 ${
                  isActive ? "bg-gray-400 dark:bg-gray-700/80" : "opacity-70"
                }`
              }
            >
              Profile <ProfileIcon className="dark:text-white ml-2 w-8 h-8 text-black inline" />
            </NavLink>
            {authStatus && (
              <span className="w-full ps-auto text-right border-transparent">
                <LogoutBtn className="ms-auto" />
              </span>
            )}
              <span className="w-full ps-auto text-right border-transparent">
            <InstallBtn/></span>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
