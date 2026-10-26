"use client";

import { useEffect } from "react";

export function FaviconSwitcher() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateFavicon = () => {
      const isDark = mediaQuery.matches;
      const targetIcon = isDark ? "/favicon-dark.png" : "/favicon-light.png";

      // Also update any unconditional icon links
      const allIcons = document.querySelectorAll<HTMLLinkElement>(
        'link[rel="icon"], link[rel="shortcut icon"]'
      );
      allIcons.forEach((l) => {
        if (!l.media) {
          l.href = targetIcon;
        }
      });

      // Find or create dynamic favicon link
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

      dynamicLink.href = targetIcon;
    };

    updateFavicon();

    try {
      mediaQuery.addEventListener("change", updateFavicon);
      return () => mediaQuery.removeEventListener("change", updateFavicon);
    } catch {
      // Compatibility fallback for older browsers
      mediaQuery.addListener(updateFavicon);
      return () => mediaQuery.removeListener(updateFavicon);
    }
  }, []);

  return null;
}
