import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


export default function Navbar( {currentUser, handleLogout} ) {
    // If the user is logged in, show the following links:
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const loggedIn = (
        <>
            
            <Link className='right-nav' to='/dashboard'>
                Dashboard
            </Link>
            <Link className='right-nav' to='/profile'>
                Profile
            </Link>
            <Link className='right-nav' to='/'>
                <span onClick={handleLogout}>Logout</span>
            </Link>
        </>
    )
    // if there is no logged in user, these links will show:
    const loggedOut = (
        <>
            {/* if the user is not logged in  */}
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
        </>
    )

   
    return (
        <nav className={isNavExpanded? 'responsive': ''}>
            {/* user always sees this section */}
            <Link className="active" to='/'>Home</Link>
            {
                currentUser ? 
                loggedIn: loggedOut
            }
            <button className="icon" onClick={() => setIsNavExpanded(!isNavExpanded)}><i className="fa fa-bars"></i></button>
        </nav>
    )
}