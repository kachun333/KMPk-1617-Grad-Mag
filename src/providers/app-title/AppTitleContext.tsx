import { createContext } from "react";

export interface AppTitleContextValue {
  appTitle: string | null;
}

const AppTitleContext = createContext<AppTitleContextValue>({
  appTitle: "醇憶 Grad Mag",
});

export default AppTitleContext;
