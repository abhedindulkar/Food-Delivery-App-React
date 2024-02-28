import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1,
        };
    }

    componentDidMount() {}

    render() {
        let { name, location } = this.props;
        let { count } = this.state;

        return (
            <>
                <div style={{ color: "blue", border: "1px solid blue" }}>
                    <h1>Count: {count}</h1>
                    <button
                        onClick={() => {
                            this.setState({
                                count: this.state.count + 1,
                            });
                        }}
                    >
                        increment
                    </button>
                    <h1>this is class based component</h1>
                    <h3>Name: {name}</h3>
                    <h3>Location: {location}</h3>
                </div>
            </>
        );
    }
}

export default UserClass;
