import { userData } from "../store/authSlice";
import { useAppSelector } from "../store/hooks";
import { LogoutBtn, PostsContainer } from "../components";
import { selectPosts } from "../store/postSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Profile() {
  const [selected, setSelected] = useState("all");
  const [selectedPosts, setSelectedPosts] = useState([]);
  const navigate = useNavigate();
  let posts: any = useAppSelector(selectPosts);
  const user = useAppSelector(userData);
  useEffect(() => {
    if (user) {
      if (selected == "all")
        setSelectedPosts(
          posts.filter(
            (post: any) =>
              post.saves.includes(user?.$id) || post.userId == user.$id
          )
        );
      if (selected == "created")
        setSelectedPosts(posts.filter((post: any) => post.userId == user.$id));
      if (selected == "saved")
        setSelectedPosts(
          posts.filter((post: any) => post.saves.includes(user?.$id))
        );
    }
  }, [selected]);

  if (!user)
    return (
      <h2 className="text-5xl text-center p-2 text-gray-950 dark:text-white">
        {" "}
        Login to check your posts{" "}
      </h2>
    );
  return (
    <div className="py-4">
      <div className="w-full block md:flex items-center justify-center bg-indigo-200 dark:bg-gray-800 py-2">
        <div className="flex h-full mx-2">
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dark:text-white h-16 aspect-square text-black"
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
        <div className="flex-col justify-center items-center text-gray-800 dark:text-white  rounded-lg w-full">
          <h3 className=" text-start font-light md:text-lg lg:text-lg px-2 p-1 ">
              {user?.name}
          </h3>
          <h3 className="block md:inline-block text-start font-light md:text-lg lg:text-xl px-2 p-1">
              {user?.email}
          </h3>
        </div>
        </div>
        
        <div className="flex items-center justify-around w-full pt-2">
          {user?.emailVerification ? (
            <div className="inline-block mx-2 rounded-full px-4 p-1 text-green-700  bg-green-300 ">
              verified
            </div>
          ) : (
            <div
              onClick={() => navigate("/verify-email")}
              className="inline mx-2 rounded-full px-4 p-1 text-gray-700 bg-gray-400 hover:bg-gray-200 hover:cursor-help "
            >
              unverified
            </div>
          )}
          <LogoutBtn />
        </div>
      </div>
      <div className="w-full flex justify-start gap-4 pt-4 font-semibold">
        <button
          onClick={() => {
            setSelected("all");
          }}
          className={`min-w-20 p-2 px-4 rounded-full text-center hover:bg-indigo-400 hover:dark:bg-gray-300 hover:text-white hover:dark:text-black ${
            selected == "all"
              ? "bg-indigo-500 dark:bg-gray-300 text-white dark:text-black "
              : "bg-indigo-200 dark:bg-gray-900 text-black dark:text-white"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelected("created")}
          className={`min-w-20 p-2 px-4 rounded-full text-center hover:bg-indigo-400 hover:dark:bg-gray-300 hover:text-white hover:dark:text-black ${
            selected == "created"
              ? "bg-indigo-500 dark:bg-gray-300 text-white dark:text-black "
              : "bg-indigo-200 dark:bg-gray-900 text-black dark:text-white"
          }`}
        >
          Created
        </button>
        <button
          onClick={() => setSelected("saved")}
          className={`min-w-20 p-2 px-4 rounded-full text-center hover:bg-indigo-400 hover:dark:bg-gray-300 hover:text-white hover:dark:text-black ${
            selected == "saved"
              ? "bg-indigo-500 dark:bg-gray-300 text-white dark:text-black "
              : "bg-indigo-200 dark:bg-gray-900 text-black dark:text-white"
          }`}
        >
          Saved
        </button>
      </div>
      <PostsContainer
        title={selected + " Posts"}
        posts={selectedPosts}
        save={false}
      />
    </div>
  );
}

export default Profile;
