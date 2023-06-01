import React, { Fragment } from "react";
//import Shopp from "./shopp";
//import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import News from './components/News Adda components/News';
import Navbar from './components/Navbar'

function App() {
  //const amount = useSelector(state => state.amount);
  return (
    <>
     {/* <div className="center my-3">
                <h2>Deposit/Withdraw Money</h2>
                <button type="button" class="btn btn-outline-primary btn-sm mx-1 my-3">Balance: {amount}</button>

            </div>
            <Shopp></Shopp> */}
      <Router>
        <div>
          <Navbar title="News Adda"/>
        </div>
        <div className="container my-3">
        <Routes>
          <Route exact path="/general" element={<News key="general" newsCategory="General"/>}/>
          <Route exact path="/business" element={<News key="business"  newsCategory="Business" />}/>
          <Route exact path="/health" element={<News key="health" newsCategory="Health" />}/>
          <Route exact path="/entertainment" element={<News key="entertainment" newsCategory="Entertainment" />}/>
          <Route exact path="/science" element={<News key="science" newsCategory="Science" />}/>
          <Route exact path="/sports" element={<News key="sports" newsCategory="Sports" />}/>
          <Route exact path="/technology" element={<News key="technology" newsCategory="Technology" />}/>
        </Routes>
        </div>
      </Router>
    </>
  )
}


export default App;
