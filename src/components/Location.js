import React, {Component} from 'react';

class Location extends Component {
    constructor() {
        super ()
        this.state = {
            collection: []
        }
    }

handleChange (e) {
    this.props.listByLocation (e.target.value)
}
    
    render () {
        return (
            <div class="input-line">
                <h2>Search By Location:</h2>
                <input onChange={e => this.handleChange(e)}class="input-box" type="text" placeholder="  Enter Location Here"/>
            </div>
        )
    }
}

export default Location