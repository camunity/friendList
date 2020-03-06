import React from 'react'
import ShowList from './ShowList'
import AddFriend from './AddFriend'

class FriendsContainer extends React.Component{

    // This constructor sets the initial state of our FriendsContainer,
    // The heading we see at the top of the app, and our initial list of Friends
    constructor(props){
        super(props)
        this.state = {
            name: 'Cam Flowers',
            friends: ['Boubacar', 'Naomi', 'Kheperah', 'Francisco']
        }

        // We need to bind this function to this so it can call instance functions like
        // this.props or this.setState
        this.addFriend = this.addFriend.bind(this)
    }

    //This function updates our FriendsContainer state, and adds to our array of Friends
    // Important to note that this function updates our array in the FriendsContainer but we
    // pass it down to the AddFriend component as props so it can be called whenever the 
    // AddFriend button is called. This is an excellent example of how we use props and state
    // To communicate data changes in React
    addFriend(friend){
        // we use the array concat function to add to our array
        this.setState((state) => ({
            friends: state.friends.concat([friend])
        }))
    }

    //We render a container for our entire application that contains a heading,
    //Our AddFriend input/button container and our ShowList component which
    //Shows our list of friends. We pass certain props down to our subcomponents
    //Because FriendsContainer is the parent component.
    render(){
        return(
            <div>
                <h3> Name: {this.state.name} </h3>
                <AddFriend addNew={this.addFriend}/>
                <ShowList names={this.state.friends} />
            </div>
        )
    }

}

export default FriendsContainer