import { useEffect, useState } from "react";
import { getPosts } from "./appwrite/config";
import {getCurrentUser} from "./appwrite/auth";
import { Header, Footer } from "./components/index";
import { Outlet, ScrollRestoration, } from "react-router-dom";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(()=>{

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    getCurrentUser();
    getPosts();
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  },[isOnline])
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <Header />
      {!isOnline && (
        <div className="w-full bg-red-500 text-white text-center p-2">
          You are currently offline. Some features may not be available.
        </div>
      )}
      <main className="flex-grow w-full justify-center px-2 md:px-4">
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
