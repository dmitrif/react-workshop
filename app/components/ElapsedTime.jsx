var React = require('react');

var Moment = require('moment');
require("moment-duration-format");

var SetIntervalMixin = require('mixins/Interval');

var ElapsedTime = React.createClass({
	mixins: [SetIntervalMixin],

	getInitialState: function () {
		return {
			elapsedTime: Moment.duration(this.getCurrentTime() - this.props.from) 
		};
	},

	getCurrentTime: function () {
		if (this.props.to === undefined) {
			return Moment();
		} else {
			return this.props.to;
		}
	},

	componentDidMount: function() {
		if (!this.props.static) {
    		this.setInterval(this.tick, 10);
    	}
	},

	tick: function() {
		this.setState({elapsedTime: Moment.duration(this.getCurrentTime() - this.props.from)});
	},	

	render: function () {
		return (
			<div id="ElapsedTime">
				{this.state.elapsedTime.format('HH:mm:ss.SSS', { trim: false })}
			</div>
		);
	}
});

module.exports = ElapsedTime;