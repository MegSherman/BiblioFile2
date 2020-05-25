import React, {Component} from 'react';
// import axios from 'axios';


class Locator extends Component {
constructor () {
    super ()
    this.state = {
        book: {},
        userInput: ''
    }
}

handleChange (e) {
    this.props.getBook (e.target.value)
}
    
    render () {
        return (
            <div class="input-line">
                <h2>Find My Book:</h2>
                <input
                onChange={e => this.handleChange(e)} 
                class="input-box" type="text" placeholder="  Enter Title Here"/>
                {/* <h2>It's in the ({collection[index].location}). Happy reading!</h2> */}
            </div>
        )
    }

}

export default Locator