var React = require('react');
var Moment = require('moment');

var TaskActions = require('actions/TaskActions');
var ElapsedTime = require('components/ElapsedTime');

var CurrentTaskView = React.createClass({
	create: function () {
		var taskName = React.findDOMNode(this.refs.taskName).value;
		TaskActions.create(taskName);
	},

	reset: function () {
		TaskActions.reset(this.props.task.id);
	},

	complete: function () {
		TaskActions.complete();
	},

	render: function () {
		if (this.props.task == null) {
			return (
				<div id="TaskView" className="task-creation">
               		<input type="text" id="TaskName" ref="taskName" placeholder="What are you working on?" />
               		<button id="StartButton" onClick={this.create}><span className="icon-play"></span></button>
				</div>
			);
		}

		var startTime = Moment(this.props.task.startTime);

		return (
			<div id="TaskView" className="task-current">
           		<dl>
           			<input value={this.props.task.name} disabled="disabled" />
           			<ElapsedTime from={startTime} />
           			<button id="ResetTask" onClick={this.reset}><span className="icon-to-start" /></button>
           			<button id="CompleteTask" onClick={this.complete}><span className="icon-ok" /></button>
       			</dl>
			</div>
		);
	}
});


module.exports = CurrentTaskView;