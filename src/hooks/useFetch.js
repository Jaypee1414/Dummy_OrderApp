import { useEffect, useState, useCallback } from "react";
import Modal from "../UI/Modal";

async function sendHtppRequest(url, config){
    const response = await fetch(url,config);
    const resData  = await response.json();
    if(!response.ok){
        throw new Error( resData.message || "There is something wrong please try againd later")
    }
    return resData;
}

export default function useFetch(url,config,initialization){
    const [error, setError] = useState()
    const [data, setData] = useState(initialization)
    const [isloading, setIsLoading] = useState(false)

    function clearData() {
        setData(initialization)
    }
    
    const sendRequest = useCallback(async function sendRequest(data){
        setIsLoading(true)
        try{
            const resData = await sendHtppRequest(url,{...config, body: data})
            setData(resData)
        }catch(error){
            setError(error.message || "failed to fetch food")
        }
        setIsLoading(false)
    },[url,config])

    useEffect(()=>{
        if(config && (config.method === 'GET' || !config.method ) || !config){
            sendRequest()
        }
    },[sendRequest,config])

    return {
        error, 
        data, 
        isloading,
        sendRequest,
        clearData
    }
}