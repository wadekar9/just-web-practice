import { useState } from 'react'
import CakeComponent from './components/CakeComponent';
import IceCreamComponent from './components/IceCreamComponent';
import UserComponent from './components/UserComponent'
import './App.css'

function App() {

  return (
    <>
      <CakeComponent />
      <IceCreamComponent/>
      <UserComponent/>
    </>
  )
}

export default App
