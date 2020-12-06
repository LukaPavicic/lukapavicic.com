import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import MyHandbookScreen from './screens/MyHandbookScreen'
import RNHereMaps from './screens/HandbookArticles/RNHereMaps'
import RailsAPISetup from './screens/HandbookArticles/RailsAPISetup'
import SettingUpPostgres from './screens/HandbookArticles/SettingUpPostgres'
import NiftyRubyAndRailsFeatures from './screens/HandbookArticles/NiftyRubyFeatures'
import NotFound404 from './screens/Errors/NotFound404'

export default function AppRouter(props) {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={HomeScreen} exact/>
                    <Route path="/handbook" component={MyHandbookScreen} exact/>
                    {/*  HANDBOOK ARTICLES  */}
                    <Route path="/handbook/how-to-implement-here-maps-in-react-native" component={RNHereMaps} exact />
                    <Route path="/handbook/how-to-setup-rails-for-api-only-development" component={RailsAPISetup} exact />
                    <Route path="/handbook/setting-up-postgresql-for-rails" component={SettingUpPostgres} exact />
                    <Route path="/handbook/nifty-ruby-and-rails-features" component={NiftyRubyAndRailsFeatures} exact />
                    <Route component={NotFound404}/>
                </Switch>
            </Router>
        </div>
    )
}