import { useState } from 'react'
import './App.css'
import Header from './components/header'
import * as React from "react";
import { Toaster } from 'react-hot-toast';

import { Outlet } from 'react-router-dom'
// import { Navigate, redirect } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Outlet />
      <Toaster position="bottom-center"
        reverseOrder={false} />
    </div>
  )
}

export default App
