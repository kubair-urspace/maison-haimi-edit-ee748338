import { lazy, type ComponentType } from "react";

const RELOAD_KEY = "chunk-reload-attempted";

/**
 * React.lazy wrapper that survives transient chunk fetch failures
 * (stale/failed dynamic imports after a redeploy or flaky network).
 */
export function lazyWithRetry<T extends ComponentType<never>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    try {
      const mod = await factory();
      window.sessionStorage.removeItem(RELOAD_KEY);
      return mod;
    } catch (error) {
      // Retry once in case it was a momentary network blip
      try {
        const mod = await factory();
        window.sessionStorage.removeItem(RELOAD_KEY);
        return mod;
      } catch (retryError) {
        const alreadyReloaded = window.sessionStorage.getItem(RELOAD_KEY) === "true";
        if (!alreadyReloaded) {
          window.sessionStorage.setItem(RELOAD_KEY, "true");
          window.location.reload();
          // Never resolves; page is reloading
          return new Promise<{ default: T }>(() => {});
        }
        throw retryError;
      }
    }
  });
}
