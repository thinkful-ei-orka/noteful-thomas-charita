import React from 'react';
import FileContext from './FileContext';

class AddNote extends React.Component {
    static contextType = FileContext;

    buttonSubmit = (event) => {
        event.preventDefault();
        let timeModify = new Date().toJSON();
        let note = {
                name: event.target.elements.name.value,
                content: event.target.elements.content.value,
                folderId: event.target.elements.folderSelect.value,
                modified: timeModify 
            };
        this.context.addNote(JSON.stringify(note), this.props.history)
    }

    render() {
        let folderselect = this.context.folders.map(folder => {
            return ( <option key={folder.id} value={folder.id}>{folder.name}</option> )
        })

        return (
            <form onSubmit={(e) => this.buttonSubmit(e)}>
                <select id="folderSelect" name="folderSelect">
                    {folderselect}        
                </select>
                <label htmlFor="name">Name of Note:</label>
                <input type="text" name="name" id="name"></input>
                <label htmlFor="content">Note's Content:</label>
                <input type="text" name="content" id="content"></input>
                <button type="Submit" >Submit</button>
            </form>
        )
    }

}

export default AddNote;
