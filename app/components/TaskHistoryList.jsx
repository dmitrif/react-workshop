var React = require('react');

var ElapsedTime = require('components/ElapsedTime');

var TaskHistoryList = React.createClass({
	render: function () {
		var tasks = null;

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
					</tbody>
				</table>
			</div>
		);
	}
});


module.exports = TaskHistoryList;