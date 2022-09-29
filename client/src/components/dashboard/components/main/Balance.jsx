import {centsToDollar} from '../../../utils/centsToDollar'

export default function Balance ({currentUser}) {
    return (
        <div>
            <h1>Total Balance: {centsToDollar(currentUser.balance)}</h1>
        </div>
    )
}