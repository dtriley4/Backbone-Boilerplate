require.config({
	paths: {
		'jquery':         'lib/jquery/jquery-1.7.1',
		'jqueryui':       'lib/jqueryui',
		'underscore':     'lib/underscore/underscore',
		'text':           'lib/require/text',
		'backbone':       'lib/backbone/backbone'
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
	}
});
