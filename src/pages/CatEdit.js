import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import Emoji from 'a11y-react-emoji'

class CatEdit extends Component{
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: this.props.cat.name,
        age: this.props.cat.age,
        enjoys: this.props.cat.enjoys
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
    this.props.updateCat(this.state.form, this.props.cat.id)
    this.setState({ success: true })
  }

  render(){
    return(
      <React.Fragment>
        <div id="new-body">
          <h3 className="title">Update Your Cat's Information<span><Emoji symbol="🐱" label="cat"/></span></h3>
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
              Update Cat Profile
            </Button>
          </Form>
          { this.state.success &&
            <Redirect to={ `/catshow/${this.props.cat.id}` } />
          }
        </div>
      </React.Fragment>
    )
  }
}
export default CatEdit
