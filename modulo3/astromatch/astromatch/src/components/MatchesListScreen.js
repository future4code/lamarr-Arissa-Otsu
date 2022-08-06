import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios"
import { AiOutlineClear} from 'react-icons/ai'
import {BiHomeHeart} from 'react-icons/bi'
import {GiOppositeHearts} from 'react-icons/gi'


const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    text-align: center;
    margin: auto;
    max-width: 30%;
    background-color: pink;
    border: #ff0084 solid 3px;
    height: 10vh;
    font-family: 'Cinzel', serif;

    h1 {
        color: #ff0084;
    }

    p {
        background-color: transparent;
        color: #ff0084;
        border: none;
        font-size: 2em;
    }

    span {
        color: #cc006a;
    }

    button {
        background-color: transparent;
        color: #ff0084;
        border: none;
        font-size: 2em;
    }

    button:hover {
        background-color: transparent;
        color: #cc006a;
        border: none;
        font-size: 2em;
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
        border: 1px solid #cc006a;
    }

    h4 {
        margin-bottom: 5vh;
        color: #cc006a
    }
`

const Main = styled.div`
    background-color: transparent;
    max-width: 30%;
    height: fit-content;
    min-height: 65vh;
    text-align: center;
    margin: auto;
    border-bottom: #ff0084 solid 3px;
    border-left: #ff0084 solid 3px;
    border-right: #ff0084 solid 3px;
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

    const getMatches = () => {
        const urlMatches = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ayi/matches"

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
                <h4> {person.name} </h4>
            </List>
        )
    })

    const clearList = () => {
        const urlClear = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ayi/clear'
        
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
                <p><GiOppositeHearts/></p>
                <h1>Astro<span>match</span></h1>
                <button onClick={props.switchPages}> <BiHomeHeart/> </button>
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