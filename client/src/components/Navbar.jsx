import { Link } from 'react-router-dom'

export default function Navbar( {currentUser, handleLogout} ) {
    // If the user is logged in, show the following links:
    const loggedIn = (
        <>
            <Link to='/'>
                <span onClick={handleLogout}>Logout</span>
            </Link>{' | '}
            <Link to='/profile'>
                Profile
            </Link>{' | '}
            <Link to='/dashboard'>
                Dashboard
            </Link>
        </>
    )
    // if there is no logged in user, these links will show:
    const loggedOut = (
        <>
            {/* if the user is not logged in  */}
            <Link to='/register'>Register</Link>{' | '}
            <Link to='/login'>Login</Link>
        </>
    )
    return (
        <nav>
            {/* user always sees this section */}
            <Link to='/'>
                <p>Home</p>
            </Link>
            {
                currentUser ? 
                loggedIn: loggedOut
            }
        </nav>
    )
}