import React from "react";
import axios from "axios";

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }
  render() {
    return(
    <form className="Search">
     <input type="text" name="user" placeholder="Username"/>
     <button classname="Search-btn" type="button">Submit</button>
   </form>
);
  }
}

export default SearchForm;
