var React = require('react');
var Input = require('react-bootstrap/Input');
var LaddaBase = require('./LaddaBase');
var _ = require('lodash');

var LaddaInput = React.createClass(_.extend({}, LaddaBase, {

    render: function() {
        return (
            React.createElement(Input, React.__spread({},
                    this.props,
                    {
                        className: this.props.className + " ladda-button",
                        type: "submit",
                        'data-style': this.props.dataStyle
                    }),
                React.createElement("span", {className: "ladda-label"}, this.props.children)
            ));

    }
}));

module.exports = LaddaInput;