import { useRecoilValue } from "recoil";
import { sideBarState } from "./atom";

export const isSideBarOpen = () => {
  const state = useRecoilValue(sideBarState);
  return state;
};
