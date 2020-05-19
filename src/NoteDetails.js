import React from 'react';
import Note from './Note';

function NoteDetails(props) {
  console.log(props);
  let noteName = props.routeProps.match.params.noteName;
  let noteMatch = props.state.notes.filter((note) => note.name === noteName);

  return (
    <div>
      <Note note={noteMatch[0]} state={props.state} isLink={false}/>
      <p>{noteMatch[0].content}</p>
    </div>
  );
}

export default NoteDetails;
