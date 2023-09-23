import { useTranslation } from "react-i18next"
import {Button} from "@mui/material"

const Search = () => {
    const {t} = useTranslation()

    return <>
    <div className="text-center">
        <input placeholder={t('Nội dung tìm kiếm')}/>
        <Button>{t('Tìm Kiếm')}</Button>
    </div>
    </>
}

export default Search