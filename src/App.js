import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FeedbackForm from './component/FeedBackForm';
import ReviewList from "./component/ReviewList";



function App() {
  return (

    <Router>
      <div>
        <h1>Movie reviews</h1>
        <nav>
          <Link to="/feedback">Give feedback</Link>
          <Link to="/reviews">View reviews</Link>
        </nav>
        <Routes>
          <Route path="/feedback" element={<FeedbackForm/>}/>
          <Route path="/reviews" element={<ReviewList/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;

