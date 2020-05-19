import React from 'react';
import { NavLink } from 'react-router-dom';

function Note(props) {
  let noteFolderId = props.note.folderId;
  let noteFolder = props.state.folders.filter((folder) => folder.id === noteFolderId);
  let navLink = `/${noteFolder[0].name}/${props.note.name}`;

  let modifiedDate = new Date(props.note.modified);

  let date = modifiedDate.getDate();
  let month = modifiedDate.getMonth();
  let year = modifiedDate.getFullYear();
  let dateString = date.toString();

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (dateString.length === 2 && dateString[0] === '1') { // if 10th - 19th
    date += 'th';
  } else if (dateString[dateString.length - 1] === '1') { // if ends in 1
    date += 'st';
  } else if (dateString[dateString.length - 1] === '2') { // if ends in 2
    date += 'nd';
  } else if (dateString[dateString.length - 1] === '3') { // if ends in 3
    date += 'rd';
  } else { // everything else
    date += 'th';
  }
  month = months[month];

  let fullDate = `${date} ${month} ${year}`;

  const handleClick = (e) => {
    if (!props.isLink) {
      e.preventDefault();
    }
  }
  let isLinkClass = 'isLink-' + props.isLink;

  return (
    <NavLink to={navLink} onClick={(e) => handleClick(e)} className={isLinkClass}>
      <div className="title">
        <h2>{props.note.name}</h2>
        <p>Date modified on {fullDate}</p>
      </div>
      <button type="button">Delete Note</button>
    </NavLink>
  );
}

export default Note;
