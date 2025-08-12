const User = ({name,city}) => {
    return (
        <div className="user-card">
            <h1>My Info - This is function component</h1>
            <h2>{name}</h2>
            <h3>{city}</h3>

        </div>
    )
}
export default User;