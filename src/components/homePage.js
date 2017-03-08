"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Admin</h1>
                <p>React, text</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn</Link>
            </div>
        );
    }
});

module.exports = Home;