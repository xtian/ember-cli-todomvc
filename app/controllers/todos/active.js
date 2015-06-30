import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['todos'],
	activeTodos: Ember.computed.alias('controllers.todos.remaining')
});
