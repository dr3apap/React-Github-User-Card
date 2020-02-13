import React from "react";
import "./App.css";
import axios from "axios";
import GitHubCards from "./component/GitHubCards";
import SearchForm from "./component/SearchForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      github: {},
      github1:[],
      user:""
    };
  }


changeHandler(login){
const newUser = {
github:{},
github1:[],
user:login
}
this.setState({
  github:newUser,
  github1:[...this.state.github1, newUser]
});

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
}); //.then first call for the two data's  and axios spread stopped here


}// componentDidMount closing bracket



  render() {
   return(

      <div className="App">
        <SearchForm changeHandler={this.changeHandler}/>
        <GitHubCards github1={this.state.github1} github={this.state.github}/>
      </div>
    );
  }
}

export default App;
