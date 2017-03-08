"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
      willTransitionTo: function(transition, params, query, callback) {
          if(!confirm('Are you sure?')) {
              transition.abort();
          } else {
              callback();
          }
      }
    },
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following tech:
                    <ul>
                        <li>React</li>
                        <li>Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;