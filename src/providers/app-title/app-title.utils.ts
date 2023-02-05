export function getAppTitle(url: string): string {
  if (url.startsWith("/graduates")) return "Graduates";
  if (url.startsWith("/videos")) return "KMPk TV";
  return "醇忆 Grad Mag";
}
