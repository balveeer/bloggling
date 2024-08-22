import React, { useState, useEffect } from "react";
import { InstallIcon, OpenIcon } from "./icons";
import Load from "./Load";

interface RelatedApplication {
  platform: string;
  url: string;
}

const InstallBtn: React.FC = () => {
  const [load, setLoad] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [isStandalone, setIsStandalone] = useState<boolean>(false);

  useEffect(() => {
    const checkInstallation = async () => {
      // Improved standalone mode detection
      const checkStandalone = () => {
        const isStandalone = 
          window.matchMedia('(display-mode: standalone)').matches ||
          (window.navigator as any).standalone === true ||
          document.referrer.includes('android-app://') ||
          window.location.href.includes('?mode=standalone');
        
        setIsStandalone(isStandalone);
      };

      checkStandalone();

      if ("getInstalledRelatedApps" in navigator) {
        console.log("getInstalledRelatedApps is true")
        try {
          const relatedApps = await (
            navigator as any
          ).getInstalledRelatedApps();
          const installed = relatedApps.some(
            (app: RelatedApplication) =>
              app.platform === "webapp" &&
              app.url === "https://bloggling.netlify.app/manifest.json"
          );
          setIsInstalled(installed);
        } catch (error) {
          console.error("Error checking installation:", error);
        }
      }
    };

    const handleBeforeInstallPrompt = (e: Event) => {
      console.log("handleBeforeInstallPrompt", e);
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      console.log("handleAppInstalled");
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
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
      mql.removeListener(checkInstallation);
    };
  }, []);

  const handleInstallClick = async () => {
    setLoad(true);
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
          setIsInstalled(true);
        } else {
          console.log("User dismissed the install prompt");
        }
      } catch (error) {
        console.error("Error in install prompt:", error);
      } finally {
        setDeferredPrompt(null);
      }
    } else if (isInstalled) {
      console.log("isInstalled", window.location.href);
      window.location.href = window.location.origin;
      setTimeout(() => {
        alert(
          "If the app didn't open, please check your device's home screen or app launcher to open it manually."
        );
      }, 1000);
    }
    setLoad(false);
  };

  if (isStandalone) {
    return null;  // Don't render the button in standalone mode
  }

  return (
    <button
      onClick={handleInstallClick}
      className={`min-w-32 text-center inline-block hover:drop-shadow-lg px-6 py-2 duration-200 text-green-500 hover:text-white hover:dark:bg-green-600 hover:bg-green-600 rounded-xl hover:rounded-s-xl ${
        load ? "bg-green-600" : "bg-white"
      }`}
    >
      {load ? <Load /> : isInstalled ? "Open" : "Install"}
      {!load && isInstalled ? (
        <OpenIcon className="w-6 h-6 inline ml-2" />
      ) : (
        <InstallIcon className="w-6 h-6 inline ml-2" />
      )}
    </button>
  );
};

export default InstallBtn;