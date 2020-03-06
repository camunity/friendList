import React from 'react'

// extends React.Component to create a new Component
class HelloUser extends React.Component {

    constructor(props){
        super(props)

        // we can define state in our Constructor
        this.state = {
            userName: 'camunity'
        }

        this.handleChange = this.handleChange.bind(this)

    }
// you can pass an event parameter to your function
    handleChange(event){
        console.log(event.target.value)
        //we use the event.target to see the value of our input
        this.setState({
            userName: event.target.value
        })
    }

    // describes what the UI will look like for the component
    render(){
        return(
            <div> 
                Hello {this.state.userName} <br /> 
                Change Username:
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={this.handleChange}
                />
            </div>
        )
    }

}

export default HelloUser
