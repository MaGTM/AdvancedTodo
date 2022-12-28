import React from 'react';
import './App.css';
import {Box} from "@mui/material";
import Home from "./components/Home/Home";
import {Route, Routes} from "react-router-dom";
import Day from "./components/Day/Day";

function App() {
  return (
    <Box sx={{backgroundColor: '#202020', minHeight: '100vh'}} p={10}>
      <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={'day/:date'} element={<Day />}/>
      </Routes>
    </Box>
  );
}

export default App;
