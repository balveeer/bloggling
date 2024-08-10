import { Logo, LogoutBtn, NavItemsType } from "./index.js";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
    },
    {
      name: "Saved Posts",
      slug: "/my-saved",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-black hover:text-black"
                    role="img"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text  dark:text-gray-100 dark:group-hover:text-gray-300"
                    role="img"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    ></path>
                  </svg>
                )}
                <span className="absolute rounded-full top-full left-1/2 -translate-x-1/2 ring-1 text-black dark:text-white ring-black dark:ring-white text-xs w-max mt-2 px-4 py-1 opacity-0 transition-opacity delay-200 group-hover:opacity-80 font-semibold">
                  {!theme ? "Light" : "Dark"} Theme
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/profile")}
                className="group relative rounded-full p-2 hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dark:text-white w-6 h-6 text-black"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="40"
                  />
                  <path
                    d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="40"
                  />
                </svg>
                <span className="absolute rounded-full top-full left-1/2 -translate-x-1/2 ring-1 text-black dark:text-white ring-black dark:ring-white text-xs w-max mt-2 px-4 py-1 opacity-0 transition-opacity delay-200 group-hover:opacity-80 font-semibold">
                  Profile
                </span>
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
      {/* <div className={`w-full ${isScrolled ? "h-20" : "h-24"}`}></div> */}
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
            </button>
            <NavLink
              to="/profile"
              onClick={() => setOpen(!open)}
              className={({ isActive }) =>
                `w-full p-2 text-end duration-300 ring-0 ring-black border-0 border-black dark:ring-gray-300 font-semibold text-black hover:bg-gray-400 hover:dark:bg-gray-700/80 ${
                  isActive ? "bg-gray-400 dark:bg-gray-700/80" : "opacity-70"
                }`
              }
            >
              Profile
            </NavLink>
            {authStatus && (
              <span className="w-full ps-auto text-right border-transparent">
                <LogoutBtn className="ms-auto" />
              </span>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
