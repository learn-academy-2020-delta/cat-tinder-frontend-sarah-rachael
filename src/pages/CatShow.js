import React, { Component } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import catPic from '../assets/cat.png'

class CatShow extends Component{
  render(){
    console.log(this.props.cat)
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
              <Link
                to={`/catedit/${this.props.cat.id}`}
              >
                <Button color="secondary" className="show-page-buttons">
                  Edit Cat Profile
                </Button>
              </Link>
              <Link
                to={"/catindex"}
              >
                <Button color="secondary" className="show-page-buttons" onClick={ () => this.props.deleteCat(this.props.cat.id) }>
                  Delete Cat Profile
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default CatShow
