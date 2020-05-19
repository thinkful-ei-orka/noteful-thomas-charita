import React from 'react';
import Note from './Note';

function NotesList(props) {
  let notes = [];

  if (typeof props.routeProps !== 'undefined') { // A folder is filtered
    let folderName = props.routeProps.match.params.folderName;
    let folderMatch = props.state.folders.filter((folder) => folder.name === folderName);
    let folderId = folderMatch[0].id;

    let notesInFolder = props.state.notes.filter((note) => note.folderId === folderId);
    notesInFolder.forEach((note) => {
      notes.push(<Note key={note.id} note={note} state={props.state} isLink={true}/>);
    });
  } else { // We are on the root page
    props.state.notes.forEach((note) => {
      notes.push(<Note key={note.id} note={note} state={props.state} isLink={true}/>);
    });
  }

  return (
    <div>
      {notes}
      <button type="button">Add note</button>
    </div>
  );
}

export default NotesList;
