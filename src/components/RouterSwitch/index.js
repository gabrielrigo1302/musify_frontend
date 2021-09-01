import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import {Route, BrowserRouter} from 'react-router-dom'

const RouterSwitch = ({
    routes,
    escapeTo,
    ...props
}) => {
    return (
        <BrowserRouter>
        {map(routes, (route, name) => (
            <Route 
                key = {name}
                name = {name}
                path = {route.path}
                exact = {route.exact}
                component = {route.Component} 
            />
        ))}
        </BrowserRouter>
    )
}

RouterSwitch.propTypes = {
    routes: PropTypes.shape().isRequired,
    escapeTo: PropTypes.string
}

RouterSwitch.defaultProps = {
    escapeTo: '/'
}

export default RouterSwitch;
