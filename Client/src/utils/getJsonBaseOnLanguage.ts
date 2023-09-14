import i18n from "i18next";
const getJsonBaseOnLanguage = (data: any) => {
  const language = i18n.language;
  if(Array.isArray(data)) {
    for (const dt of data) {
      if(dt.language === language){
          return dt;
      }
    }
  }
  
};

export default getJsonBaseOnLanguage
