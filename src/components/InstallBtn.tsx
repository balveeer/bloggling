import React, { useState, useEffect } from "react";
import { InstallIcon, OpenIcon } from "./icons";
import Load from "./Load";

const InstallBtn: React.FC<{ setInstallVisible: any }> = ({ setInstallVisible }) => {
  const [load, setLoad] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [isStandalone, setIsStandalone] = useState<boolean>(false);

  useEffect(() => {
    const checkInstallation = async () => {
      // standalone mode detection
      setIsStandalone(
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true ||
        document.referrer.includes('android-app://') ||
        window.location.href.includes('?mode=standalone')
      );
      setInstallVisible(!isStandalone);

      if ("getInstalledRelatedApps" in navigator) {
        try {
          const relatedApps = await (navigator as any).getInstalledRelatedApps();
          const installed = relatedApps.some(
            (app: { platform: string; url: string }) =>
              app.platform === "webapp" && app.url === "https://bloggling.netlify.app/manifest.json"
          );
          setIsInstalled(installed);
        } catch (error) {
          console.error("Error checking installation:", error);
        }
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
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    // Listen for changes in display mode
    const mql = window.matchMedia('(display-mode: standalone)');
    mql.addListener(checkInstallation);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
      mql.removeListener(checkInstallation);
    };
  }, [setInstallVisible]);

  const handleInstallClick = async () => {
    setLoad(true);
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
          setIsInstalled(true);
        }
      } catch (error) {
        setDeferredPrompt("error occurred.");
      } finally {
        setDeferredPrompt(null);
      }
    } else if (isInstalled) {
      window.location.href = window.location.origin;
      setTimeout(() => {
        alert("If the app didn't open, please check your device's home screen or app launcher to open it manually.");
      }, 1000);
    }
    setLoad(false);
  };

  if (isStandalone) {
    return null;
  }

  return (
    <button
      onClick={handleInstallClick}
      className={`min-w-32 text-center inline-block hover:drop-shadow-lg px-6 py-2 duration-200 text-green-500 hover:text-white hover:dark:bg-green-600 hover:bg-green-600 rounded-xl hover:rounded-s-xl ${load ? "bg-green-600" : "bg-white"}`}
    >
      {load ? <Load /> : isInstalled ? "Open" : "Install"}
      {!load && isInstalled ? <OpenIcon className="w-6 h-6 inline ml-2" /> : <InstallIcon className="w-6 h-6 inline ml-2" />}
    </button>
  );
};

export default InstallBtn;