import React from 'react';
import './App.css';
import {Box} from "@mui/material";
import Home from "./components/Home/Home";

function App() {
  return (
    <Box sx={{backgroundColor: '#202020', height: '100vh'}} p={10}>
      <Home />
    </Box>
  );
}

export default App;
