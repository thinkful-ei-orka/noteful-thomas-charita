import React from 'react';

const FileContext = React.createContext();
export default FileContext;

export class FileContextProvider extends React.Component {
    state = {
        folders: [],
        notes: []
    }

    componentDidMount = () => {
        //add promise all?
        console.log('didmount fired');

        fetch('http://localhost:9090/folders')
            .then(res => {return res.json()})
            .then(folders => {
                this.setState({
                    folders: folders
                })
            })

        fetch('http://localhost:9090/notes')
            .then(res => {
                if (!res.ok) {
                    throw new Error("bad stuff yo");
                } return res.json()
            })
            .then(notes => {
                this.setState({
                    notes: notes
                })
            })
            .catch(error => { return error.message });
    }

    deleteNote = (noteID,history) => {
        console.log(history)
        fetch(`http://localhost:9090/notes/${noteID}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("bad stuff yo");
                } return res.json()
            })
            .then(data => {
                history.push('/')
                let newNotes = this.state.notes.filter(note =>
                    note.id !== noteID)
                this.setState({
                    notes: newNotes
                })
            })
            .catch(error => { return error.message })
    }

    addFolder =(name) => {
        fetch(`http://localhost:9090/folders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: name
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("bad stuff yo");
                } return res.json()
            })
            .then(data => {
                //history.push('/')
                let newFolders = [...this.state.folders,data]
                this.setState({
                    folders: newFolders
                })
            })
            .catch(error => { return error.message })
    }
    

    render() {
        return (
            <FileContext.Provider value={{
                folders: this.state.folders,
                notes: this.state.notes,
                deleteNote: this.deleteNote,
            }}>
                {this.props.children}
            </FileContext.Provider>
        )
    }
};
