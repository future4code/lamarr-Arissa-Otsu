import React, { useState, useEffect } from "react";
import axios from "axios"

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (event) => {
        const {name,value} = event.target
        setForm ({...form, [name]: value})
    }

    const clearInputs = ()=>{
        setForm(initialState)
    }

    return [form, onChange, clearInputs]
}

export default useForm