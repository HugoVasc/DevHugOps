import { atom } from "recoil";

export const sideBarState = atom<boolean>({
  key: "isSideBarOpen",
  default: true,
});
