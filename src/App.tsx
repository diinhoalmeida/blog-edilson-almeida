import { useState } from 'react'
import { BrowserRouter, Routes as Routed, Route } from "react-router-dom";
import Blog from './pages/Blog/index';
import './App.css'
import Home from './pages/Home';

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routed>
            <Route element = { <Home /> } path="/" />
            <Route element = { <Blog /> }  path="/blog/:id" />
          </Routed>
        </div>
      </BrowserRouter>
    
  )
}

export default App;