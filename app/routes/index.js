import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('todo').then(todos => {
			return todos.filter(todo => !todo.get('isNew'));
		});
	}
});
