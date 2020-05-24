import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import MyHandbookScreen from './screens/MyHandbookScreen'
import RNHereMaps from './screens/HandbookArticles/RNHereMaps'

export default function AppRouter(props) {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={HomeScreen} exact/>
                    <Route path="/handbook" component={MyHandbookScreen} exact/>
                    {/*  HANDBOOK ARTICLES  */}
                    <Route path="/handbook/how-to-implement-here-maps-in-react-native" component={RNHereMaps} exact/>
                </Switch>
            </Router>
        </div>
    )
}