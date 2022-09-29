import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function WithdrawFunds ({currentUser, setCurrentUser}) {
    const [dollars, setDollars] = useState(0)
    const [cents, setCents] = useState(0)

    const withdraw = (dollars, cents) => {
        let balance = currentUser.balance
        balance -= (Number(dollars)*100 + Number(cents))
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
        setDollars(0)
        setCents(0)
        
    }
    return (
        <div className='money-form'>
            <h2>Withdraw</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="dollars">$</label>
                <input type="number" aria-label="dollars" name="dollars" id="dollars" value={dollars} onChange={(e) => setDollars(e.target.value)} min="0"/>
                <label htmlFor="cents">.</label>
                <input type="number" style={{textAlign: 'left'}}aria-label="cents" name="cents" id="cents" value={cents}min="0" max="99" onChange={(e) => setCents(e.target.value)}/><br></br>
                <button className="money-button" type="submit">Transfer to Bank</button>
            </form>
        </div>
    )
}