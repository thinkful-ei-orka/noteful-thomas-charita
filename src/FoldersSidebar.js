import React from 'react';
import Folder from './Folder';
import FileContext from './FileContext';
import { NavLink } from 'react-router-dom';

class FoldersSidebar extends React.Component {
  static contextType = FileContext;

  render() {
    let folders = [];

    this.context.folders.forEach((folder) => {
      folders.push(<Folder key={folder.id} folder={folder} />)
    });

    return (
      <div className="folders">
        {folders}
        <NavLink to=
        <button type="button">Add folder</button>
        </NavLink>
      </div>
    );
  }
}

export default FoldersSidebar;
