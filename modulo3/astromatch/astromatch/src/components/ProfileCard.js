import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios"
import { FaHeart } from 'react-icons/fa';

const Home = styled.div `
    text-align: center;

`
const Card = styled.div `

    background-color: gray;

    img {
        
    }
`

function ShowProfileCard (props) {

    const [profile, setProfile] = useState ([])
    
    const getProfile = () => {
        const urlProfile = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arissa-otsu/person"
        axios.get(urlProfile)
        .then((response) => {
            console.log(response.data.profile)
            setProfile(response.data.profile)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

/*     const choosePerson = (choice) => {

        const urlChoosePerson = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arissa-otsu/choose-person"

        const body = {
            "id": profile.id,
            "choice": choice
        }

        axios.post(urlChoosePerson, body)
        .then(() => {
            getProfile()
        })
        .catch((error) =>{
            console.log(error)
        })
    }
 */

    return (
        <Home>
            <Card>
                <img src={profile.photo} alt={profile.name}></img>
                <p>{profile.name}, {profile.age}</p>
                <p>{profile.bio}</p>
            </Card>
            
            <div>
                <button /* onClick={choosePerson(true)} */><FaHeart/></button>
                <button /* onClick={choosePerson(false)} */> X </button>
            </div>
        </Home>
    )
}

export default ShowProfileCard