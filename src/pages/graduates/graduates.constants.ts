import { Graduate } from "./graduates.interface";

export interface SortCriteria {
  id: keyof Graduate;
  displayName: string;

  /**
   * unverified user also can use this sort criteria
   */
  isPublic?: boolean;
}

export const SORT_CRITERIA: SortCriteria[] = [
  {
    id: "id",
    displayName: "Default",
    isPublic: true,
  },
  {
    id: "name",
    displayName: "Name",
    isPublic: true,
  },
  {
    id: "gender",
    displayName: "Gender",
    isPublic: true,
  },
  {
    id: "birthday",
    displayName: "Birthday",
  },
  {
    id: "tutorial",
    displayName: "Tutorial Group",
  },
];
