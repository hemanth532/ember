App = Ember.Application.create();
App.ApplicationController = Ember.Controller.extend({
            //initialize the boolean value
            bool: true,
            check: function(){
               //returning the boolean value to the called function
               return this.bool;
            }.property('check'),
         });