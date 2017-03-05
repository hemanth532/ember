App = Ember.Application.create();

         //extending View class
         App.HelloView = Ember.View.extend({
            //template name 'hello'
            templateName: 'hello',
            //define the value for name property
            name: "Welcome to Tutorialspoint"
         });