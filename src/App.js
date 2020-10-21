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
import mockCats from './mockCats.js'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats: mockCats
    }
  }

  createNewCat = (newcat) => {
    console.log(newcat)
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
              let id = props.match.params.id
              let cat = this.state.cats.find(cat => cat.id === parseInt(id))
              return (
                <CatShow cat={ cat } />
              )
            }}
          />
          <Route
            path="/catnew"
            render={ (props) => <CatNew createNewCat={ this.createNewCat } /> }
          />
          <Route path="/catedit/:id" component={ CatEdit } />
          <Route component={ NotFound } />
        </Switch>

        <Footer />
      </Router>
    )
  }
}
export default App
