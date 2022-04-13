import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Notfoundpage from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";
import Todopage from "./pages/TodoPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage />} />
          <Route path="/todos" element={<Todopage/>}/>
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
