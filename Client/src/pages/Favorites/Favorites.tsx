import { useEffect, useState } from 'react'
import { useRecoilState } from "recoil";
import { accountAtom } from "../../recoil/atoms/recoils";
import { useNavigate } from "react-router-dom";
import apis from '../../API/apis';

const Favorites = () => {
    const [account, setAccount]: any = useRecoilState(accountAtom);
    const [FavoriteProduct, setFavoriteProduct]: any = useState()
    const navigate = useNavigate()

    const callBack = async () => {
        const result = await apis.get('')
        await setFavoriteProduct(result)
    }
    useEffect(() => {
        if(!account){
            navigate("/")
        }

        callBack()

    }, [])
    return <>
    </>
}

export default Favorites