import React, {Component} from 'react';

class Location extends Component {
    constructor() {
        super ()
        this.state = {
            collection: []
        }
    }

    // locateBook (userInput) {
    //     if (userInput = collection[id].title) {
    //         return (`It's in the ${collection[index].location}. Happy reading!`)
    //     }
    // }
    
    render () {
        return (
            <div class="input-line">
                <h2>Search By Location:</h2>
                <input class="input-box" type="text" placeholder="  Enter Location Here"/>
                <button class="button" onClick="locateBook(userInput)">BROWSE</button>
            </div>
        )
    }

}

export default Location