import { GraduateData } from "./Graduates";

export function sortGraduates(
  data: GraduateData[],
  fieldName: keyof GraduateData
) {
  return data.sort((a, b) => {
    const aValue = a[fieldName];
    const bValue = b[fieldName];
    const isAUndefined = typeof aValue === "undefined";
    const isBUndefined = typeof bValue === "undefined";
    if (isAUndefined || isBUndefined) {
      // null last
      if (!isAUndefined) return -1;
      if (!isBUndefined) return 1;
      return 0;
    }
    if (aValue > bValue) return 1;
    if (bValue > aValue) return -1;
    return 0;
  });
}

export function filterItems(
  items: GraduateData[],
  searchTerm: string
): GraduateData[] {
  const res: GraduateData[] = [];
  const lowercaseSearchTerm = searchTerm.toLowerCase();
  items.forEach((item) => {
    const shouldAdd =
      item.name.toLowerCase().includes(lowercaseSearchTerm) ||
      item.name_ch.includes(searchTerm);
    if (shouldAdd) res.push(item);
  });
  return res;
}
