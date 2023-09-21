import apis from "../../API/apis"

const ArtifactsLoader = async () =>{
    const products = await apis.get("http://localhost:3000/products")
    return {products}
}

export default ArtifactsLoader