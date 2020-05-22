import React from 'react';
import FileContext from './FileContext';
import PropTypes from 'prop-types';

class AddFolder extends React.Component {
    state = {
        value: '',
        lengthFlag: false
    }

    static contextType = FileContext;

    buttonSubmit = (event) => {
        event.preventDefault();
        let name = { name: event.target.elements.name.value };
        console.log(this.context);
        this.context.addFolder(JSON.stringify(name), this.props.history)
    }

    setName = name => {
        if (this.state.value.length >= 3) {
            this.setState({value: name, lengthFlag: true})
        } else {
            this.setState({value: name})
        }
    }

    validateFolderName = () => {
        let folderName = this.state.value;
        if (folderName.length < 3) {
            return 'Name needs to be at least 3 letters long';
        }

        if (this.context.folders.find(folder => folder.name === folderName)) {
            return 'This Folder Name already exists.';
        }

        return ''; 
    }

    render() {
        return (
            <form onSubmit={(e) => this.buttonSubmit(e)}>
                <label htmlFor="name">Name of Folder:</label>
                {this.state.lengthFlag &&
                <p className="error">{this.validateFolderName()}</p>}
                <input type="text" name="name" id="name" value={this.state.value} onChange={e => this.setName(e.target.value)}></input>
                <button type="Submit" disabled={this.validateFolderName()}>Submit</button>
            </form>
        )
    }

}

AddFolder.propTypes = {
    history: PropTypes.object.isRequired,
}

export default AddFolder;