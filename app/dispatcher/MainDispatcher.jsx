(function () {
    'use strict';

    var Dispatcher = require('flux').Dispatcher,
        assign = require('object-assign');

    var MainDispatcher = assign(new Dispatcher(), {
        /**
         * @param {object} action The details of the action, including the action's
         * type and additional data.
         */
        handleAction: function(action) {
            var payload = {
                action: action
            };

            this.dispatch(payload);
        }
    });

    module.exports = MainDispatcher;

}());
