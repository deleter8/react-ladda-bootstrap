var React = require('react');
var Button = require('react-bootstrap/Button');
var LaddaBase = require('./LaddaBase');
var _ = require('lodash');

var LaddaButton = React.createClass(_.extend({}, LaddaBase, {

    render: function() {
        var classes = ['ladda-button'];

        return (
            React.createElement(Button, React.__spread({},
                    this.props,
                    {
                        className: this.props.className + " ladda-button",
                        role: "button",
                        'data-style': this.props.dataStyle
                    }),
                React.createElement("span", {className: "ladda-label"}, this.props.children)
            ));
    }
}));

module.exports = LaddaButton;