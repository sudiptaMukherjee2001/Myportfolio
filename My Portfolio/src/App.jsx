import { useState } from "react";
import { BrowserRouter as Router, } from 'react-router-dom';
import Navbar from './component/Navbar';

import AnimatedRoute from "./component/AnimatedRoute";
function App() {

  return (
    <Router>
      <Navbar />
      <AnimatedRoute />

    </Router >
  )


}

export default App;
