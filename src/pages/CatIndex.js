import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CatIndex extends Component{
  render(){
    return(
      <React.Fragment>
        <div id="index-body">
          <h3 className="title">Meet the Cats!</h3>
          <br />
          <div id="button-set">
            { this.props.cats.map((cat, index) => {
              return (
                <Link
                  to={`/catshow/${cat.id}`} key={ index }
                >
                  <button className="index-button">
                    Hi, I'm { cat.name } 🐾
                  </button>
                </Link>
              )
            })}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default CatIndex
