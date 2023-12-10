"use client";

import { useEffect, useState } from "react";
import About from "./About";
import Header from "./Header";
import Hero from "./Hero";
import Work from "./Work";
import MouseFollower from "@componentUtils/MouseFollower";
import { Theme } from "@utils/types";

export default function Home() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setTheme(savedTheme || (prefersDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <body className={theme === "light" ? "light" : "dark"}>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <Work />
        <About />
      </main>
      <MouseFollower />
    </body>
  );
}
