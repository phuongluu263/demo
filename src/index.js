import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

class app extends React.Component{
  render(){
    return(
      <div className=''>


        <App />
      </div>
    )
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
