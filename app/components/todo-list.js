import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['todo-list'],
	tagName: 'ul',

	actions: {
		deleteTodo(todo) {
			todo.deleteRecord();
			todo.save();
		},

		toggleTodo(todo) {
			todo.toggleProperty('isCompleted');
			todo.save();
		}
	}
});
