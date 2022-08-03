import React,{useState} from 'react';
import ShowProfileCard from './components/ProfileCard';
import ShowList from './components/MatchesList';

function App() {
  return (
    <div className="App">
      <h1>AstroMatch</h1>
    {/*   <ShowList/> */}
      <ShowProfileCard/>
    </div>
  );
}

export default App;
