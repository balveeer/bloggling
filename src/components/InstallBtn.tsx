import React, { useState, useEffect } from 'react';
import Load from './Load';
import { InstallIcon } from './icons';

const InstallBtn: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    setLoad(true)
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
        setLoad(false)
      });
    }
  };

  return (
    <button onClick={handleInstallClick} disabled={!deferredPrompt}
    className={`min-w-32 text-center inline-block hover:drop-shadow-lg px-6 py-2 duration-200 text-green-500 hover:text-white  hover:dark:bg-green-600 hover:bg-green-600  rounded-xl hover:rounded-s-xl ${load?" bg-green-600":"bg-white"} `}
  >{load?<Load/>:"Install..."}{!load && <InstallIcon className='w-6 h-6 inline ml-2' />}
    
  </button>
  )
}

export default InstallBtn;