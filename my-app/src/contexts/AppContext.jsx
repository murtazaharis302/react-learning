
import { createContext } from "react";

export const AppContext = createContext({
  unit: "C", // "C" or "F"
  refreshTime: 10000, // milliseconds (default 10s)
  setUnit: () => {},
  setRefreshTime: () => {},
});
