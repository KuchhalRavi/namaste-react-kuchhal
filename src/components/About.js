import React from "react";
import User from "./User";
import UserClass from "./UserClass";
// const About = () => {

// return (
//     <div className="about">
//         <h1>This is About Page</h1>
//         <User name="Ravi Kuchhal" city="Noida"/>
//         <UserClass name="Ravi Kuchhal" city="Noida" />
//     </div>
    

//     );
// }

/** Class based component */
class About extends React.Component{
    constructor(props)
    {
        super(props);
        // console.log('parent constructor')
    }

    componentDidMount() {
        this.timer = setTimeout(() =>{
            console.log('Hiii settimeout Calling')
        },1000);
        // console.log('Parent componentDidMount  ')
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        // console.log('parent render');
        return (
            <div className="about">
                <h1>This is About Page with class component</h1>
                <User name="Ravi Kuchhal" city="Noida"/>
                <UserClass name="Ravi Kuchhal" city="Noida" />
            </div>
        );

    }
}
export default About;