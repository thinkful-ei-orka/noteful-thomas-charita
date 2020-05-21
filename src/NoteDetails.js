import React from 'react';
import Note from './Note';
import FileContext from './FileContext';
import { Redirect } from 'react-router-dom';

class NoteDetails extends React.Component {
  static contextType = FileContext;

  render() {
    // if (this.props.note === undefined) {
    //   return <Redirect to='/'></Redirect>
    // }

    let noteName = this.props.routeProps.match.params.noteName;
    let noteMatch = this.context.notes.filter((note) => note.name === noteName);
    if (noteMatch[0] === undefined) {
      return <p>Loading</p>
    }

    return (
      <div>
        <Note note={noteMatch[0]} isLink={false} history={this.props.routeProps.history} />
        <p>{noteMatch[0].content}</p>
      </div>
    );
  }
}

export default NoteDetails;
