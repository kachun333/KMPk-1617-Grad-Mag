import { Graduate } from "pages/graduates/graduates.interface";

export function toGraduateTitle(graduate: Graduate): string {
  if (!graduate.name_ch) return graduate.name;
  return `${graduate.name_ch} ${graduate.name}`;
}

export function toSharableGraduateUrl(graduateId: number) {
  return `${window.location.origin}/graduates/${graduateId}`;
}
