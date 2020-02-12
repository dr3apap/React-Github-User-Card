import React from "react";
import "./App.css";
import axios from "axios";
import GitHubCards from "./component/GitHubCards";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      github: [],
      github1:[]
    };
  }


componentDidMount(){
axios.all([
axios
.get(`https://api.github.com/users/dr3apap`),
  axios.get(`https://api.github.com/users/dr3apap/followers`)
])
.then(axios.spread ((res, res1) => {
  console.log("The data was:", res);
  console.log("the data was:", res1);
  this.setState({
    github:res.data,
    github1:res1.data

  });
},err =>{
  console.log("The data was not returned", err);
}));


}



  render() {
   return(

      <div className="App">
        <GitHubCards github1={this.state.github1} github={this.state.github}/>
      </div>
    );
  }
}

export default App;
