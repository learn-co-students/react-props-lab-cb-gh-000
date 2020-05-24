// Code The Spaceship Component Here
import React, { Component } from "react"
import ReactDOM from "react-dom"

class Spaceship extends Component{
    render(){
        return(
            <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.speed}</p>
            <p>{this.props.hasRockets}</p>
            <p>{this.props.colors}</p>
        </div>
        )
    }
}
Spaceship.defaultProps ={
    speed: "slow",
    hasRockets: false,
    colors: ["black","red"]
}
export default Spaceship
