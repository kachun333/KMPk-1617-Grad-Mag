import { createContext } from "react";

export interface AppTitleContextValue {
  appTitle: string;
}

const AppTitleContext = createContext<AppTitleContextValue>({
  appTitle: "Our Promise",
});

export default AppTitleContext;
