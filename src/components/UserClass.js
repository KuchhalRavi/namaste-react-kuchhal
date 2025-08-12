import React from "react";
class UserClass extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            userInfo: {
                name : "Dummy Name",
                location : "Default Location"
            }
           
        };

        console.log('Child Constructor');
    }

    async componentDidMount() {
        // console.log('Child componentDidMount  ')
        const data = await fetch("https://api.github.com/users/KuchhalRavi");
        const json = await data.json();
        console.log('inside Json',json);
        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate(){
        console.log('component did update')
    }
    componentWillUnmount(){
        console.log('component did unmount');
    }
    
    render() {
        console.log('Child Render');
        console.log('Inside Render',this.state)
        // const {name,city} = this.props;
        const {name, location} = this.state.userInfo;
        return (
            <div className="user-class-card">
                <h1>My Info- This class component</h1>
                {/* <h2>Count: {count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>click to increase</button> */}
                <h2>{name || ""}</h2>
                 <h2>{location || ''}</h2>
            </div>
        )

    }
 

}
export default UserClass;