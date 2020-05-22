import React from 'react';
import Note from './Note';
import FileContext from './FileContext';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class NotesList extends React.Component {
  static contextType = FileContext;

  render() {
    let notes = [];
    console.log(this.props);

    if (JSON.stringify(this.props.match.params) !== '{}') { // A folder is filtered
      let folderName = this.props.match.params.folderName;
      let folderMatch = this.context.folders.filter((folder) => folder.name === folderName);

      //If we have nothing, provide placeholder until store is updated
      if (folderMatch[0] === undefined) {
        return <p>Loading</p>
      }

      let folderId = folderMatch[0].id;
      

      let notesInFolder = this.context.notes.filter((note) => note.folderId === folderId);
      notesInFolder.forEach((note) => {
        notes.push(<Note key={note.id} note={note} isLink={true} history={this.props.history} />);
      });
    } else { // We are on the root page
      this.context.notes.forEach((note) => {
        notes.push(<Note key={note.id} note={note} isLink={true} history={this.props.history} />);
      });
    }

    return (
      <div>
        {notes}
        <Link to="/addNote">
        <button type="button">Add note</button>
        </Link>
      </div>
    );
  }
}

export default NotesList;
