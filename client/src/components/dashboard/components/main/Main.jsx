import Balance from './Balance'
import AddFunds from './AddFunds'
import WithdrawFunds from './WithdrawFunds'

export default function Main ({content, currentUser}) {
    let section = <Balance currentUser={currentUser} />
    switch(content) {
        case 'deposit': 
            section = <AddFunds />
            break;
        case 'withdraw':
            section = <WithdrawFunds />
            break;
        // case 'history': 
        //     // section = <History />
        //     // break;
        default: 
            section = <Balance currentUser={currentUser}/>
    }

    return (
        <div className="dash-main">{section}</div>
    )
}