import React from 'react';

function NoteSidebar(props) {
  console.log(props);
  let folderName = props.match.params.folderName;

  return (
    <div className="note-sidebar">
      <button onClick={() => props.history.goBack()}>Go back</button>
      <h2>{folderName}</h2>
    </div>
  );
}

export default NoteSidebar;
