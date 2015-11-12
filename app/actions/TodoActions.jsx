(function() {
    var uuid = require('node-uuid');

    var MainDispatcher = require('dispatcher/MainDispatcher');
    var Actions = require('constants/BaseConstants').Actions;

    module.exports = {
        create: function (text) {
            var todo = {
                id: uuid.v4(),
                created: Date.now(), 
                text: text
            };

            MainDispatcher.handleAction({
                type: Actions.CREATE_TODO,
                todo: todo
            });
        },

        complete: function(id) {
            MainDispatcher.handleAction({
                type: Actions.COMPLETE_TODO,
                id: id
            });  
        }
    };
}());
