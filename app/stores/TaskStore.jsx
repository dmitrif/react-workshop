(function () {
    var Immutable = require('immutable');
    var Moment = require('moment');

    var EventEmitter = require('events').EventEmitter;
    var assign = require('object-assign');
    var MainDispatcher = require('dispatcher/MainDispatcher');
    var Actions = require('constants/BaseConstants').Actions;

    var CHANGE_EVENT = 'change';

    var _tasks = Immutable.List();
    var _currentTask = null;

    var TaskStore = assign({}, EventEmitter.prototype, {
        emitChange: function () {
            this.emit(CHANGE_EVENT);
        },

        addListener: function (callback) {
            this.on(CHANGE_EVENT, callback);
        },

        removeListener: function (callback) {
            this.removeListener(CHANGE_EVENT, callback);
        },

        add: function (task) {
            if (_currentTask !== null) {
                _tasks = _tasks.unshift(_currentTask);
            }

            _currentTask = task;
        },

        getAll: function () {
            return _tasks;
        },

        getCurrentTask: function () {
            return _currentTask;
        },

        remove: function (id) {
            _tasks = _tasks.filterNot(function (sample) {
                return sample._id === id;
            });
        },

        reset: function (id) {
            if (_currentTask !== null && _currentTask.get('id') === id) {
                _currentTask = _currentTask.set('startTime', Moment());
            }
        },

        complete: function () {
            _currentTask = _currentTask.set('endTime', Moment());

            this.add(null);
        }
    });

    TaskStore.dispatchToken = MainDispatcher.register(function (payload) {
        var action = payload.action;

        switch (action.type) {
            case Actions.CREATE_TASK:
                TaskStore.add(action.task);
                TaskStore.emitChange();
                break;

            case Actions.RESET_TASK:
                TaskStore.reset(action.taskId);
                TaskStore.emitChange();
                break;

            case Actions.COMPLETE_TASK:
                TaskStore.complete();
                TaskStore.emitChange();
                break;

            default:
            // do nothing
        }

    });

    module.exports = TaskStore;
}());
