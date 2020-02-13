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
.then(axios.spread((res, res1)=>{
  res1.data.map(follower =>{
    axios.get(follower.url)
    .then(res1 =>{
      this.setState({
        github:res.data,
        github1:[...this.state.github1, res1.data]
      }); // this.setState stopped here
    },(error) =>{
      console.log(error)
    }); //second.then call for the follower stopped here
  }); //Map stopped here

}),(error)=>{
  console.log(error)
}); // axios spread stopped here


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
