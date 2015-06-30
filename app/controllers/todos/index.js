import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['todos'],
	savedTodos: Ember.computed.alias('controllers.todos.savedTodos')
});
