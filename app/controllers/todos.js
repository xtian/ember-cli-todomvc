import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		toggleAll(allCompleted) {
			const savedTodos = this.get('savedTodos');

			savedTodos.setEach('isCompleted', !allCompleted);
			savedTodos.invoke('save');
		}
	},

	allCompleted: Ember.computed('savedTodos.@each.isCompleted', function() {
		return this.get('savedTodos').isEvery('isCompleted');
	}),

	remaining: Ember.computed.filterBy('model', 'isCompleted', false),
	savedTodos: Ember.computed.filterBy('model', 'isNew', false)
});
