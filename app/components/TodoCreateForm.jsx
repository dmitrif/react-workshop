var React = require('react');

var Actions = require('actions/TodoActions');

var TodoCreateForm = React.createClass({
	create: function () {
		var text = React.findDOMNode(this.refs.todoText).value;

		Actions.create(text);
	},

	render: function () {
		return (
			<form action="javascript:void(0);" id="TodoCreateForm">
           		<input 
           			type="text" 
           			ref="todoText" 
           			placeholder="What do you want to get done?" 
       			/>
           		
           		<button id="AddButton" onClick={this.create}>
           			<span className="icon-play"></span>
       			</button>
			</form>
		);
	}
});


module.exports = TodoCreateForm;