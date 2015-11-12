var React = require('react');

var TodoStore = require('stores/TodoStore');

var CreateForm = require('components/TodoCreateForm');
var TodoList = require('components/TodoList');

var TodoComponent = React.createClass({
	getInitialState: function() {
	    return {
	        todos: []  
	    };
	},

	componentDidMount: function() {
		TodoStore.addListener(this.updateState);
	},

	componentWillUnmount: function() {
	  	TodoStore.removeListener(this.updateState);
	},

	updateState: function() {
		this.setState({
			todos: TodoStore.getAll()
		});
	},

	render: function () {
        console.log(this.state.todos);

		return (
			<div id="TodoComponent">
				<a id="Logo" title="TrackIT" href="/">TrackIT</a>
				<CreateForm />
                <TodoList todos={this.state.todos} />
			</div>
		);
	}
});


module.exports = TodoComponent;