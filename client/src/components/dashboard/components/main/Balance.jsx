import {centsToDollar} from '../../../utils/centsToDollar'

export default function Balance ({currentUser}) {
    return (
        <div className='balance-container'>
            <h1>Current Balance: {centsToDollar(currentUser.balance)}</h1>
        </div>
    )
}