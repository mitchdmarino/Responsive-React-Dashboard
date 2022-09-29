export default function Side ({setMain, isSideExpanded, setIsSideExpanded}) {
    const handleClick = (value) => {
        setMain(value)
    }

    return (
        <div className={isSideExpanded? 'dash-side active': 'dash-side'}>
            <div className="dash-side__close-icon" onClick={() => setIsSideExpanded(!isSideExpanded)}>
                <h2>X</h2>
            </div>
            <ul>
                <li onClick={()=> handleClick('balance')}>Balance</li>
                <li onClick={()=> handleClick('deposit')}>Deposit Funds</li>
                <li onClick={()=> handleClick('withdraw')}>Withdraw Funds</li>
                {/* <li onClick={()=> handleClick('history')}>History</li> */}
            </ul>
        </div>
    )
}