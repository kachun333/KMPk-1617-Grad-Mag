import { useEffect, useRef, useState } from "react";
import * as serviceWorkerRegistration from "serviceWorkerRegistration";

interface UseServiceWorkerRes {
  hasUpdate: boolean;
  isLoading: boolean;
  updateApp: () => void;
}

function useServiceWorker(): UseServiceWorkerRes {
  const [hasUpdate, setHasUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const serviceWorkerRef = useRef<ServiceWorker | null>(null);

  useEffect(() => {
    function onHasUpdate(registration: ServiceWorkerRegistration) {
      serviceWorkerRef.current = registration.waiting;
      setHasUpdate(true);
    }

    serviceWorkerRegistration.register({
      onUpdate: onHasUpdate,
      onHasWaiting: onHasUpdate,
    });
  }, []);

  function updateApp() {
    setIsLoading(true);
    if (!serviceWorkerRef.current) return;
    const sw = serviceWorkerRef.current;
    // Add listener for state change of service worker
    sw.onstatechange = () => {
      if (sw?.state === "activated" && navigator.serviceWorker.controller) {
        // Reload page if waiting was successfully skipped
        window.location.reload();
      }
    };
    sw.postMessage({ type: "SKIP_WAITING" });
    setHasUpdate(false);
  }

  return {
    hasUpdate,
    isLoading,
    updateApp,
  };
}

export default useServiceWorker;
