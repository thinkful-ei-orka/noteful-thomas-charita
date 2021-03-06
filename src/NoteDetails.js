import React from 'react';
import Note from './Note';
import FileContext from './FileContext';
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';

class NoteDetails extends React.Component {
  static contextType = FileContext;

  render() {
    // if (this.props.note === undefined) {
    //   return <Redirect to='/'></Redirect>
    // }

    let noteName = this.props.match.params.noteName;
    let noteMatch = this.context.notes.filter((note) => note.name === noteName);
    if (noteMatch[0] === undefined) {
      return <p>Loading</p>
    }

    return (
      <div>
        <Note note={noteMatch[0]} isLink={false} history={this.props.history} />
        <p>{noteMatch[0].content}</p>
      </div>
    );
  }
}

NoteDetails.propTypes = {
  history: PropTypes.object.isRequired,
  isLink: PropTypes.bool,
  note: PropTypes.object
}

export default NoteDetails;
