import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'

import SurveyForm from './pages/SurveyForm'
import Join from './pages/Join'
import Submitted from './pages/Submitted'
import Admin from './pages/Admin'
import './App.css'
import UserData from './components/UserData'

function App(){
    return(
        <Router>
            <Container>
                <Route exact path = '/home' component={SurveyForm} />
                <Route exact path='/join' component={Join} />
                <Route exact path='/submitted' component={Submitted} />
                <Route exact path='/' component={Admin} />
                <Route exact path='/userdata' component={UserData} />
            </Container>
        </Router>
    )
}

export default App