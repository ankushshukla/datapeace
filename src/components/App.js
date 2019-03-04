import React from "react";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";


const App = () => (
 
    <Router>
      <div className="onboarding">
        <Main />
       </div>
    </Router> 
);

export default App;
