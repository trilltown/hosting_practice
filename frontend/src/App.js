import React, { useState } from 'react';
import './App.css';
import CarIndex from './components/Cars/CarIndex';
import { useHttp } from './util/customHooks';
import PeopleSelect from './components/PeopleSelect';

function App() {
  const [personId, setPersonId] = useState(0)
  const handleChange = (e) => {
    setPersonId(e.target.value)
  }
  return (
    <>
      <PeopleSelect personId={personId} handleChange={handleChange}/>
      <CarIndex personId={personId}/>
    </>
  );
}

export default App;
