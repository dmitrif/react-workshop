require('console-polyfill');
require('normalize.css');
require('assets/less/base.less');
require('assets/fontello/css/kj-icons.css');

var React = require('react/addons');
window.React = React;

var TodoComponent = require('components/TodoComponent');

(function() {
	React.render(<TodoComponent />, document.getElementById('root')); 
}());
