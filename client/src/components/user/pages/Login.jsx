import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Link, Navigate } from 'react-router-dom'

export default function Login({ currentUser, setCurrentUser }) {
    // state for the controlled form 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            // post form data to the backend
            const reqBody = {
                email, 
                password
            }
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login`, reqBody)

            // save the token in localstorage
            console.log(response)
            const { token } = response.data
            localStorage.setItem('jwt', token)
            // decode the token 
            const decoded = jwt_decode(token)
            // set the user in App's state to be the decoded token 
           setCurrentUser(decoded)
        } catch (err) {
            console.warn(err)
            if (err.response) {
                if (err.response.status===400) {
                    setMsg(err.response.data.msg)
                }
            }
        }
    }

    // conditionally render a navigate component 
    if (currentUser) {
        return <Navigate to='/profile' />
    }

    return (
        <div>
            <h1 style={{padding: 10, textAlign: 'center'}}>Login</h1>
            <p> {msg}</p>
            <form className='user-form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email:</label>
                <input 
                    type='text'
                    name='email'
                    id='email'
                    value={email}
                    placeholder='example@domain.com'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Password:</label>
                <input 
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    placeholder='********'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Login</button>
               
            </form>
            <div className='login-register-link'>
                <p>Don't have an account? <Link to="/register">Sign up</Link></p>
            </div>
            
            
        </div>
    )
}