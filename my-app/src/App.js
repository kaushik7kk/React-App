import './App.css';
import React, { Fragment } from 'react';
import TopBarMain from './components/TopBar/TopBarMain';
import SideBarMain from './components/SideBar/SideBarMain';
import ContentLayout from './components/Content/Contentlayout';

function App() {
  return (
    <Fragment>
      <TopBarMain />
      <div className='parentDiv'>
        <SideBarMain />
        <ContentLayout />
      </div>
    </Fragment>
  );
}

export default App;
