define([
       'jquery',
       'underscore',
       'backbone',
       'text!templates/appTemplate.html'
], function($, _, Backbone, AppTemplate){
	var AppView = Backbone.View.extend({
		el: '#main',
		
		template: _.template(AppTemplate),


		events:{

		},

		initialize: function(){
			console.log(this.$el);
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

	return AppView;
});
