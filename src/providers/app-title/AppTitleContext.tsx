import { APP_NAME } from "global.constants";
import { createContext } from "react";

export interface AppTitleContextValue {
  appTitle: string | null;
}

const AppTitleContext = createContext<AppTitleContextValue>({
  appTitle: APP_NAME,
});

export default AppTitleContext;
