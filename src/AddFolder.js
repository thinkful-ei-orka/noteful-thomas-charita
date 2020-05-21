import React from 'react';
import FileContext from './FileContext';
import { NavLink } from 'react-router-dom';

class AddFolder extends React.Component {
    static contextType = FileContext;

    buttonSubmit= (e)=> {
        e.preventDefault();
        let name= {name: e.target.value};
        this.context.AddFolder(name)
    }

    render () {
        return (
            <form>
                <label for="name">Name of Folder:</label>
                <input type="text" id="name"></input>
                <button type="Submit" onSubmit={(e) => this.buttonSubmit(e)}>Submit</button>
            </form>
        )
    }
    
}

export default AddFolder; 