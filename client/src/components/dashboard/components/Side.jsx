export default function Side ({setMain}) {
    const handleClick = (value) => {
        setMain(value)
    }
    return (
        <div className="dash-side">
            <ul>
                <li onClick={()=> handleClick('balance')}>Balance</li>
                <li onClick={()=> handleClick('deposit')}>Deposit Funds</li>
                <li onClick={()=> handleClick('withdraw')}>Withdraw Funds</li>
                {/* <li onClick={()=> handleClick('history')}>History</li> */}
            </ul>
        </div>
    )
}