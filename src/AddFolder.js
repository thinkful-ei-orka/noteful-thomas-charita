import React from 'react';
import FileContext from './FileContext';
import { NavLink } from 'react-router-dom';

class AddFolder extends React.Component {
    static contextType = FileContext;

    buttonSubmit = (event) => {
        event.preventDefault();
        let name = { name: event.target.elements.name.value };
        console.log(this.context);
        this.context.addFolder(JSON.stringify(name), this.props.history)
    }

    render() {
        return (
            <form onSubmit={(e) => this.buttonSubmit(e)}>
                <label htmlFor="name">Name of Folder:</label>
                <input type="text" name="name" id="name"></input>
                <button type="Submit" >Submit</button>
            </form>
        )
    }

}

export default AddFolder; 