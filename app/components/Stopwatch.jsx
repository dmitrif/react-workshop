var React = require('react');

var TaskStore = require('stores/TaskStore')

var TaskView = require('components/TaskView');
var TaskHistoryList = require('components/TaskHistoryList');

var Stopwatch = React.createClass({
	getInitialState: function () {
	    return {
	    	currentTask: null,
	        tasks: []  
	    };
	},

	componentDidMount: function () {
		TaskStore.addListener(this.updateTasks);
	},

	componentWillUnmount: function () {
		TaskStore.removeListener(this.updateTasks);	      
	},

	updateTasks: function () {
		this.setState({
			currentTask: TaskStore.getCurrentTask(),
			tasks: TaskStore.getAll()
		});
	},

	render: function () {
		return (
			<div id="Stopwatch">
				<a id="Logo" title="TrackIT" href="/">TrackIT</a>
				<TaskView task={this.state.currentTask} />
                <TaskHistoryList tasks={this.state.tasks} />
			</div>
		);
	}
});


module.exports = Stopwatch;