import React, {Component} from 'react';

class Books extends Component {
    constructor (){
        super ()
        this.state = {
            isEditing: false,
            userInput: ''
        }
    }

    toggleEdit () {}
    handleChange () {}
    handleSaveLocation (e) {}

    render () {
        return (
            <div class="book-info">
                <img src={this.props.data.image} alt={this.props.data.title}/>
                <p>{this.props.data.title}</p>
            </div>
        )
    }
}

export default Books