import React, { Component } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
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
              <NavLink
                to={`/catedit/${this.props.cat.id}`}
              >
                <Button color="secondary" className="show-page-buttons">
                  Edit Cat Profile
                </Button>
              </NavLink>
            </Card>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default CatShow
