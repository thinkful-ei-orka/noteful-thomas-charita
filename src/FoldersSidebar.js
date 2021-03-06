import React from 'react';
import Folder from './Folder';
import FileContext from './FileContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

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
        <Link to="/addFolder">
          <button type="button">Add folder</button>
        </Link>
      </div>
    );
  }
}

FoldersSidebar.propTypes = {
  folders: PropTypes.arrayOf(PropTypes.id),
}

export default FoldersSidebar;
