import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
function Modal({
  open,
  type,
  onClose,
}: {
  open: boolean;
  type: "delete" | "verification" | "authentication";
  onClose: any;
}) {
  if (!open) return <> </>;
  return ReactDOM.createPortal(
    <div
      onClick={(e) => onClose(e)}
      className="fixed left-0 top-0 z-20 w-full h-screen outline-none flex justify-center items-center backdrop-blur-md overflow-hidden"
    >
      <div
        className="relative min-h-48 min-w-48 px-4 w-full sm:h-96 sm:w-96 bg-gray-100 dark:bg-gray-700 border-2 rounded-lg z-20 p-auto py-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={(e) => onClose(e)}
          className={`absolute top-2 right-2 text-gray-500 w-10 h-10 focus:outline-none hover:bg-white hover:dark:bg-gray-800 rounded-lg ${
            open ? "bg-white dark:bg-gray-800" : ""
          }`}
        >
          <div className="block w-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2 *:delay-100 duration-1000">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-gray-800 dark:bg-white transform transition duration-1000 ease-in-out rounded-full 
                    -rotate-45`}
            >
              {" "}
            </span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-gray-800 dark:bg-white transform  transition duration-1000 delay-200 ease-in-out rounded-full rotate-45 `}
            ></span>
          </div>
        </button>
        <h2 className="h-20 w-full sm:text-xl md:text-2xl font-bold text-center ">
          {type == "authentication" ? "Not logged in" : "Verify Email"}
        </h2>
        <p className="w-full text-lg text-gray-700 dark:text-gray-300 text-center">
          {type == "authentication"
            ? "You need to log in first..."
            : "You need to Verify Account First..."}
        </p>
        <div className="w-full h-24 items-center flex justify-center gap-2 ">
          {type == "authentication" ? (
            <>
              <Link to="/login">
                <button className="h-12 px-4 bg-black text-white font-semibold text-center ring-white rounded-lg hover:bg-white hover:text-black hover:border-black border-2">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="h-12 px-4 bg-black text-white font-semibold text-center ring-white rounded-lg hover:bg-white hover:text-black hover:border-black border-2">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <Link to="/verify-email">
              <button className="h-12 px-4 bg-black text-white font-semibold text-center ring-white rounded-lg hover:bg-white hover:text-black hover:border-black border-2">
                Verify Email
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
