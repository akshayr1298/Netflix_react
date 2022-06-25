import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {actions,originals} from './urls'
function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Banner/>
      <RowPost url = {originals} title = 'Netflix Originals'/>
      <RowPost url = {actions} title = 'Actions' isSmall/>


    </div>
   
  );
}

export default App;
