var React = require('react');

var ElapsedTime = require('components/ElapsedTime');

var TaskHistoryList = React.createClass({
	render: function () {
		var tasks = (<tr className="empty-row"><td>-</td><td>-</td><td>-</td><td>-</td></tr>);

		if (this.props.tasks !== undefined && this.props.tasks.length > 0) {
			tasks = this.props.tasks.map(task => 
				(<tr key={task.startTime}>
					<td>{task.name}</td>
					<td>{task.startTime.format('HH:mm:ss')}</td>
					<td>{task.endTime.format('HH:mm:ss')}</td>
					<td><ElapsedTime from={task.startTime} to={task.endTime} static={true} /></td>
				</tr>)
			);
		}

		return (
			<div id="TaskHistoryList">
				<table>
					<thead>
						<tr>
							<th>Task Name</th>
							<th>Start Time</th>
							<th>End Time</th>
							<th>Duration</th>
						</tr>
					</thead>
					<tbody>
						{tasks}
					</tbody>
				</table>
			</div>
		);
	}
});


module.exports = TaskHistoryList;