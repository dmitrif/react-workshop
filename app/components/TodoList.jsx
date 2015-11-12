var React = require('react/addons');
var ReactTransitionGroup = React.addons.CSSTransitionGroup;

var TodoListItem = require('components/TodoListItem');

var TodoList = React.createClass({
	render: function () {
		return (
			<div id="TodoList">
				<ul>
		        	<ReactTransitionGroup transitionName="todo" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
						{this.props.todos.map(todo => 
							(<TodoListItem key={todo.id} {...todo} />)
						)}
					</ReactTransitionGroup>
				</ul>
			</div>
		);
	}
});


module.exports = TodoList;