var React = require('react');
var Ladda = require('./dist/ladda.min');
var joinClasses = require('react-bootstrap/utils/joinClasses');
var classSet = require('react-bootstrap/utils/classSet');
var shallowEqual = require('react/lib/shallowEqual');

var LaddaBase = {
    displayName: 'LaddaButton',

    propTypes: {
        active: React.PropTypes.bool,
        progress: React.PropTypes.number,
        dataStyle: React.PropTypes.string,
        color: React.PropTypes.string,
        size: React.PropTypes.string,
        spinnerSize: React.PropTypes.number,
        spinnerColor: React.PropTypes.string,
        children: React.PropTypes.node.isRequired
    },

    getDefaultProps: function() {
        return { dataStyle: 'expand-right' };
    },

    componentDidMount: function() {
        this.laddaButton = Ladda.create(this.getDOMNode());
    },

    componentWillUnmount: function() {
        if (this.laddaButton.remove) {
            this.laddaButton.remove();
        }
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        return !shallowEqual(this.props, nextProps);
    },

    componentDidUpdate: function() {
        if (this.props.active) {
            if (!this.active) {
                this.active = true;
                this.laddaButton.start();
            }
        } else {
            this.active = false;
            this.laddaButton.stop();
        }
        if (this.props.progress) {
            this.laddaButton.setProgress(this.props.progress);
        }

    }
};

module.exports = LaddaBase;