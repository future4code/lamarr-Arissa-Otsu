import React, { useState, useEffect } from "react";
import axios from "axios"

const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)

    useEffect (() => {
        getData()
    }, [])

    const getData = () => {
        setIsLoading(true)
        axios.get(url)
        .then((response) => {
            console.log(response.data)
            setIsLoading(false)
            setData(response.data)
        })
        .catch((err) =>{
            console.log(err)
            setIsLoading(false)
            setError(err)
            alert("Algo deu errado.")
        })
    }
    return [data, isLoading, error, getData]
}

export default useRequestData