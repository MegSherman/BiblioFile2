import React, {Component} from 'react';


class Locator extends Component {
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
                <h2>Find My Book:</h2>
                <input class="input-box" type="text" placeholder="  Enter Title Here"/>
                <button class="button" onClick="locateBook(userInput)">FIND</button>
                {/* <h2>It's in the ({collection[index].location}). Happy reading!</h2> */}
            </div>
        )
    }

}

export default Locator