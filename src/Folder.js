import React from 'react';
import { NavLink } from 'react-router-dom';

function Folder(props) {
  let navLink = '/' + props.folder.name;

  return (
    <NavLink to={navLink}>
      {props.folder.name}
    </NavLink>
  );
}

export default Folder;
