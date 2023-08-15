import { atom } from "jotai";

// Navigation atom to set active path
const navigationAtom = atom<{
  path: string;
}>({
  path: "profile",
});

export default navigationAtom;
