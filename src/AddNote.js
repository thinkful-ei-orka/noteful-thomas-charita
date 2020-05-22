import React from 'react';
import FileContext from './FileContext';

class AddNote extends React.Component {
    state = {
        nameValue: '',
        contentValue: '',
        nameFlag: false,
        contentFlag: false
    }

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

    setName = name => {
        if (this.state.nameValue.length >= 3) {
            this.setState({nameValue: name, nameFlag: true})
        } else {
            this.setState({nameValue: name})
        }
    }

    setContent = content => {
        if (this.state.contentValue.length >= 3) {
            this.setState({contentValue: content, contentFlag: true})
        } else {
            this.setState({contentValue: content})
        }
    }

    validateNoteName = () => {
        let noteName = this.state.nameValue;
        if (noteName.length < 3) {
            return 'Name needs to be at least 3 letters long';
        }

        return ''; 
    }


    validateNoteContent = () => {
        let noteContent = this.state.contentValue;
        if (noteContent.length < 3) {
            return 'Content needs to be at least 3 letters long';
        }

        return ''; 
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
                {this.state.nameFlag &&
                <p className="error">{this.validateNoteName()}</p>}
                <input type="text" name="name" id="name"
                       value={this.state.nameValue}
                       onChange={e => this.setName(e.target.value)}></input>
                <label htmlFor="content">Note's Content:</label>
                {this.state.contentFlag &&
                <p className="error">{this.validateNoteContent()}</p>}
                <input type="text" name="content" id="content"  
                       value={this.state.contentValue} 
                       onChange={e => this.setContent(e.target.value)}></input>
                <button type="Submit" 
                        disabled={this.validateNoteName() ||
                                  this.validateNoteContent()}>Submit</button>
            </form>
        )
    }

}

export default AddNote;
