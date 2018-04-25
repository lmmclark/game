/**
 * Created by shengj on 2017/4/14.
 * 路由
 */
import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
// 根组件
// import App from './App'
import Login from './Login/Login'
import ShowAll from './ShowAll/ShowAll'
import Index from './Navi/Navi'
//404
// import NotFound from './components/NotFound';

class Routes extends Component {
    render() {
        return (
            <Router>
                <div style={{height: '100%'}}>
                    <Route exact path="/" component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/main/classEntry" component={Index}/>
                </div>
            </Router>
        )
    }
}
export default Routes
