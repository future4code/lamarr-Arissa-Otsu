import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios"
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {IoMdHeartDislike, IoMdHeart, IoHeart, IoHeartCircleOutline} from 'react-icons/io'
import {TiDelete} from 'react-icons/ti'
import {RiHeartAddFill, RiUserHeartLine} from 'react-icons/ri'

const Home = styled.div `
    text-align: center;

`
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


const Card = styled.div `

    background-color: transparent;
    max-width: 30%;
    height: 70vh;
    text-align: center;
    margin: auto;
    border: black solid 2px;

    img {
        max-width: 100%;
        height: 70vh;
        object-fit: fill;
    }

    div{
        margin-top: -20vh;
        text-align: justify;
        margin-right: 5vw;
        margin-left: 5vw;
        color: white
    }
`
const Buttons = styled.button `

    border: none;
    background-color: transparent;
    margin: auto;
    display: flex;
    flex-direction: row;
    max-width: 30%;

    button {
        border-radius: 100%;
        border: none;
        width: 5vw;
        height: 5vw;
        margin: 2vw;
        background-color: transparent;
    }

    .like {
        color: red;
        font-size: 4em;
    }

    .like:hover {
        font-size: 5em;
    }

    .dislike {
        color: green;
        font-size: 4em;
    }

    .dislike:hover {
        font-size: 5em;
    }
`

    

function ShowProfileCard (props) {

    const [profile, setProfile] = useState ([])
    const {switchPages} = props
    
    const getProfile = () => {
        const urlProfile = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ay/person"
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

        const urlChoosePerson = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ay/choose-person"

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
                <h1> AstroMatch  <button onClick={props.switchPages}> <RiUserHeartLine/> </button> </h1>
            </Header>
            
            <Card>
                <img src={profile.photo} alt={profile.photo_alt}></img>
                <div>
                    <h3>{profile.name}, {profile.age}</h3>
                    <p>{profile.bio}</p>
                </div>

            </Card>
            
            <Buttons>
                <button className="dislike" onClick={() => choosePerson(profile.id, false)}> <IoMdHeartDislike/> </button>
                <button className="like" onClick={() => choosePerson(profile.id, true)}><IoMdHeart/></button>
            </Buttons>
        </Home>
    )
}

export default ShowProfileCard
