import { publicRequest } from "../requestMethod";
import { getProductFailure } from "./errorSlice";
import { isFetchingProduct, getProduct } from "./productSlice"

export const product = async(dispatch, category) =>{
    dispatch(isFetchingProduct(true));
    try{
        const res = await publicRequest.get(`/product/${category}`)
        dispatch(getProduct(res?.data))
        dispatch(isFetchingProduct(false));
    } catch(err){
        dispatch(getProductFailure())
        dispatch(isFetchingProduct(false));
    }
}