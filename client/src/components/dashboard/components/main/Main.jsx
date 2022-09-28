import Balance from './Balance'
import AddFunds from './AddFunds'
import WithdrawFunds from './WithdrawFunds'

export default function Main ({content}) {
    let section = <Balance />
    switch(content) {
        case 'balance':
            section = <Balance />
            break;
        case 'deposit': 
            section = <AddFunds />
            break;
        case 'withdraw':
            section = <WithdrawFunds />
            break;
        default: 
            section = <Balance />
    }

    return (
        <div className="dash-main">{section}</div>
    )
}