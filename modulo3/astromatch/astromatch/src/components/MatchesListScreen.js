import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios"
import {AiFillDelete} from 'react-icons/ai'

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    text-align: center;
    margin: auto;
    max-width: 30%;
    background-color: yellow;

    button {
        background-color: none;
        color: red;
    }
`

const List = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    img {
        border-radius: 50%;
        height: 10vh;;
        width: 10vh;
        margin-bottom: 2vh;
        margin-right: 2vw;
        margin-left: 2vw;
    }
`
function ShowMatchesList () {
    
    const [list, setList] = useState([])
        
    const getMatches = () => {
        const urlMatches = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/a/matches"

        axios.get(urlMatches)
        .then((response) => {
            console.log(response.data.matches)
            setList(response.data.matches)
        })
        .catch((error) =>{
            console.log(error)
            alert("Something went wrong. We weren´t able to get the list.")
        })
    }

    useEffect (() => {
        getMatches()
    }, [])

    const matchesList = list.map((person) => {
        return (
            <List key={person.id}>
                <img src={person.photo} alt={person.photo_alt}/>
                <p> {person.name} </p>
            </List>
        )
    })

    const clearList = () => {
        const urlClear = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/a/clear'
        
        if (window.confirm(`Are you sure you want to clear your matches list?`)) {
            axios.put(urlClear)
            .then(() => {
                setList([])
                alert("The list was cleared successfully!")
            })
            .catch((error) =>{
                console.log(error)
                alert("Something went wrong. The list was not cleared.")
            })
        }
    }

    return (
        <>  
            <Header>
                <h1> AstroMatch </h1>
            </Header>

            <h2> Lista de Matches </h2>
            {matchesList}
            <button onClick={clearList}> <AiFillDelete/> </button>
        </>
    )
}

export default ShowMatchesList