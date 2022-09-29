import {centsToDollar} from '../../utils/centsToDollar'

export default function Head ({currentUser}) {
    return (
        <div className="dash-head">
            <h1>{currentUser.name}</h1>
            <p>{centsToDollar(currentUser.balance)}</p>
        </div>
    )
}