var React = require('react');

var TaskStore = require('stores/TaskStore')

var TaskView = require('components/TaskView');
var TaskHistoryList = require('components/TaskHistoryList');

var Stopwatch = React.createClass({
	render: function () {
		return (
			<div id="Stopwatch">
				<a id="Logo" title="TrackIT" href="/">TrackIT</a>
				<TaskView />
                <TaskHistoryList />
			</div>
		);
	}
});


module.exports = Stopwatch;