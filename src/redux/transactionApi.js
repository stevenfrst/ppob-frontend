import { userRequest } from "../requestMethod";
import { createTransactionFailure, getTransactionFailure } from "./errorSlice";
import { isFetchingProduct } from "./productSlice";
import { getTransactionData, getTransactionResponse, isFetchingResponse, isFetchingTransaction } from "./transactionSlice";


export const createTransaction = async(dispatch, data, navigate)=>{
    dispatch(isFetchingResponse(true));
    try{
        const res = await userRequest.post(`/payment/va/`, data);
        dispatch(getTransactionResponse(res?.data))
        dispatch(isFetchingResponse(false))
        navigate('/payment')
  
    }catch(err){
        dispatch(createTransactionFailure())
        dispatch(isFetchingResponse(false))
    }
}

export const getTransaction = async(dispatch, orderID)=>{
    dispatch(isFetchingTransaction(true))
    try {
        const res = await userRequest.get(`/payment/${orderID}`)
        dispatch(getTransactionData(res?.data))
        dispatch(isFetchingTransaction(false))
    } catch(err){
        dispatch(getTransactionFailure())
        dispatch(isFetchingProduct(false))
    }
}