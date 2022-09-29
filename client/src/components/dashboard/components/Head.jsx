import {centsToDollar} from '../../utils/centsToDollar'

export default function Head ({currentUser}) {
    return (
        <div className="dash-head">
            <h1 style={{color: 'white' ,fontSize: 25}}>{currentUser.name}'s Dashboard</h1>
            <p style={{color: 'white' ,fontSize: 25}}>{centsToDollar(currentUser.balance)}</p>
        </div>
    )
}