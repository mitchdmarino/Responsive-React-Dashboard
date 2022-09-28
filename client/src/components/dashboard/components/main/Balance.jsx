export default function Balance ({currentUser}) {
    return (
        <div>
            <h1>Total Balance: {currentUser.balance}</h1>
        </div>
    )
}