import { atom } from "recoil";

//ANCHOR - set up default language
export const defaultLanguageState = atom({
  key: "defaultLanguageState",
  default: "vn", // Set the default language here
});

export const accountAtom = atom({
  key: "accountAtom",
  default: undefined,
});
