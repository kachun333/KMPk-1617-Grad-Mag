export function getAppTitle(url: string): string {
  if (url.startsWith("/graduates")) return "Graduates";
  if (url.startsWith("/lecturers")) return "Lecturers";
  if (url.startsWith("/videos")) return "KMPk TV";
  if (url.startsWith("/auth/create")) return "Create Account";
  if (url.startsWith("/auth/login")) return "Login";
  if (url.startsWith("/auth/reset")) return "Reset Password";
  if (url.startsWith("/auth/verify")) return "Verify";
  return "Our Promise";
}
