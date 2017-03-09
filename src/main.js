"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitialiseActions = require('./actions/initialiseActions');

InitialiseActions.initApp();

Router.run(routes, function(Handler) {
   React.render(<Handler/>, document.getElementById('app'));
});