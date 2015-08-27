require('console-polyfill');
require('normalize.css');
require('assets/less/base.less');
require('assets/fontello/css/kj-icons.css');

var React = require('react/addons');
window.React = React;

var Stopwatch = require('components/Stopwatch');

(function() {
	React.render(<Stopwatch />, document.getElementById('root')); 
}());
