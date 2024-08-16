import React, { useState, useEffect } from 'react';
import { InstallIcon, OpenIcon } from './icons';
import Load from './Load';
const InstallBtn: React.FC = () => {
  const [load, setLoad] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = () => {
    setLoad(true);
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
          setIsInstalled(true);
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
      });
    } else if (isInstalled) {
      // Attempt to open the installed app
      const appUrl = window.location.origin; // Or your specific app URL
      window.location.href = appUrl;
      
      // Inform the user how to open the app if the above doesn't work
      alert('To open the app, please check your device\'s home screen or app launcher.');
    }
    setLoad(false);
  };
  return (
    <button onClick={handleInstallClick} disabled={!deferredPrompt}
    className={`min-w-32 text-center inline-block hover:drop-shadow-lg px-6 py-2 duration-200 text-green-500 hover:text-white  hover:dark:bg-green-600 hover:bg-green-600  rounded-xl hover:rounded-s-xl ${load?" bg-green-600":"bg-white"} `}
  >{load?<Load/>:(isInstalled?"Open":"Install")}{!load && isInstalled?<OpenIcon className='w-6 h-6 inline ml-2' />:<InstallIcon className='w-6 h-6 inline ml-2' />}
    
  </button>
  )
}

export default InstallBtn;