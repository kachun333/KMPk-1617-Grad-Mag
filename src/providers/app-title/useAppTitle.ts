import { useContext } from "react";
import AppTitleContext, { AppTitleContextValue } from "./AppTitleContext";

function useAppTitle(): AppTitleContextValue {
  return useContext(AppTitleContext);
}

export default useAppTitle;
