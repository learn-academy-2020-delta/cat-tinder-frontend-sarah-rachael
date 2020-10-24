import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import './App.css'
// import mockCats from './mockCats.js'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount(){
    this.catIndex()
  }

  catIndex = () => {
    fetch("https://mysterious-refuge-25804.herokuapp.com/cats")
    .then(response => {
      return response.json()
    })
    .then(catsArray => {
      console.log(catsArray)
      this.setState({ cats: catsArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }


  createNewCat = (newcat) => {
    fetch("https://mysterious-refuge-25804.herokuapp.com/cats", {
      body: JSON.stringify(newcat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      return response.json()
    })
    .then(payload => {
      this.catIndex()
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

  updateCat = (cat, id) => {
    return fetch(`https://mysterious-refuge-25804.herokuapp.com/cats/${id}`, {
      // converting an object to a string
      body: JSON.stringify(cat),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.catIndex()
    })
    .catch(errors => {
      console.log("update errors:", errors)
    })
  }

  deleteCat = (id) => {
    return fetch(`https://mysterious-refuge-25804.herokuapp.com/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      return response.json()
    })
    .catch(errors => {
      console.log("delete errors:", errors)
    })
  }

  render(){
    return(
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={ Home } />
          <Route
            path="/catindex"
            render={ (props) => <CatIndex cats={ this.state.cats } /> }
          />
          <Route
            path="/catshow/:id"
            render={ (props) => {
              console.log(this.state.cats)
              let id = props.match.params.id
              console.log(id)
              let cat = this.state.cats.find(cat => cat.id === parseInt(id))
              console.log(cat)
              return (
                <CatShow cat={ cat } deleteCat={ this.deleteCat } />
              )
            }}
          />
          <Route
            path="/catnew"
            render={ (props) => <CatNew createNewCat={ this.createNewCat } /> }
          />
          <Route
            exact path={"/catedit/:id"}
            render={ (props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(cat => cat.id === parseInt(id))
              return(
                <CatEdit updateCat={ this.updateCat } cat={ cat } />
              )
            }}
          />
          <Route component={ NotFound } />
        </Switch>

        <Footer />
      </Router>
    )
  }
}
export default App
