import { useEffect } from "react";
import { getPosts } from "./appwrite/config";
import {getCurrentUser} from "./appwrite/auth";
import { Header, Footer } from "./components/index";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  useEffect(()=>{
    getCurrentUser();
    getPosts();
  },[])
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <Header />
      <main className="flex-grow w-full justify-center px-2 md:px-4">
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
