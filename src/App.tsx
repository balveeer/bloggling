import { useEffect } from "react";
import { getPosts } from "./appwrite/config";
import {getCurrentUser} from "./appwrite/auth";
import { Header, Footer } from "./components/index";
import { Outlet, useLocation } from "react-router-dom";

function ScrollReset() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(()=>{
    getCurrentUser();
    getPosts();
  },[])
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <Header />
      <main className="flex-grow w-full justify-center px-2 md:px-4">
        <ScrollReset />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
