import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap'
import catPic from '../assets/cat.png'

class CatShow extends Component{
  render(){
    return(
      <React.Fragment>
        <div id="show-body">
          <div id="cat-card">
            <Card>
              <CardBody>
                <CardTitle>Hi, my name is { this.props.cat.name }!</CardTitle>
                <CardSubtitle>I am { this.props.cat.age } years old.</CardSubtitle>
              </CardBody>
              <img width="30%" src={ catPic } alt="Generic cat drawing" />
              <CardBody>
                <CardText>I enjoy { this.props.cat.enjoys }.</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default CatShow
