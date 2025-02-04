import React from 'react';
import { useContext } from 'react';
import { Data,Data1 } from './App';

function Counter() {
const fullName = useContext(Data);
const myAge = useContext(Data1);
  return (
    <>
<h1>My name is {fullName} and age is {myAge}</h1>
    </>
  )
}

export default Counter