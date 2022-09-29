import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function WithdrawFunds ({currentUser, setCurrentUser}) {
    const [dollars, setDollars] = useState(0)
    const [cents, setCents] = useState(0)

    const withdraw = (dollars, cents) => {
        let balance = currentUser.balance
        balance -= (dollars*100 + cents)
        return balance
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const balance = withdraw(dollars, cents)
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
                balance: balance
            }
            const response = await axios.put(
                `${process.env.REACT_APP_SERVER_URL}/user/balance`, reqBody, options
            )
            setCurrentUser(response.data)
        } catch (error) {
            console.warn(error)
        }
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="dollars">Dollars</label>
                <input type="number" name="dollars" id="dollars" value={dollars} onChange={(e) => setDollars(e.target.value)} min="0"/>
                <label htmlFor="cents">Cents</label>
                <input type="number" name="cents" id="cents" value={cents}min="0" max="99" onChange={(e) => setCents(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}