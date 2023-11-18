export const sessionSave = (item:any, name:string) => sessionStorage.setItem(name, JSON.stringify(item));

export const sessionGet = (name:string) => sessionStorage.getItem(name)?JSON.parse(sessionStorage.getItem(name)??""):undefined;

export const localStorageGet = (name:string) => localStorage.getItem(name)?JSON.parse(localStorage.getItem(name)??""):undefined;

export const localStorageSet = (item:any, name:string) => localStorage.setItem(name, JSON.stringify(item));