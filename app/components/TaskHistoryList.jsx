var React = require('react');

var ElapsedTime = require('components/ElapsedTime');

var TaskHistoryList = React.createClass({
	render: function () {
		var duration;

		// var tasks = (<tr className="empty-row"><td>-</td><td>-</td><td>-</td><td>-</td></tr>);
		var tasks = null;

		if (this.props.tasks.size > 0) {
			tasks = this.props.tasks.map(task => 
				(<tr key={task.get('startTime')}>
					<td>{task.get('name')}</td>
					<td>{task.get('startTime').format('HH:mm:ss')}</td>
					<td>{task.get('endTime').format('HH:mm:ss')}</td>
					<td><ElapsedTime from={task.get('startTime')} to={task.get('endTime')} static={true} /></td>
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