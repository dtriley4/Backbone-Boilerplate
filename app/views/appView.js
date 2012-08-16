define([
       'jquery',
       'underscore',
       'backbone',
       'text!templates/appTemplate.html'
], function($, _, Backbone, appTemplate){
	var appView = Backbone.View.extend({
		el: '#main',
		
		//template: _.template(appTemplate),


		events:{

		},

		initialize: function(){
		},

		render: function(){
			this.$el.html(this.template());
			return this;
		},

		unrender: function(){
			this.unbind();
			this.$el.remove();
			this.undelegateEvents();
		}

	});

	return appView;
});
