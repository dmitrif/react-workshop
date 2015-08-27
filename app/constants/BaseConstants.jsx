(function() {
    var keyMirror = require('keymirror');

    module.exports = {

        PayloadSources: keyMirror({
            SERVER_ACTION: null,
            VIEW_ACTION: null
        }),

        Actions: keyMirror({
            CREATE_TASK: null,
            RESET_TASK: null,
        	COMPLETE_TASK: null
        })

    };
}());
