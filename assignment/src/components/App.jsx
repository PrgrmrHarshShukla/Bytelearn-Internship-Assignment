import {BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import Quiz from './Quiz'
import Result from "./Result"
import Failure from "./Failure"

function App() {

  return (
    <div className="flex flex-col w-screen h-screen items-center bg-gray-300">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element = {<Quiz />} />
            <Route exact path="/right" element = {<Result/>} />
            <Route exact path="/wrong" element = {<Failure />} />            
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
