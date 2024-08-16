import React, { useState, useEffect } from 'react';
import { InstallIcon, OpenIcon } from './icons';
import Load from './Load';
interface RelatedApplication {
  platform: string;
  url: string;
}

const InstallBtn: React.FC = () => {
  const [load, setLoad] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);

  useEffect(() => {
    const checkInstallation = async () => {
      if ('getInstalledRelatedApps' in navigator) {
        try {
          const relatedApps = await (navigator as any).getInstalledRelatedApps();
          const installed = relatedApps.some((app: RelatedApplication) => 
            app.platform === 'webapp' && app.url === 'https://example.com/manifest.json'
          );
          setIsInstalled(installed);
        } catch (error) {
          console.error('Error checking installation:', error);
        }
      } else {
        // Fallback for browsers that don't support getInstalledRelatedApps
        setIsInstalled(
          window.matchMedia('(display-mode: standalone)').matches ||
          (window.navigator as any).standalone === true
        );
      }
    };

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    checkInstallation();
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
          setIsInstalled(true);
        } else {
          console.log('User dismissed the install prompt');
        }
      } catch (error) {
        console.error('Error in install prompt:', error);
      } finally {
        setDeferredPrompt(null);
      }
    } else if (isInstalled) {
      // Try to open the app
      window.location.href = window.location.origin;
      
      // Fallback message
      setTimeout(() => {
        alert('If the app didn\'t open, please check your device\'s home screen or app launcher to open it manually.');
      }, 1000);
    }
  };

  return (
    <button onClick={handleInstallClick} disabled={!deferredPrompt}
    className={`min-w-32 text-center inline-block hover:drop-shadow-lg px-6 py-2 duration-200 text-green-500 hover:text-white  hover:dark:bg-green-600 hover:bg-green-600  rounded-xl hover:rounded-s-xl ${load?" bg-green-600":"bg-white"} `}
  >{load?<Load/>:(isInstalled?"Open":"Install")}{!load && isInstalled?<OpenIcon className='w-6 h-6 inline ml-2' />:<InstallIcon className='w-6 h-6 inline ml-2' />}
    
  </button>
  )
}

export default InstallBtn;