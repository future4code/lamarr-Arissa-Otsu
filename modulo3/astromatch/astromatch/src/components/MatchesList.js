import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios"


function ShowList (props) {

    const [matches, setMatches] = ([])
    const urlList = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"

    useEffect(()=>{
        getMatches()
    }, []);
    
    const getMatches = () => {
        axios.get(urlList)
        .then((response) => {
            console.log(response.data.matches)
            setMatches(response.data.matches)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    const matchesList = matches.map((profile) => {
        return (
            <>
                <img src={profile.photo}/>
                <p>{profile.name}</p>
            </>
        )
    })
    
    return (
        <>
            {matchesList}
        </>
    )
}

export default ShowList