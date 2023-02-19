import { APP_NAME } from "global.constants";
import { matchPath } from "react-router-dom";

export function getAppTitle(url: string): string | null {
  if (matchPath("/graduates", url)) return "Graduates";
  if (matchPath("/videos", url)) return "KMPk TV";
  if (matchPath("/graduates/:graduateId", url)) return null;
  return APP_NAME;
}

function computeDocumentTitle(newTitle: string): string {
  if (newTitle !== APP_NAME) return `${newTitle} - ${APP_NAME}`;
  return APP_NAME;
}

export function setDocumentTitle(newTitle: string | null): void {
  if (newTitle === null) return; // ignored, remain current title
  document.title = computeDocumentTitle(newTitle);
}
