import { GraduateData } from "./Graduates";

export function sortGraduates(
  data: GraduateData[],
  fieldName: keyof GraduateData
) {
  return data.sort((a, b) => {
    // if equal then comparison = 0
    let comparison = 0;
    if (a[fieldName] > b[fieldName]) {
      comparison = 1;
    } else if (b[fieldName] > a[fieldName]) {
      comparison = -1;
    }
    return comparison;
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
