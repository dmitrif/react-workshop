(function() {
    var keyMirror = require('keymirror');

    module.exports = {

        Actions: keyMirror({
            CREATE_TODO: null,
            REMOVE_TODO: null,
            COMPLETE_TODO: null
        }),

        TodoStates: {
            ACTIVE: 0,
            COMPLETE: 1
        }

    };
}());
