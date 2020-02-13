import React from "react";
import GitHub from "./GitHub";
import SearchForm from "./SearchForm";

class GitHubCards extends React.Component{
  constructor(props){
    super(props)
  }

render(){
return(
  <div>
  <SearchForm/>
  <GitHub github={this.props.github}/>
{this.props.github1.map(info =>(<GitHub key={info.id} github={info}/>))}


  </div>
)

}

}
export default GitHubCards;
