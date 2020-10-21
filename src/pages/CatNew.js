import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import Emoji from 'a11y-react-emoji'

class CatNew extends Component{
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: ""
      },
      success: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createNewCat(this.state.form)
    this.setState({ success: true })
  }

  render(){
    return(
      <React.Fragment>
        <div id="new-body">
          <h3 className="title">Join the Fun! <span><Emoji symbol="🐱" label="cat"/></span></h3>
          <h4 className="title">Enter Your Cat's Information</h4>
          <br />
          <Form className="form">
            <FormGroup>
              <Label for="name">Cat's Name</Label>
              <Input
                type="text"
                name="name"
                className="form-input"
                onChange={ this.handleChange }
                value={ this.state.form.name }
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">Cat's Age</Label>
              <Input
                type="number"
                name="age"
                min="1"
                max="30"
                className="form-input"
                onChange={ this.handleChange }
                value={ this.state.form.age }
              />
            </FormGroup>
            <FormGroup>
              <Label for="enjoys">What does your cat enjoy?</Label>
              <Input
                type="textarea"
                name="enjoys"
                className="form-input"
                onChange={ this.handleChange }
                value={ this.state.form.enjoys }
              />
            </FormGroup>
            <Button
              name="submit"
              className="button"
              onClick={ this.handleSubmit }
            >
              Create New Cat
            </Button>
          </Form>
          { this.state.success && <Redirect to="/catindex" /> }
        </div>
      </React.Fragment>
    )
  }
}
export default CatNew
