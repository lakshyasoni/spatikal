import React from 'react'
import Home from '../components/pages/Home'
import Contact from '../components/pages/Contact'
import Blog from '../components/pages/blog'
import About from '../components/pages/about'
import Login from '../components/pages/login'
import Footer from './footer/footer'

import '../resources/css/App.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <div className="pages">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/blog" component={Blog}/>
                        <Route path="/about" component={About}/>
                        {/* <Route path="/login" component={Login}/> */}
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </>
    )
}

export default App