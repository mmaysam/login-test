import React from "react";
import Login from "./Login";
var isLoggedIn = true;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/* or you can do the same 
      {isLoggedIn && <h1>hello</h1>}
      DO NOT FORGET {} */}
    </div>
  );
}

export default App;
