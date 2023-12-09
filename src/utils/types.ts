import { Dispatch, SetStateAction } from "react";

/* Types */
export type Theme = "light" | "dark";

export type ProjectImagePlacementT = "left" | "right";

/* Props Interfaces */
export interface HeaderProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}
