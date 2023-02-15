import { matchPath } from "react-router-dom";

export function getAppTitle(url: string): string | null {
  if (matchPath("/graduates", url)) return "Graduates";
  if (matchPath("/videos", url)) return "KMPk TV";
  if (matchPath("/graduates/:graduateId", url)) return null;
  return "醇憶 Grad Mag";
}

function computeDocumentTitle(newTitle: string | null): string {
  if (!newTitle) return "";
  if (newTitle !== "醇憶 Grad Mag") return `${newTitle} - 醇憶 Grad Mag`;
  return "醇憶 Grad Mag";
}

export function setDocumentTitle(newTitle: string | null): void {
  document.title = computeDocumentTitle(newTitle);
}
