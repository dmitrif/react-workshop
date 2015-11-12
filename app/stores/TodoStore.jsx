(function () {
    var EventEmitter = require('events').EventEmitter;
    var assign = require('object-assign');
    var _ = require('lodash');

    var MainDispatcher = require('dispatcher/MainDispatcher');
    var Actions = require('constants/BaseConstants').Actions;
    var States = require('constants/BaseConstants').TodoStates;

    var CHANGE_EVENT = 'change';
    var _todos = [];

    //Helper functions
    function _findIndexById(id) {
        return _.findIndex(_todos, {'id': id});
    }

    //TodoStore API
    var TodoStore = assign({}, EventEmitter.prototype, {
        emitChange: function () {
            this.emit(CHANGE_EVENT);
        },

        addListener: function (callback) {
            this.on(CHANGE_EVENT, callback);
        },

        removeListener: function (callback) {
            this.removeListener(CHANGE_EVENT, callback);
        },

        add: function (todo) {
            todo.state = States.ACTIVE;

            _todos.push(todo);
        },

        complete: function (id) {
            var idx = _findIndexById(id);

            _todos[idx].state = States.COMPLETE;
            _todos[idx].complete = true;
        },

        getAll: function () {
            return _.sortByAll(_todos, ['state', 'created']);
        }
    });

    //Dispatcher listener
    TodoStore.dispatchToken = MainDispatcher.register(function (payload) {
        var action = payload.action;

        switch (action.type) {
            case Actions.CREATE_TODO:
                TodoStore.add(action.todo);
                TodoStore.emitChange();
                break;

            case Actions.COMPLETE_TODO:
                TodoStore.complete(action.id);
                TodoStore.emitChange();
                break;

            default:
            // do nothing
        }
    });

    module.exports = TodoStore;
}());
