import React from "react"
import "./App.css"
import Login from "./components/Login";
import Category from "./components/Category";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/"  element={<Login/>} />
    <Route path="/Category"  element={<Category/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
