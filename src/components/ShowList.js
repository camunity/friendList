import React from 'react'

class ShowList extends React.Component{

    //Example of Regular Function syntax vs Arrow Function Syntax
    // functionName(names){
    //     var temp = []
    //     for(var i; i < names.length; i++){
    //         temp.push(<li> {i} </li>)
    //     }
    //     return(temp)
    // }

    // functionName = (friend) => <li>{friend}</li>


    
    //Simple Component that returns a heading 
    //and an unordered list of our Friend's names dynamically
    //using an array.map function
    render(){
        return(
            <div>
                <h3> Friends </h3>
                <ul>
                    {this.props.names.map((friend)=> <li>{friend}</li>)}
                </ul>
            </div>
        )
    }

}

export default ShowList

/* 
// Because this component doesn't use state, we can rewrite it to be a functional component
// instead of a class based component. In order to do that it'd look something like this:

function ShowList() {
  return (
            <div>
                <h3> Friends </h3>
                <ul>
                    {this.props.names.map((friend)=> <li>{friend}</li>)}
                </ul>
            </div>
        )
}

export default ShowList;

//The benefit of turning components that don't use state into simple aka functional
//components is readability, simplicity, and optimization since we don't need to run
//unnecessary functions to initialize this component. You should highly consider rewriting
//any component that isn't using state as a functional component.


*/

