define([
       'jquery',
       'underscore',
       'backbone'
], function($, _, Backbone){
	var AppRouter = Backbone.Router.extend({

		routes: {
			''             : 'index',
		},

		index: function(){
			console.log('AppRouter');


		},


	});

	var initialize = function() {
		var router;
		router = new AppRouter();
		//pass router
		Backbone.history.start();
	}

	return {
		initialize: initialize
	};

});

