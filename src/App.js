import React from 'react';
import { Route } from 'react-router-dom';
import { FileContextProvider } from './FileContext';

import Header from './Header';
import FoldersSidebar from './FoldersSidebar';
import NoteSidebar from './NoteSidebar';
import NotesList from './NotesList';
import NoteDetails from './NoteDetails';
import AddFolder from './AddFolder';
import AddNote from './AddNote';
import AddSidebar from './AddSidebar'
import ErrorPage from './ErrorPage';

class App extends React.Component {

  render() {
    return (
      <>
        <Header></Header>
        <ErrorPage>
        <FileContextProvider>
          <div className="body">
            <div className="sidebar">
              <Route path='/' exact component={FoldersSidebar} />
              <Route path='/addFolder' exact component={AddSidebar} />
              <Route path='/addNote' exact component={AddSidebar} />
              <Route path='/folders/:folderName/' exact component={FoldersSidebar} />
              <Route path='/folders/:folderName/:noteName' component={NoteSidebar} />
            </div>
            <main>
              <Route path='/' exact component={NotesList} />
              <Route path='/addFolder' exact component={AddFolder} />
              <Route path='/addNote' exact component={AddNote} />
              <Route path='/folders/:folderName' exact component={NotesList} /> 
              <Route path='/folders/:folderName/:noteName' component={NoteDetails} />
            </main>
          </div>
        </FileContextProvider>
        </ErrorPage>
      </>
    );
  }
}

export default App;
