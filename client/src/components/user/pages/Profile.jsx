import React from "react"
import { useState } from "react"
import axios from "axios"

export default function Profile({currentUser, setCurrentUser}) {
    const [showEdit, setShowEdit] = useState(false)
    const [name, setName] = useState(currentUser.name)
    const [email, setEmail] = useState(currentUser.email)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // authorization header
            const token = localStorage.getItem("jwt")
            const options = {
                headers: {
                    Authorization: token,
                },
            }
            // Form data to post to the backend
            const reqBody = {
                name: name,
                email: email
            }
            const response = await axios.put(
                `${process.env.REACT_APP_SERVER_URL}/user`, reqBody, options
            )
            setCurrentUser(response.data)
            setShowEdit(false)
        } catch (error) {
            console.warn(error)
        }
    }

    return (

        <div className="profile-page">
           {!showEdit?  (<div className="profile-info">
                <h1>Name: {currentUser.name}</h1>
                <h2>Email: {currentUser.email}</h2>
                <button onClick={() => setShowEdit(true)}>Edit</button>

            </div>): (
                <div className="profile-edit">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} name="name" id="name" onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor="email">Email</label>
                    <input type="text" value={email} name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                    <button onClick={() => setShowEdit(false)}>Cancel</button>
                    <button onClick={(e) => handleSubmit(e)}>Confirm Changes</button>
                </div>
            )}
        </div>
    )
}