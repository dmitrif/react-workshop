var React = require('react');

var TodoStore = require('stores/TodoStore');

var CreateForm = require('components/TodoCreateForm');
var TodoList = require('components/TodoList');

var TodoComponent = React.createClass({
	updateState: function() {
		this.setState({
			todos: TodoStore.getAll()
		});
	},

	render: function () {
		return (
			<div id="TodoComponent">
				<a id="Logo" title="TrackIT" href="/">TrackIT</a>
				<CreateForm />
                <TodoList />
			</div>
		);
	}
});


module.exports = TodoComponent;