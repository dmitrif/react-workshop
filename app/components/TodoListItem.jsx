var React = require('react');

var Actions = require('actions/TodoActions');
var States = require('constants/BaseConstants').TodoStates;

var TodoListItem = React.createClass({
	renderActions: function () {
		return (
			<span className="actions">
				<button className="complete-button" 
					disabled={this.props.complete}>
					<span className="icon-ok"></span>
				</button>
			</span>
		);
	},

	render: function () {
		var className = this.props.complete ? "complete" : "";

		return (
			<li className={className}>
				{this.renderActions()}
				<span>{this.props.text}</span>
			</li>
		);
	}
});


module.exports = TodoListItem;