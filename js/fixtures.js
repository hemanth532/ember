import DS from 'ember-data';
App = Ember.Application.create();

         //The store cache of all records available in an application
         App.Store = DS.Store.extend({
            //adapter translating requested records into the appropriate calls
            adapter: 'DS.FixtureAdapter'
         });

         App.ApplicationAdapter = DS.FixtureAdapter.extend(//extending Adapter);

         App.Router.map(function() {
            //posts route
            this.resource('posts');
         }));

         App.PostsRoute = Ember.Route.extend({
            model: function() {
               return this.store.find('post');
            }
         });

         App.Post = DS.Model.extend({
            //data Model
            //setting book and author attr as string
            book: DS.attr('string'),
            author: DS.attr('string')
         });

App.Post.FIXTURES = [{
            id: 1,
            book: 'Java',
            author: 'Balaguruswamy'},{
            id: 2,
            book: 'C++',
            author: 'Herbert Schildt'},{
            id: 3,
            book: 'jQuery',
            author: 'Ryan Benedetti'
        }];