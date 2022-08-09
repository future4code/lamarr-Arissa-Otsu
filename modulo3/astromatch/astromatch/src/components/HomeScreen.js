import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios"
import {ImHeart, ImHeartBroken} from 'react-icons/im'
import {GiOppositeHearts} from 'react-icons/gi'
import {RiUserHeartLine} from 'react-icons/ri'

const Home = styled.div `
    text-align: center;
`
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
const Main = styled.div`
    border-left: #ff0084 solid 3px;
    border-right: #ff0084 solid 3px; 
    border-bottom: #ff0084 solid 3px;
    margin: auto;
    max-width: 30%;
    max-height: 70vh;
    min-height: 70vh;
    padding-top: 4vh;
`

const Card = styled.div `
    background-color: lightgrey;
    max-width: 90%;
    height: 50vh;
    text-align: center;
    margin: auto;
    border-radius: 1em;
    box-shadow: 0 0 1em salmon;


    img {
        min-width: 100%;
        max-width: 100%;
        min-height: 50vh;
        max-height: 50vh;
        object-fit: fill;
        border-radius: 1em;
    }

    div{
        margin-top: -20vh;
        text-align: justify;
        margin-right: 3vw;
        margin-left: 3vw;
        color: white
    }
`
const Buttons = styled.button `

    border: none;
    background-color: transparent;
    margin: auto;
    display: flex;
    flex-direction: row;
    max-width: 100%;

    button {
        border-radius: 100%;
        border: 3px solid #ff0084;
        width: 5vw;
        height: 5vw;
        margin: 2vw;
        background-color: transparent;
        padding-top: 1.5vh;
    }

    .like {
        color: red;
        font-size: 4em;
    }

    .like:hover {
        font-size: 5em;
        border-radius: 100%;
        border: 3px solid #ff0084;
        width: 6vw;
        height: 6vw;
        margin: 2vw;
        background-color: transparent;
        padding-top: 1.5vh;
    }

    .dislike {
        color: green;
        font-size: 4em;
    }

    .dislike:hover {
        font-size: 5em;
        border-radius: 100%;
        border: 3px solid #ff0084;
        width: 6vw;
        height: 6vw;
        margin: 2vw;
        background-color: transparent;
        padding-top: 1.5vh;
    }
`

function ShowProfileCard (props) {

    const [profile, setProfile] = useState ([])
    
    const getProfile = () => {
        const urlProfile = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ayi/person"
        axios.get(urlProfile)
        .then((response) => {
            console.log(response.data.profile)
            setProfile(response.data.profile)
        })
        .catch((error) =>{
            console.log(error)
            alert("Something went wrong.")
        })
    }

    useEffect(() => {
        getProfile()
    }, [])

    const choosePerson = (id,choice) => {

        const urlChoosePerson = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ayi/choose-person"

        const body = {
            "id": id,
            "choice": choice
        }

        axios.post(urlChoosePerson, body)
        .then(() => {
            getProfile()
        })
        .catch((error) =>{
            console.log(error)
            alert("Sorry! Something went wrong.")
        })
    }


    return (
        <Home>
            <Header>
                <p><GiOppositeHearts/></p>
                <h1>Astro<span>match</span></h1>
                <button onClick={props.switchPages}> <RiUserHeartLine/> </button>
            </Header>

            <Main>
                <Card>
                    <img src={profile.photo} alt={profile.photo_alt}></img>
                    <div>
                        <h3>{profile.name}, {profile.age}</h3>
                        <p>{profile.bio}</p>
                    </div>
                </Card>
                
                <Buttons>
                    <button className="dislike" onClick={() => choosePerson(profile.id, false)}> <ImHeartBroken/> </button>
                    <button className="like" onClick={() => choosePerson(profile.id, true)}><ImHeart/></button>
                </Buttons>
            </Main>
        </Home>
    )
}

export default ShowProfileCard
