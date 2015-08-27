(function () {
    var Immutable = require('immutable');

    var Task = new Immutable.Record({
        id: null,
        name: null,
        startTime: null,
        endTime: null
    });

    module.exports = Task;
}());
