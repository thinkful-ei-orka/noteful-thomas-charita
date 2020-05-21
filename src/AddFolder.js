import React from 'react';
import { NavLink } from 'react-router-dom';

class addFolder extends React.Component {

    render () {
        return (
            <div>
                <label for="name">Name of Folder:</label>
                <input type="text" id="name"></input>
            </div>
        )
    }
    
}

export default addFolder; 