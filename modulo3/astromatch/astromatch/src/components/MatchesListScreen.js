import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios"
import {AiFillDelete, AiOutlineClear} from 'react-icons/ai'
import {BiHomeHeart} from 'react-icons/bi'


const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    text-align: center;
    margin: auto;
    max-width: 30%;
    background-color: yellow;
    border: black solid 2px;

    button {
        background-color: transparent;
        color: black;
        border: none;
        font-size: 1em;
    }

    button:hover {
        background-color: transparent;
        color: darksalmon;
        border: none;
        font-size: 1em;
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

const Main = styled.div`
    background-color: transparent;
    max-width: 30%;
    height: fit-content;
    min-height: 70vh;
    text-align: center;
    margin: auto;
    border: black solid 2px;
    padding-top: 2vh;
`
const ClearButton = styled.div`
    display: fixed; 
    margin-top: 6vh;
    text-align: center;
    button {
        font-size: 1em;
    }

`

function ShowMatchesList (props) {
    
    const [list, setList] = useState([])
    const {switchPages} = props
        
    const getMatches = () => {
        const urlMatches = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ay/matches"

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
        const urlClear = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ay/clear'
        
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
                <h1> AstroMatch <button onClick={props.switchPages}> <BiHomeHeart/> </button></h1>
            </Header>
            <Main>
                
                {matchesList}
                
            </Main>
            <ClearButton>
                <button onClick={clearList}> <AiOutlineClear/> Clear List </button>
            </ClearButton>
        </>
    )
}

export default ShowMatchesList