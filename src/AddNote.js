import React from 'react';
import FileContext from './FileContext';
import PropTypes from 'prop-types'

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
            this.setState({ nameValue: name, nameFlag: true })
        } else {
            this.setState({ nameValue: name })
        }
    }

    setContent = content => {
        if (this.state.contentValue.length >= 3) {
            this.setState({ contentValue: content, contentFlag: true })
        } else {
            this.setState({ contentValue: content })
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
            return (<option key={folder.id} value={folder.id}>{folder.name}</option>)
        })

        return (
            <form onSubmit={(e) => this.buttonSubmit(e)}>
                <div className='container'>
                    <label htmlFor="folderSelect">Pick a folder: </label>
                    <select id="folderSelect" name="folderSelect">
                        {folderselect}
                    </select>
                </div>
                <div className='container'>
                    <label htmlFor="name">Name of Note:</label>
                    <input type="text" name="name" id="name"
                        value={this.state.nameValue}
                        onChange={e => this.setName(e.target.value)}></input>
                </div>
                {this.state.nameFlag && this.state.nameValue.length < 3 &&
                        <p className="error">{this.validateNoteName()}</p>}
                <div className='container'>
                    <label htmlFor="content">Note's Content:</label>
                    <textarea rows='8' cols='50' type="text" name="content" id="content"
                        value={this.state.contentValue}
                        onChange={e => this.setContent(e.target.value)}></textarea>
                </div>
                {this.state.contentFlag && this.state.contentValue.length < 3 &&
                        <p className="error">{this.validateNoteContent()}</p>}
                <button type="Submit"
                        disabled={this.validateNoteName() ||
                            this.validateNoteContent()}>Submit</button>
            </form >
        )
    }

}

AddNote.propTypes = {
    history: PropTypes.object.isRequired,
}

export default AddNote;
