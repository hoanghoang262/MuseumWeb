import { useTranslation } from "react-i18next";

function Error() {
  const { t } = useTranslation();
  return <div>{t("error")}</div>;
}

export default Error;
