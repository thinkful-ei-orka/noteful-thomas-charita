import React from 'react';
import Folder from './Folder';

function FoldersSidebar(props) {
  let folders = [];

  props.state.folders.forEach((folder) => {
    folders.push(<Folder key={folder.id} folder={folder} />)
  });

  return (
    <div className="folders">
      {folders}
      <button type="button">Add folder</button>
    </div>
  );
}

export default FoldersSidebar;
