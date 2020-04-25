import React, { useState } from 'react';
import './App.css';
import CarIndex from './components/Cars/CarIndex';
import PeopleSelect from './components/PeopleSelect';

function App() {
  const [personId, setPersonId] = useState(0)
  const handleChange = (e) => {
    setPersonId(e.target.value)
  }
  return (
    <div className="App">
      <PeopleSelect personId={personId} handleChange={handleChange}/>
      <CarIndex personId={personId}/>
    </div>
  );
}

export default App;
