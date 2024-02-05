"use client";

import { useEffect, useState } from "react";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Work from "@components/Work";
import About from "@components/About";
import Contact from "@components/Contact";
import MouseFollower from "@componentUtils/MouseFollower";
import { Theme } from "@utils/types";

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark");

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
        <Contact />
      </main>
      <MouseFollower />
    </body>
  );
}
