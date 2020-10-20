import React, { Component } from 'react'
import oopsToast from '../assets/no-toast.png'

class NotFound extends Component{
  render(){
    return(
      <React.Fragment>
        <div id="not-found-body">
          <h3>Oops something went wrong!</h3>
          <img src={ oopsToast } alt="cat yawning" className="cat" />
        </div>
      </React.Fragment>
    )
  }
}
export default NotFound
