import React from 'react';
import Note from './Note';
import FileContext from './FileContext';

class NoteDetails extends React.Component {
  static contextType = FileContext;

  render() {
    let noteName = this.props.routeProps.match.params.noteName;
    let noteMatch = this.context.notes.filter((note) => note.name === noteName);

    return (
      <div>
        <Note note={noteMatch[0]} isLink={false}/>
        <p>{noteMatch[0].content}</p>
      </div>
    );
  }
}

export default NoteDetails;
