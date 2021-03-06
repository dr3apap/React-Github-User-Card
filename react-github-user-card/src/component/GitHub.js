import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

const GitHub = props =>(

<div className="Card-wrapper">
<div className="Img-container">
<img className="Img"src={props.github.avatar_url} alt="Github Profile Image"/>
<h1 className="Header">Name:{props.github.name}</h1>
</div>
<p>Location:{props.github.location}</p>
<span>Username:{props.github.login}</span><br/>
<a href={props.github.html_url} target="_blank" rel="noopener noreferrer">Github Link</a>
<p>Followers:{props.github.followers}</p>
<p>Following:{props.github.following}</p>
<p>Bio:{props.github.bio}</p>
</div>
);
export default GitHub;
