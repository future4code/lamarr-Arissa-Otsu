import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios"
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {FcLike} from 'react-icons/fc'
import {TiDelete} from 'react-icons/ti'

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

    button {
        background-color: none;
        color: red;
    }
`


const Card = styled.div `

    background-color: gray;
    max-width: 30%;
    height: 70vh;
    text-align: center;
    margin: auto;

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
    background-color: white;
    margin: auto;
    display: flex;
    flex-direction: row;
    max-width: 30%;

    button {
        border-radius: 50%;
        width: 5vw;
        height: 5vw;
        margin: 2vw;
    }
`
function ShowProfileCard (props) {

    const [profile, setProfile] = useState ([])
    
    const getProfile = () => {
        const urlProfile = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/a/person"
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

        const urlChoosePerson = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/a/choose-person"

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
                <h1> AstroMatch  <button > <BsFillPersonLinesFill/> </button> </h1>
            </Header>
            
            <Card>
                <img src={profile.photo} alt={profile.photo_alt}></img>
                <div>
                    <h3>{profile.name}, {profile.age}</h3>
                    <p>{profile.bio}</p>
                </div>

            </Card>
            
            <Buttons>
                <button onClick={() => choosePerson(profile.id, true)}><FcLike/></button>
                <button onClick={() => choosePerson(profile.id, false)}> <TiDelete/> </button>
            </Buttons>
        </Home>
    )
}

export default ShowProfileCard
