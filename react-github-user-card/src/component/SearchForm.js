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
    <form>
     <input type="text" name="user" placeholder="Username"/>
     <button type="button">Submit</button>
   </form>
);
  }
}

export default SearchForm;
