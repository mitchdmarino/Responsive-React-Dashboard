import React from "react"
import { useState } from "react"
import axios from "axios"
import { centsToDollar } from "../../utils/centsToDollar"

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
            <h1>Profile Information</h1>
           {!showEdit?  (<div className="profile-info">
                <p><strong>Name:</strong> {currentUser.name}</p><hr></hr>
                <p><strong>Email:</strong> {currentUser.email}</p><hr></hr>
                <button className="button-edit" onClick={() => setShowEdit(true)}>Edit Info</button>
                <p><strong>Current Balance:</strong> {centsToDollar(currentUser.balance)}</p>
                

            </div>): (
                <div className="profile-edit">
                    <form className="user-form" onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="name">Name</label>
                        <input type="text" value={name} name="name" id="name" onChange={(e) => setName(e.target.value)}/>
                        <label htmlFor="email">Email</label>
                        <input type="text" value={email} name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                        <div className="button-group">
                            <button id="cancel-button" onClick={() => setShowEdit(false)}>Cancel</button>
                            <button type="submit">Confirm Changes</button>\
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}