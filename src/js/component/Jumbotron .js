import React from 'react'

function Jumbotron () {
    let styleText = {
        fontSize: "70px"
    }
  return (
        <div className="p-5 my-4 bg-primary bg-opacity-10 rounded-3">
            <div className="container-fluid py-3">
                <h1 className="display-5 fw-normal" style={styleText}>A Warm Welcome!</h1>
                <p className="col-md-12 fs-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book. </p> <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
            </div>
        </div>
        
  )
}

export default Jumbotron 