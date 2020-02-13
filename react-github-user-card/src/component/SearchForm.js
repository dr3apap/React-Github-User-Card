import React from "react";
import axios from "axios";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

handleChange = e =>{
this.setState({
  user:e.target.value
})

}

handleSubmit = e =>{
e.preventDefault()
this.props.changeHandler(this.state.user)
axios.all[(
  axios.get(`https://api.github.com/users/${this.state.user}/followers`),
    axios.get(`https://api.github.com/users/${this.state.user}`)
    )]
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

}//handleSubmit closing bracket


  render() {
    return(
    <form className="Search" onClick={this.handleSubmit}>
     <input type="text" name="user" placeholder="Username" onChange={this.handleChange} value={this.state.user}/>
     <button className="Search-btn" type="button">Submit</button>
   </form>
);
  }
}

export default SearchForm;
