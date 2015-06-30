import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['todo-list'],
	tagName: 'ul',

	actions: {
		toggleTodo(todo) {
			todo.toggleProperty('isCompleted');
			todo.save();
		}
	}
});
