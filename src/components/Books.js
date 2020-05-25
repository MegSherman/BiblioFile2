import React, {Component} from 'react';

class Books extends Component {
    constructor (){
        super ()
        this.state = {
            isEditing: false,
            userInput: ''
        }
    }

    toggleEdit () {
        this.setState ({
            isEditing: !this.state.isEditing
        })
    }
    handleChange (e) {
        this.setState ({
            userInput: e.target.value
        })
    }
    handleSaveLocation () {
        const {data} = this.props
        this.props.editLocation (data.id, this.state.userInput)
        this.toggleEdit () 
    }

    render () {
        return (
            <div class="book-info">
                <img src={this.props.data.image} alt={this.props.data.title}/>
                <p class="title">{this.props.data.title}</p>
                <p class="author">{this.props.data.author}</p>
                {!this.state.isEditing ? (
                <p onDoubleClick = {() => this.toggleEdit()}> {this.props.data.location} </p>
                ) : (
                <div>
                    <input onChange={e => this.handleChange(e)}/>
                    <button onClick = {() => this.toggleEdit ()}>Cancel</button>
                    <button onClick = {() => this.handleSaveLocation ()}>Save</button>
                </div>
                )}
                <button onClick= {() => this.props.deleteBook (this.props.data.id)}>Delete Book</button>
            </div>
        )
    }
}

export default Books