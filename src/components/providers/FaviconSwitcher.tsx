"use client";

import { useEffect } from "react";

export function FaviconSwitcher() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const getTargetIcon = () =>
      mediaQuery.matches ? "/logo2.png" : "/RG_Creatives_Black.png";

    const applyFavicon = () => {
      const targetIcon = getTargetIcon();
      const absoluteTarget = new URL(targetIcon, location.href).href;

      // Remove every icon link that isn't our controlled dynamic one
      document
        .querySelectorAll<HTMLLinkElement>(
          'link[rel="icon"], link[rel="shortcut icon"]'
        )
        .forEach((l) => {
          if (!l.dataset.dynamicFavicon) l.remove();
        });

      // Find or create the single dynamic favicon link
      let dynamicLink = document.querySelector<HTMLLinkElement>(
        'link[data-dynamic-favicon="true"]'
      );

      if (!dynamicLink) {
        dynamicLink = document.createElement("link");
        dynamicLink.rel = "icon";
        dynamicLink.type = "image/png";
        dynamicLink.dataset.dynamicFavicon = "true";
        document.head.appendChild(dynamicLink);
      }

      // Only update href if it actually changed (avoids unnecessary repaints)
      if (dynamicLink.href !== absoluteTarget) {
        dynamicLink.href = targetIcon;
      }
    };

    // Watch <head> for any icon links Next.js re-injects after navigation / hydration
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (
            node instanceof HTMLLinkElement &&
            (node.rel === "icon" || node.rel === "shortcut icon") &&
            !node.dataset.dynamicFavicon
          ) {
            // Next.js snuck in a favicon link — take control immediately
            applyFavicon();
            return;
          }
        }
      }
    });

    observer.observe(document.head, { childList: true });

    // Run once immediately on mount
    applyFavicon();

    try {
      mediaQuery.addEventListener("change", applyFavicon);
      return () => {
        mediaQuery.removeEventListener("change", applyFavicon);
        observer.disconnect();
      };
    } catch {
      // Older browser fallback
      mediaQuery.addListener(applyFavicon);
      return () => {
        mediaQuery.removeListener(applyFavicon);
        observer.disconnect();
      };
    }
  }, []);

  return null;
}
