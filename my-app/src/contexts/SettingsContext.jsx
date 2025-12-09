import { createContext } from "react";

export const SettingsContext = createContext({
  fontSize: "medium",
  setFontSize: () => {},
});
