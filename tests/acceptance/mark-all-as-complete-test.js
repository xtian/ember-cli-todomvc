import Ember from 'ember';
import $ from 'jquery';
import { module, test } from 'qunit';
import startApp from 'todos/tests/helpers/start-app';

var application;

module('Acceptance | Mark all as complete', {
	beforeEach() {
		application = startApp();
	},

	afterEach() {
		emptyStore();
		Ember.run(application, 'destroy');
	}
});

test("toggle all checkbox should reflect all todos' completion state", assert => {
	visit('/');
	addTodos('foo', 'bar');
	click('.toggle-all');

	andThen(() => {
		assert.equal(find('.toggle-all').prop('checked'), true);

		find('.toggle').each((_, el) => {
			assert.equal($(el).prop('checked'), true);
		});
	});

	click('.toggle:first');

	andThen(() => {
		assert.equal(find('.toggle-all').prop('checked'), false);
	});
});
