import {centsToDollar} from '../../utils/centsToDollar'

export default function Head ({currentUser, isSideExpanded, setIsSideExpanded}) {
    return (
        <div className="dash-head">
            <div className="menu-icon" onClick={() => setIsSideExpanded(!isSideExpanded)}>
                <i className="fas fa-bars"></i>
            </div>
            <h1 style={{color: 'white' ,fontSize: 20}}>{currentUser.name}'s Dashboard</h1>
            <p style={{color: 'white' ,fontSize: 25}}>{centsToDollar(currentUser.balance)}</p>
        </div>
    )
}