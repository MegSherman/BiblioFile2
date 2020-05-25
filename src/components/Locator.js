import React, {Component} from 'react';
import axios from 'axios';


class Locator extends Component {
constructor () {
    super ()
    this.state = {
        userInput: ''
    }
}

handleChange (e) {
    this.setState ({
        userInput: e.target.value
    })
}

locationAnnouncement () {

}
    
    render () {
        return (
            <div class="input-line">
                <h2>Find My Book:</h2>
                <input onChange={e => this.handleChange (e)} class="input-box" type="text" placeholder="  Enter Title Here"/>
                <button onClick={() => this.locationAnnouncement()} class="button" >FIND</button>
                {/* <h2>It's in the ({collection[index].location}). Happy reading!</h2> */}
            </div>
        )
    }

}

export default Locator