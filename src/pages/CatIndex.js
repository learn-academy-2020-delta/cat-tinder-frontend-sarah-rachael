import React, { Component } from 'react'
import { Button } from 'reactstrap'

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
                <Button key={ index } href={`/catshow/${cat.id}`}>
                  Hi, I'm { cat.name } 🐾
                </Button>
              )
            })}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default CatIndex
