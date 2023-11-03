import React from 'react'
import rigoImage from "../../img/rigo-baby.jpg";

function Card(props) {
  return (
        <div className="card text-center" style={{width: "16rem"}}>
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">{props.description}</p>
    <a href="#" className="btn btn-primary">Find out more!</a>
  </div>
</div>
  )
}

export default Card