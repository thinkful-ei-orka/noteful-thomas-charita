import React from 'react';
import Note from './Note';
import FileContext from './FileContext';
import { Redirect } from 'react-router-dom';

class NotesList extends React.Component {
  static contextType = FileContext;

  render() {
    let notes = [];

    if (typeof this.props.routeProps !== 'undefined') { // A folder is filtered
      let folderName = this.props.routeProps.match.params.folderName;
      let folderMatch = this.context.folders.filter((folder) => folder.name === folderName);
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
        <button type="button">Add note</button>
      </div>
    );
  }
}

export default NotesList;
