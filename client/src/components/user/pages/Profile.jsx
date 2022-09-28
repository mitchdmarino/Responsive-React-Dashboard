
export default function Profile({currentUser}) {
    // state for the secret message (aka user privileged data )

    return (

        <div>
            <h1>Hello {currentUser.name}</h1>
            
            <p>Email: {currentUser.email}</p>
        
        </div>
    )
}