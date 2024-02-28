const User = ({ name, location }) => {
    return (
        <>
            <div style={{ color: "red", border: "1px solid black" }}>
                <h1>this is function based component</h1>
                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
            </div>
        </>
    );
};

export default User;
