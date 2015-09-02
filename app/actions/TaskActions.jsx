(function() {
    var uuid = require('node-uuid');
    var Moment = require('moment');

    var MainDispatcher = require('dispatcher/MainDispatcher');
    var Actions = require('constants/BaseConstants').Actions;

    var Task = require('objects/Task');

    module.exports = {
        create: function (name) {
            var task = {
                id: uuid.v4(),
                name: name,
                startTime: Moment()
            };

            MainDispatcher.handleServerAction({
                type: Actions.CREATE_TASK,
                task: task
            });
        },

        reset: function(id) {
            MainDispatcher.handleServerAction({
                type: Actions.RESET_TASK,
                taskId: id
            });  
        },

        complete: function() {
            MainDispatcher.handleServerAction({
                type: Actions.COMPLETE_TASK
            });  
        }
    };
}());
