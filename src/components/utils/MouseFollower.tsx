"use client";

import styles from "@styles/mouse_follower.module.scss";
import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const size = 150;

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      let newY = e.clientY - size / 2;
      let newX = e.clientX - size / 2;

      const headerElement = document.querySelector("header");

      if (headerElement) {
        const headerRect = headerElement.getBoundingClientRect();

        const maxTopPositionAllowed = headerRect.bottom - (size * 2) / 3.5;

        if (newY < maxTopPositionAllowed) {
          newY = maxTopPositionAllowed;
        }
      }

      setPosition({ x: newX, y: newY });
    };

    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, [isVisible]);

  return (
    <div
      className={styles.mouseFollower}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
}
