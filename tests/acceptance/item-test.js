import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'todos/tests/helpers/start-app';

var application;

module('Acceptance | Item', {
	beforeEach() {
		application = startApp();
		addTodos('foo');
	},

	afterEach() {
		emptyStore();
		Ember.run(application, 'destroy');
	}
});

test('toggles `completed` class with completion state', assert => {
	const store = application.__container__.lookup('service:store');

	visit('/');

	andThen(() => {
		assert.equal(find('.completed').length, 0);
	});

	click('.toggle:first');

	andThen(() => {
		assert.equal(find('.completed').length, 1);

		const allDone = store.findAll('todo').then(todos => {
			return todos.reduce((acc, todo) => acc && todo.get('isCompleted'));
		});

		assert.ok(allDone);
	});
});
