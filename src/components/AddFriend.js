import React from 'react'

export default class AddFriend extends React.Component{

    constructor(props){
        super(props)

        //Set the state of the input to start blank

        this.state = {
            newFriend: ''
        }

        // our event listener functions need to be bound to this instance of the class
        // so they can use functions like: this.props or this.setState
        this.updateNewFriend = this.updateNewFriend.bind(this)
        this.handleAddNew = this.handleAddNew.bind(this)
    }

    // function that runs whenever the text input changes
    // the input's onChange event triggers this function
    // and passes in the event so we can run code on it to
    // update the state with the value inside of the text input

    updateNewFriend(event){
        this.setState({
            newFriend: event.target.value
        })
    }

    // function that runs when our button's onClick handler is called
    // This function alerts the FriendsContainer to add a new value
    // using the function we passed as props and passes the value 
    // stored in our input as state. Then it resets the state so our input
    // becomes blank and ready for more input again.

    handleAddNew(event){
        this.props.addNew(this.state.newFriend)
        
        this.setState({
            newFriend: ''
        })

    }


    render(){
            // Here we're rendering a container for our text input
            // and the button that triggers the FriendsContainer component to update

            return(
            <div>
                <input
                    type="text"
                    value={this.state.newFriend}
                    onChange={this.updateNewFriend}
                />
                <button onClick={this.handleAddNew}> Add Friend </button> 
            </div>
        )
    }


}