(function () {
    'use strict';

    var Dispatcher = require('flux').Dispatcher,
        assign = require('object-assign'),
        BaseConstants = require('constants/BaseConstants');

    var MainDispatcher = assign(new Dispatcher(), {
        /**
         * @param {object} action The details of the action, including the action's
         * type and additional data coming from the server.
         */
        handleServerAction: function(action) {
            var payload = {
                source: BaseConstants.SERVER_ACTION,
                action: action
            };

            this.dispatch(payload);
        },

        /**
         * @param {object} action The details of the action, including the action's
         * type and additional data coming from the view.
         */
        handleViewAction: function(action) {
            var payload = {
                source: BaseConstants.VIEW_ACTION,
                action: action
            };

            this.dispatch(payload);
        }
    });

    module.exports = MainDispatcher;

}());
