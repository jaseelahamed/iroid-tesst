
// import './App.css';
// import Home from "./components/Home"
// import Login from "./components/Login"
// import Register from "./components/Register"

// function App() {

  
//   return (
//     <div className="App">
   
//      <Register/>
    
//     </div>
//   );
// }

// export default App;

import './App.css';
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Main from "./components/Main"
import {
  BrowserRouter as Router, Routes,
   
  Route,
  

} from "react-router-dom";

function App() {
 
  return (
    <div className="App">

<Router>
<Routes>

<Route path="/register"  element={<Register/>}/>
<Route path="/"  element={<Main/>}/>
<Route path="/home"  element={<Home/>}/>
<Route path="/Login"  element={<Login/>}/>






</Routes>



</Router>



      {/* <Router>
     
      <Routes>
  
      <Route exact path="/" Component={<Register />} />
  <Route exact path="/Login"Component={<Login />}/>
  <Route exact path="/home" Component={<Home />}/>
  </Routes>
 


      </Router> */}

    </div>
  );
}

export default App;